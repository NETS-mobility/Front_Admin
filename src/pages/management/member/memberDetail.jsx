import Layout from "../../../layout/layout";
import styles from "../management.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import { useParams } from "react-router-dom";
import ServiceHistoryBlock from "../../../components/management/member/serviceHistoryBlock";
import MemberInfoLine from "../../../components/management/member/memberInfoLine";
import { useEffect, useState } from "react";
import { GetMemberDetail } from "../../../api/management/member";
import SplitDate from "../../../util/splitDate";

const MemberDetail = () => {
  const param = useParams();
  const [member, setMember] = useState([]);
  useEffect(async () => {
    setMember(await GetMemberDetail(param.id));
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
        <MemberInfoLine title={"고객명"} value={member.name} />
        <MemberInfoLine title={"가입일자"} value={SplitDate(member.date)} />
        <MemberInfoLine title={"이메일"} value={member.id} />
        <MemberInfoLine title={"휴대전화"} value={member.phone} />
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
    </Layout>
  );
};

export default MemberDetail;
