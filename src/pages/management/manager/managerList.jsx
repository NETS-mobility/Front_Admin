import Layout from "../../../layout/layout";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CustomBtn from "../../../components/buttons";
import btnStyles from "../../../components/buttons.module.css";
import NewTableList from "../../../components/newTableList";
import { useEffect, useState } from "react";
import { GetManagerList } from "../../../api/management/manager";
import { useNavigate } from "react-router-dom";
import SplitDate from "../../../util/splitDate";

const ManagerList = () => {
  let navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(async () => {
    const res = await GetManagerList();
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
        매니저 관리
      </h1>
      <section className={styles.manageContentSection}>
        <NewTableList
          needCheck={false}
          titles={["매니저 ID", "매니저명", "등록 일자"]}
          props={["name", "id", "date"]}
          datas={list}
          baseURL={"/manager/detail"}
          detailProp={"num"}
        />
        <CustomBtn
          styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"추가 등록"}
          onClick={() => navigate("/manage/manager/register")}
        />
      </section>
    </Layout>
  );
};

export default ManagerList;
/*


*/
