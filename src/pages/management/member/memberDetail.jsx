import Layout from "../../../layout/layout";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import { useParams } from "react-router-dom";
import ServiceHistoryBlock from "../../../components/management/member/serviceHistoryBlock";
import MemberInfoLine from "../../../components/management/member/memberInfoLine";

const MemberDetail = () => {
  const param = useParams();
  //axios 사용할 때 param.id를 이용!

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
        회원 조회
      </h1>
      <h1
        className={[
          typoStyles.fs24,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.title,
        ].join(" ")}
      >
        회원 정보
      </h1>
      <section className={styles.memberInfoSection}>
        <MemberInfoLine title={"고객명"} value={"김하나"} />
        <MemberInfoLine title={"가입일자"} value={"2021.11.05"} />
        <MemberInfoLine title={"이메일"} value={"email@email.com"} />
        <MemberInfoLine title={"휴대전화"} value={"010-1111-0000"} />
      </section>

      <h1
        className={[
          typoStyles.fs24,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.title,
        ].join(" ")}
      >
        이용내역 조회
      </h1>
      <section className={styles.serviceHistorySection}>
        <ServiceHistoryBlock />
        <ServiceHistoryBlock />
        <ServiceHistoryBlock />
        <ServiceHistoryBlock />
      </section>
      {/* <section className={styles.manageContentSection}></section> */}
    </Layout>
  );
};

export default MemberDetail;
