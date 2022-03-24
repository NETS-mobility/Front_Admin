import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import typoStyle from "../../assets/fonts/typography.module.css";
import CustomBtn from "../../components/buttons";
import btnStyles from "../../components/buttons.module.css";
import Logo from "../../assets/logo.svg";
import { InputBox } from "../../components/inputBox";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     navigate("/");
  //   }
  // }, []);

  const onClick = () => {
    axios
      .post("/admin/login", { id: id, password: password })
      .then((response) => {
        console.log("response: ", response);
        const accessToken = response.data.token;
        localStorage.setItem("accessToken", accessToken);
        // window.location.reload();
        if (accessToken) {
          navigate("/");
        }
        // if (response.status == 200) {
        //   navigate("/");
        // }
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  };
  return (
    <div>
      <div className="logintop">
        <img src={Logo} alt="NETS 로고" className="loginlogo" />
      </div>
      <section className="loginwelcom">
        <span
          className={[
            typoStyle.fs32,
            typoStyle.fw400,
            typoStyle.textExplain,
          ].join(" ")}
        >
          안녕하세요
        </span>
        <span
          className={[
            typoStyle.fs32,
            typoStyle.fw400,
            typoStyle.textExplain,
          ].join(" ")}
        >
          네츠 모빌리티 관리자 전용 페이지입니다.
        </span>
      </section>
      <section className="logininputbigbox">
        <InputBox
          ispass={false}
          name="name"
          placeholder="이메일"
          value={id}
          setValue={setID}
        />
        <InputBox
          ispass={true}
          name="Password"
          placeholder="비밀번호"
          value={password}
          setValue={setPassword}
        />
        <CustomBtn
          styleForBtn={"login-enterbtn"}
          text={"로그인"}
          onClick={() => onClick()}
        />
      </section>
    </div>
  );
};

export default Login;
