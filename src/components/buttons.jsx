import React from "react";
import btnStyles from "./buttons.module.css";
import typoStyles from "../assets/fonts/typography.module.css";

const CustomBtn = ({
  styleForBtn,
  disableStyleForBtn,
  styleForText,
  text,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={[
        btnStyles.btnCommon,
        disabled ? disableStyleForBtn : styleForBtn,
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
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
