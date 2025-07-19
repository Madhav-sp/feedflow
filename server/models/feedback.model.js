import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    givenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receivedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        required: true
    },
    department: {
        type:String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    message: {
        type: String,
        default: ""
    },
    raisedAgain: {
        type: Boolean,
        default: false
    },
    isUserSatisfied: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;