import { Request, Response } from "express";
import studentsSchema from "../models/StudentsSchema";
import booksSchema from "../models/BooksSchema";
import LendingSchema from "../models/LendingSchema";
import { StudentsController } from "./StudentsController";

class LendingController {
    async lendingRegister (request: Request, response: Response){
        try {
                studentsSchema.countDocuments({cpf: request.body.studentCpf}, async function(err, count)
                {
                    if(count == 1)
                    {
                        booksSchema.countDocuments({cod: request.body.booksCod}, async function(err, count)
                        {
                            if(count == 1)
                            {
                                await booksSchema.findOneAndUpdate({ cod: request.body.booksCod },{ status: request.body.status});
                                const lending = await LendingSchema.create(request.body);
                                response.status(200).json({
                                    object: lending,
                                    msg: "Successfully registered",
                                });
                            }else{response.status(500).json({error: err, msg: "Books does not exist"})}
                        });
                    }else{response.status(500).json({error: err, msg: "Student does not exist"})}
                });
        }
        catch (error) {
            response.status(500).json({
                object: error,
                msg: "Register failed",
            });
        }
    }

    async listLendings(request: Request, response: Response)
    {
        try {
            const lendingsList = await LendingSchema.find();
            response.status(200).json({
                object: lendingsList,
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

<<<<<<< HEAD
    async findLendingByCpf(request: Request, response: Response)
    {
        try {
            const { cpf } = request.params;
            const lendingFound = await LendingSchema.find({ cpf: cpf});
=======
    async findLendingById(request: Request, response: Response)
    {
        try {
            const { id } = request.params;
            const lendingFound = await LendingSchema.find({ _id: id});
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
            response.status(200).json({
                object: lendingFound,
                msg: "Lending successfully found"
            });
        }
        catch(error)
        {
            response.status(404).json({
                object: error,
                msg: "Lending not found"
            });
        }
    }

    async editLending(request: Request, response: Response)
    {
        try {
<<<<<<< HEAD
            await LendingSchema.findByIdAndUpdate(request.params.cpf, request.body);
=======
            await LendingSchema.findByIdAndUpdate(request.params.id, request.body);
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
            response.status(200).json({
                msg: "Lending successfully edited"
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

    async deleteLending(request: Request, response: Response)
    {
        try {
<<<<<<< HEAD
            await LendingSchema.findByIdAndDelete(request.params.cpf);
=======
            await LendingSchema.findByIdAndDelete(request.params.id);
>>>>>>> d53e4e5a4d89a86c1ce743afa75ac648a8b7aba8
            response.status(200).json({
                msg: "Lending successfully deleted"
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
export { LendingController };

