import React from "react";
import "./reservationState.css";

const ReservationState = ({ onChange }) => {
  return (
    <select onChange={onChange} className="reservationstate">
      <option key="0" value="start">
        운행 중
      </option>
      <option key="1" value="before">
        운행 전
      </option>
      <option key="2" value="after">
        운행 종료
      </option>
    </select>
  );
};

export { ReservationState };
