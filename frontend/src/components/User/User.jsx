import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import UserList from "./UserList";

const User = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get("/user");
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-container">
            <UserList userHeaderTitle="Usuários cadastrados" id="ID" email="Email" password="Senha" users={users}/>
        </div>
    );
}

export default User;