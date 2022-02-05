import styles from "./topBar.module.css";
import typoStyles from "../assets/fonts/typography.module.css";
const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <span
        className={[
          typoStyles.fs32,
          typoStyles.fw400,
          typoStyles.textExplain,
        ].join(" ")}
      >
        로그아웃
      </span>
    </div>
  );
};

export default TopBar;
