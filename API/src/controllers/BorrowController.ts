import { Request, Response } from "express";
import booksSchema from "../models/BooksSchema";
import BorrowSchema from "../models/BorrowSchema";

class BorrowController {

    async borrowRegister (request: Request, response: Response){
        try {

            const booksArray = request.body.booksBorrow;
            const booksFormated = Array.from(booksArray);
            let i = 0;

            for(const book in booksFormated){

                const getBook = await booksSchema.findOne({_id: booksFormated[i]});
                const getBookStatus = getBook.isAvailable;

                if(getBookStatus == false)
                {
                    response.status(500).json({msg: "Book UNAVAILABLE"});
                }

                await booksSchema.findOneAndUpdate({_id: booksFormated[i]}, {isAvailable: "false"});

                i++;
            }

            const borrow = await BorrowSchema.create(request.body);

            await BorrowSchema.findOne({_id: borrow.id})
            response.status(200).json({
                object: borrow,
                msg: "Successfully registered"
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
            const borrowsList = await BorrowSchema.find()
            .populate('booksBorrow')
            .populate('studentBorrow');
            response.status(200).json(borrowsList);
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
            const borrowFound = await BorrowSchema.findOne({ _id: id})
            .populate('booksBorrow')
            .populate('studentBorrow');

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

    async devolutionBorrow(request: Request, response: Response)
    {
        try {
            const { id } = request.params;
            const borrowFound = await BorrowSchema.findOne({ _id: id});
            const booksArray = borrowFound.booksBorrow;
            const booksFormated = Array.from(booksArray);
            let i = 0;

            for(const book in booksFormated){

                await booksSchema.findOneAndUpdate({_id: booksFormated[i]}, {isAvailable: "true"});

                i++;
            }
    
            await BorrowSchema.findByIdAndDelete(request.params.id);
    
            response.status(200).json({
                msg: "Books returned!"
            });
        }catch(error)
        {
            response.status(500).send({
                object: error,
                msg: "Failed trying to devolve"
            })
        }
    }

}
export { BorrowController };
