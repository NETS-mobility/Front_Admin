import { CostLine, CostTitle } from "./payPerService";
import styles from "./payPerService.module.css";
import typoStyles from "../../assets/fonts/typography.module.css";

const CurrentManagerPay = ({ cost }) => {
  const managerPay = cost.manager_extra_pay;
  return (
    <>
      <CostLine title={""}>
        <CostTitle text={{ text1: "기준", text2: "지급수당" }} />
      </CostLine>
      <CostLine title={"연장 근로 수당"}>
        <CostTitle
          text={{
            text1: "시급",
            text2: `${Number(managerPay?.[0]?.extra_pay_percentage)} 배`,
          }}
        />
      </CostLine>
      <CostLine title={"야간 근로 수당"}>
        <CostTitle
          text={{
            text1: "시급",
            text2: `${Number(managerPay?.[1]?.extra_pay_percentage)} 배`,
          }}
        />
      </CostLine>
      <CostLine title={"휴일(토요일) 근로 수당"}>
        <CostTitle
          text={{
            text1: "시급",
            text2: `${Number(managerPay?.[2]?.extra_pay_percentage)} 배`,
          }}
        />
      </CostLine>
      <CostLine title={"휴일(빨간 날) 근로 수당"}>
        <CostTitle
          text={{
            text1: "시급",
            text2: `${Number(managerPay?.[3]?.extra_pay_percentage)} 배`,
          }}
        />
      </CostLine>
      <CostLine title={"야간근무 + 연장근무"}>
        <CostTitle
          text={{
            text1: "시급",
            text2: `${Number(managerPay?.[4]?.extra_pay_percentage)} 배`,
          }}
        />
      </CostLine>
      <CostLine title={"휴일근무 + 연장근무"}>
        <CostTitle
          text={{
            text1: "시급",
            text2: `${Number(managerPay?.[5]?.extra_pay_percentage)} 배`,
          }}
        />
      </CostLine>
      <CostLine title={"휴일근무 + 야간근무 + 연장근무"}>
        <CostTitle
          text={{
            text1: "시급",
            text2: `${Number(managerPay?.[6]?.extra_pay_percentage)} 배`,
          }}
        />
      </CostLine>
      <h1
        className={[
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.textInputBox,
        ].join(" ")}
      >{`* 연장 근로 수당은 일 ${Number(
        managerPay?.[0]?.extra_pay_day_standard_time
      )}시간, 주 ${Number(
        managerPay?.[0]?.extra_pay_week_standard_time
      )}시간 이상 근무했을 경우 지급`}</h1>

      <h1
        className={[
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.textInputBox,
        ].join(" ")}
      >{`* 야간 근로 수당은 ${managerPay?.[1]?.extra_pay_start_time}부터, ${managerPay?.[1]?.extra_pay_end_time} 사이에 발생한 근로에 대해 지급`}</h1>
    </>
  );
};

export default CurrentManagerPay;
