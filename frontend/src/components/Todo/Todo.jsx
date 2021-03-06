import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const response = await axios.get("/todo");
        setTodos(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="todo-container">
            <TodoForm todoInput={todoInput} setTodoInput={setTodoInput} todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default Todo;