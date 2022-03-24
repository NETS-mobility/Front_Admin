import PayPerService from "./payPerService";
import styles from "./editServiceCost.module.css";
import { useEffect, useState } from "react";
const CurrentServiceCost = ({ cost }) => {
  const serviceCost = cost.service_cost;
  const [move, setMove] = useState([]);
  const [wheelOne, setWheelOne] = useState([]);
  const [wheelTwo, setWheelTwo] = useState([]);
  const [wheelOnePlus, setWheelOnePlus] = useState([]);
  const [wheelTwoPlus, setWheelTwoPlus] = useState([]);

  const nets_move = serviceCost?.filter((i) => i.name == "네츠 무브");
  const nets_wheel_one_way = serviceCost?.filter(
    (i) => i.name == "네츠 휠체어-편도"
  );
  const nets_wheel_two_way = serviceCost?.filter(
    (i) => i.name == "네츠 휠체어-왕복"
  );
  const nets_wheel_plus_one_way = serviceCost?.filter(
    (i) => i.name == "네츠 휠체어 플러스-편도"
  );
  const nets_wheel_plus_two_way = serviceCost?.filter(
    (i) => i.name == "네츠 휠체어 플러스-왕복"
  );
  useEffect(() => {
    setMove(nets_move);
    setWheelOne(nets_wheel_one_way);
    setWheelOnePlus(nets_wheel_plus_one_way);
    setWheelTwo(nets_wheel_two_way);
    setWheelTwoPlus(nets_wheel_plus_two_way);
  }, []);

  return (
    <>
      <section className={styles.currentPaySection}>
        <PayPerService
          type={1}
          serviceName={"네츠 무브"}
          value={{
            cost: move[0]?.cost.toLocaleString("ko"),
            dist: move[0]?.dist,
            time: move[0]?.time,
          }}
        />
        <PayPerService
          type={1}
          serviceName={"네츠 휠체어(왕복)"}
          value={{
            cost: wheelTwo[0]?.cost.toLocaleString("ko"),
            dist: wheelTwo[0]?.dist,
            time: wheelTwo[0]?.time,
          }}
        />
        <PayPerService
          type={1}
          serviceName={"네츠 휠체어 플러스(왕복)"}
          value={{
            cost: wheelTwoPlus[0]?.cost.toLocaleString("ko"),
            dist: wheelTwoPlus[0]?.dist,
            time: wheelTwoPlus[0]?.time,
          }}
        />
      </section>
      <section className={styles.currentPaySection}>
        <PayPerService
          type={1}
          serviceName={"네츠 휠체어(편도)"}
          value={{
            cost: wheelOne[0]?.cost.toLocaleString("ko"),
            dist: wheelOne[0]?.dist,
            time: wheelOne[0]?.time,
          }}
        />
        <PayPerService
          type={1}
          serviceName={"네츠 휠체어 플러스(편도)"}
          value={{
            cost: wheelOnePlus[0]?.cost.toLocaleString("ko"),
            dist: wheelOnePlus[0]?.dist,
            time: wheelOnePlus[0]?.time,
          }}
        />
      </section>
    </>
  );
};

export default CurrentServiceCost;
