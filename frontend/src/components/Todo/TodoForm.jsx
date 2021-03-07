import axios from "../../utils/api";

const TodoForm = ({ todoInput, setTodoInput, todos, setTodos }) => {
    const getTodoInput = (e) => {
        setTodoInput(e.target.value);
    }

    const submitTodo = async () => {
        const data = {
            text: todoInput,
        }

        if(data.text.length === 0 || data.text.trim() === 0) {
            alert("O campo deve estar preenchido.")
        } else {
            await axios.post("/todo", data);

            setTodos([...todos, data]);
            setTodoInput("");
        }
    }

    return (
        <div className="todo-form">
            <input value={todoInput} onChange={getTodoInput} className="todo-form-input" type="text" placeholder="O que precisa ser feito?"/>
            <button onClick={submitTodo} className="todo-form-button" type="submit">Adicionar</button>
        </div>
    );
}

export default TodoForm;