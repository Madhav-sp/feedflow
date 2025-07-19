import mongoose, {Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profilePicture: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
    },
    feedbacksGiven: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feedback"
    }],
    feedbacksReceived: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feedback"
    }],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    role: {
        type: String,
        enum: ["user", "bussiness", "employee"],
        default: "user"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    responseTime: {
        type: Number,
        default: 0,
        max: 15
    },
},{
    timestamps: true
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            isAdmin: this.isAdmin, 
        },
        process.env.ACCESS_TOKEN_SECRET
    )
}

const User = mongoose.model("User",userSchema)
export default User;