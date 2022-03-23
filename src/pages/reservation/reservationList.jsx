import React, { useState } from "react";
// import TableList from "../../components/tableList";
import Layout from "../../layout/layout";
import { ReservationState } from "../../components/reservation/reservationState";
import CustomDatePicker from "../../components/customDatePicker";
import "./reservationList.css";

const ReservationList = () => {
  const [reservationstate, setReservationstate] = useState("start");
  const [list, setList] = useState([]);
  const [date, setDate] = useState("");

  const onChangeState = (e) => {
    setReservationstate(e.target.value);
  };

  return (
    <Layout>
      <div className="reservation-all">
        <section className="reservation-top">
          <div className="reservation-title">운행정보 확인</div>
          <div className="reservation-topright">
            <CustomDatePicker selected={date} setSelected={setDate} />
            <ReservationState onChange={onChangeState} />
          </div>
        </section>
        <div className="reservation-bottom">
          <section className="reservation-tablelist">
            {/* <TableList
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
            /> */}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationList;
