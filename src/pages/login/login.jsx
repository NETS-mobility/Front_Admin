import React from "react";
import typoStyle from "../../assets/fonts/typography.module.css";
import CustomBtn from "../../components/buttons";
import btnStyles from "../../components/buttons.module.css";
import Logo from "../../assets/logo.svg";
import { InputBox } from "../../components/inputBox";
import './login.css';

const Login = () => {
    return(
        <div>
            <div className="logintop">
                <img src={Logo} alt="NETS 로고" className="loginlogo" />
            </div>
            <section className="loginwelcom">
                <span className={[typoStyle.fs32, typoStyle.fw400, typoStyle.textExplain].join(" ")}>안녕하세요</span>
                <span className={[typoStyle.fs32, typoStyle.fw400, typoStyle.textExplain].join(" ")}>네츠 모빌리티 관리자 전용 페이지입니다.</span>
            </section>
            <section className="logininputbigbox">
                <InputBox ispass={false} name="Email" placeholder="이메일"/>
                <InputBox ispass={true} name="Password" placeholder="비밀번호"/>
                <CustomBtn styleForBtn={"login-enterbtn"} text={"로그인"} />
            </section>
        </div>
    );
};

export default Login;
