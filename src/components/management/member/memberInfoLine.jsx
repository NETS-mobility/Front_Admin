import styles from "./memberInfoLine.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
const MemberInfoLine = ({ title, value }) => {
  return (
    <div className={styles.memberInfoLine}>
      <span
        className={[
          typoStyles.fs28,
          typoStyles.textExplain,
          typoStyles.fw400,
          styles.title,
        ].join(" ")}
      >
        {title}
      </span>
      <strong
        className={[
          typoStyles.fs28,
          typoStyles.textExplain,
          typoStyles.fw400,
          styles.value,
        ].join(" ")}
      >
        {value}
      </strong>
    </div>
  );
};

export default MemberInfoLine;
