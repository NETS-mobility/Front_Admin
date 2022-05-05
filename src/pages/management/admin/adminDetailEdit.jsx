// import Layout from "../../../layout/layout";
// import styles from "../management.module.css";
// import typoStyles from "../../../assets/fonts/typography.module.css";
// import btnStyles from "../../../components/buttons.module.css";
// import CustomBtn from "../../../components/buttons";
// import AdminProfile from "../../../components/management/admin/adminProfile";
// import { useEffect, useState } from "react";
// import { GetAdminDetail } from "../../../api/management/admin";
// import { useParams } from "react-router-dom";

// const AdminDetailEdit = () => {
//   const param = useParams();
//   const [detail, setDetail] = useState([]);

//   useEffect(async () => {
//     const res = await GetAdminDetail(param.number);
//     setDetail(res);
//   }, []);

//   return (
//     <Layout>
//       <h1
//         className={[
//           styles.title,
//           typoStyles.fs36,
//           typoStyles.textExplain,
//           typoStyles.fw700,
//         ].join(" ")}
//       >
//         관리자 조회
//       </h1>
//       <div className={styles.adminProfileContent}>
//         <AdminProfile info={detail} type={"edit"} />
//       </div>
//       <section className={styles.btnSection}>
//         <CustomBtn
//           styleForBtn={[btnStyles.btnBlue, styles.managementBtn].join(" ")}
//           styleForText={typoStyles.fs36}
//           text={"수정 완료"}
//         />
//       </section>
//     </Layout>
//   );
// };
// export default AdminDetailEdit;
