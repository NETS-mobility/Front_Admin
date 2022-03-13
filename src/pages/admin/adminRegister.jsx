import React, { useState } from "react";
import Layout from "../../layout/layout";
import { InputBox, InputBoxWithTitle } from "../../components/inputBox";
import CustomBtn from "../../components/buttons";
import axios from "axios";
import "./adminRegister.css";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  const onClick = () => {
    axios
      .post("http://localhost:5000/admin/register/admin", {
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
          <CustomBtn
            styleForBtn={"adminregister-btn"}
            text={"관리자 등록"}
            onClick={() => onClick()}
          />
        </section>
      </section>
    </Layout>
  );
};

export default AdminRegister;
