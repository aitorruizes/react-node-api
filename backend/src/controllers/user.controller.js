const UserModel = require("../models/user.model");

class UserController {

    async getAll(req, res) {
        const users = await UserModel.find();

        if(users.length == 0) {
            res.send({ message: "There are no users registered." });
        }

        res.send(users);
    }

    async create(req, res) {
        const data = req.body;
        const user = await UserModel.create(data);

        res.send({ user });
    }

    async getOne(req, res) {
        const id = req.params.id;
        
        try {
            const user = await UserModel.findById(id);
            res.send({ user });
        } catch(error) {
            res.status(400).send({ message: "User searched not exists." });
        }

    }

    async update(req, res) {
        const { params: { id }, body } = req;
        res.send({id, body});
    }

    async delete(req, res) {
        const id = req.params.id;

        try {
            const user = await UserModel.findByIdAndDelete(id);
            
            if(user) {
                res.send({ message: "User has been deleted." });
            }

            throw new Error("User searched not exists.")
        } catch(error) {
            res.status(400).send({ message: error.message });
        }
    }

}

module.exports = new UserController();