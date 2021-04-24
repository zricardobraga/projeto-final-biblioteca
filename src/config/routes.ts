import { Router, Request, Response } from "express";
import { LendingControllers } from "../controllers/LendingControllers";
import { StudentsControllers } from "../controllers/StudentsControllers"; 

const router = Router();
const lendingController = new LendingControllers();
const studentsControllers = new StudentsControllers();

// router.post("/library/register", lendingController.lendingRegister);
router.post("/library/students/register", studentsControllers.studentsRegister);






export { router };