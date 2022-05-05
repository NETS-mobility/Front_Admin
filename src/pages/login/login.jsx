import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import typoStyle from "../../assets/fonts/typography.module.css";
import CustomBtn from "../../components/buttons";
import Logo from "../../assets/logo.svg";
import { InputBox } from "../../components/inputBox";
import "./login.css";
import { LoginAPI } from "../../api/auth/login";

const Login = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

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
        <span
          className={[
            typoStyle.fs28,
            typoStyle.fw400,
            typoStyle.textPrimary,
            "loginErr",
          ].join(" ")}
        >
          {err}
        </span>
        <CustomBtn
          styleForBtn={"login-enterbtn"}
          text={"로그인"}
          onClick={async () => {
            const res = await LoginAPI(id, password);
            if (res.status == 200) {
              setErr("");
              localStorage.setItem("accessToken", res.data.token);
              navigate("/reservation/list");
            } else {
              setErr("아이디나 비밀번호가 일치하지 않습니다.");
            }
          }}
        />
      </section>
    </div>
  );
};

export default Login;
