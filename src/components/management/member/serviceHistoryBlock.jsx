import styles from "./serviceHistoryBlock.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
const ServiceHistoryBlock = ({ data }) => {
  let managerInfo;
  if (data.netsmanager.length == 2) {
    managerInfo = `${data.netsmanager[0]?.name} 매니저, ${data.netsmanager[1]?.name} 매니저`;
  } else if (data.netsmanager.length == 1) {
    managerInfo = `${data.netsmanager[0]?.name} 매니저`;
  }

  return (
    <section className={styles.serviceHistoryBlock}>
      <div className={styles.serviceDate}>
        <strong
          className={[
            typoStyles.fs24,
            typoStyles.fw700,
            typoStyles.textExplain,
          ].join(" ")}
        >
          {data.rev_date.substring(0, 10)}
        </strong>
        <strong
          className={[
            typoStyles.fs24,
            typoStyles.fw700,
            typoStyles.textExplain,
          ].join(" ")}
        >
          {`${data.pickup_time.substring(0, 5)} ~ ${data.end_time.substring(
            0,
            5
          )}`}
        </strong>
      </div>
      <div className={styles.serviceInfo}>
        <h1
          className={[
            typoStyles.fs36,
            typoStyles.fw700,
            typoStyles.textExplain,
          ].join(" ")}
        >
          {managerInfo}
        </h1>
        <strong
          className={[
            typoStyles.fs24,
            typoStyles.fw700,
            typoStyles.textMain,
          ].join(" ")}
        >
          {data.service_type}
        </strong>
      </div>
      <span
        className={[
          typoStyles.fs24,
          typoStyles.fw700,
          typoStyles.textExplain,
        ].join(" ")}
      >
        운행 상세보기
      </span>
    </section>
  );
};

export default ServiceHistoryBlock;
