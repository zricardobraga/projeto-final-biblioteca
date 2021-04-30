import { Request, Response } from "express";
import StudentsSchema from "../models/StudentsSchema";

class StudentsController {
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
                msg: "Failed to list"
            });
        }
    }

    async findStudentByCpf(request: Request, response: Response)
    {
        try {
            const { cpf } = request.params;
            const studentFound = await StudentsSchema.find({ cpf: cpf});
            response.status(200).json({
                object: studentFound,
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
            const { cpf } = request.params;
            await StudentsSchema.updateOne({ cpf: cpf}, request.body);
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
            const { cpf } = request.params;
            await StudentsSchema.deleteOne({ cpf: cpf});
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

