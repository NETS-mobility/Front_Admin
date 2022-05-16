import React, { useEffect, useState } from "react";
import "./serviceStat.css";
import Layout from "../../layout/layout";
import {
  StatisticsBox,
  StatisticsLongBox,
  StatisticsTwoContentsBox,
} from "../../components/statistics/statisticsBox";
import CustomDatePicker from "../../components/customDatePicker";
import { GetStatistics } from "../../api/statistics/getStatistics";

const ServiceStat = () => {
  const [startDate, setStartDate] = useState("2022-01-01");
  const [endDate, setEndDate] = useState("2022-05-17");
  const [data, setData] = useState({
    cancel_count: 0,
    customer_new: 0,
    reservation_count: 0,
    sales: 0,
    service_count: 0,
    gowith_time: 0.0,
    total_distance: { sum: 0, avg: 0 },
    total_time: { sum: 0, avg: 0 },
  });

  const onClick = async () => {
    const res = await GetStatistics(startDate, endDate);
    setData({
      cancle_count: res.cancel_count,
      customer_new: res.customer_new,
      reservation_count: res.reservation_count,
      sales: res.sales,
      service_count: res.service_count,
      gowith_time: res.gowith_time,
      total_distance: {
        sum: res.total_distance.sum,
        avg: res.total_distance.avg,
      },
      total_time: {
        sum: res.total_time.sum,
        avg: res.total_time.avg,
      },
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
              contents={
                data.reservation_count != undefined
                  ? `${data.reservation_count}건`
                  : "0건"
              }
            />
            <StatisticsBox
              title={"서비스건수"}
              contents={
                data.service_count != undefined
                  ? `${data.service_count}건`
                  : "0건"
              }
            />
            <StatisticsBox
              title={"취소건수"}
              contents={
                data.cancel_count != undefined
                  ? `${data.cancel_count}건`
                  : "0건"
              }
            />
          </div>
          <div className="stat-boxline">
            <StatisticsLongBox
              title={"매출"}
              contents={
                data.sales != undefined
                  ? `${data.sales
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
                  : "0원"
              }
            />
            <StatisticsBox
              title={"신규 고객 수"}
              contents={
                data.customer_new != undefined
                  ? `${data.customer_new}명`
                  : "0명"
              }
            />
          </div>
          <div className="stat-boxline">
            <StatisticsTwoContentsBox
              title={"이동 거리"}
              contents1={
                data.total_distance != undefined
                  ? `${data.total_distance.sum} km`
                  : "0 km"
              }
              contents2={
                data.total_distance != undefined
                  ? `${Number(data.total_distance.avg).toFixed(2)} km`
                  : "0 km"
              }
            />
            <StatisticsTwoContentsBox
              title={"이동 시간"}
              contents1={
                data.total_time != undefined
                  ? `${data.total_time.sum} 시간`
                  : "0 시간"
              }
              contents2={
                data.total_time != undefined
                  ? `${Number(data.total_time.avg).toFixed(2)} 시간`
                  : "0 시간"
              }
            />
            <StatisticsBox
              title={"평균 병원동행 시간"}
              contents={
                data.gowith_time != undefined
                  ? `${Number(data.gowith_time).toFixed(2)}시간`
                  : "0시간"
              }
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServiceStat;
