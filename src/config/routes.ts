import { Router, Request, Response } from "express";
import { BooksController } from "../controllers/BooksController";
import { StudentsController } from "../controllers/StudentsController";
import { LendingController } from "../controllers/LendingController";

const router = Router();

const studentsControllers = new StudentsController();
<<<<<<< HEAD
router.post("/library/students/register", studentsControllers.studentsRegister);
router.get("/library/students/list", studentsControllers.listStudents);
router.get("/library/students/search/:cpf", studentsControllers.findStudentByCpf);
router.post("/library/students/edit/:id", studentsControllers.editStudent);
router.post("/library/students/delete/:cpf", studentsControllers.deleteStudent);
=======
router.post("/library/students/register", studentsControllers.registerStudent);
router.get("/library/students/list", studentsControllers.listStudents);
router.get("/library/students/search/:id", studentsControllers.findStudentById);
router.post("/library/students/edit/:id", studentsControllers.editStudent);
router.post("/library/students/delete/:id", studentsControllers.deleteStudent);
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8

const booksController = new BooksController();
router.post("/library/books/register", booksController.registerBook);
router.get("/library/books/list", booksController.listBooks);
<<<<<<< HEAD
router.get("/library/books/search/:cod", booksController.findBookById);
router.post("/library/books/edit/:cod", booksController.editBook);
router.post("/library/books/delete/:cod", booksController.deleteBook);
=======
router.get("/library/books/search/:id", booksController.findBookById);
router.post("/library/books/edit/:id", booksController.editBook);
router.post("/library/books/delete/:id", booksController.deleteBook);
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8

const lendingController = new LendingController();
router.post("/library/lending/register", lendingController.lendingRegister);
router.get("/library/lending/list", lendingController.listLendings);
<<<<<<< HEAD
router.get("/library/lending/search/:id", lendingController.findLendingByCpf);
=======
router.get("/library/lending/search/:id", lendingController.findLendingById);
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
router.post("/library/lending/edit/:id", lendingController.editLending);
router.post("/library/lending/delete/:id", lendingController.deleteLending);

export { router };