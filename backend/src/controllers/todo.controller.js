const TodoModel = require("../models/todo.model");

class TodoController {

    async create(req, res) {
        const { body: data, headers: { loggedUser: { _id: userId } } } = req
        
        data.userId = userId;

        const todo = await TodoModel.create(data);
        res.send({ data: todo })
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
        const { headers: { loggedUser: { _id: userId }, } } = req;

        const todos = await TodoModel.find({ userId });

        res.send({ todos: todos });
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