import React, { useState } from "react";
import TableList from "../../components/tableList";
import Layout from "../../layout/layout";
import { ReservationState } from "../../components/reservation/reservationState";
import { MyDatePicker } from "../../components/datepicker";
import "./reservationList.css";

const ReservationList = () => {
  const [reservationstate, setReservationstate] = useState("start");

  const startList = [
    {
      id: 1,
      nav: "/reservationDetail",
      item1: 9892123230982,
      item2: "ssu932@gmail.com",
      item3: "2022-01-01,09:20",
    },
  ];

  const beforeList = [
    {
      id: 1,
      nav: "/reservationDetail",
      item1: 1234561236541,
      item2: "ssu932@gmail.com",
      item3: "2022-01-01,09:20",
    },
  ];

  const doneList = [
    {
      id: 1,
      nav: "/reservationDetail",
      item1: 6512345684657,
      item2: "ssu932@gmail.com",
      item3: "2022-01-01,09:20",
    },
  ];

  const onChangeState = (e) => {
    setReservationstate(e.target.value);
  };

  return (
    <Layout>
      <div className="reservation-all">
        <section className="reservation-top">
          <div className="reservation-title">운행정보 확인</div>
          <div className="reservation-topright">
            <MyDatePicker />
            <ReservationState onChange={onChangeState} />
          </div>
        </section>
        <div className="reservation-bottom">
          <section className="reservation-tablelist">
            <TableList
              ischeck={false}
              information={
                reservationstate == "start"
                  ? startList
                  : reservationstate == "before"
                  ? beforeList
                  : doneList
              }
              title1={"서비스 ID"}
              title2={"매니저 이메일"}
              title3={"운행 시작 시간"}
            />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationList;
