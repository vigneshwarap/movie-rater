# Movie Rater

A movie rating application built using Node.js, Express, and MongoDB. Users can rate movies, view movie details, and manage their movie list.

## Features
- Add, update, and delete movies.
- Rate movies and view average ratings.
- Fetch movie details by ID.
- Error handling and validation.

## Installation

1. Clone the repository

  ```bash
  git clone https://github.com/vigneshwarap/movie-rater.git
  ```

2. Build the docker images

  ```bash
  docker-compose build
  ```

3. Start the containers

  ```bash
  docker-compose up
  ```

4. Verify if the container are up and running by sending a http request http://localhost:3000/movies

5. To stop containers
  ```bash
  docker-compose down
  ```
