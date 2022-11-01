const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./routes/book-routes");
const userRouter = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middlewares
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/books", bookRouter); // localhost:5000/books
app.use("/api", userRouter);

mongoose
  .connect(
    `mongodb+srv://Admin:${process.env.MONGODB_PASSWORORD}@onlinesisekelo.aovnze3.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
