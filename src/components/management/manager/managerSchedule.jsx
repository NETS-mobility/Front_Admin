import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CheckEmptyArr from "../../../util/checkEmptyArr";
import ManagerCommonBlock from "./managerCommonBlock";
const ManagerSchedule = ({ schedule }) => {
  if (CheckEmptyArr(schedule)) {
    return (
      <div className={styles.noData}>
        <h1
          className={[
            typoStyles.textExplain,
            typoStyles.fw400,
            typoStyles.fs36,
          ].join(" ")}
        >
          예정된 스케줄이 없습니다.
        </h1>
      </div>
    );
  } else {
    return (
      schedule != undefined &&
      schedule?.map((data, i) => {
        return (
          <ManagerCommonBlock
            title={`${data?.start_time.substring(
              0,
              10
            )} ${data?.start_time.substring(
              11,
              19
            )} ~ ${data?.end_time.substring(0, 10)} ${data?.end_time.substring(
              11,
              19
            )}`}
            content1={`${data?.customer_name} 고객님`}
            content2={data?.service_type}
            key={i}
          />
        );
      })
    );
  }
};

export default ManagerSchedule;
