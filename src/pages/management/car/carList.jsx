import CustomBtn from "../../../components/buttons";
import Layout from "../../../layout/layout";
import btnStyles from "../../../components/buttons.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import TableList from "../../../components/tableList";
import styles from "../management.module.css";
import info from "../info3.json";
const CarList = () => {
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
        <TableList
          ischeck={false}
          title1={"차량 번호"}
          title2={"운전자"}
          title3={"등록 일자"}
          title4={"보험 만기 일자"}
          info={info.information}
          baseURL={"/car/detail"}
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

export default CarList;
