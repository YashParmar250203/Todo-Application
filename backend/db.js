const mongoose = require("mongoose");
// mongodb+srv://yashparmar1020:YPStar250203@cluster0.ieplovb.mongodb.net/todos
mongoose.connect("mongodb+srv://yashparmar1020:YPStar250203@cluster0.ieplovb.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}