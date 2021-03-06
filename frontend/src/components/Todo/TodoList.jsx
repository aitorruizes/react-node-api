
const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-list">
            <div className="todo-header">
                <h3 className="todo-header-title">Minhas atividades</h3>
            </div>

            <ul on className="todo-list-content">
                {todos.map((todo) => (
                    <li className="todo-list-content-item">
                        <span>{todo.text}</span>
                        <button className="todo-list-edit-button">Editar</button>
                        <button className="todo-list-delete-button">Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;