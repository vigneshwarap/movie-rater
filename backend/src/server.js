import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express();
const port = process.env.PORT || 5000

console.log(port)

app.get("/", (req, res) => {
  console.log("Received the request")
  res.json({message: "test"})
})

app.listen(port, () => {
  console.log(`Server started listening in ${port}`)
})