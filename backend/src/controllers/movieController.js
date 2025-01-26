import * as movieService from "../services/movieService.js"

export const getAllMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getAllMovies()
    res.status(200).json(movies)
  } catch (err) {
    next(err)
  }
}

export const getMovie = async (req, res, next) => {
  try {
    const movie = await movieService.getMovie(req.params.id)
    res.status(200).json(movie)
  } catch (err) {
    next(err)
  }
}

export const createMovie = async (req, res, next) => {
  try {
    const savedMovie = await movieService.createMovie(req.body)
    res.status(200).json(savedMovie)
  } catch (err) {
    next(err)
  }
}