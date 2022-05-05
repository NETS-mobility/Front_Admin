import Layout from "../../../layout/layout";
import styles from "./admin.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CustomBtn from "../../../components/buttons";
import btnStyles from "../../../components/buttons.module.css";
import { useEffect, useState } from "react";
import { GetAdminList } from "../../../api/management/admin";
import SplitDate from "../../../util/splitDate";
import NewTableList from "../../../components/newTableList";
import { useNavigate } from "react-router-dom";

const AdminList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(async () => {
    const res = await GetAdminList();
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
        관리자 관리
      </h1>
      <section className={styles.manageContentSection}>
        <NewTableList
          needCheck={false}
          titles={["관리자 ID", "관리자명", "등록 일자"]}
          props={["number", "name", "date"]}
          datas={list}
          baseURL={"/admin/detail"}
          detailProp={"number"}
        />
        <CustomBtn
          styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"추가 등록"}
          onClick={() => navigate("/manage/admin/register")}
        />
      </section>
    </Layout>
  );
};

export default AdminList;
