import {
  CostLine,
  CostCase1,
  CostCase2,
  CostCase3,
  CostTitle,
  CostBySentence,
} from "./payPerService";
import { useEffect } from "react";
const EditExtraPay = ({ extraCost, setExtraCost }) => {
  const SetCostObject = (e, propName, type) => {
    let unit = extraCost[propName].unit;
    let value = extraCost[propName].value;
    type === "unit" ? (unit = e.target.value) : (value = e.target.value);
    setExtraCost({
      ...extraCost,
      [propName]: {
        unit: unit,
        value: value,
      },
    });
  };

  return (
    <>
      <CostLine title={""}>
        <CostTitle text={{ text1: "단위", text2: "단위 당 요금" }} />
      </CostLine>

      <CostLine title={"이동거리 추가요금"}>
        <CostCase1
          setValue1={(e) => {
            SetCostObject(e, "movement_cost", "unit");
          }}
          setValue2={(e) => {
            SetCostObject(e, "movement_cost", "value");
          }}
          units={{ unit1: "km", unit2: "원" }}
          values={{
            value1: extraCost["movement_cost"]?.unit,
            value2: extraCost["movement_cost"]?.value,
          }}
        />
      </CostLine>
      <CostLine title={"동행 추가요금(예약 시)"}>
        <CostCase1
          setValue1={(e) => {
            SetCostObject(e, "accompany_extra_cost", "unit");
          }}
          setValue2={(e) => {
            SetCostObject(e, "accompany_extra_cost", "value");
          }}
          units={{ unit1: "분", unit2: "원" }}
          values={{
            value1: extraCost["accompany_extra_cost"]?.unit,
            value2: extraCost["accompany_extra_cost"]?.value,
          }}
        />
      </CostLine>
      <CostLine title={"동행 추가요금(초과 시)"}>
        <CostCase1
          setValue1={(e) => {
            SetCostObject(e, "accompany_over_cost", "unit");
          }}
          setValue2={(e) => {
            SetCostObject(e, "accompany_over_cost", "value");
          }}
          units={{ unit1: "분", unit2: "원" }}
          values={{
            value1: extraCost["accompany_over_cost"]?.unit,
            value2: extraCost["accompany_over_cost"]?.value,
          }}
        />
      </CostLine>
      <CostLine title={"승차 지연 대기요금"}>
        <CostCase1
          setValue1={(e) => {
            setExtraCost({
              ...extraCost,
              car_delay_cost: {
                unit: e.target.value,
                value: extraCost["car_delay_cost"]?.value,
                max: extraCost["car_delay_cost"]?.max,
              },
            });
          }}
          setValue2={(e) => {
            setExtraCost({
              ...extraCost,
              car_delay_cost: {
                unit: extraCost["car_delay_cost"]?.unit,
                value: e.target.value,
                max: extraCost["car_delay_cost"]?.max,
              },
            });
          }}
          units={{ unit1: "분", unit2: "원" }}
          values={{
            value1: extraCost["car_delay_cost"]?.unit,
            value2: extraCost["car_delay_cost"]?.value,
          }}
        />
      </CostLine>
      <CostLine title={"배차 지연 환불"}>
        <CostCase1
          setValue1={(e) => {
            SetCostObject(e, "matching_delay_refund", "unit");
          }}
          setValue2={(e) => {
            SetCostObject(e, "matching_delay_refund", "value");
          }}
          units={{ unit1: "분", unit2: "원" }}
          values={{
            value1: extraCost["matching_delay_refund"]?.unit,
            value2: extraCost["matching_delay_refund"]?.value,
          }}
        />
      </CostLine>
      <CostLine title={"심야 할증"}>
        <CostCase3
          setValue1={(e) => {
            setExtraCost({
              ...extraCost,
              extra_cost_night: {
                start: e.target.value,
                end: extraCost["extra_cost_night"]?.end,
                value: extraCost["extra_cost_night"]?.value,
              },
            });
          }}
          setValue2={(e) => {
            setExtraCost({
              ...extraCost,
              extra_cost_night: {
                start: extraCost["extra_cost_night"]?.start,
                end: e.target.value,
                value: extraCost["extra_cost_night"]?.value,
              },
            });
          }}
          setValue3={(e) => {
            setExtraCost({
              ...extraCost,
              extra_cost_night: {
                start: extraCost["extra_cost_night"]?.start,
                end: extraCost["extra_cost_night"]?.end,
                value: e.target.value,
              },
            });
          }}
          units={{ unit1: "", unit2: "배" }}
          values={{
            value1: extraCost["extra_cost_night"]?.start,
            value2: extraCost["extra_cost_night"]?.end,
            value3: extraCost["extra_cost_night"]?.value,
          }}
        />
      </CostLine>
      <CostLine title={"주말 할증"}>
        <CostCase2
          text={"주말"}
          setValue={(e) => {
            setExtraCost({
              ...extraCost,
              extra_cost_weekend: {
                value: e.target.value,
              },
            });
          }}
          unit={"배"}
          value={extraCost["extra_cost_weekend"]?.value}
        />
      </CostLine>
      <CostBySentence
        text={{ text1: "* 고객의 승차는 최대", text2: "분까지 지연 가능" }}
        value={extraCost["car_delay_cost"]?.max}
        setValue={(e) => {
          setExtraCost({
            ...extraCost,
            car_delay_cost: {
              unit: extraCost["car_delay_cost"]?.unit,
              value: extraCost["car_delay_cost"]?.value,
              max: e.target.value,
            },
          });
        }}
      />
    </>
  );
};

export default EditExtraPay;
