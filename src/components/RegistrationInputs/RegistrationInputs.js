import React, {useEffect, useRef} from 'react';
import RegistrationImageInput from "../RegistrationImageInput/RegistrationImageInput";

import "./registrationInputs.css"

const RegistrationInputs = ({
                                onChange,
                                loginValue,
                                passwordValue,
                                emailValue,
                                phoneValue,
                                onFileChange,
                                imageSelected,
                                onClick,
                                buttonText
                            }) => {

    const signUpRef = useRef(null)

    useEffect(() => {
        signUpRef.current.focus()
    }, [])

    return (
        <form className="regInputs" onSubmit={onClick}>
            <input ref={signUpRef} type="text" onChange={onChange} name="login" value={loginValue} placeholder="Login" required={true}/>
            <input type="text" onChange={onChange} name="password" value={passwordValue} placeholder="Password" required={true}/>
            <input type="text" onChange={onChange} name="email" value={emailValue} placeholder="E-mail"/>
            <input type="text" onChange={onChange} name="phone" value={phoneValue} placeholder="Phone"/>
            <RegistrationImageInput onChange={onFileChange}
                                    imageSelected={imageSelected}/>
            <button>{buttonText}</button>
        </form>
    );
};

export default RegistrationInputs;