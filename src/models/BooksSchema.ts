import {Schema} from "mongoose";

const bookSchema = new Schema(
    {
        cod: {
            type: String,
            required: [true, "The field COD is mandatory"],
        },
        title: {
            type: String,
            required: [true, "The field is mandatory"],
        },
        status: {
            type: String,
            required: [true, "The field STATUS is mandatory"],
            enum: ["AVAILABLE", "UNAVAILABLE"],
            uppercase:true,
        },
    }, 
);

export {bookSchema};