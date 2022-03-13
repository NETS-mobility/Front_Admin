import React from "react";
import "./reservationProgress.css";

const ReservationProgress = () => {
  return (
    <div className="reservationprogress-all">
      <section className="reservationprogress-box">
        <div className="reservationprogress-title">서비스 진행 상태</div>
        <div className="reservationprogress-bar-all">
          <div className="reservationprogress-bar-bigcircle">
            <div className="reservationprogress-bar-circle" />
            <div className="reservationprogress-bar-circle" />
            <div className="reservationprogress-bar-circle" />
            <div className="reservationprogress-bar-circle" />
            <div className="reservationprogress-bar-circle" />
            <div className="reservationprogress-bar-circle" />
            <div className="reservationprogress-bar-circle" />
          </div>
          <div className="reservationprogress-bar-stick" />
        </div>
      </section>
      <section className="reservationprogress-box">
        <div className="reservationprogress-title">서비스 진행 상태 변경</div>
      </section>
    </div>
  );
};

export { ReservationProgress };
