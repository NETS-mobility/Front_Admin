import { useEffect, useState } from "react";
import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CustomBtn from "../../buttons";
import btnStyles from "../../buttons.module.css";
import { AddCert } from "../../../api/management/manager";

const ManagerCommonBlock = ({
  title,
  content1,
  content2,
  type,
  certNum,
  chosen,
  setRegister,
  setShow,
  managerNum,
}) => {
  const [cert, setCert] = useState({
    name: "",
    obtention: "",
    expiration: "",
    number: "",
  });

  const [err, setErr] = useState(true);

  useEffect(() => {
    if (
      cert.name == "" ||
      cert.number == "" ||
      cert.obtention == "" ||
      cert.expiration == ""
    ) {
      setErr(true);
    } else {
      setErr(false);
    }
  });

  return (
    <section className={styles.managerCommonBlock}>
      {type == "edit-certificate" ? (
        <CustomBtn
          styleForBtn={[btnStyles.btnOrange, styles.editBtn].join(" ")}
          styleForText={typoStyles.fs24}
          text={"삭제"}
          onClick={() => chosen((prev) => [...prev, certNum])}
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
      {type == "register-certificate" ? (
        <div className={styles.alignRow}>
          <div className={styles.alignCol}>
            <input
              className={[
                typoStyles.fs24,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.certInput,
              ].join(" ")}
              placeholder={"자격증 이름"}
              onChange={(e) => setCert({ ...cert, name: e.target.value })}
            />

            <input
              className={[
                typoStyles.fs24,
                typoStyles.fw400,
                typoStyles.textExplain,
                styles.certInput,
              ].join(" ")}
              placeholder={"자격증 번호"}
              onChange={(e) => setCert({ ...cert, number: e.target.value })}
            />
            <input
              className={[
                typoStyles.fs24,
                typoStyles.fw400,
                typoStyles.textExplain,
                styles.certInput,
              ].join(" ")}
              placeholder={"취득일(ex.2022-03-25)"}
              onChange={(e) => setCert({ ...cert, obtention: e.target.value })}
            />
            <input
              className={[
                typoStyles.fs24,
                typoStyles.fw400,
                typoStyles.textExplain,
                styles.certInput,
              ].join(" ")}
              placeholder={"만료일(ex.2022-03-25)"}
              onChange={(e) => setCert({ ...cert, expiration: e.target.value })}
            />
          </div>
          <button
            type="button"
            className={[
              btnStyles.btnBlue,
              styles.compBtn,
              typoStyles.fs24,
              typoStyles.textWhite,
            ].join(" ")}
            onClick={() => {
              setRegister((prev) =>
                prev.filter(
                  (i) => i.constructor === Object && Object.keys(i).length !== 0
                )
              );
              setRegister((prev) => [...prev, cert]);
              AddCert({
                managerNum: managerNum,
                cert_name: cert.name,
                cert_num: cert.number,
                cert_obtained: cert.obtention,
                cert_expired: cert.expiration,
              });
              setShow(true);
            }}
          >
            완료
          </button>
        </div>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
};

export default ManagerCommonBlock;
