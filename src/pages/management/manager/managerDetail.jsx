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
import { GetManagerDetail } from "../../../api/management/manager";

const ManagerDetail = () => {
  const param = useParams();
  useEffect(async () => {
    const res = await GetManagerDetail(param.id);

    // console.log("param=", param.id);
    console.log("res=", res);
  });
  const id = param.id; //url에 query로 사용

  const info = {
    img: "profile.png",
    name: "김하나",
    registerDate: "2021.12.02",
    email: "email22@email.com",
    phone: "010-1111-1111",
    birth: "1975.02.14",
  };
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
        매니저 조회
      </h1>

      <div className={styles.oneLineBlock}>
        <ManagerProfile info={info} />

        <div className={styles.withTitle}>
          <h1
            className={[
              styles.smallTitle,
              typoStyles.fs24,
              typoStyles.textExplain,
              typoStyles.fw700,
            ].join(" ")}
          >
            자격증
          </h1>
          <section className={styles.managerCommonBlockSection}>
            <ManagerCertificate />
          </section>
        </div>
      </div>

      <section className={styles.available}>
        <strong
          className={[
            typoStyles.fs36,
            typoStyles.fw700,
            typoStyles.textMain,
          ].join(" ")}
        >
          현재 배차 가능
        </strong>
        {/* :
        <strong
          className={[
            typoStyles.fs36,
            typoStyles.fw700,
            typoStyles.textPrimary,
          ]}
        >
          현재 배차 불가능
        </strong> */}
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
            <ManagerHoliday />
          </section>
        </div>
      </div>

      <section className={styles.btnSection}>
        <CustomBtn
          styleForBtn={[btnStyles.btnOrange, styles.managementBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"매니저 삭제"}
        />
        <Link to="/manager/detail/edit/2">
          <CustomBtn
            styleForBtn={[btnStyles.btnOrange, styles.managementBtn].join(" ")}
            styleForText={typoStyles.fs36}
            text={"상세정보 수정"}
          />
        </Link>
      </section>
    </Layout>
  );
};
export default ManagerDetail;
