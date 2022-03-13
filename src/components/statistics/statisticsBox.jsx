import React from "react";
import "./statisticsBox.css";

const StatisticsBox = ({ title, contents }) => {
  return (
    <div className="stat-box">
      <div className="stat-box-title">{title}</div>
      <div className="stat-box-contents">{contents}</div>
    </div>
  );
};

const StatisticsTwoContentsBox = ({ title, contents1, contents2 }) => {
  return (
    <div className="stat-box">
      <div className="stat-box-title">{title}</div>
      <div className="stat-box-contents-two">총: {contents1}</div>
      <div className="stat-box-contents-two">평균: {contents2}</div>
    </div>
  );
};

const StatisticsLongBox = ({ title, contents }) => {
  return (
    <div className="stat-box-long">
      <div className="stat-box-title">{title}</div>
      <div className="stat-box-contents">{contents}</div>
    </div>
  );
};

export { StatisticsBox, StatisticsLongBox, StatisticsTwoContentsBox };
