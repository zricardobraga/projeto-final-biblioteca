import { Router, Request, Response } from "express";
import { BooksController } from "../controllers/BooksController";
import { StudentsController } from "../controllers/StudentsController";
import { BorrowController } from "../controllers/BorrowController";

const router = Router();

const studentsControllers = new StudentsController();
router.post("/library/students/register", studentsControllers.studentsRegister);
router.get("/library/students/list", studentsControllers.listStudents);
router.get("/library/students/search/:cpf", studentsControllers.findStudentByCpf);
router.post("/library/students/edit/:id", studentsControllers.editStudent);
router.post("/library/students/delete/:id", studentsControllers.deleteStudent);

const booksController = new BooksController();
router.post("/library/books/register", booksController.registerBook);
router.get("/library/books/list", booksController.listBooks);
router.get("/library/books/search/:cod", booksController.findBookByCod);
router.post("/library/books/edit/:id", booksController.editBook);
router.post("/library/books/delete/:id", booksController.deleteBook);

const borrowController = new BorrowController();
router.post("/library/borrow/register", borrowController.borrowRegister);
router.get("/library/borrow/list", borrowController.listBorrows);
router.get("/library/borrow/search/:id", borrowController.findBorrowById);
router.post("/library/borrow/edit/:id", borrowController.editBorrow);
router.post("/library/borrow/delete/:id", borrowController.deleteBorrow);

export { router };