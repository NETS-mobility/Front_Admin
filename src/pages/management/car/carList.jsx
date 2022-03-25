import CustomBtn from "../../../components/buttons";
import Layout from "../../../layout/layout";
import btnStyles from "../../../components/buttons.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import styles from "./car.module.css";
import NewTableList from "../../../components/newTableList";
import { useEffect, useState } from "react";
import { GetCarList } from "../../../api/management/car";
import SplitDate from "../../../util/splitDate";
import { useNavigate } from "react-router-dom";
const CarList = () => {
  const [list, setList] = useState([]);
  let navigate = useNavigate();

  useEffect(async () => {
    const res = await GetCarList();
    res.forEach((data) => {
      setList((list) => [...list, { ...data, date: SplitDate(data.date) }]);
    });
  }, []);

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
        차량 관리
      </h1>
      <section className={styles.manageContentSection}>
        <NewTableList
          needCheck={false}
          titles={["차량 번호", "운전자", "등록 일자", "보험 만기 일자"]}
          props={["number", "manager_name", "date", "date2"]}
          datas={list}
          baseURL={"/car/detail"}
          detailProp={"id"}
        />
        <CustomBtn
          styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"추가 등록"}
          onClick={() => navigate("/manage/car/register")}
        />
      </section>
    </Layout>
  );
};

export default CarList;
