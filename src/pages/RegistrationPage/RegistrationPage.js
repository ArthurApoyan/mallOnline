import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {sendRequest} from "../../api/Hooks/sendRequest";
import {randomIdGenerator} from "../../api/RandomIdGenerator/randomIdGenerator";

import LogOutHeader from "../../components/LogOutHeader/LogOutHeader";
import RegistrationInputs from "../../components/RegistrationInputs/RegistrationInputs";

import "./registrationPage.css";

const RegistrationPage = ({users, setUsers}) => {

    const [newUser, setNewUser] = useState({
        login: "",
        password: "",
        email: "",
        phone: "",
        img: null
    })
    const [img, setImg] = useState(null)
    const [isImageSelected, setIsImageSelected] = useState(false)

    const navigate = useNavigate()
    const {sendRequestPost} = sendRequest()

    const handleInputChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleFileInputChange = (e) => {
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
        navigate("/signInPage")
    }


    return (
        <div>
            <LogOutHeader/>
            <div className="registrationPageContainer">
                <div className="registrationPageContent">
                    <div className="registrationPageTitle">
                        <h1>Create an account and join our team</h1>
                        <p>Or <Link to="/signInPage" className="titleLink">sign in</Link> if you have an account</p>
                    </div>
                    <RegistrationInputs onChange={handleInputChange}
                                        loginValue={newUser.login}
                                        passwordValue={newUser.password}
                                        emailValue={newUser.email}
                                        phoneValue={newUser.phone}
                                        onFileChange={handleFileInputChange}
                                        imageSelected={isImageSelected}
                                        onClick={handleSignUp}
                                        buttonText="Sign Up"/>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;