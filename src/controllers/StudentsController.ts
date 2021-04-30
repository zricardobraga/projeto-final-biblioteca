import { Request, Response } from "express";
import StudentsSchema from "../models/StudentsSchema";

class StudentsController {
<<<<<<< HEAD
    // async studentsRegister (request: Request, response: Response){
        
    //     try {
    //         StudentsSchema.count({cpf: request.body.cpf}, async function (err, count) {
    //             if(count == 1){
    //                 response.status(500).json({
    //                     msg: "Student already registered"
    //                 })
    //             }else {
    //                 const newStudent = await StudentsSchema.create(request.body);
    //                 response.status(201).json(newStudent);      
    //             }
    //         }); 
    //     }catch (error) {
    //         response.status(400).json(error);
    //     }
    // }

    async studentsRegister (request: Request, response: Response){
        try {
            StudentsSchema.count({cpf: request.body.cpf}, async function (err, count){
                if(count == 1){
                    response.status(500).json({
                        msg: "Student already registered"
                    });
                }else {
                    const newStudent = await StudentsSchema.create(request.body);
                    response.status(201).json(newStudent);            
            }
            });   
=======

    async registerStudent (request: Request, response: Response){
        try {
            const newStudent = await studentsSchema.create(request.body);
            response.status(201).json({
                object: newStudent,
                msg: "New study registered",
        }); 
            
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
        } catch (error) {
            response.status(400).json(error);
        }
    }




    async listStudents(request: Request, response: Response)
    {
        try {
            const studentsList = await StudentsSchema.find();
            response.status(200).json({
                object: studentsList,
                msg: "Successfully listed"
            });
        }
        catch(error)
        {
            response.status(400).json({
                object: error,
<<<<<<< HEAD
=======
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
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
                msg: "Failed to list"
            });
        }
    }

<<<<<<< HEAD
    async findStudentByCpf(request: Request, response: Response)
    {
        try {
            const { cpf } = request.params;
            const studentFound = await StudentsSchema.find({ cpf: cpf});
            response.status(200).json({
                object: studentFound,
=======
    async findStudentById(request: Request, response: Response)
    {
        try {
            const { id } = request.params;
            const bookFound = await studentsSchema.find({ _id: id});
            response.status(200).json({
                object: bookFound,
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
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
<<<<<<< HEAD
            const { cpf } = request.params;
            await StudentsSchema.updateOne({ cpf: cpf}, request.body);
=======
            await studentsSchema.findByIdAndUpdate(request.params.id, request.body);
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
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
<<<<<<< HEAD
            const { cpf } = request.params;
            await StudentsSchema.deleteOne({ cpf: cpf});
=======
            await studentsSchema.findByIdAndDelete(request.params.id);
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
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
};

export { StudentsController };

