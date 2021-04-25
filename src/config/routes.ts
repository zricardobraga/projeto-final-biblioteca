import { Router, Request, Response } from "express";
import { BooksController } from "../controllers/BooksController";

const router = Router();

const booksController = new BooksController();
router.post("/books/register", booksController.registerBook);
router.get("/books/listBooks", booksController.listBooks);
router.get("/books/searchBookById/:id", booksController.findBookById);
router.post("/books/editBook/:id", booksController.editBook);
router.post("/books/deleteBook/:id", booksController.deleteBook);

export { router };