import { Request, Response } from "express";
import booksSchema from "../models/BooksSchema";

class BooksController {

    async registerBook(request: Request, response: Response)
    {
        try {
            const newBook = await booksSchema.create(request.body);
            response.status(201).json({
                object: newBook,
                msg: "Successfully registered",
            });
        }
        catch(error)
        {
            response.status(500).json({
                object: error,
                msg: "Register failed",
            });
        }
    }

    async listBooks(request: Request, response: Response)
    {
        try {
            const booksList = await booksSchema.find();
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

    async findBookById(request: Request, response: Response)
    {
        try {
            const { id } = request.params;
            const bookFound = await booksSchema.find({ _id: id});
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

    async editBook(request: Request, response: Response)
    {
        try {
            await booksSchema.findByIdAndUpdate(request.params.id, request.body);
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

    async deleteBook(request: Request, response: Response)
    {
        try {
            await booksSchema.findByIdAndDelete(request.params.id);
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
};

export {BooksController};