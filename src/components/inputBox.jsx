import React, { useState } from "react";
import "./inputBox.css";

const InputBox = ({ ispass, name, placeholder, value, setValue }) => {
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      type={ispass ? "password" : "text"}
      name={name}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      onChange={changeValue}
      className="inputboxstyle"
    />
  );
};

const InputBoxWithTitle = ({
  ispass,
  name,
  placeholder,
  title,
  value,
  setValue,
}) => {
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="inputboxwithtitlestyle">
      <div className="inputboxtitle">{title}</div>
      <input
        type={ispass ? "password" : "text"}
        name={name}
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        onChange={changeValue}
        className="inputboxstyle"
      />
    </div>
  );
};

export { InputBox, InputBoxWithTitle };
