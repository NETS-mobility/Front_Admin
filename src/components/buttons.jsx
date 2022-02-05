import React from "react";
import btnStyles from "./buttons.module.css";
import typoStyles from "../assets/fonts/typography.module.css";

const CustomBtn = ({ styleForBtn, styleForText, text, onClick }) => {
  return (
    <button
      type="button"
      className={[btnStyles.btnCommon, styleForBtn].join(" ")}
      onClick={onClick}
    >
      <strong
        className={[typoStyles.textWhite, typoStyles.fw700, styleForText].join(
          " "
        )}
      >
        {text}
      </strong>
    </button>
  );
};

export default CustomBtn;
