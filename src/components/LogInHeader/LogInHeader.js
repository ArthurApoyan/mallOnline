import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import UserIcon from "../../utils/icons/userIcon";

import "./logInHeader.css";

const LogInHeader = ({children, setIsAuth, setIsAdmin, loginUser}) => {

    const [infoIsOpen, setInfoIsOpen] = useState(false)
    const navigate = useNavigate();

    const handleSignOut = () => {
        setIsAuth(false)
        setIsAdmin(false)
        localStorage.removeItem("isAuth")
        localStorage.removeItem("isAdmin")
        navigate("/")
    }

    const showInfo = () => {
        setInfoIsOpen(!infoIsOpen)
    }

    return (
        <div className="logInHeader">
            <Link className="logoLink" to="/">Mall Online</Link>
            <ul className="navBar">
                {children}
                <li>
                    <NavLink className="navBarLink" to="/productsPage">Products</NavLink>
                </li>
                <li>
                    <NavLink className="navBarLink" to="/aboutUsPage">About Us</NavLink>
                </li>
                <li>
                    <NavLink className="navBarLink" to="/contactsPage">Contacts</NavLink>
                </li>
            </ul>
            <div className="userName">
                <UserIcon showInfo={showInfo}/>
                <p>{loginUser?.login}</p>
            </div>
            {
                infoIsOpen && <div className="userInfo">
                                  <p><span>User Name:</span> {loginUser?.login}</p>
                                  <p><span>E-mail:</span> {loginUser?.email}</p>
                                  <p><span>Phone:</span> {loginUser?.phone}</p>
                              </div>
            }
            <div className="signOut">
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    );
};

export default LogInHeader;