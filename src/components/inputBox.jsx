import React, {useState} from "react";
import  "./inputBox.css";

const InputBox = ({ispass, name, placeholder }) => {
    return(
    <input
    type={ispass? "password" : "text"}
    name={name}
    placeholder={placeholder}
    className="inputboxstyle"/>
    );
};

export {InputBox};