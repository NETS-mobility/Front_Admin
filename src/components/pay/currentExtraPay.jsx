import { CostLine, CostTitle } from "./payPerService";
import styles from "./payPerService.module.css";
import typoStyles from "../../assets/fonts/typography.module.css";

const CurrentExtraPay = ({ cost }) => {
  const extraCost = cost.extra_cost;
  const nightCost = cost.extra_cost_night_time;

  return (
    <>
      <CostLine title={""}>
        <CostTitle text={{ text1: "단위", text2: "단위 당 요금" }} />
      </CostLine>
      <CostLine title={"이동거리 추가요금"}>
        <CostTitle
          text={{
            text1: `${extraCost[0].extra_cost_unit_value} ${extraCost[0].extra_cost_unit}`,
            text2: `${Number(extraCost[0].extra_cost_per_unit_value)}원`,
          }}
        />
      </CostLine>
      <CostLine title={"동행 추가요금 (예약 시)"}>
        <CostTitle
          text={{
            text1: `${extraCost[1].extra_cost_unit_value} 분`,
            text2: `${Number(extraCost[1].extra_cost_per_unit_value)} 원`,
          }}
        />
      </CostLine>
      <CostLine title={"동행 초과요금 (초과 시)"}>
        <CostTitle
          text={{
            text1: `${extraCost[2].extra_cost_unit_value} 분`,
            text2: `${Number(extraCost[2].extra_cost_per_unit_value)} 원`,
          }}
        />
      </CostLine>
      <CostLine title={"승차 지연 대기요금"}>
        <CostTitle
          text={{
            text1: `${extraCost[3].extra_cost_unit_value} 분`,
            text2: `${Number(extraCost[3].extra_cost_per_unit_value)} 원`,
          }}
        />
      </CostLine>
      <CostLine title={"배차 지연 환불"}>
        <CostTitle
          text={{
            text1: `${extraCost[4].extra_cost_unit_value} 분`,
            text2: `${Number(extraCost[4].extra_cost_per_unit_value)} 원`,
          }}
        />
      </CostLine>
      <CostLine title={"심야할증"}>
        <CostTitle
          text={{
            text1: `${nightCost.start} ~ ${nightCost.end}`,
            text2: `${Number(extraCost[5].extra_cost_per_unit_value)} 배`,
          }}
        />
      </CostLine>
      <CostLine title={"주말할증"}>
        <CostTitle
          text={{
            text1: `주말`,
            text2: `${Number(extraCost[6].extra_cost_per_unit_value)} 배`,
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
      >{`* 고객의 승차는 최대 ${extraCost[3].extra_cost_max_unit_value}분까지 지연 가능`}</h1>
    </>
  );
};

export default CurrentExtraPay;
