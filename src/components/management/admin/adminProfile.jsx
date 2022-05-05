import { useState, useEffect } from "react";
import typoStyles from "../../../assets/fonts/typography.module.css";
import styles from "./adminProfile.module.css";
import MemberInfoLine from "../member/memberInfoLine";
import EditLine from "../editLine";
import basicProfile from "../../../assets/profile.png";

const AdminProfile = ({ info, type }) => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [birth, setBirth] = useState();

  useEffect(() => {
    if (info != undefined) {
      setEmail(info.id);
      setPhone(info.phone);
      setBirth(info.birth);
    }
  }, [info]);

  return (
    <section className={styles.adminProfileSection}>
      <div className={styles.adminInfo}>
        <img
          src={info.img == undefined ? basicProfile : info.img}
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
      <MemberInfoLine title={"등록일자"} value={info.date} />
      {type != "edit" ? (
        <>
          <MemberInfoLine title={"이메일"} value={info.id} />
          <MemberInfoLine title={"휴대전화"} value={info.phone} />
          <MemberInfoLine title={"생년월일"} value={info.birth} />
        </>
      ) : (
        <>
          <EditLine
            title={"이메일"}
            value={email}
            setValue={(e) => setEmail(e.target.value)}
          />
          <EditLine
            title={"휴대전화"}
            value={phone}
            setValue={(e) => setPhone(e.target.value)}
          />
          <EditLine
            title={"생년월일"}
            value={birth}
            setValue={(e) => setBirth(e.target.value)}
          />
        </>
      )}
    </section>
  );
};

export default AdminProfile;
