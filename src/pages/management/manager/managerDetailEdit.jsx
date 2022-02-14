import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../../layout/layout";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import btnStyles from "../../../components/buttons.module.css";
import ManagerProfile from "../../../components/management/manager/managerProfile";
import ManagerCertificate from "../../../components/management/manager/managerCertificate";
import ManagerHoliday from "../../../components/management/manager/managerHoliday";
import ManagerSchedule from "../../../components/management/manager/managerSchedule";
import CustomBtn from "../../../components/buttons";
import { useEffect } from "react";

const EditCertificate = () => {
  return (
    <section className={styles.editCertificateModal}>
      <h1>자격증 등록</h1>
      <strong>자격증 이름</strong>
      <input type="text" placeholder="자격증 이름" />
      <strong>자격증 취득일</strong>
      <input type="text" placeholder="년" />
      <input type="text" placeholder="월" />
      <input type="text" placeholder="일" />
      <strong>자격증 만료일</strong>
      <input type="text" placeholder="년" />
      <input type="text" placeholder="월" />
      <input type="text" placeholder="일" />
      <CustomBtn
        styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
        styleForText={typoStyles.fs36}
        text={"등록 완료"}
      />
    </section>
  );
};

const ManagerDetailEdit = () => {
  const param = useParams();
  const id = param.id; //url에 query로 사용
  const [open, setOpen] = useState(false);

  const info = {
    img: "profile.png",
    name: "김하나",
    registerDate: "2021.12.02",
    email: "email22@email.com",
    phone: "010-1111-1111",
    birth: "1975.02.14",
  };

  return (
    <>
      {/* {open ? <EditCertificate /> : <></>} */}
      <Layout>
        <h1
          className={[
            styles.title,
            typoStyles.fs36,
            typoStyles.textExplain,
            typoStyles.fw700,
          ].join(" ")}
        >
          매니저 조회
        </h1>

        <div className={styles.oneLineBlock}>
          <ManagerProfile info={info} type={"edit"} />

          <div className={styles.withTitle}>
            <div className={styles.editSmallTitle}>
              <h1
                className={[
                  typoStyles.fs24,
                  typoStyles.textExplain,
                  typoStyles.fw700,
                ].join(" ")}
              >
                자격증
              </h1>
              <CustomBtn
                styleForBtn={[btnStyles.btnBlue, styles.editBtn].join(" ")}
                styleForText={typoStyles.fs20}
                text={"등록"}
                onClick={() => setOpen(true)}
              />
            </div>
            <section className={styles.managerCommonBlockSection}>
              <ManagerCertificate type={"edit-certificate"} />
            </section>
          </div>
        </div>

        <section
          className={[
            styles.availableEdit,
            typoStyles.fs36,
            typoStyles.textExplain,
            typoStyles.fw700,
          ].join(" ")}
        >
          <div className={styles.availableEditOne}>
            <input type="radio" name="available" id="yes" />
            <label htmlFor="yes">배차 가능</label>
          </div>
          <div className={styles.availableEditOne}>
            <input type="radio" name="available" id="no" />
            <label htmlFor="no">배차 불가능</label>
          </div>
        </section>

        <div className={styles.oneLineBlock}>
          <div className={styles.withTitle}>
            <h1
              className={[
                styles.smallTitle,
                typoStyles.fs24,
                typoStyles.textExplain,
                typoStyles.fw700,
              ].join(" ")}
            >
              스케줄 조회
            </h1>
            <section className={styles.managerCommonBlockSection}>
              <ManagerSchedule />
            </section>
          </div>

          <div className={styles.withTitle}>
            <div className={styles.holidayTitle}>
              <h1
                className={[
                  styles.smallTitle,
                  typoStyles.fs24,
                  typoStyles.textExplain,
                  typoStyles.fw700,
                ].join(" ")}
              >
                휴가
              </h1>
              <span
                className={[
                  styles.holiday,
                  typoStyles.fs24,
                  typoStyles.textExplain,
                  typoStyles.fw700,
                ].join(" ")}
              >
                사용 휴가: 3일 남은 휴가: 7일
              </span>
            </div>
            <section className={styles.managerCommonBlockSection}>
              <ManagerHoliday type={"allow-holiday"} />
            </section>
          </div>
        </div>

        <section className={styles.btnSection}>
          <CustomBtn
            styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
            styleForText={typoStyles.fs36}
            text={"수정 완료"}
          />
        </section>
      </Layout>
    </>
  );
};
export default ManagerDetailEdit;
