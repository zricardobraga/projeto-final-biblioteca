import { Request, Response } from "express";
import BooksSchema from "../models/BooksSchema";

class BooksController {

    async registerBook(request: Request, response: Response) {
        
        try {
            BooksSchema.countDocuments({cod: request.body.cod}, async function (err, count) {
                if(count == 1){
                    response.status(500).json({
                        msg: "Book already registered"
                    })
                }else {
                    const newBook = await BooksSchema.create(request.body);
                    response.status(201).json(newBook);      
                }
            }); 
        }catch (error) {
            response.status(400).json(error);
        }
    }

    async listBooks(request: Request, response: Response) {
        try {
            const booksList = await BooksSchema.find();
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

    async findBookByCod(request: Request, response: Response) {
        try {
            const { cod } = request.params;
            const bookFound = await BooksSchema.find({ cod: cod});
            response.status(200).json({
                object: bookFound,
                msg: "Book successfully found"
            });
        }
        catch(error)
        {
            response.status(404).json({
                object: error,
                msg: "Book not found"
            });
        }
    }

    async editBook(request: Request, response: Response) {
        try {
            await BooksSchema.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json({
                msg: "Book successfully edited"
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

    async deleteBook(request: Request, response: Response) {
        try {
            await BooksSchema.findByIdAndDelete(request.params.id);
            response.status(200).json({
                msg: "Book successfully deleted"
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

export { BooksController };