import React from "react";
import "./reservationInfo.css";

const ReservationInfo = () => {
  return (
    <section className="reservationinfo-all">
      <section className="reservationinfo-left">
        <div className="reservationinfo-text">이용자 성함 </div>
        <div className="reservationinfo-text">운행 상태</div>
        <div className="reservationinfo-text">서비스 번호 </div>
        <div className="reservationinfo-text">서비스 유형 </div>
        <div className="reservationinfo-text">차량 번호 </div>
        <div className="reservationinfo-text">서비스 예정일 </div>
        <div className="reservationinfo-text">픽업주소</div>
        <div className="reservationinfo-text">픽업 예정시간</div>
        <div className="reservationinfo-text">희망 병원 도착시간 </div>
        <div className="reservationinfo-text">진료/검사 예약시간</div>
        <div className="reservationinfo-text">귀가 출발시간</div>
        <div className="reservationinfo-text">병원 주소</div>
        <div className="reservationinfo-text">결제 수단</div>
        <div className="reservationinfo-text">비용</div>
      </section>
      <section className="reservationinfo-right">
        <div className="reservationinfo-text">포하나 </div>
        <div className="reservationinfo-text">운행 완료</div>
        <div className="reservationinfo-text">123456789 </div>
        <div className="reservationinfo-text">네츠 휠체어 플러스 </div>
        <div className="reservationinfo-text">12가3456</div>
        <div className="reservationinfo-text">2021.11.11</div>
        <div className="reservationinfo-text">서울시 성북구 길음동 11-13</div>
        <div className="reservationinfo-text">10:20</div>
        <div className="reservationinfo-text">12:30</div>
        <div className="reservationinfo-text">13:30</div>
        <div className="reservationinfo-text">14:30</div>
        <div className="reservationinfo-text">상계 백병원</div>
        <div className="reservationinfo-text">무통장 입금</div>
        <div className="reservationinfo-text">79,000원</div>
      </section>
    </section>
  );
};

export { ReservationInfo };
