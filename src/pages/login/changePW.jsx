import React from "react";
import Layout from "../../layout/layout";
import { InputBox } from "../../components/inputBox";
import "./changePW.css";

const ChangePW = () => {
  return (
    <Layout>
      <section className="changepw-all">
        <section className="changepw-top">
          <section className="changepw-title">비밀번호 변경</section>
        </section>
        <section className="changepw-bottom">
          <div className="changepw-text">비밀번호 변경을 위해서,</div>
          <div className="changepw-text">다음 빈칸을 모두 채워주세요.</div>
          <div className="changepw-inputset">
            <InputBox
              ispass={true}
              name={"currentpass"}
              placeholder={"현재 비밀번호"}
            />
            <InputBox
              ispass={true}
              name={"newpass"}
              placeholder={"새 비밀번호"}
            />
            <InputBox
              ispass={true}
              name={"confirmpass"}
              placeholder={"비밀번호 확인"}
            />
          </div>
          <button className="changepw-btn">비밀번호 변경</button>
        </section>
      </section>
    </Layout>
  );
};

export default ChangePW;
