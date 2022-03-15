import React, { useEffect, useState } from "react";
import "./serviceStat.css";
import Layout from "../../layout/layout";
import {
  StatisticsBox,
  StatisticsLongBox,
  StatisticsTwoContentsBox,
} from "../../components/statistics/statisticsBox";
import axios from "axios";
import CustomDatePicker from "../../components/customDatePicker";

const ServiceStat = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState({
    cancel_count: 0,
    customer_new: 0,
    reservation_count: 0,
    sales: 0,
    service_count: 0,
    total_distance: { sum: 0, avg: 0 },
    total_time: { sum: 0, avg: 0 },
  });

  const onClick = async () => {
    await axios
      .post("/admin/statistics/service", {
        start: startDate,
        end: endDate,
      })
      .then((response) => {
        console.log("response: ", response.data);
        // const accessToken = response.data.jwtToken;
        // localStorage.setItem("accessToken", accessToken);
        // if (accessToken) {
        //   navigate("/");
        // }
        setData({
          cancle_count: response.data.cancel_count,
          customer_new: response.data.customer_new,
          reservation_count: response.data.reservation_count,
          sales: response.data.sales,
          service_count: response.data.service_count,
          total_distance: {
            sum: response.data.total_distance.sum,
            avg: response.data.total_distance.avg,
          },
          total_time: {
            sum: response.data.total_time.sum,
            avg: response.data.total_time.avg,
          },
        });
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  };
  useEffect(() => {
    console.log("startDate", startDate);
    console.log("endDate", endDate);
  }, [startDate, endDate]);
  return (
    <Layout>
      <div className="stat-all">
        <section className="stat-top">
          <div className="stat-title">서비스 통계</div>
          <div className="stat-date">
            <CustomDatePicker selected={startDate} setSelected={setStartDate} />
            <div className="stat-wave">~</div>
            <CustomDatePicker selected={endDate} setSelected={setEndDate} />
          </div>
          <button className="stat-btn" onClick={onClick}>
            검색
          </button>
        </section>
        <section className="stat-bottom">
          <div className="stat-boxline">
            <StatisticsBox
              title={"예약건수"}
              contents={data.reservation_count}
            />
            <StatisticsBox
              title={"서비스건수"}
              contents={`${data.service_count}건`}
            />
            <StatisticsBox
              title={"취소건수"}
              contents={`${data.cancel_count}건`}
            />
          </div>
          <div className="stat-boxline">
            <StatisticsLongBox title={"매출"} contents={`${data.sales}원`} />
            <StatisticsBox
              title={"신규 고객 수"}
              contents={`${data.customer_new}명`}
            />
          </div>
          <div className="stat-boxline">
            <StatisticsTwoContentsBox
              title={"이동 거리"}
              contents1={`${data.total_distance.sum} km`}
              contents2={`${data.total_distance.avg} km`}
            />
            <StatisticsTwoContentsBox
              title={"이동 시간"}
              contents1={`${data.total_time.sum} 시간`}
              contents2={`${data.total_time.avg} 시간`}
            />
            <StatisticsBox title={"평균 병원동행 시간"} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServiceStat;
