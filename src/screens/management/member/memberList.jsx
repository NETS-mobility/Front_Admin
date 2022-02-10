import Layout from "../../../layout/layout";
import TableList from "../../../components/tableList";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
const MemberList = () => {
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
        <TableList
          ischeck={false}
          title1={"고객 ID"}
          title2={"고객명"}
          title3={"회원가입 일자"}
        />
      </section>
    </Layout>
  );
};

export default MemberList;
