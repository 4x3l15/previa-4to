const express = require("express");
const userSchema = require("./user");
const Router = express.Router();

Router.post("/user", (req,res) => {
    const User = userSchema(req.body);
    userSchema.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error.message}))
});

Router.get("/user", (req,res) => {
    userSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error.message}))
});

Router.get("/user/:id", (req,res) => {
    const { id } = req.params;
    userSchema.findById({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error.message}))
});

Router.put("/user/:id", (req,res) => {
    const { id } = req.params;
    const {name, age, gmail} = req.body;
    userSchema.updateOne({ _id: id }, { $set: {name, age, gmail}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error.message}))
});


Router.delete("/user/:id", (req,res) => {
    const { id } = req.params;
    userSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error.message}))
});

module.exports = Router;
