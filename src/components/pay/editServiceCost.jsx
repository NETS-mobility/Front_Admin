import PayPerService from "./payPerService";
import styles from "./editServiceCost.module.css";
const EditServiceCost = ({ serviceCost, setServiceCost }) => {
  const SetCostObject = (e, propName, type) => {
    let dist = type == "dist" ? e.target.value : serviceCost[propName].dist;
    let time = type == "time" ? e.target.value : serviceCost[propName].time;
    let cost = type == "cost" ? e.target.value : serviceCost[propName].cost;
    setServiceCost({
      ...serviceCost,
      [propName]: {
        dist: dist,
        time: time,
        cost: cost,
      },
    });
  };

  return (
    <>
      <section className={styles.currentPaySection}>
        <PayPerService
          type={2}
          serviceName={"네츠 무브"}
          setValue1={(e) => SetCostObject(e, "nets_move", "cost")}
          setValue2={(e) => SetCostObject(e, "nets_move", "dist")}
          value={serviceCost?.nets_move}
        />
        <PayPerService
          type={2}
          serviceName={"네츠 휠체어(왕복)"}
          setValue1={(e) => SetCostObject(e, "nets_wheel_two_way", "cost")}
          setValue2={(e) => SetCostObject(e, "nets_wheel_two_way", "dist")}
          setValue3={(e) => SetCostObject(e, "nets_wheel_two_way", "time")}
          value={serviceCost?.nets_wheel_two_way}
        />
        <PayPerService
          type={2}
          serviceName={"네츠 휠체어 플러스(왕복)"}
          setValue1={(e) => SetCostObject(e, "nets_wheel_plus_two_way", "cost")}
          setValue2={(e) => SetCostObject(e, "nets_wheel_plus_two_way", "dist")}
          setValue3={(e) => SetCostObject(e, "nets_wheel_plus_two_way", "time")}
          value={serviceCost?.nets_wheel_plus_two_way}
        />
      </section>
      <section className={styles.currentPaySection}>
        <PayPerService
          type={2}
          serviceName={"네츠 휠체어(편도)"}
          setValue1={(e) => SetCostObject(e, "nets_wheel_one_way", "cost")}
          setValue2={(e) => SetCostObject(e, "nets_wheel_one_way", "dist")}
          setValue3={(e) => SetCostObject(e, "nets_wheel_one_way", "time")}
          value={serviceCost?.nets_wheel_one_way}
        />
        <PayPerService
          type={2}
          serviceName={"네츠 휠체어 플러스(편도)"}
          setValue1={(e) => SetCostObject(e, "nets_wheel_plus_one_way", "cost")}
          setValue2={(e) => SetCostObject(e, "nets_wheel_plus_one_way", "dist")}
          setValue3={(e) => SetCostObject(e, "nets_wheel_plus_one_way", "time")}
          value={serviceCost?.nets_wheel_plus_one_way}
        />
      </section>
    </>
  );
};

export default EditServiceCost;
