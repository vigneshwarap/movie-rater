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

app.listen(port, () => {
  console.log(`Server started listening in ${port}`)
})