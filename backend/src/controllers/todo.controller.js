const TodoModel = require("../models/todo.model");

class TodoController {

    async create(req, res) {
        const data = req.body;
        
        const todo = await TodoModel.create(data);

        res.send({ todo });
    }

    async getOne(req, res) {
        const id = req.params.id;

        try {
            const todo = await TodoModel.findById(id);

            if(todo) {
                return res.send({ todo });
            }

            throw new Error("Todo searched not exists.")
        } catch(error) {
            res.status(400).send({ message: error.message });
        }
    }

    async getAll(req, res) {
        const todos = await TodoModel.find();

        res.send({ todos });
    }

    async update(req, res) {
        const { params: { id }, body } = req;
        
        const todo = await TodoModel.findOneAndUpdate(id, body).lean();

        res.send({ data: { ...todo, ...body } });
    }

    async delete(req, res) {
        const id = req.params.id;

        try {
            const todo = await TodoModel.findByIdAndDelete(id);

            if(todo) {
                res.send({ message: "Todo has been deleted." });
            }

            throw new Error("Todo that has been searched not exist.");
        } catch(error) {
            res.send({ message: error.message });
        }
    }

}

module.exports = new TodoController();