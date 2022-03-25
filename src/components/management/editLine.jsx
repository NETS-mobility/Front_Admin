import styles from "./editLine.module.css";
import typoStyles from "../../assets/fonts/typography.module.css";
const EditLine = ({ title, value, setValue }) => {
  return (
    <div className={styles.editLine}>
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
      <input
        type="text"
        className={[
          typoStyles.fs28,
          typoStyles.textExplain,
          typoStyles.fw400,
          styles.inputValue,
        ].join(" ")}
        value={value == undefined ? "" : value}
        onChange={setValue}
      />
    </div>
  );
};

export default EditLine;
