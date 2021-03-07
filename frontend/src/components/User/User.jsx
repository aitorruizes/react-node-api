import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import UserList from "./UserList";

const User = () => {
    const [users, setUsers] = useState([]);

    const onRemoveUser = async (user) => {
       await axios.delete(`/user/${user.id}`);
    };

    const fetchUsers = async () => {
        const response = await axios.get("/user");
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const columns = [
        {
            id: "id",
            value: "ID"
        },
        {
            id: "name",
            value: "Nome"
        },
        {
            id: "email",
            value: "Email"
        },
        {
            id: "password",
            value: "Senha"
        },
        {
            id: "action",
            value: "Ação",
            render: (_, user) => {
                <>
                    <button className="user-table-edit-button">Editar</button>
                    <button onClick={() => onRemoveUser(user)} className="user-table-delete-button">Deletar</button>
                </>
            },
        }
    ];

    return (
        <div className="user-container">
            <UserList userHeaderTitle="Usuários cadastrados" users={users} columns={columns}/>
        </div>
    );
}

export default User;