import { useState } from "react";
import MemberInfoLine from "../member/memberInfoLine";
import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import EditLine from "../editLine";
const ManagerProfile = ({ info, setInfo, type }) => {
  return (
    <section className={styles.managerProfileSection}>
      <div className={styles.managerInfo}>
        <img
          src={info?.path_pic}
          width={"24px"}
          height={"24px"}
          className={styles.profileImg}
        />
        <span
          className={[
            typoStyles.fs24,
            typoStyles.textExplain,
            typoStyles.fw400,
          ].join(" ")}
        >
          <strong
            className={[
              typoStyles.fs28,
              typoStyles.textExplain,
              typoStyles.fw400,
            ].join(" ")}
          >
            {info?.name + " "}
          </strong>
          매니저
        </span>
      </div>
      <MemberInfoLine title={"등록일자"} value={info?.date?.substring(0, 10)} />
      {type != "edit" ? (
        <>
          <MemberInfoLine title={"아이디(이메일)"} value={info?.id} />
          <MemberInfoLine title={"휴대전화"} value={info?.phone} />
        </>
      ) : (
        <>
          <EditLine
            title={"아이디(이메일)"}
            value={info?.id}
            setValue={(e) => setInfo({ ...info, id: e.target.value })}
          />
          <EditLine
            title={"휴대전화"}
            value={info?.phone}
            setValue={(e) => setInfo({ ...info, phone: e.target.value })}
          />
        </>
      )}
      <MemberInfoLine
        title={"생년월일"}
        value={`${info?.birth?.substr(0, 4)}.${info?.birth?.substr(
          4,
          2
        )}.${info?.birth?.substr(6, 2)}`}
      />
    </section>
  );
};

export default ManagerProfile;
