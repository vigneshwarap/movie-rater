import { getAllCommentsOfMovies, addCommentToaMovie } from "../services/commentService.js";

export const getAllComOfMovies = async (req, res, next) => {
    try {
        const movieId  = req.params.id
        if (!movieId) {
            return res.status(400).json("Need movie id to get comments")
        }
        const comments = await getAllCommentsOfMovies(movieId)
        return res.status(200).json(comments)
    } catch (err) {
        throw new Error("Something went wrong")
    }
}

export const addMovieComment = async (req, res, next) => {
    try {
        console.log("Reached add movie comment" + req.params.id)
        const movie_id  = req.params.id
        if (!movie_id) {
            return res.status(400).json("Need movie id to get comments")
        }
        const user_id = req.user.id
        console.log("user id" + user_id)
        const {comment} = req.body

        if (!comment) {
            return res.status(400).json({ message: 'Comment text is required'});
        }

        const createdComment = await addCommentToaMovie({user_id, movie_id, comment_text : comment});
        return res.status(200).json(createdComment)
    } catch (err) {
        return res.status(500).json("internal server error" + err)
    }
}