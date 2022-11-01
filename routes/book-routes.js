const express = require("express");
const bookRouter = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

bookRouter.get("/", booksController.getAllBooks);
bookRouter.post("/", booksController.addBook);
bookRouter.get("/:id", booksController.getById);
bookRouter.put("/:id", booksController.updateBook);
bookRouter.delete("/:id", booksController.deleteBook);

module.exports = bookRouter;
