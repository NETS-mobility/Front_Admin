import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layout/layout";
import styles from "./admin.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import btnStyles from "../../../components/buttons.module.css";
import CustomBtn from "../../../components/buttons";
import AdminProfile from "../../../components/management/admin/adminProfile";
import { DeleteAdmin, GetAdminDetail } from "../../../api/management/admin";
import { useEffect, useState } from "react";

const AdminDetail = () => {
  const param = useParams();
  const number = param.number; //url에 query로 사용
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(async () => {
    const res = await GetAdminDetail(number);
    setDetail(res);
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
        관리자 조회
      </h1>
      <div className={styles.adminProfileContent}>
        <AdminProfile info={detail} />
      </div>
      <span className={styles.deleteError}>{"안녕"}</span>
      <CustomBtn
        styleForBtn={[btnStyles.btnOrange, styles.managementBtn].join(" ")}
        styleForText={typoStyles.fs36}
        text={"관리자 삭제"}
        onClick={async () => {
          const res = await DeleteAdmin(number);
          if (res == 200) {
            setError("");
            navigate("/manage/admin/list");
          } else setError("관리자 삭제에 실패했습니다.");
        }}
      />
    </Layout>
  );
};
export default AdminDetail;
