import styles from "./topBar.module.css";
import typoStyles from "../assets/fonts/typography.module.css";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.topBar}>
      <button
        className={[
          typoStyles.fs32,
          typoStyles.fw400,
          typoStyles.textExplain,
          styles.logoutBtn,
        ].join(" ")}
        onClick={() => {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default TopBar;
