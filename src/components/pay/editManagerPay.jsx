import {
  CostLine,
  CostCase2,
  CostTitle,
  CostBySentence,
} from "./payPerService";
import styles from "./editManagerPay.module.css";

const EditManagerPay = ({ managerPay, setManagerPay }) => {
  const SetManagerPayObject = (e, propName) => {
    let value = managerPay[propName].extra_pay_percentage;
    value = e.target.value;
    setManagerPay({
      ...managerPay,
      [propName]: {
        extra_pay_percentage: value,
      },
    });
  };

  return (
    <>
      <CostLine title={""}>
        <CostTitle text={{ text1: "기준", text2: "지급수당" }} />
      </CostLine>
      <CostLine title={"연장 근로 수당"}>
        <CostCase2
          text={"시급"}
          unit={"배"}
          setValue={(e) => {
            setManagerPay({
              ...managerPay,
              overtime: {
                extra_pay_day_standard_time:
                  managerPay["overtime"]?.extra_pay_day_standard_time,
                extra_pay_week_standard_time:
                  managerPay["overtime"]?.extra_pay_week_standard_time,
                extra_pay_percentage: e.target.value,
              },
            });
          }}
          value={managerPay["overtime"]?.extra_pay_percentage}
        />
      </CostLine>
      <CostLine title={"야간 근로 수당"}>
        <CostCase2
          text={"시급"}
          unit={"배"}
          setValue={(e) => {
            setManagerPay({
              ...managerPay,
              night: {
                extra_pay_start_time: managerPay["night"]?.extra_pay_start_time,
                extra_pay_end_time: managerPay["night"]?.extra_pay_end_time,
                extra_pay_percentage: e.target.value,
              },
            });
          }}
          value={managerPay["night"]?.extra_pay_percentage}
        />
      </CostLine>
      <CostLine title={"휴일(토요일) 근로 수당"}>
        <CostCase2
          text={"시급"}
          unit={"배"}
          setValue={(e) => {
            SetManagerPayObject(e, "saturday");
          }}
          value={managerPay["saturday"]?.extra_pay_percentage}
        />
      </CostLine>
      <CostLine title={"휴일(빨간 날) 근로 수당"}>
        <CostCase2
          text={"시급"}
          unit={"배"}
          setValue={(e) => {
            SetManagerPayObject(e, "holiday");
          }}
          value={managerPay["holiday"]?.extra_pay_percentage}
        />
      </CostLine>
      <CostLine title={"야간근무+연장근무"}>
        <CostCase2
          text={"시급"}
          unit={"배"}
          setValue={(e) => {
            SetManagerPayObject(e, "night_overtime");
          }}
          value={managerPay["night_overtime"]?.extra_pay_percentage}
        />
      </CostLine>
      <CostLine title={"휴일근무+연장근무"}>
        <CostCase2
          text={"시급"}
          unit={"배"}
          setValue={(e) => {
            SetManagerPayObject(e, "holiday_overtime");
          }}
          value={managerPay["holiday_overtime"]?.extra_pay_percentage}
        />
      </CostLine>
      <CostLine title={"휴일근무+야간근무+연장근무"}>
        <CostCase2
          text={"시급"}
          unit={"배"}
          setValue={(e) => {
            SetManagerPayObject(e, "holiday_night_overtime");
          }}
          value={managerPay["holiday_night_overtime"]?.extra_pay_percentage}
        />
      </CostLine>
      <div className={styles.alignRow}>
        <CostBySentence
          text={{
            text1: "* 연장 근로 수당은 일",
            text2: "시간,",
          }}
          value={managerPay["overtime"]?.extra_pay_day_standard_time}
          setValue={(e) => {
            setManagerPay({
              ...managerPay,
              overtime: {
                extra_pay_day_standard_time: e.target.value,
                extra_pay_week_standard_time:
                  managerPay["overtime"]?.extra_pay_week_standard_time,
                extra_pay_percentage:
                  managerPay["overtime"]?.extra_pay_percentage,
              },
            });
          }}
        />
        &nbsp; &nbsp;
        <CostBySentence
          text={{
            text1: "주",
            text2: "시간 이상 근무했을 경우 지급",
          }}
          value={managerPay["overtime"]?.extra_pay_week_standard_time}
          setValue={(e) => {
            setManagerPay({
              ...managerPay,
              overtime: {
                extra_pay_day_standard_time:
                  managerPay["overtime"]?.extra_pay_day_standard_time,
                extra_pay_week_standard_time: e.target.value,
                extra_pay_percentage:
                  managerPay["overtime"]?.extra_pay_percentage,
              },
            });
          }}
        />
      </div>
      <div className={styles.alignRow}>
        <CostBySentence
          text={{
            text1: "* 야간 근로 수당은 ",
            text2: "부터,",
          }}
          value={managerPay["night"]?.extra_pay_start_time}
          setValue={(e) => {
            setManagerPay({
              ...managerPay,
              night: {
                extra_pay_start_time: e.target.value,
                extra_pay_end_time: managerPay["night"]?.extra_pay_end_time,
                extra_pay_percentage: managerPay["night"]?.extra_pay_percentage,
              },
            });
          }}
        />
        &nbsp; &nbsp;
        <CostBySentence
          text={{
            text1: "",
            text2: "사이에 발생한 근로에 대해 지급",
          }}
          value={managerPay["night"]?.extra_pay_end_time}
          setValue={(e) => {
            setManagerPay({
              ...managerPay,
              night: {
                extra_pay_start_time: managerPay["night"]?.extra_pay_start_time,
                extra_pay_end_time: e.target.value,
                extra_pay_percentage: managerPay["night"]?.extra_pay_percentage,
              },
            });
          }}
        />
      </div>
    </>
  );
};

export default EditManagerPay;
