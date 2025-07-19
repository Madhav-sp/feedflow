import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import Feedback from "../models/feedback.model.js";
import mongoose from "mongoose";

export const createFeedback = asyncHandler(async (req, res) => {
  const { receivedBy, image = "", content, givenBy } = req.body;

  if (!receivedBy || !content || !givenBy) {
    throw new ApiError(400, "ReceivedBy, content and givenBy are required");
  }

  if (!mongoose.Types.ObjectId.isValid(receivedBy)) {
    throw new ApiError(400, "Invalid business ID");
  }

  if (!mongoose.Types.ObjectId.isValid(givenBy)) {
    throw new ApiError(400, "Invalid user ID");
  }

  const userReceived = await User.findById(receivedBy);
  if (!userReceived) {
    throw new ApiError(404, "Business not found");
  }

  const userGiven = await User.findById(givenBy);
  if (!userGiven) {
    throw new ApiError(404, "User not found");
  }

  const feedback = new Feedback({
    givenBy: req.user.id,
    receivedBy,
    image,
    content,
  });

  await feedback.save();

  return res
    .status(201)
    .json(new ApiResponse("Feedback submitted successfully", feedback));
});

export const getFeedback = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid feedback ID");
  }

  const feedback = await Feedback.findById(id)
    .populate("givenBy", "-password")
    .populate("receivedBy", "-password");

  if (!feedback) {
    throw new ApiError(404, "Feedback not found");
  }

  return res
    .status(200)
    .json(new ApiResponse("Feedback retrieved successfully", feedback));
});

export const updateFeedback = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const currentUser = req.user;
  const updateData = req.body;

  const feedback = await Feedback.findById(id);

  if (currentUser._id != feedback.givenBy) {
    throw new ApiError(403, "You are not authorized to update this feedback");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid feedback ID");
  }

  const updated = await Feedback.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  if (!updated) {
    throw new ApiError(404, "Feedback not found");
  }

  return res
    .status(200)
    .json(new ApiResponse("Feedback updated successfully", updated));
});

export const deleteFeedback = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const currentUser = req.user;

  const feedback = await Feedback.findById(id);

  if (currentUser._id != feedback.givenBy) {
    throw new ApiError(403, "You are not authorized to delete this feedback");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid feedback ID");
  }

  const deleted = await Feedback.findByIdAndDelete(id);

  if (!deleted) {
    throw new ApiError(404, "Feedback not found");
  }

  return res.status(200).json(new ApiResponse("Feedback deleted successfully"));
});

export const getFeedbacksByUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new ApiError(400, "Invalid user ID");
  }

  const feedbacks = await Feedback.find({ receivedBy: userId })
    .populate("givenBy", "-password")
    .populate("receivedBy", "-password");

  if (feedbacks.length === 0) {
    return res
      .status(404)
      .json(new ApiResponse("No feedbacks found for this user"));
  }

  return res
    .status(200)
    .json(new ApiResponse("Feedbacks retrieved successfully", feedbacks));
});

export const getFeedbacksByBusiness = asyncHandler(async (req, res) => {
  const { businessId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(businessId)) {
    throw new ApiError(400, "Invalid business ID");
  }

  const feedbacks = await Feedback.find({ receivedBy: businessId })
    .populate("givenBy", "-password")
    .populate("receivedBy", "-password");

  if (feedbacks.length === 0) {
    return res
      .status(404)
      .json(new ApiResponse("No feedbacks found for this business"));
  }

  return res
    .status(200)
    .json(new ApiResponse("Feedbacks retrieved successfully", feedbacks));
});

export const getFeedbacksByDepartment = asyncHandler(async (req, res) => {
  const { employeeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(employeeId)) {
    throw new ApiError(400, "Invalid employee ID");
  }

  const employee = await User.findById(employeeId).select("department");

  if (!employee) {
    throw new ApiError(404, "Employee not found");
  }

  const feedbacks = await Feedback.find({
    $and: [
      { department: employee.department },
      { receivedBy: employee.company },
    ],
  })
    .populate("givenBy", "-password")
    .populate("receivedBy", "-password");

  if (feedbacks.length === 0) {
    return res
      .status(404)
      .json(new ApiResponse("No feedbacks found for this department"));
  }

  return res
    .status(200)
    .json(new ApiResponse("Feedbacks retrieved successfully", feedbacks));
});