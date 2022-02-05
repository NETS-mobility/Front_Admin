import React from "react";
import Logo from "../assets/logo.svg";
import typoStyles from "../assets/fonts/typography.module.css";
import styles from "./sideBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ bigMenu, smallMenu, open, setOpen, i }) => {
  return (
    <>
      <button type="button" onClick={setOpen} className={styles.bigMenu}>
        <span
          className={[
            typoStyles.fs32,
            typoStyles.fw400,
            typoStyles.textWhite,
          ].join(" ")}
        >
          {bigMenu}
        </span>
      </button>
      {open === i ? (
        smallMenu.map((data, index) => {
          return (
            /* <Link key={i} to={data.link}> */
            <button type="button" className={styles.smallMenu} key={index}>
              <span
                className={[
                  typoStyles.fs24,
                  typoStyles.fw400,
                  typoStyles.textWhite,
                ].join(" ")}
              >
                {data.title}
              </span>
            </button>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

const SideBar = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className={styles.sideBar}>
      {/* <Link to={"/"}> */}
      <img src={Logo} alt="NETS 로고" className={styles.logo} />
      {/* </Link> */}
      <strong
        className={[
          typoStyles.fs36,
          typoStyles.fw400,
          typoStyles.textWhite,
          styles.greeting,
        ].join(" ")}
      >
        안녕하세요,
        <br /> 김지수 님!
      </strong>
      <NavItem
        bigMenu={"내 정보"}
        smallMenu={[{ title: "비밀번호 변경", link: "/changePW" }]}
        open={open}
        setOpen={() => setOpen(1)}
        i={1}
      />
      <NavItem
        bigMenu={"예약 내역"}
        smallMenu={[{ title: "운행정보 확인", link: "/checkReservation" }]}
        open={open}
        setOpen={() => setOpen(2)}
        i={2}
      />
      <NavItem
        bigMenu={"내역 통계"}
        smallMenu={[
          { title: "서비스 통계", link: "/serviceStat" },
          { title: "만족도 통계", link: "/satisfactionStat" },
        ]}
        open={open}
        setOpen={() => setOpen(3)}
        i={3}
      />
      <NavItem
        bigMenu={"관리"}
        smallMenu={[
          { title: "회원", link: "/manageMember" },
          { title: "매니저", link: "/manageManager" },
          { title: "관리자", link: "/manageAdmin" },
          { title: "차량", link: "/manageCar" },
          { title: "차고지", link: "/manageGarage" },
        ]}
        open={open}
        setOpen={() => setOpen(4)}
        i={4}
      />
      <NavItem
        bigMenu={"공지사항"}
        smallMenu={[
          { title: "고객용", link: "/noticeForMember" },
          { title: "매니저용", link: "/noticeForManager" },
        ]}
        open={open}
        setOpen={() => setOpen(5)}
        i={5}
      />
      <NavItem
        bigMenu={"요금 설정"}
        smallMenu={[{ title: "요금 설정", link: "/setFee" }]}
        open={open}
        setOpen={() => setOpen(6)}
        i={6}
      />
    </div>
  );
};

export default SideBar;
