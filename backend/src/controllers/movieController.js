import * as movieService from "../services/movieService.js"

export const getAllMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (err) {
    next(err)
  }
}