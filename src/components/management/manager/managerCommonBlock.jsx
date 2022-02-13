import styles from "./managerCommonBlock.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CustomBtn from "../../buttons";
import btnStyles from "../../buttons.module.css";

const ManagerCommonBlock = ({ title, content1, content2, type }) => {
  return (
    <section className={styles.managerCommonBlock}>
      {type == "edit-certificate" ? (
        <CustomBtn
          styleForBtn={[btnStyles.btnOrange, styles.editBtn].join(" ")}
          styleForText={typoStyles.fs24}
          text={"삭제"}
        />
      ) : type == "allow-holiday" && title == "승인 필요" ? (
        <div className={styles.allowBtnSection}>
          <CustomBtn
            styleForBtn={[btnStyles.btnBlue, styles.allowBtn].join(" ")}
            styleForText={typoStyles.fs24}
            text={"승인"}
          />
          <CustomBtn
            styleForBtn={[btnStyles.btnOrange, styles.allowBtn].join(" ")}
            styleForText={typoStyles.fs24}
            text={"미승인"}
          />
        </div>
      ) : (
        <></>
      )}
      <h1
        className={[
          typoStyles.fs24,
          typoStyles.fw700,
          typoStyles.textExplain,
        ].join(" ")}
      >{`${title}`}</h1>
      <span
        className={[
          typoStyles.fs24,
          typoStyles.fw400,
          typoStyles.textExplain,
        ].join(" ")}
      >
        {content1}
      </span>
      <span
        className={[
          typoStyles.fs24,
          typoStyles.fw400,
          typoStyles.textExplain,
        ].join(" ")}
      >
        {content2}
      </span>
    </section>
  );
};

export default ManagerCommonBlock;
