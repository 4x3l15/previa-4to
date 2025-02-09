const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./usersRouters");
const app = express();

const PORT = 9500;

app.set("view engine","ejs");

app.use(express.json());
app.use("/api",userRouter);


mongoose.connect("mongodb+srv://adramirez:Ar12345@cluster0.xdwihik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then((data) => console.log("se conecto a mongoDB"))
.catch((error) => console.log(error))

app.listen(PORT, () =>{
    console.log("el server corre en el port",PORT)
})
