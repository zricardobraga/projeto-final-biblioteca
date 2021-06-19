import express, {Request, Response} from "express";
import cors from "cors";
import { router } from "../config/routes";
import { mongoose } from "../config/database";


const app = express();

const db = mongoose;

console.clear();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () =>
{
    console.log("Servior ON!");
});
