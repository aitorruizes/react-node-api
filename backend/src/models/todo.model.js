const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
    {
        title: String,
        completed: Boolean
    },
    { timestamps: true }
);

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;