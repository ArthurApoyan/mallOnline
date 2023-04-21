import React, {useState} from 'react';
import {sendRequest} from "../../api/Hooks/sendRequest";
import {randomIdGenerator} from "../../api/RandomIdGenerator/randomIdGenerator";
import AddUserInputs from "../AddUserInputs/AddUserInputs";

import "./addUser.css";

const AddUser = ({users, setUsers}) => {

    const [newUser, setNewUser] = useState({
        login: "",
        password: "",
        email: "",
        phone: "",
        img: null
    })
    const [img, setImg] = useState(null)
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [selectionValue, setSelectionValue] = useState("User")

    const {sendRequestPost} = sendRequest()

    const handleInputChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleUserFileInputChange = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
        setIsImageSelected(true)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const data = {
            id: randomIdGenerator(users),
            login: newUser.login,
            password: newUser.password,
            email: newUser.email,
            phone: newUser.phone,
            img: img
        }

        if (selectionValue === "Admin") {
            data.admin = true
        }

        const result = await sendRequestPost("http://localhost:3001/users", data)
        setUsers([...users, result])

        setIsImageSelected(false)
        setNewUser({
            login: "",
            password: "",
            email: "",
            phone: "",
            img: null
        })
    }


    return (
            <div className="addUserContainer">
                <div className="addUserContent">
                    <AddUserInputs onChange={handleInputChange}
                                   loginValue={newUser.login}
                                   passwordValue={newUser.password}
                                   emailValue={newUser.email}
                                   phoneValue={newUser.phone}
                                   onFileChange={handleUserFileInputChange}
                                   imageSelected={isImageSelected}
                                   onClick={handleSignUp}
                                   setSelectionValue={setSelectionValue}
                                   buttonText="Add User"/>
                </div>
            </div>
    );
};

export default AddUser;