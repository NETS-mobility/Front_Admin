import Layout from "../../../layout/layout";
import styles from "./member.module.css";
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
  console.log("param=", param);
  useEffect(async () => {
    setMember(await GetMemberDetail(param.number));
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
        <MemberInfoLine title={"고객명"} value={member?.user?.name} />
        <MemberInfoLine
          title={"가입일자"}
          value={SplitDate(member?.user?.date)}
        />
        <MemberInfoLine title={"이메일"} value={member?.user?.id} />
        <MemberInfoLine title={"휴대전화"} value={member?.user?.phone} />
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
        {member?.rev?.map((data, i) => {
          return <ServiceHistoryBlock data={data} key={i} />;
        })}
      </section>
    </Layout>
  );
};

export default MemberDetail;
