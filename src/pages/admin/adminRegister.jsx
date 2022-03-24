import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import { InputBox, InputBoxWithTitle } from "../../components/inputBox";
import CustomBtn from "../../components/buttons";
import axios from "axios";
import "./adminRegister.css";
import { PhoneValidation, EmailValidation } from "../../util/validation";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [error, setError] = useState("빈칸을 모두 채워주세요.");

  useEffect(() => {
    if (email == "") {
      setError("이메일을 입력해주세요.");
    } else if (!EmailValidation(email)) {
      setError("이메일 형식이 올바르지 않습니다.ex)example@email.com");
    } else if (password == "") {
      setError("비밀번호를 입력해주세요.");
    } else if (confirmpass == "") {
      setError("비밀번호 확인을 입력해주세요.");
    } else if (password != confirmpass) {
      setError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else if (name == "") {
      setError("이름을 입력해주세요.");
    } else if (phone == "") {
      setError("휴대전화를 입력해주세요.");
    } else if (!PhoneValidation(phone)) {
      setError("휴대전화 형식이 올바르지 않습니다.ex)010-0000-0000");
    } else if (birth == "") {
      setError("생일을 입력해주세요.");
    } else {
      setError("");
    }
  }, [email, password, confirmpass, name, phone, birth]);
  const onClick = () => {
    axios
      .post("/admin/register/admin", {
        id: email,
        password: password,
        name: name,
        phone: phone,
        birth: birth,
      })
      .then((response) => {
        console.log("response: ", response);
        // const accessToken = response.data.jwtToken;
        // localStorage.setItem("accessToken", accessToken);
        // if (accessToken) {
        //   navigate("/");
        // }
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  };

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
              value={email}
              setValue={setEmail}
            />
            <InputBoxWithTitle
              ispass={true}
              name={"password"}
              placeholder={"비밀번호"}
              title={"비밀번호"}
              value={password}
              setValue={setPassword}
            />
            <InputBoxWithTitle
              ispass={true}
              name={"confirmpassword"}
              placeholder={"비밀번호 확인"}
              title={"비밀번호 확인"}
              value={confirmpass}
              setValue={setConfirmpass}
            />
            <InputBoxWithTitle
              ispass={false}
              name={"name"}
              placeholder={"이름"}
              title={"이름"}
              value={name}
              setValue={setName}
            />
            <InputBoxWithTitle
              ispass={false}
              name={"phone"}
              placeholder={"휴대폰 번호(010-0000-0000)"}
              title={"휴대전화"}
              value={phone}
              setValue={setPhone}
            />
            <InputBoxWithTitle
              ispass={false}
              name={"birthday"}
              placeholder={"생년월일(YYYYMMDD)"}
              title={"생년월일"}
              value={birth}
              setValue={setBirth}
            />
          </div>
          <div className="adminregister-error">{error}</div>
          <CustomBtn
            styleForBtn={"adminregister-btn"}
            text={"관리자 등록"}
            onClick={() => onClick()}
            disabled={error == "" ? true : false} //disable 시켜야됨
          />
        </section>
      </section>
    </Layout>
  );
};

export default AdminRegister;
