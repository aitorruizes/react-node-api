
const UserList = ({ userHeaderTitle, users, columns }) => {
    return (
        <div className="user-list">
            <div className="user-header">
                <h3 className="user-header-title">{ userHeaderTitle }</h3>
            </div>
            <div className="table-content">
                <table className="user-table">
                    <thead className="user-table-thead">
                        <tr>
                            {columns.map((column) => (
                              <th key={column.id}>{column.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td>{ user.id }</td>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.password }</td>
                                <td>
                                    <button className="user-table-edit-button">Editar</button>
                                    <button className="user-table-delete-button">Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;