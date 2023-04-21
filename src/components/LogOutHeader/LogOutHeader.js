import React from 'react';
import {Link, NavLink} from "react-router-dom";

import "./logOutHeader.css";

const LogOutHeader = () => {
    return (
        <div className="logOutHeader">
            <Link className="logoLink" to="/">Mall Online</Link>
            <ul className="navBarLogOut">
                <li>
                    <NavLink className="navBarLink" to="/aboutUsPage">About Us</NavLink>
                </li>
                <li>
                    <NavLink className="navBarLink" to="/contactsPage">Contacts</NavLink>
                </li>
            </ul>
            <div className="logOutHeaderLinks">
                <Link className="logOutHeaderLink" to="/signUpPage">Create an account</Link>
                <Link className="logOutHeaderLink" to="/signInPage">Sign In</Link>
            </div>
        </div>
    );
};

export default LogOutHeader;