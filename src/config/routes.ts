import { Router, Request, Response } from "express";
import { BooksController } from "../controllers/BooksController";
import { StudentsController } from "../controllers/StudentsController";
import { LendingController } from "../controllers/LendingController";

const router = Router();

const studentsControllers = new StudentsController();
router.post("/library/students/register", studentsControllers.studentsRegister);
router.get("/library/students/list", studentsControllers.listStudents);
router.get("/library/students/search/:cpf", studentsControllers.findStudentByCpf);
router.post("/library/students/edit/:id", studentsControllers.editStudent);
router.post("/library/students/delete/:cpf", studentsControllers.deleteStudent);

const booksController = new BooksController();
router.post("/library/books/register", booksController.registerBook);
router.get("/library/books/list", booksController.listBooks);
router.get("/library/books/search/:cod", booksController.findBookById);
router.post("/library/books/edit/:cod", booksController.editBook);
router.post("/library/books/delete/:cod", booksController.deleteBook);

const lendingController = new LendingController();
router.post("/library/lending/register", lendingController.lendingRegister);
router.get("/library/lending/list", lendingController.listLendings);
router.get("/library/lending/search/:id", lendingController.findLendingByCpf);
router.post("/library/lending/edit/:id", lendingController.editLending);
router.post("/library/lending/delete/:id", lendingController.deleteLending);

export { router };