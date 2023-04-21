import React from 'react';
import {NavLink} from "react-router-dom";

const AdminPageLink = () => {
    return (
        <li>
            <NavLink className="navBarLink" to="/adminPage">AdminPage</NavLink>
        </li>
    );
};

export default AdminPageLink;