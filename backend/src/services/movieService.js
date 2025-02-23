import Movie from "../models/movieModel.js"

export const getAllMovies = async () => {
  try {
    return await Movie.find()
  } catch (err) {
    throw new Error(`Error while fetching all the movies`)
  }
}

export const getMovie = async (id) => {
  try {
    return await Movie.findById(id)
  } catch (err) {
    throw new Error(`Error while fetching movie with ID : ${id} : ${err.message}`)
  }
}

export const createMovie = async(movieData) => {
  try {
    const newMovie = await Movie.create(movieData)
    return newMovie;
  } catch (err) {
    throw new Error(`Error creating movie ${err.message}`)
  }
}

export const deleteMovie = async(id) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    return deletedMovie;
  } catch (err) {
    throw new Error(`Error while deleting movie ${err.message}`)
  }
}


export const updateMovie = async(id, updateMovie) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { $set: updateMovie},
      {new : true}
    )
    return updatedMovie;
  } catch (err) {
    throw new Error(`Error while updating movie ${err.message}`)
  }
}