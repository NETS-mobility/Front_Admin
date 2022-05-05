import React from "react";
import "./reservationState.css";

const ReservationState = ({ onChange }) => {
  return (
    <select onChange={onChange} className="reservationstate">
      <option key="0" value={1}>
        운행 중
      </option>
      <option key="1" value={0}>
        운행 전
      </option>
      <option key="2" value={2}>
        운행 종료
      </option>
    </select>
  );
};

export { ReservationState };
