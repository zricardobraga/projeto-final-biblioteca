import { Request, Response } from "express";
import studentsSchema from "../models/StudentsSchema";
import booksSchema from "../models/BooksSchema";
import LendingSchema from "../models/LendingSchema";
import { StudentsController } from "./StudentsController";

class LendingController {
    async lendingRegister (request: Request, response: Response){
        try {
            await booksSchema.findOneAndUpdate(request.body.status);
            const lending = await LendingSchema.create(request.body);
            response.status(201).json({
                object: lending,
                msg: "Successfully registered",
            });
        }
        catch (error) {
            response.status(500).json({
                object: error,
                msg: "Register failed",
            });
        }
    }

}
export { LendingController };

