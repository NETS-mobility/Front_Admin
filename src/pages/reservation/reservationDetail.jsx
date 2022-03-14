import React from "react";
import Layout from "../../layout/layout";
import "./reservationDetail.css";
import EditImg from "../../assets/info-editing.png";
import { ReservationInfo } from "../../components/reservation/reservationInfo";
import { ReservationBlock } from "../../components/reservation/reservationBlock";
import { ReservationProgress } from "../../components/reservation/reservationProgress";

const ReservationDetail = () => {
  return (
    <Layout>
      <div className="reservationdetail-all">
        <section className="reservationdetail-top">
          <div className="reservationdetail-title">운행정보 확인</div>
          <label className="reservationdetail-editset">
            <img src={EditImg} width="36" height="36" alt="edit" />
            <div className="reservationdetail-edittext">상세정보 수정</div>
          </label>
        </section>
        <section className="reservationdetail-mid">
          <div className="reservationdetail-information">
            <ReservationInfo />
            <div className="reservationdetail-line" />
          </div>
        </section>
        <section className="reservationdetail-bottom1">
          <ReservationBlock
            isbutton={true}
            name={"원하나 네츠매니저"}
            btnName={"매니저 상세보기"}
          />
          <ReservationBlock
            isbutton={true}
            name={"투하나 동행매니저"}
            btnName={"매니저 상세보기"}
          />
          <ReservationBlock
            isbutton={false}
            name={"포하나 고객님"}
            btnName={"요청 사항 상세보기"}
          />
        </section>
        <section className="reservationdetail-bottom2">
          <ReservationProgress />
        </section>
      </div>
    </Layout>
  );
};

export default ReservationDetail;
