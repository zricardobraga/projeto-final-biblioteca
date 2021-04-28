import { Request, Response } from "express";
import studentsSchema from "../models/StudentsSchema";

class StudentsController {

    async registerStudent (request: Request, response: Response){
        try {
            const newStudent = await studentsSchema.create(request.body);
            response.status(201).json({
                object: newStudent,
                msg: "New study registered",
        }); 
            
        } catch (error) {
            response.status(400).json({
                object: error,
                msg: "Failed to register the new student",
                error: true   
            });
        }
    }
    async listStudents(request: Request, response: Response)
    {
        try {
            const booksList = await studentsSchema.find();
            response.status(200).json({
                object: booksList,
                msg: "Successfully listed"
            });
        }
        catch(error)
        {
            response.status(400).json({
                object: error,
                msg: "Failed to list"
            });
        }
    }

    async findStudentById(request: Request, response: Response)
    {
        try {
            const { id } = request.params;
            const bookFound = await studentsSchema.find({ _id: id});
            response.status(200).json({
                object: bookFound,
                msg: "Student successfully found"
            });
        }
        catch(error)
        {
            response.status(404).json({
                object: error,
                msg: "Student not found"
            });
        }
    }

    async editStudent(request: Request, response: Response)
    {
        try {
            await studentsSchema.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json({
                msg: "Student successfully edited"
            });
        }
        catch(error)
        {
            response.status(500).json({
                object: error,
                msg: "Failed trying to edit"
            });
        }
    }

    async deleteStudent(request: Request, response: Response)
    {
        try {
            await studentsSchema.findByIdAndDelete(request.params.id);
            response.status(200).json({
                msg: "Student successfully deleted"
            })
        }
        catch(error)
        {
            response.status(500).send({
                object: error,
                msg: "Failed trying to delete"
            })
        }
    }

}
export { StudentsController }
