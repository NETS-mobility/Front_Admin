import { useState } from "react";
import typoStyles from "../../../assets/fonts/typography.module.css";
import styles from "./adminProfile.module.css";
import MemberInfoLine from "../member/memberInfoLine";
import EditLine from "../editLine";

const AdminProfile = ({ info, type }) => {
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);
  const [birth, setBirth] = useState(info.birth);

  return (
    <section className={styles.adminProfileSection}>
      <div className={styles.adminInfo}>
        <img
          src={require(`../../../assets/${info.img}`)}
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
          관리자
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

export default AdminProfile;
