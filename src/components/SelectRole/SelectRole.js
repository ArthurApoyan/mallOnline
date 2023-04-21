import React from 'react';

import "./selectRole.css";

const SelectRole = ({setSelectionValue}) => {

    const handleSelect = (e) => {
        setSelectionValue(e.target.value)
    }

    return (
        <div className="selectionContainer">
            <label htmlFor="selectRole">Choose the role to sign up</label>
            <select id="selectRole" onChange={handleSelect} required={true}>
                <option value="User" defaultValue="User">
                    Add User
                </option>
                <option value="Admin">
                    Add Admin
                </option>
            </select>
        </div>
    );
};

export default SelectRole;