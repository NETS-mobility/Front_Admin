import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import { InputBox, InputBoxWithTitle } from "../../components/inputBox";
import CustomBtn from "../../components/buttons";
import axios from "axios";
import "./adminRegister.css";
import { PhoneValidation, EmailValidation } from "../../util/validation";
import { RegisterAdmin } from "../../api/management/admin";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [admin, setAdmin] = useState({
    email: "",
    pw: "",
    pwConfirm: "",
    name: "",
    phone: "",
    birth: "",
  });
  const [error, setError] = useState("빈칸을 모두 채워주세요.");
  const navigate = useNavigate();

  useEffect(() => {
    if (admin.email == "") {
      setError("이메일을 입력해주세요.");
    } else if (!EmailValidation(admin.email)) {
      setError("이메일 형식이 올바르지 않습니다.ex)example@email.com");
    } else if (admin.pw == "") {
      setError("비밀번호를 입력해주세요.");
    } else if (admin.pwConfirm == "") {
      setError("비밀번호 확인을 입력해주세요.");
    } else if (admin.pw != admin.pwConfirm) {
      setError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else if (admin.name == "") {
      setError("이름을 입력해주세요.");
    } else if (admin.phone == "") {
      setError("휴대전화를 입력해주세요.");
    } else if (!PhoneValidation(admin.phone)) {
      setError("휴대전화 형식이 올바르지 않습니다.ex)010-0000-0000");
    } else if (admin.birth == "") {
      setError("생일을 입력해주세요.");
    } else {
      setError("");
    }
  }, [admin]);

  return (
    <Layout>
      <section className="adminregister-all">
        <section className="adminregister-top">
          <section className="adminregister-title">관리자 등록</section>
        </section>
        <section className="adminregister-bottom">
          <div className="adminregister-inputset">
            <InputBoxWithTitle
              ispass={false}
              name={"email"}
              placeholder={"이메일(example@email.com)"}
              title={"이메일"}
              value={admin.email}
              setValue={(e) =>
                setAdmin((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <InputBoxWithTitle
              ispass={true}
              name={"pw"}
              placeholder={"비밀번호"}
              title={"비밀번호"}
              value={admin.pw}
              setValue={(e) =>
                setAdmin((prev) => ({ ...prev, pw: e.target.value }))
              }
            />
            <InputBoxWithTitle
              ispass={true}
              name={"pwConfirm"}
              placeholder={"비밀번호 확인"}
              title={"비밀번호 확인"}
              value={admin.pwConfirm}
              setValue={(e) =>
                setAdmin((prev) => ({ ...prev, pwConfirm: e.target.value }))
              }
            />
            <InputBoxWithTitle
              ispass={false}
              name={"name"}
              placeholder={"이름"}
              title={"이름"}
              value={admin.name}
              setValue={(e) =>
                setAdmin((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <InputBoxWithTitle
              ispass={false}
              name={"phone"}
              placeholder={"휴대폰 번호(010-0000-0000)"}
              title={"휴대전화"}
              value={admin.phone}
              setValue={(e) =>
                setAdmin((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
            <InputBoxWithTitle
              ispass={false}
              name={"birth"}
              placeholder={"생년월일(YYYYMMDD)"}
              title={"생년월일"}
              value={admin.birth}
              setValue={(e) =>
                setAdmin((prev) => ({ ...prev, birth: e.target.value }))
              }
            />
          </div>
          <div className="adminregister-error">{error}</div>
          <CustomBtn
            styleForBtn={"adminregister-btn"}
            disableStyleForBtn={"adminregister-btn-disabled"}
            text={"관리자 등록"}
            onClick={async () => {
              const res = RegisterAdmin(admin);
              if (res.success) navigate("/manage/admin/list");
              else setError("관리자 등록에 실패했습니다.");
            }}
            disabled={error != "" ? true : false} //disable 시켜야됨
          />
        </section>
      </section>
    </Layout>
  );
};

export default AdminRegister;
