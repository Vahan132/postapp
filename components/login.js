import React, {useState} from "react";
import {loginForm} from "./style"

export default function Login({handleSignIn}) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const handleLoginChange = (event) => {
        const value = event.target.value;
        setLogin(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleLogIn = () => {
        if (login === "admin" && password === "admin") {
            handleSignIn(password);
        }
    };

    return (
        <div style={loginForm}>
            <input placeholder="login" value={login} onChange={handleLoginChange}/>
            <input placeholder="password" value={password} onChange={handlePasswordChange}/>
            <button onClick={handleLogIn}>Log in</button>
        </div>
    );
}