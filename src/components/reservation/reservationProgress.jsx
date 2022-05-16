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
  place,
}) => {
  const changeValue = (e) => {
    setTime({ ...time, [index]: e.target.value });
  };
  return (
    <section className={styles.progressOnestepTohos}>
      {isedit ? (
        <input
          className={styles.progressTimeInput}
          value={time[index]}
          onChange={changeValue}
          placeholder={place}
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

const ReservationProgressTwoway = ({
  state,
  time,
  dcase,
  isExist,
  isNeed,
  payComp,
}) => {
  useEffect(() => {
    console.log("변하는 state", state, "변하는 time", time);
  }, [state, time]);
  return (
    <div className={styles.progressAll}>
      <span className={styles.progressTitle}>서비스 진행 상황</span>
      <section className={styles.progressSteps}>
        <div
          className={
            dcase == 1 ? styles.progressGraybarTohos : styles.progressGraybar
          }
        >
          {dcase == 4 ? ( //왕복 2시간 이상
            state > 6 && isExist && !isNeed ? (
              <div className={styles.progressBluebar100} />
            ) : state > 6 ? (
              <div className={styles.progressBluebar87} />
            ) : state > 5 ? (
              <div className={styles.progressBluebar75} />
            ) : state > 4 ? (
              <div className={styles.progressBluebar62} />
            ) : state > 3 ? (
              <div className={styles.progressBluebar50} />
            ) : state > 2 ? (
              <div className={styles.progressBluebar37} />
            ) : state > 1 ? (
              <div className={styles.progressBluebar25} />
            ) : state > 0 ? (
              <div className={styles.progressBluebar12} />
            ) : (
              <div className={styles.progressBluebar0} />
            )
          ) : dcase == 3 ? ( //왕복 2시간 미만
            state > 6 && isExist && !isNeed ? (
              <div className={styles.progressBluebar100} />
            ) : state > 6 ? (
              <div className={styles.progressBluebar83} />
            ) : state > 5 ? (
              <div className={styles.progressBluebar65} />
            ) : state > 2 ? (
              <div className={styles.progressBluebar50} />
            ) : state > 1 ? (
              <div className={styles.progressBluebar33} />
            ) : state > 0 ? (
              <div className={styles.progressBluebar16} />
            ) : (
              <div className={styles.progressBluebar0} />
            )
          ) : dcase == 2 ? ( //편도 병원->집
            state > 6 && isExist && !isNeed ? (
              <div className={styles.progressBluebar100} />
            ) : state > 5 ? (
              <div className={styles.progressBluebar80} />
            ) : state > 4 ? (
              <div className={styles.progressBluebar60} />
            ) : state > 3 ? (
              <div className={styles.progressBluebar40} />
            ) : state > 0 ? (
              <div className={styles.progressBluebar20} />
            ) : (
              <div className={styles.progressBluebar0} />
            )
          ) : state > 6 && isExist && !isNeed ? ( //편도 집->병원
            <div className={styles.progressBluebar100} />
          ) : state > 5 ? (
            <div className={styles.progressBluebar80} />
          ) : state > 2 ? (
            <div className={styles.progressBluebar60} />
          ) : state > 1 ? (
            <div className={styles.progressBluebar40} />
          ) : state > 0 ? (
            <div className={styles.progressBluebar20} />
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
          time={time.carDep != null ? time?.carDep?.substring(11, 16) : " "}
          text={"차량출발"}
          circleFill={state > 0}
        />
        {dcase != 2 ? (
          <>
            <ProgressCircle
              isedit={false}
              time={time.pickup != null ? time?.pickup?.substring(11, 16) : " "}
              text={"픽업완료"}
              circleFill={state > 1}
            />
            <ProgressCircle
              isedit={false}
              time={
                time.arrivalHos != null
                  ? time?.arrivalHos?.substring(11, 16)
                  : " "
              }
              text={"병원도착"}
              circleFill={state > 2}
            />
          </>
        ) : (
          <></>
        )}

        {dcase != 1 && dcase != 3 ? (
          <ProgressCircle
            isedit={false}
            time={time.carReady != null ? time?.carDep?.substring(11, 16) : " "}
            text={"귀가차량\n병원도착"}
            circleFill={state > 3}
          />
        ) : (
          <></>
        )}
        {dcase != 1 ? (
          <ProgressCircle
            isedit={false}
            time={time.goHome != null ? time?.goHome?.substring(11, 16) : " "}
            text={"귀가출발"}
            circleFill={state > 4}
          />
        ) : (
          <></>
        )}

        <ProgressCircle
          isedit={false}
          time={time.complete != null ? time?.complete?.substring(11, 16) : " "}
          text={"서비스종료"}
          circleFill={state > 5}
        />
        <ProgressCircle
          isedit={false}
          time={payComp != null ? payComp?.substring(11, 16) : " "}
          text={"추가요금\n결제완료"}
          circleFill={state > 6}
        />
      </section>
    </div>
  );
};

const ReservationProgressTwowayEdit = ({
  id,
  ttime,
  rev_date,
  sstate,
  dcase,
}) => {
  const [state, setState] = useState(0);
  const [time, setTime] = useState({
    pickup: null,
    arrivalHos: null,
    carDep: null,
    carReady: null,
    goHome: null,
    complete: null,
  });
  useEffect(() => {
    setState(sstate);
    setTime({
      pickup: ttime?.pickup?.substring(11, 16),
      arrivalHos: ttime?.arrivalHos?.substring(11, 16),
      carDep: ttime?.carDep?.substring(11, 16),
      carReady: ttime?.carReady?.substring(11, 16),
      goHome: ttime?.goHome?.substring(11, 16),
      complete: ttime?.complete?.substring(11, 16),
    });
  }, [sstate]);
  return (
    <div className={styles.progressEditAll}>
      <span className={styles.progressTitle}>서비스 진행 상황 변경</span>
      <div className={styles.progressContents}>
        <section className={styles.progressSteps}>
          <div
            className={
              dcase == 1 ? styles.progressGraybarTohos : styles.progressGraybar
            }
          >
            {dcase == 4 ? ( //왕복 2시간 이상
              state > 6 ? (
                <div className={styles.progressBluebar87} />
              ) : state > 5 ? (
                <div className={styles.progressBluebar75} />
              ) : state > 4 ? (
                <div className={styles.progressBluebar62} />
              ) : state > 3 ? (
                <div className={styles.progressBluebar50} />
              ) : state > 2 ? (
                <div className={styles.progressBluebar37} />
              ) : state > 1 ? (
                <div className={styles.progressBluebar25} />
              ) : state > 0 ? (
                <div className={styles.progressBluebar12} />
              ) : (
                <div className={styles.progressBluebar0} />
              )
            ) : dcase == 3 ? (
              state > 5 ? (
                <div className={styles.progressBluebar100} />
              ) : state > 5 ? (
                <div className={styles.progressBluebar83} />
              ) : state > 4 ? (
                <div className={styles.progressBluebar65} />
              ) : state > 2 ? (
                <div className={styles.progressBluebar50} />
              ) : state > 1 ? (
                <div className={styles.progressBluebar33} />
              ) : state > 0 ? (
                <div className={styles.progressBluebar16} />
              ) : (
                <div className={styles.progressBluebar0} />
              )
            ) : dcase == 2 ? (
              state > 6 ? (
                <div className={styles.progressBluebar100} />
              ) : state > 5 ? (
                <div className={styles.progressBluebar80} />
              ) : state > 4 ? (
                <div className={styles.progressBluebar60} />
              ) : state > 3 ? (
                <div className={styles.progressBluebar40} />
              ) : state > 0 ? (
                <div className={styles.progressBluebar20} />
              ) : (
                <div className={styles.progressBluebar0} />
              )
            ) : state > 6 ? (
              <div className={styles.progressBluebar100} />
            ) : state > 5 ? (
              <div className={styles.progressBluebar80} />
            ) : state > 2 ? (
              <div className={styles.progressBluebar60} />
            ) : state > 1 ? (
              <div className={styles.progressBluebar40} />
            ) : state > 0 ? (
              <div className={styles.progressBluebar20} />
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
            index={"carDep"}
            text={"차량출발"}
            circleFill={state > 0}
            place={time?.carDep != null ? time?.carDep : " "}
            onClick={() => {
              setState(1);
            }}
          />
          {dcase != 2 ? (
            <>
              <ProgressCircle
                isedit={true}
                time={time}
                setTime={setTime}
                index={"pickup"}
                text={"픽업완료"}
                circleFill={state > 1}
                place={
                  time.pickup != null ? time?.pickup?.substring(11, 16) : " "
                }
                onClick={() => {
                  setState(2);
                }}
              />
              <ProgressCircle
                isedit={true}
                time={time}
                setTime={setTime}
                index={"arrivalHos"}
                text={"병원도착"}
                circleFill={state > 2}
                place={time.arrivalHos != null ? time?.arrivalHos : " "}
                onClick={() => {
                  setState(3);
                }}
              />
            </>
          ) : (
            <></>
          )}
          {dcase != 1 && dcase != 3 ? (
            <ProgressCircle
              isedit={true}
              time={time}
              setTime={setTime}
              index={"carReady"}
              text={"귀가차량\n병원도착"}
              circleFill={state > 3}
              place={time.carReady != null ? time?.carDep : " "}
              onClick={() => {
                setState(4);
              }}
            />
          ) : (
            <></>
          )}
          {dcase != 1 ? (
            <ProgressCircle
              isedit={true}
              time={time}
              setTime={setTime}
              index={"goHome"}
              text={"귀가출발"}
              circleFill={state > 4}
              place={time.goHome != null ? time?.goHome : " "}
              onClick={() => {
                setState(5);
              }}
            />
          ) : (
            <></>
          )}
          <ProgressCircle
            isedit={true}
            time={time}
            setTime={setTime}
            index={"complete"}
            text={"서비스종료"}
            circleFill={state > 5}
            place={time.complete != null ? time?.complete : " "}
            onClick={() => {
              setState(6);
            }}
          />
          <ProgressCircle
            isedit={false}
            time={" "}
            text={"추가요금\n결제완료"}
            circleFill={state > 6}
            onClick={() => {
              alert("결제 상태 변경은\niamport 관리자 콘솔에서 진행해주세요");
            }}
          />
        </section>
        <button
          className={styles.progressChangeBtn}
          onClick={async () => {
            const res = await ChangeProgress(id, rev_date, state, time);
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

export { ReservationProgressTwoway, ReservationProgressTwowayEdit };
