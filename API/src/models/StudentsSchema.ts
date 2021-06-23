import { Schema } from "mongoose";
import { mongoose } from "../config/database";

const studentsSchema = new Schema({
    name: {
        type: String,
        required: [true, "The field NAME is mandatory"],
    },
    cpf: {
        type: String,
        required: [true, "The field CPF is mandatory"]
    },
    address: {
        type: String,
        required: [true, "The field ADDRESS is mandatory"]
    }
});

export default mongoose.model("students", studentsSchema);
