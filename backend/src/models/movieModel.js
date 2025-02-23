import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
  title : {
    type : String,
    required : [true, "Movie title is required"],
    trim: true
  },
  director : {
    type : String,
    required : [true, "Movie director is required"]
  },
  releaseDate : {
    type: Date,
    required : [true, "Movie release date is required"]
  },
  genre : {
    type : [String],
    required : [true, "At least one genre is required"],
    validate : {
      validator : function (genre) {  
        return genre.length > 0 // Ensure array is not empty
      },
      message : "At least one genre must be present"
    }
  }
})

const Movie  = mongoose.model('Movie', movieSchema)

export default Movie