import React, { useState } from "react";
import "./inputBox.css";

const InputBox = ({ ispass, name, placeholder, onChange, value }) => {
  return (
    <input
      type={ispass ? "password" : "text"}
      name={name}
      placeholder={placeholder}
      className="inputboxstyle"
      onChange={onChange}
      value={value}
    />
  );
};

export { InputBox };
