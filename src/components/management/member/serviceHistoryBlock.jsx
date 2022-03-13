import styles from "./serviceHistoryBlock.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
const ServiceHistoryBlock = () => {
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
          2021.12.01
        </strong>
        <strong
          className={[
            typoStyles.fs24,
            typoStyles.fw700,
            typoStyles.textExplain,
          ].join(" ")}
        >
          09:00 ~ 12:30
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
          김혜인 매니저
        </h1>
        <strong
          className={[
            typoStyles.fs24,
            typoStyles.fw700,
            typoStyles.textMain,
          ].join(" ")}
        >
          네츠 휠체어 플러스 왕복
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
