import Layout from "../../../layout/layout";
import NewTableList from "../../../components/newTableList";
import styles from "./member.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import { GetMemberList } from "../../../api/management/member";
import { useEffect, useState } from "react";
import SplitDate from "../../../util/splitDate";
const MemberList = () => {
  const [list, setList] = useState([]);
  useEffect(async () => {
    const res = await GetMemberList();
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
        회원 관리
      </h1>
      <section className={styles.manageContentSection}>
        <NewTableList
          needCheck={false}
          titles={["고객 ID", "고객명", "회원가입 일자"]}
          props={["name", "id", "date"]}
          datas={list}
          baseURL={"/member/detail"}
          detailProp={"number"}
        />
      </section>
    </Layout>
  );
};

export default MemberList;
