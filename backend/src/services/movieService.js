import movie from "../models/movieModel.js"

export const getAllMovies = async () => {
  try {
    return await movie.find()
  } catch (err) {
    throw new Error(`Error while fetching all the movies`)
  }
}

export const getMovie = async (id) => {
  try {
    return await movie.findById(id)
  } catch (err) {
    throw new Error(`Error while fetching movie with ID : ${id} : ${err.message}`)
  }
}

export const createMovie = async(movieData) => {
  try {
    const newMovie = movie.create(movieData)
    return newMovie;
  } catch (err) {
    throw new Error(`Error creating movie ${err.message}`)
  }
}