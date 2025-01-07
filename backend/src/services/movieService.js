import movie from "../models/movieModel.js"

export const getAllMovies = async () => {
  return await movie.find()
}