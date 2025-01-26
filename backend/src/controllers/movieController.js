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

export const deleteMovie = async (req, res, next) => {
  try {
    const movie = await movieService.getMovie(req.params.id)
    if (!movie) {
      throw new Error(`The movie with id : ${id} doesn't exist`)
    }
    const deletedMovie = await movieService.deleteMovie(req.params.id)
    res.status(200).send()
  } catch (err) {
    next(err)
  }
}


export const updateMovie = async (req, res, next) => {
  try {
    const movie = await movieService.getMovie(req.params.id)
    if (!movie) {
      throw new Error(`The movie with id : ${id} doesn't exist`)
    }
    const updatedMovie = await movieService.updateMovie(req.params.id, req.body)
    res.status(200).json(updatedMovie);
  } catch (err) {
    next(err)
  }
}