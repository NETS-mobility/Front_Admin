import Layout from "../../../layout/layout";
import TableList from "../../../components/tableList";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CustomBtn from "../../../components/buttons";
import btnStyles from "../../../components/buttons.module.css";
import info from "../info3.json";
const ManagerList = () => {
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
        <TableList
          ischeck={true}
          title1={"매니저 ID"}
          title2={"매니저명"}
          title3={"등록 일자"}
          info={info.information}
          baseURL={"/manager/detail"}
        />
        <div className={styles.btnSection}>
          <CustomBtn
            styleForBtn={[btnStyles.btnLightGrey, styles.managementBtn].join(
              " "
            )}
            styleForText={typoStyles.fs36}
            text={"선택 항목 삭제"}
          />
          <CustomBtn
            styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
            styleForText={typoStyles.fs36}
            text={"추가 등록"}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ManagerList;
/*


*/
