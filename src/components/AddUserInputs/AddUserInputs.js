import React from 'react';
import SelectRole from "../SelectRole/SelectRole";
import UserImageInput from "../UserImageInput/UserImageInput";

import "./addUserInputs.css"

const AddUserInputs = ({
                           onChange,
                           loginValue,
                           passwordValue,
                           emailValue,
                           phoneValue,
                           onFileChange,
                           imageSelected,
                           onClick,
                           setSelectionValue,
                           buttonText
                       }) => {
    return (
        <form className="addUserInputs" onSubmit={onClick}>
            <SelectRole setSelectionValue={setSelectionValue}/>
            <input type="text" onChange={onChange} name="login" value={loginValue} placeholder="Login"/>
            <input type="text" onChange={onChange} name="password" value={passwordValue} placeholder="Password"/>
            <input type="text" onChange={onChange} name="email" value={emailValue} placeholder="E-mail"/>
            <input type="text" onChange={onChange} name="phone" value={phoneValue} placeholder="Phone"/>
            <UserImageInput onChange={onFileChange}
                            imageSelected={imageSelected}/>
            <button>{buttonText}</button>
        </form>
    );
};

export default AddUserInputs;