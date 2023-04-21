import React, {useState} from 'react';
import {sendRequest} from "../../api/Hooks/sendRequest";

import "./usersTable.css";

const UsersTable = ({users, setUsers}) => {

    const [count, setCount] = useState(4)

    const {sendRequestDelete} = sendRequest()

    const filteredUsers = users.filter((user) => !user.admin)

    const deleteUser = async (id) => {
        await sendRequestDelete(`http://localhost:3001/users/${id}`)
        setUsers([...users.filter((user) => user.id !== id)])
        count > 4 && setCount(filteredUsers.length - 1)
    }

    return (
        <div className="usersTable">
            <h1>Users</h1>
            <div className="usersContainer">
                <table>
                    <thead>
                    <tr>
                        <th>UserName</th>
                        <th>E-mail</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filteredUsers?.map((user, index) => {
                            if(user.admin) return false
                            if(index > count) return false
                            return  <tr key={user.id}>
                                        <td>{user.login}</td>
                                        <td>{user.email}</td>
                                        <td><button onClick={() => {deleteUser(user.id)}}>Delete</button></td>
                                    </tr>
                        })
                    }
                    <tr>
                        <td className="buttonsTd" colSpan="3">
                            <div className="usersTableButtons">
                                <button style={{padding: "4px 20px"}}
                                        onClick={() => {setCount(count - 5)}}
                                        disabled={count <= 4}>Show Less</button>
                                <button style={{padding: "4px 20px"}}
                                        onClick={() => {setCount(count + 5)}}
                                        disabled={count >= filteredUsers.length - 1}>Show More</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;