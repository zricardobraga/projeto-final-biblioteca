import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://admin:admin@librarycluster.41dzf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => {
        console.log("DB Connected!");
    })
    .catch((error) => {
        console.log(`Error trying to connect to DB! ${error}`);
    });

export { mongoose };