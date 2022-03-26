import React, { useEffect, useState } from "react";
import { ChangeProgress } from "../../api/reservation/changeProgress";
import styles from "./reservationProgress.module.css";

const ProgressCircle = ({
  isedit,
  time,
  setTime,
  index,
  text,
  circleFill,
  onClick,
}) => {
  const changeValue = (e) => {
    let newArr = [...time];
    newArr[index] = e.target.value;
    setTime(newArr);
  };
  return (
    <section className={styles.progressOnestep}>
      {isedit ? (
        <input
          className={styles.progressTimeInput}
          value={time[index]}
          onChange={changeValue}
        />
      ) : (
        <div className={styles.progressTime}>{time}</div>
      )}
      {circleFill ? (
        <button className={styles.progressCircleAct} onClick={onClick} />
      ) : (
        <button className={styles.progressCircleNoact} onClick={onClick} />
      )}
      <span className={styles.progressText}>{text}</span>
    </section>
  );
};

const ReservationProgress = ({ state, time }) => {
  return (
    <div className={styles.progressAll}>
      <span className={styles.progressTitle}>서비스 진행 상황</span>
      <section className={styles.progressSteps}>
        <div className={styles.progressGraybar}>
          {state > 5 ? (
            <div className={styles.progressBluebar100} />
          ) : state > 4 ? (
            <div className={styles.progressBluebar83} />
          ) : state > 3 ? (
            <div className={styles.progressBluebar65} />
          ) : state > 2 ? (
            <div className={styles.progressBluebar50} />
          ) : state > 1 ? (
            <div className={styles.progressBluebar33} />
          ) : state > 0 ? (
            <div className={styles.progressBluebar16} />
          ) : (
            <div className={styles.progressBluebar0} />
          )}
        </div>
        <ProgressCircle
          isedit={false}
          time={" "}
          text={"예약확정"}
          circleFill={state > -1}
        />
        <ProgressCircle
          isedit={false}
          time={time ? time?.[1]?.substring(0, 5) : " "}
          text={"픽업완료"}
          circleFill={state > 0}
        />
        <ProgressCircle
          isedit={false}
          time={time ? time?.[2]?.substring(0, 5) : " "}
          text={"병원도착"}
          circleFill={state > 1}
        />
        <ProgressCircle
          isedit={false}
          time={time ? time?.[3]?.substring(0, 5) : " "}
          text={"귀가차량\n병원도착"}
          circleFill={state > 2}
        />
        <ProgressCircle
          isedit={false}
          time={time ? time?.[4]?.substring(0, 5) : " "}
          text={"귀가출발"}
          circleFill={state > 3}
        />
        <ProgressCircle
          isedit={false}
          time={time ? time?.[5]?.substring(0, 5) : " "}
          text={"서비스종료"}
          circleFill={state > 4}
        />
        <ProgressCircle
          isedit={false}
          time={time ? time?.[6]?.substring(0, 5) : " "}
          text={"추가요금\n결제완료"}
          circleFill={state > 5}
        />
      </section>
    </div>
  );
};

const ReservationProgressEdit = ({ id }) => {
  const [state, setState] = useState(0);
  const [time, setTime] = useState(["", "", "", "", "", "", ""]);
  useEffect(() => {
    console.log("time 변경", time);
  }, [time]);
  useEffect(() => {
    console.log("state 변경", state);
  }, [state]);
  return (
    <div className={styles.progressEditAll}>
      <span className={styles.progressTitle}>서비스 진행 상황 변경</span>
      <div className={styles.progressContents}>
        <section className={styles.progressSteps}>
          <div className={styles.progressGraybar}>
            {state > 5 ? (
              <div className={styles.progressBluebar100} />
            ) : state > 4 ? (
              <div className={styles.progressBluebar83} />
            ) : state > 3 ? (
              <div className={styles.progressBluebar65} />
            ) : state > 2 ? (
              <div className={styles.progressBluebar50} />
            ) : state > 1 ? (
              <div className={styles.progressBluebar33} />
            ) : state > 0 ? (
              <div className={styles.progressBluebar16} />
            ) : (
              <div className={styles.progressBluebar0} />
            )}
          </div>
          <ProgressCircle
            isedit={false}
            time={" "}
            text={"예약확정"}
            circleFill={state > -1}
            onClick={() => {
              setState(0);
            }}
          />
          <ProgressCircle
            isedit={true}
            time={time}
            setTime={setTime}
            index={1}
            text={"픽업완료"}
            circleFill={state > 0}
            onClick={() => {
              setState(1);
            }}
          />
          <ProgressCircle
            isedit={true}
            time={time}
            setTime={setTime}
            index={2}
            text={"병원도착"}
            circleFill={state > 1}
            onClick={() => {
              setState(2);
            }}
          />
          <ProgressCircle
            isedit={true}
            time={time}
            setTime={setTime}
            index={3}
            text={"귀가차량\n병원도착"}
            circleFill={state > 2}
            onClick={() => {
              setState(3);
            }}
          />
          <ProgressCircle
            isedit={true}
            time={time}
            setTime={setTime}
            index={4}
            text={"귀가출발"}
            circleFill={state > 3}
            onClick={() => {
              setState(4);
            }}
          />
          <ProgressCircle
            isedit={true}
            time={time}
            setTime={setTime}
            index={5}
            text={"서비스종료"}
            circleFill={state > 4}
            onClick={() => {
              setState(5);
            }}
          />
          <ProgressCircle
            isedit={true}
            time={time}
            setTime={setTime}
            index={6}
            text={"추가요금\n결제완료"}
            circleFill={state > 5}
            onClick={() => {
              setState(6);
            }}
          />
        </section>
        <button
          className={styles.progressChangeBtn}
          onClick={async () => {
            const res = await ChangeProgress(id, state, time);
            if (res.status == 200) {
              alert("진행 상태 변경이 완료되었습니다.");
              window.location.reload();
            } else {
              alert("진행 상태 변경에 실패하였습니다.");
            }
          }}
        >
          진행 상태 변경
        </button>
      </div>
    </div>
  );
};

export { ReservationProgress, ReservationProgressEdit };
