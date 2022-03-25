import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../../layout/layout";
import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import btnStyles from "../../../components/buttons.module.css";
import ManagerProfile from "../../../components/management/manager/managerProfile";
import ManagerCertificate from "../../../components/management/manager/managerCertificate";
import ManagerHoliday from "../../../components/management/manager/managerHoliday";
import ManagerSchedule from "../../../components/management/manager/managerSchedule";
import CustomBtn from "../../../components/buttons";
import { useEffect } from "react";
import {
  DeleteCert,
  EditManagerInfo,
  GetManagerDetail,
} from "../../../api/management/manager";
import { EmailValidation, PhoneValidation } from "../../../util/validation";

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
  const [detail, setDetail] = useState("");
  const [cert, setCert] = useState([]);
  const [deletedCert, setDeletedCert] = useState([]);

  const [managerInfo, setManagerInfo] = useState({});
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(async () => {
    setDetail(await GetManagerDetail(param.number));
  }, []);

  useEffect(() => {
    setCert(detail?.certificate);
    setManagerInfo({
      number: detail?.manager?.number,
      name: detail?.manager?.name,
      id: detail?.manager?.id,
      phone: detail?.manager?.phone,
      birth: detail?.manager?.birth,
      available: detail?.manager?.available == 0 ? false : true,
      path_pic: detail?.manager?.path_pic,
      date: detail?.manager?.date,
    });
  }, [detail]);

  useEffect(() => {
    let filtered = "";
    deletedCert.forEach((data) => {
      filtered = cert.filter((i) => i.number != data);
      setCert(filtered);
    });
  }, [deletedCert]);

  useEffect(() => {
    if (!EmailValidation(managerInfo.id)) {
      setErr("이메일 형식이 올바르지 않습니다.");
    } else if (!PhoneValidation(managerInfo.phone)) {
      setErr("휴대폰 번호는 010-0000-0000 형식으로 입력해주세요");
    } else if (managerInfo.phone == "" || managerInfo.id == "") {
      setErr("빈칸은 없어야 합니다.");
    } else {
      setErr("");
    }
  }, [managerInfo]);

  return (
    <>
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
          <ManagerProfile
            info={managerInfo}
            setInfo={setManagerInfo}
            type={"edit"}
          />

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
            </div>
            <section className={styles.managerCommonBlockSection}>
              <ManagerCertificate
                cert={cert}
                type={"edit-certificate"}
                userNum={param.number}
                setDeletedCert={setDeletedCert}
              />
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
            <input
              type="radio"
              name="available"
              id="yes"
              onChange={() =>
                setManagerInfo({ ...managerInfo, available: true })
              }
            />
            <label htmlFor="yes">배차 가능</label>
          </div>
          <div className={styles.availableEditOne}>
            <input
              type="radio"
              name="available"
              id="no"
              onChange={() =>
                setManagerInfo({ ...managerInfo, available: false })
              }
            />
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
              <ManagerHoliday type={"allow-holiday"} />
            </section>
          </div>
        </div>

        <span
          className={[
            typoStyles.fs36,
            typoStyles.textPrimary,
            styles.errMsg,
          ].join(" ")}
        >
          {err != "" ? err : ""}
        </span>
        <section className={styles.btnSection}>
          <CustomBtn
            disableStyleForBtn={[
              btnStyles.btnLightGrey,
              styles.managementBtn,
            ].join(" ")}
            styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
            styleForText={typoStyles.fs36}
            text={"수정 완료"}
            disabled={err != ""}
            onClick={async () => {
              await EditManagerInfo(managerInfo);
              await DeleteCert(deletedCert, param.number);
              navigate(`/manager/detail/${param.number}`);
            }}
          />
        </section>
      </Layout>
    </>
  );
};
export default ManagerDetailEdit;
