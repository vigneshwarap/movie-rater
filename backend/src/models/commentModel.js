import mongoose from "mongoose"
import User from "./userModel.js";
import Movie from "./movieModel.js";

const { Schema } = mongoose;

const commentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Refers to the User model
        required: true,
      },
      movie_id: {
        type: Schema.Types.ObjectId,
        ref: 'Movie', // Refers to the Movie model
        required: true,
      },
      comment_text: {
        type: String,
        required: true,
        maxlength: 1000, // Optional, you can limit the length of the comment
      }
}, {
    timestamps :  true
})

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;