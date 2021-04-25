import { Request, Response } from "express";
import LendingSchema from "../models/LendingSchema";

class LendingController {
    async lendingRegister (request: Request, response: Response){
        try {
            const newStudent = await LendingSchema.create(request.body);
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
export { LendingController };

