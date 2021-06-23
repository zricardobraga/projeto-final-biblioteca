import { Schema } from "mongoose";
import { mongoose } from "../config/database";

const booksSchema = new Schema(
    {
        cod: {
            type: String,
            required: [true, "The field COD is mandatory"],
        },
        title: {
            type: String,
            required: [true, "The field TITLE is mandatory"],
        },
        status: {
            type: String,
            required: [true, "The field STATUS is mandatory"],
            enum: ["AVAILABLE", "UNAVAILABLE"],
            uppercase:true,
        },
    }, 
);

export default mongoose.model("Books", booksSchema);