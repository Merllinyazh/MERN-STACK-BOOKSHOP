const express = require("express");
const router = express.Router();
const Book = require("../model/book");
const booksController = require("../controllers/book-cont");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
