const bcryp = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const saltRounds = 10;

class UserController {

    async auth(req, res) {
        const body = req.body;

        try {
            const user = await UserModel.findOne({ email: body.email }).lean();

            if (!user) {
                throw new Error("User doest not exist.");
            }

            const compareResult = await bcryp.compare(body.password, user.password);

            if (!compareResult) {
                throw new Error("Invalid password!");
            }

            const token = jwt.sign(user, process.env.JWT_SECRET_KEY);

            res.send({ token });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }

    }

    async getAll(req, res) {
        const users = await UserModel.find();

        if (users.length == 0) {
            res.send({ message: "There are no users registered." });
        }

        res.send({ users });
    }

    async create(req, res) {
        const data = req.body;

        if (data.password) {
            const password = data.password;
            const salt = bcryp.genSaltSync(saltRounds);
            const hash = bcryp.hashSync(password, salt);

            data.password = hash;
        }

        const user = await UserModel.findOne({ email: data.email });

        if(user) {
            return res.status(400).send({ message: "Email already exists." });
        }

        const newUser = await UserModel.create(data);

        res.send({ user: newUser });
    }

    async getOne(req, res) {
        const id = req.params.id;

        try {
            const user = await UserModel.findById(id);

            if(user) {
                return res.send({ user });
            }

            throw new Error("User searched not exists.")
        } catch (error) {
            res.status(400).send({ message: error.message });
        }

    }

    async update(req, res) {
        const { params: { id }, body } = req;
        
        const user = UserModel.findOneAndUpdate(id, body).lean();

        res.send({ data: { ...user, ...body }});
    }

    async delete(req, res) {
        const id = req.params.id;

        try {
            const user = await UserModel.findByIdAndDelete(id);

            if (user) {
                res.send({ message: "User has been deleted." });
            }

            throw new Error("User searched not exists.")
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    async me(req, res) {
        res.send({ loggedUser: req.headers.loggedUser });
    }

}

module.exports = new UserController();