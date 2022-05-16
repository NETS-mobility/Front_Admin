import React from "react";
import "./reservationInfo.css";

const ReservationInfo = ({ data }) => {
  return (
    <section className="reservationinfo-all">
      {/* <section className="reservationinfo-left"> */}
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">서비스 번호</span>
        <span className="reservationinfo-text">{data?.service_id}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">서비스 유형</span>
        <span className="reservationinfo-text">{data?.service_type}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">이용자 성함</span>
        <span className="reservationinfo-text">{data?.customer_name}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">픽업 주소</span>
        <span className="reservationinfo-text">{data?.pickup_address}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">병원 주소</span>
        <span className="reservationinfo-text">{data?.hos_address}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">귀가 주소</span>
        <span className="reservationinfo-text">{data?.drop_address}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">차량 번호</span>
        <span className="reservationinfo-text">{data?.car_number}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">서비스 예정일</span>
        <span className="reservationinfo-text">{data?.rev_date}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">픽업 예정시간</span>
        <span className="reservationinfo-text">{data?.pickup_time}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">희망 병원 도착시간</span>
        <span className="reservationinfo-text">{data?.hos_arrival_time}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">진료/검사 예약시간</span>
        <span className="reservationinfo-text">{data?.hos_care_time}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">귀가 출발 시간</span>
        <span className="reservationinfo-text">{data?.hos_depart_time}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">결제 수단</span>
        <span className="reservationinfo-text">{data?.payMethod}</span>
      </section>
      <section className="reservationinfo-oneline">
        <span className="reservationinfo-title">비용</span>
        <span className="reservationinfo-text">
          {`${data?.payCost
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}
        </span>
      </section>
    </section>
  );
};

export { ReservationInfo };
