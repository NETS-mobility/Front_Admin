import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import "./reservationDetail.css";
import EditImg from "../../assets/info-editing.png";
import { ReservationInfo } from "../../components/reservation/reservationInfo";
import { ReservationBlock } from "../../components/reservation/reservationBlock";
import {
  ReservationProgress,
  ReservationProgressEdit,
} from "../../components/reservation/reservationProgress";
import { GetReservationDetail } from "../../api/reservation/getReservationDetail";
import { useParams } from "react-router-dom";

const ReservationDetail = () => {
  const param = useParams();
  const [detail, setDetail] = useState({
    car_dispatch_num: null,
    car_number: "",
    netsmanager_id: "",
    netsmanager_name: "",
    netsmanager_number: "",
    payCost: null,
    payMethod: "",
    customer_name: "",
    customer_number: null,
    dispatch_case: 0,
    drop_address: "",
    gowith_hospital_time: null,
    gowithumanager: "",
    hos_address: "",
    hos_arrival_time: "",
    hos_care_time: "",
    hos_depart_time: "",
    pickup_address: "",
    pickup_time: "",
    reservation_state: "",
    rev_date: "",
    service_id: "",
    service_type: "",
    service_state: null,
    service_time: [""],
  });
  useEffect(async () => {
    const res = await GetReservationDetail(param.id);
    console.log("data=", res);
    setDetail({
      car_dispatch_num: res.dispatch[0].car_dispatch_number,
      car_number: res.dispatch[0].car_number,
      netsmanager_id: res.dispatch[0].netsmanager_id,
      netsmanager_name: res.dispatch[0].netsmanager_name,
      netsmanager_number: res.dispatch[0].netsmanager_number,
      payCost: res.payCost,
      payMethod: res.payMethod,
      customer_name: res.service.customer_name,
      customer_number: res.service.customer_number,
      dispatch_case: res.service.dispatch_case,
      drop_address: res.service.drop_address,
      gowith_hospital_time: res.service.gowith_hospital_time,
      gowithumanager: res.service.gowithumanager,
      hos_address: res.service.hos_address,
      hos_arrival_time: res.service.hos_arrival_time.substring(0, 5),
      hos_care_time: res.service.hos_care_time.substring(0, 5),
      hos_depart_time: res.service.hos_depart_time.substring(0, 5),
      pickup_address: res.service.pickup_address,
      pickup_time: res.service.pickup_time.substring(0, 5),
      reservation_state: res.service.reservation_state,
      rev_date: res.service.rev_date.substring(0, 10),
      service_id: res.service.service_id,
      service_type: res.service.service_type,
      service_state: res.service_state,
      service_time: res.service_time,
    });
  }, []);
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
            <ReservationInfo data={detail} />
            <div className="reservationdetail-member">
              <ReservationBlock
                isbutton={true}
                name={`${detail?.netsmanager_name} 네츠매니저`}
                dispatch={detail?.car_dispatch_num}
                id={param.id}
                url={"/manager/detail"}
                num={detail?.netsmanager_number}
                btnName={"매니저 상세보기"}
              />
              {/* 동행매니저 아직 변경 불가능해서 isbutton false로 해둠, true로 바꿔야함 */}
              <ReservationBlock
                isbutton={false}
                name={`${detail?.gowithumanager} 동행매니저`}
                btnName={"매니저 상세보기"}
              />
              <ReservationBlock
                isbutton={false}
                name={`${detail?.customer_name} 고객님`}
                url={"/member/detail"}
                num={detail?.customer_number}
                btnName={"요청 사항 상세보기"}
              />
            </div>
          </div>
        </section>
        <section className="reservationdetail-bottom">
          <ReservationProgress
            state={detail?.service_state}
            time={detail?.service_time}
          />
          <ReservationProgressEdit id={param.id} />
        </section>
      </div>
    </Layout>
  );
};

export default ReservationDetail;
