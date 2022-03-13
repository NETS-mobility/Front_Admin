import Layout from "../../../layout/layout";
import typoStyles from "../../../assets/fonts/typography.module.css";
import TableList from "../../../components/tableList";
import styles from "../management.module.css";
import info from "../info3.json";

const CarDetail = () => {
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
        수리 내역
      </h1>
      <section className={styles.manageContentSection}>
        <TableList
          ischeck={false}
          title1={"번호"}
          title2={"운전자"}
          title3={"수리 일자"}
          info={info.information}
        />
      </section>
    </Layout>
  );
};

export default CarDetail;
