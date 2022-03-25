import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/layout";
import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import btnStyles from "../../../components/buttons.module.css";
import ManagerProfile from "../../../components/management/manager/managerProfile";
import ManagerCertificate from "../../../components/management/manager/managerCertificate";
import ManagerHoliday from "../../../components/management/manager/managerHoliday";
import ManagerSchedule from "../../../components/management/manager/managerSchedule";
import CustomBtn from "../../../components/buttons";
import { useEffect, useState } from "react";
import {
  DeleteManager,
  GetManagerDetail,
} from "../../../api/management/manager";

const ManagerDetail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");
  const [cert, setCert] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(async () => {
    setDetail(await GetManagerDetail(param.number));
  }, []);

  useEffect(() => {
    setCert(detail?.certificate);
  }, [detail]);

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
        <ManagerProfile info={detail?.manager} />

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

            {show ? (
              <CustomBtn
                styleForBtn={[btnStyles.btnBlue, styles.editBtn].join(" ")}
                styleForText={typoStyles.fs24}
                text={"등록"}
                onClick={() => {
                  setShow(false);
                  setCert([...cert, {}]);
                }}
              />
            ) : (
              <></>
            )}
          </div>
          <section className={styles.managerCommonBlockSection}>
            <ManagerCertificate
              cert={cert}
              userNum={param.number}
              setCert={setCert}
              setShow={setShow}
            />
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
          {detail?.manager?.available == 1
            ? "현재 배차 가능"
            : "현재 배차 불가능"}
        </strong>
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
            <ManagerSchedule schedule={detail?.schedule} />
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
          onClick={async () => {
            const res = await DeleteManager(param.number);
            if (res == 200) {
              navigate(`/manage/manager/list`);
            }
          }}
        />
        <CustomBtn
          styleForBtn={[btnStyles.btnOrange, styles.managementBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"상세정보 수정"}
          onClick={() =>
            navigate(`/manager/detail/${param.number}/edit`, { detail })
          }
        />
      </section>
    </Layout>
  );
};
export default ManagerDetail;
