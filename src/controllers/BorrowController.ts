import { Request, Response } from "express";
import studentsSchema from "../models/StudentsSchema";
import booksSchema from "../models/BooksSchema";
import BorrowSchema from "../models/BorrowSchema";

class BorrowController {

    async borrowRegister (request: Request, response: Response){
        try {
                studentsSchema.countDocuments({cpf: request.body.studentCpf}, async function(err, count)
                {
                    if(count == 1)
                    {
                        booksSchema.countDocuments({cod: request.body.booksCod}, async function(err, count)
                        {
                            if(count == 1)
                            {
                                const { cod } = request.body.booksCod;
                                const bookFound = await booksSchema.find({ cod: cod});
                                const bookUnavailable = Object.values(bookFound).includes("UNAVAILABLE");

                                if(bookUnavailable == true){
                                    response.status(500).json({msg: "Book UNAVAILABLE"});
                                }else{
                                    await booksSchema.findOneAndUpdate({ cod: request.body.booksCod },{ status: "UNAVAILABLE"});
                                    const borrow = await BorrowSchema.create(request.body);
                                    response.status(200).json({
                                        object: borrow,
                                        msg: "Successfully registered",
                                    });
                                }
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

    async listBorrows(request: Request, response: Response)
    {
        try {
            const borrowsList = await BorrowSchema.find();
            response.status(200).json({
                object: borrowsList,
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

    async findBorrowById(request: Request, response: Response)
    {
        try {
            const { id } = request.params;
            const borrowFound = await BorrowSchema.findOne({ _id: id});

            if(borrowFound)
            {
                response.status(200).json({
                    object: borrowFound,
                    msg: "Borrow successfully found"
                });
            } else {
                response.status(404).json({
                    msg: "Borrow not found"
                });
            }
        }
        catch(error)
        {
            response.status(404).json({
                object: error,
                msg: "Borrow not found"
            });
        }
    }

    async editBorrow(request: Request, response: Response)
    {
        try {
            await BorrowSchema.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json({
                msg: "Borrow successfully edited"
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

    async deleteBorrow(request: Request, response: Response)
    {
        try {
            await BorrowSchema.findByIdAndDelete(request.params.id);
            response.status(200).json({
                msg: "Borrow successfully deleted"
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
export { BorrowController };

