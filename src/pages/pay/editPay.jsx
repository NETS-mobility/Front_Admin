import styles from "./currentPay.module.css";
import Layout from "../../layout/layout";
import typoStyles from "../../assets/fonts/typography.module.css";
import { useEffect, useState } from "react";
import CustomBtn from "../../components/buttons";
import btnStyles from "../../components/buttons.module.css";
import { Link, useNavigate } from "react-router-dom";
import EditExtraPay from "../../components/pay/editExtraPay";
import EditManagerPay from "../../components/pay/editManagerPay";
import EditCost from "../../api/pay/editCost";
import EditServiceCost from "../../components/pay/editServiceCost";
import GetCost from "../../api/pay/getCost";

const EditPay = () => {
  const [costs, setCosts] = useState("");
  const [extraCost, setExtraCost] = useState([]);
  const [managerPay, setManagerPay] = useState([]);
  const [serviceCost, setServiceCost] = useState([]);
  const navigate = useNavigate();

  const SetCurrentCost = async () => {
    setCosts(await GetCost().then((res) => res));
  };

  useEffect(() => {
    SetCurrentCost();
  }, []);
  console.log("cost", costs);

  useEffect(() => {
    setExtraCost({
      movement_cost: {
        unit: costs?.extra_cost?.[0]?.extra_cost_unit_value,
        value: Number(costs?.extra_cost?.[0]?.extra_cost_per_unit_value),
      },
      accompany_extra_cost: {
        unit: costs?.extra_cost?.[1]?.extra_cost_unit_value,
        value: Number(costs?.extra_cost?.[1]?.extra_cost_per_unit_value),
      },
      accompany_over_cost: {
        unit: costs?.extra_cost?.[2]?.extra_cost_unit_value,
        value: Number(costs?.extra_cost?.[2]?.extra_cost_per_unit_value),
      },
      car_delay_cost: {
        unit: costs?.extra_cost?.[3]?.extra_cost_unit_value,
        value: Number(costs?.extra_cost?.[3]?.extra_cost_per_unit_value),
        max: Number(costs?.extra_cost?.[3]?.extra_cost_max_unit_value),
      },
      matching_delay_refund: {
        unit: costs?.extra_cost?.[4]?.extra_cost_unit_value,
        value: Number(costs?.extra_cost?.[4]?.extra_cost_per_unit_value),
      },
      extra_cost_night: {
        start: costs?.extra_cost_night_time?.start,
        end: costs?.extra_cost_night_time?.end,
        value: Number(costs?.extra_cost?.[5]?.extra_cost_per_unit_value),
      },
      extra_cost_weekend: {
        value: Number(costs?.extra_cost?.[6]?.extra_cost_per_unit_value),
      },
    });

    setManagerPay({
      overtime: {
        extra_pay_day_standard_time:
          costs?.manager_extra_pay?.[0]?.extra_pay_day_standard_time,
        extra_pay_week_standard_time:
          costs?.manager_extra_pay?.[0]?.extra_pay_week_standard_time,
        extra_pay_percentage: Number(
          costs?.manager_extra_pay?.[0]?.extra_pay_percentage
        ),
      },
      night: {
        extra_pay_start_time:
          costs?.manager_extra_pay?.[1]?.extra_pay_start_time,
        extra_pay_end_time: costs?.manager_extra_pay?.[1]?.extra_pay_end_time,
        extra_pay_percentage: Number(
          costs?.manager_extra_pay?.[1]?.extra_pay_percentage
        ),
      },
      saturday: {
        extra_pay_percentage: Number(
          costs?.manager_extra_pay?.[2]?.extra_pay_percentage
        ),
      },
      holiday: {
        extra_pay_percentage: Number(
          costs?.manager_extra_pay?.[3]?.extra_pay_percentage
        ),
      },
      night_overtime: {
        extra_pay_percentage: Number(
          costs?.manager_extra_pay?.[4]?.extra_pay_percentage
        ),
      },
      holiday_overtime: {
        extra_pay_percentage: Number(
          costs?.manager_extra_pay?.[5]?.extra_pay_percentage
        ),
      },
      holiday_night_overtime: {
        extra_pay_percentage: Number(
          costs?.manager_extra_pay?.[6]?.extra_pay_percentage
        ),
      },
    });

    setServiceCost({
      nets_move: {
        cost: costs?.service_cost?.[0].cost,
        dist: costs?.service_cost?.[0].dist,
      },
      nets_wheel_one_way: {
        cost: costs?.service_cost?.[1].cost,
        dist: costs?.service_cost?.[1].dist,
        time: costs?.service_cost?.[1].time,
      },
      nets_wheel_two_way: {
        cost: costs?.service_cost?.[2].cost,
        dist: costs?.service_cost?.[2].dist,
        time: costs?.service_cost?.[2].time,
      },
      nets_wheel_plus_one_way: {
        cost: costs?.service_cost?.[3].cost,
        dist: costs?.service_cost?.[3].dist,
        time: costs?.service_cost?.[3].time,
      },
      nets_wheel_plus_two_way: {
        cost: costs?.service_cost?.[4].cost,
        dist: costs?.service_cost?.[4].dist,
        time: costs?.service_cost?.[4].time,
      },
    });
  }, [costs]);

  return (
    <Layout>
      <h1
        className={[
          styles.title,
          typoStyles.fs36,
          typoStyles.textExplain,
          typoStyles.fw700,
        ].join(" ")}
      >
        현재 요금
      </h1>
      <div className={styles.currentPayContents}>
        <EditServiceCost
          serviceCost={serviceCost}
          setServiceCost={setServiceCost}
        />
        <section className={styles.payWithCategory}>
          <EditExtraPay extraCost={extraCost} setExtraCost={setExtraCost} />
        </section>
        <section className={styles.payWithCategory}>
          <EditManagerPay
            managerPay={managerPay}
            setManagerPay={setManagerPay}
          />
        </section>
      </div>
      <div className={styles.payEditBtnSection}>
        <CustomBtn
          styleForBtn={[btnStyles.btnBlue, styles.payEditBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"수정 완료"}
          onClick={async () => {
            const res = await EditCost(serviceCost, extraCost, managerPay);
            if (res == 200) {
              navigate("/setFee");
            }
          }}
        />
      </div>
    </Layout>
  );
};

export default EditPay;
