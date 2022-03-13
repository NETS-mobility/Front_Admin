import Layout from "../../../layout/layout";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import btnStyles from "../../../components/buttons.module.css";
import CustomBtn from "../../../components/buttons";
import AdminProfile from "../../../components/management/admin/adminProfile";

const AdminDetailEdit = () => {
  const info = {
    img: "profile.png",
    name: "김하나",
    registerDate: "2021.12.02",
    email: "email22@email.com",
    phone: "010-1111-1111",
    birth: "1975.02.14",
  };

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
        관리자 조회
      </h1>
      <div className={styles.adminProfileContent}>
        <AdminProfile info={info} type={"edit"} />
      </div>
      <section className={styles.btnSection}>
        <CustomBtn
          styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"수정 완료"}
        />
      </section>
    </Layout>
  );
};
export default AdminDetailEdit;
