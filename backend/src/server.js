import express from "express"
import dotenv from "dotenv"
dotenv.config()
import movieRoute from "./routes/movieRoute.js"
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"
import connectDB from "./db.js"

await connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

//Routes
app.use("/api/auth", authRoute)
app.use("/api/movies", movieRoute)
app.use("/api/users", userRoute)

// Global Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  
  const statusCode = err.statusCode || 500; // Default to 500 if no status code is set
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


// Start the server
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})