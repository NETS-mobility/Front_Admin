import React, { useEffect, useState } from "react";
import NewTableList from "../../components/newTableList";
import Layout from "../../layout/layout";
import { ReservationState } from "../../components/reservation/reservationState";
import CustomDatePicker from "../../components/customDatePicker";
import { MyDatePicker } from "../../components/datepicker";
import { GetReservationList } from "../../api/reservation/getReservationList";
import "./reservationList.css";
import SplitDate from "../../util/splitDate";

const ReservationList = () => {
  const [reservationstate, setReservationstate] = useState(1);
  const [list, setList] = useState([]);
  const [date, setDate] = useState("NONE");

  useEffect(async () => {
    const res = await GetReservationList(reservationstate, date);
    res.forEach((data) => {
      setList((list) => [
        ...list,
        {
          service_id: data.service_id,
          netsManager1: data?.netsmanager?.[0]?.id,
          netsManager2: data?.netsmanager?.[1]?.id,
          date: SplitDate(data.date) + " " + data?.pickup_time?.substring(0, 5),
        },
      ]);
    });
  }, []);

  useEffect(async () => {
    const res = await GetReservationList(reservationstate, date);
    setList([]);
    res.forEach((data) => {
      // console.log("data?", data.netsmanager[0].id);
      setList((list) => [
        ...list,
        {
          service_id: data.service_id,
          netsManager1: data?.netsmanager?.[0]?.id,
          netsManager2: data?.netsmanager?.[1]?.id,
          date:
            SplitDate(data.rev_date) + " " + data?.pickup_time?.substring(0, 5),
        },
      ]);
    });
  }, [reservationstate, date]);

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
            <NewTableList
              needCheck={false}
              titles={[
                "서비스 ID",
                "매니저1 ID",
                "매니저2 ID",
                "운행 시작 시간",
              ]}
              props={["service_id", "netsManager1", "netsManager2", "date"]}
              datas={list}
              baseURL={"/reservation/detail"}
              detailProp={"service_id"}
            />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationList;
