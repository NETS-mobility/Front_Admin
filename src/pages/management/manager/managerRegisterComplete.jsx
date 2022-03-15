import Layout from "../../../layout/layout";
import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import { InputBox } from "../../../components/inputBox";
import CustomBtn from "../../../components/buttons";
import btnStyles from "../../../components/buttons.module.css";
import { useEffect, useState } from "react";
import ChangeObject from "../../../util/changeObject";
import { PhoneValidation, EmailValidation } from "../../../util/validation";
import { RegisterManager } from "../../../api/management/manager";
import { useNavigate } from "react-router-dom";

const ManagerRegisterComplete = () => {
  let navigation = useNavigate();
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
        매니저 등록 완료
      </h1>
      <section className={styles.managerRegisterComplete}>
        <p
          className={[
            typoStyles.textExplain,
            typoStyles.fw700,
            styles.completeText,
          ].join(" ")}
        >
          {`매니저 등록이 완료되었습니다!`}
          <br />
          {`바로 차량 등록을 하러 가시겠습니까?`}
        </p>
        <CustomBtn
          styleForBtn={[btnStyles.btnBlue, styles.gotoCarBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"차량 등록하러 가기"}
          onClick={() => {
            navigation("/manage/car/list");
          }}
        />
      </section>
    </Layout>
  );
};

export default ManagerRegisterComplete;
