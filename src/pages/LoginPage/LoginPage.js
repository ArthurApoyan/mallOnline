import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import LogOutHeader from "../../components/LogOutHeader/LogOutHeader";

import "./loginPage.css";

const LoginPage = ({users, setIsAuth, setIsAdmin, setLoginUser, setLoginAdmin}) => {

    const [logUser, setLogUser] = useState({
        login: "",
        password: ""
    })
    const navigate = useNavigate()

    const loginRef = useRef(null)

    useEffect(() => {
        loginRef.current.focus()
    }, [])

    const handleInputChange = (e) => {
        setLogUser({...logUser, [e.target.name] : e.target.value})
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const foundUser = users.find((user) => user.login === logUser.login && user.password === logUser.password && !user.admin)
        const foundAdmin = users.find((user) => user.login === logUser.login && user.password === logUser.password && user.admin)

        if(foundUser){
            setIsAuth(true)
            localStorage.setItem("isAuth", true)
            setLoginUser(foundUser)
            navigate("/")
        }else if(foundAdmin){
            setIsAdmin(true)
            localStorage.setItem("isAdmin", true)
            setLoginUser(foundAdmin)
            navigate("/")
        }else {
            alert("User not found")
        }

        setLogUser({
            login: "",
            password: ""
        })
    }

    return (
        <div>
            <LogOutHeader/>
            <div className="loginPageContainer">
                <div className="loginPageContent">
                    <div className="loginPageTitle">
                        <h1>Are you already with us ? Sign in if yes.</h1>
                        <p>Or <Link to="/signUpPage" className="logInLink">sign up</Link> and join our team</p>
                    </div>
                    <form className="loginPageInputs" onSubmit={handleSignIn}>
                        <input ref={loginRef} type="text" onChange={handleInputChange} name="login" value={logUser.login} placeholder="Login"/>
                        <input type="text" onChange={handleInputChange} name="password" value={logUser.password} placeholder="Password"/>
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;