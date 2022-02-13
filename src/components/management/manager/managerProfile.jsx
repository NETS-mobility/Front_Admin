import MemberInfoLine from "../member/memberInfoLine";
import styles from "./managerProfile.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import EditLine from "../editLine";
import { useEffect, useState } from "react";
const ManagerProfile = ({ info, type }) => {
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);
  const [birth, setBirth] = useState(info.birth);

  return (
    <section className={styles.managerProfileSection}>
      <div className={styles.managerInfo}>
        <img
          src={require(`../../../assets/${info.img}`)}
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
            {info.name + " "}
          </strong>
          매니저
        </span>
      </div>
      <MemberInfoLine title={"등록일자"} value={info.registerDate} />
      {type != "edit" ? (
        <>
          <MemberInfoLine title={"이메일"} value={email} />
          <MemberInfoLine title={"휴대전화"} value={phone} />
          <MemberInfoLine title={"생년월일"} value={birth} />
        </>
      ) : (
        <>
          <EditLine title={"이메일"} value={email} setValue={setEmail} />
          <EditLine title={"휴대전화"} value={phone} setValue={setPhone} />
          <EditLine title={"생년월일"} value={birth} setValue={setBirth} />
        </>
      )}
    </section>
  );
};

export default ManagerProfile;
