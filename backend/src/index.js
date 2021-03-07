const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.router");
const todoRouter = require("./routes/todo.router");
const authMiddleware = require("./middlewares/auth.middleware");

require("dotenv").config();

const {MONGO_URL, HTTP_PORT} = process.env;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(authMiddleware);

app.get("/", (req, res) => {
    res.json({ message: "Hello World." });
});

app.use("/api", userRouter);
app.use("/api", todoRouter);

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}.`);
});