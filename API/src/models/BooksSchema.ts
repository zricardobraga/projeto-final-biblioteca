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
        isAvailable: {
            type: Boolean,
            required: [true, "The field STATUS is mandatory"],
            default: true,
        }
        },
    }, 
);

export default mongoose.model("Books", booksSchema);