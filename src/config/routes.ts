import { Router, Request, Response } from "express";
import { BooksController } from "../controllers/BooksController";
import { StudentsController } from "../controllers/StudentsController";
import { LendingController } from "../controllers/LendingController";

const router = Router();
const lendingController = new LendingController();
const studentsControllers = new StudentsController();

router.post("/library/lending/register", lendingController.lendingRegister);
router.post("/library/students/register", studentsControllers.registerStudent);






const booksController = new BooksController();
router.post("/books/register", booksController.registerBook);
router.get("/books/listBooks", booksController.listBooks);
router.get("/books/searchBookById/:id", booksController.findBookById);
router.post("/books/editBook/:id", booksController.editBook);
router.post("/books/deleteBook/:id", booksController.deleteBook);

export { router };