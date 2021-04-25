import { Request, Response } from "express";
import studentsSchema from "../models/StudentsSchema";

class StudentsController {
    async studentsRegister (request: Request, response: Response){
        try {
            const newStudent = await studentsSchema.create(request.body);
            response.status(201).json({
            object: newStudent,
            msg: "New study registered",
            error: false 
        }) 
            
        } catch (error) {
            response.status(400).json({
            object: error,
            msg: "Failed to register the new student",
            error: true   
            })
        }
    }

}
export { StudentsController }
