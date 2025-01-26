import express from "express"
import dotenv from "dotenv"
dotenv.config()
import movieRoute from "./routes/movieRoute.js"
import connectDB from "./db.js"

await connectDB();

const app = express();
const port = process.env.PORT || 5000

// Middleware to parse JSON requests
app.use(express.json());

//Routes
app.use("/movies", movieRoute)


// Global Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging

  const statusCode = err.statusCode || 500; // Default to 500 if no status code is set
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server started listening in ${port}`)
})