import Comment from "../models/commentModel.js";

export const getAllCommentsOfMovies = async (movieId) => {
    try {
        return await Comment.findOne({movie_id : movieId})
    } catch (err) {
        throw new Error(`Error while fetching all comments`)
    }
}


export const addCommentToaMovie = async (commentData) => {
    try {
        console.log(JSON.stringify(commentData))
        return await Comment.create(commentData)
    } catch (err) {
        throw new Error(`Error while new comment ${err}`)
    }
}