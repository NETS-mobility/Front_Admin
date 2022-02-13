import { Link, useParams } from "react-router-dom";
import Layout from "../../../layout/layout";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import btnStyles from "../../../components/buttons.module.css";
import CustomBtn from "../../../components/buttons";
import AdminProfile from "../../../components/management/admin/adminProfile";

const AdminDetail = () => {
  const param = useParams();
  const id = param.id; //url에 query로 사용

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
        <AdminProfile info={info} />
      </div>
      <section className={styles.btnSection}>
        <CustomBtn
          styleForBtn={[btnStyles.btnOrange, styles.managementBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"관리자 삭제"}
        />
        <Link to="/admin/detail/edit/2">
          <CustomBtn
            styleForBtn={[btnStyles.btnOrange, styles.managementBtn].join(" ")}
            styleForText={typoStyles.fs36}
            text={"상세정보 수정"}
          />
        </Link>
      </section>
    </Layout>
  );
};
export default AdminDetail;
