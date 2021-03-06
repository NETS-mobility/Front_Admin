import Layout from "../../../layout/layout";
import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CustomBtn from "../../../components/buttons";
import btnStyles from "../../../components/buttons.module.css";
import { useEffect, useState } from "react";
import ChangeObject from "../../../util/changeObject";
import { PhoneValidation, EmailValidation } from "../../../util/validation";
import { RegisterManager } from "../../../api/management/manager";
import { useNavigate } from "react-router-dom";

const ManagerRegister = () => {
  let navigate = useNavigate();
  const [err, setErr] = useState("");
  const [manager, setManager] = useState({
    name: "",
    id: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    birth: "",
    driverLicense: "",
    bankName: "",
    bankAccount: "",
  });

  const CheckErr = () => {
    if (
      manager.name == "" ||
      manager.id == "" ||
      manager.password == "" ||
      manager.passwordConfirm == "" ||
      manager.phone == "" ||
      manager.birth == "" ||
      manager.driverLicense == "" ||
      manager.bankName == "" ||
      manager.bankAccount == ""
    ) {
      setErr("빈칸을 모두 채워주세요");
    } else if (!EmailValidation(manager.id)) {
      setErr("아이디 형식을 확인해주세요.");
    } else if (manager.password !== manager.passwordConfirm) {
      setErr("비밀번호가 일치하지 않습니다.");
    } else if (!PhoneValidation(manager.phone)) {
      setErr("휴대전화 번호 형식을 확인해주세요.");
    } else {
      setErr("");
    }
  };

  useEffect(() => {
    CheckErr();
  }, [manager]);

  return (
    <Layout>
      <h1
        className={[
          styles.title,
          typoStyles.fs36,
          typoStyles.textExplain,
          typoStyles.fw700,
        ].join(" ")}
      >
        매니저 등록
      </h1>
      <section className={styles.managerRegisterContent}>
        <input
          type="text"
          name={"name"}
          placeholder={"이름"}
          onChange={(e) => ChangeObject(setManager, "name", e)}
          className={"inputboxstyle"}
        />
        <input
          type="text"
          name={"id"}
          placeholder={"아이디(이메일)"}
          onChange={(e) => ChangeObject(setManager, "id", e)}
          className={"inputboxstyle"}
        />
        <input
          type="password"
          name={"password"}
          placeholder={"비밀번호"}
          onChange={(e) => ChangeObject(setManager, "password", e)}
          className={"inputboxstyle"}
        />
        <input
          type="password"
          name={"passwordConfirm"}
          placeholder={"비밀번호 확인"}
          onChange={(e) => ChangeObject(setManager, "passwordConfirm", e)}
          className={"inputboxstyle"}
        />
        <input
          type="text"
          name={"phone"}
          placeholder={"휴대전화(ex. 010-0000-0000)"}
          onChange={(e) => ChangeObject(setManager, "phone", e)}
          className={"inputboxstyle"}
        />
        <input
          type="text"
          name={"birth"}
          placeholder={"생일(YYYYMMDD)"}
          onChange={(e) => ChangeObject(setManager, "birth", e)}
          className={"inputboxstyle"}
        />
        <input
          type="text"
          name={"driverLicense"}
          placeholder={"운전면허번호"}
          onChange={(e) => ChangeObject(setManager, "driverLicense", e)}
          className={"inputboxstyle"}
        />
        <input
          type="text"
          name={"bankName"}
          placeholder={"은행이름"}
          onChange={(e) => ChangeObject(setManager, "bankName", e)}
          className={"inputboxstyle"}
        />
        <input
          type="text"
          name={"bankAccount"}
          placeholder={"계좌번호"}
          onChange={(e) => ChangeObject(setManager, "bankAccount", e)}
          className={"inputboxstyle"}
        />
        <span
          className={[
            typoStyles.fs28,
            typoStyles.textPrimary,
            typoStyles.fw400,
            styles.errText,
          ].join(" ")}
        >
          {err}
        </span>
        <CustomBtn
          styleForBtn={[btnStyles.btnDarkGrey, styles.registerBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"등록"}
          onClick={async () => {
            if (err === "") {
              const token = localStorage.getItem("accessToken");
              const res = await RegisterManager(manager, token);
              if (res.success === true) {
                navigate("/manage/manager/registerComplete");
              }
            }
          }}
        />
      </section>
    </Layout>
  );
};

export default ManagerRegister;
