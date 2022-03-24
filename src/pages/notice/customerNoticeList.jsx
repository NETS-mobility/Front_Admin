import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import NewTableList from "../../components/newTableList";
import btnStyles from "../../components/buttons.module.css";
import typoStyles from "../../assets/fonts/typography.module.css";
import SplitDate from "../../util/splitDate";
import { useNavigate } from "react-router-dom";
import { GetCustomerNoticeList } from "../../api/notice/noticeAPI";
import "./noticeStyles.css";
import CustomBtn from "../../components/buttons";

const CustomerNoticeList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(async () => {
    const res = await GetCustomerNoticeList();
    console.log("list=", res);
    res.forEach((data) => {
      setList((list) => [...list, { ...data, date: SplitDate(data.date) }]);
    });
  }, []);

  return (
    <Layout>
      <section className="editorAll">
        <section className="editorTop">
          <div className="editorTopTitle">고객 공지사항</div>
        </section>
        <section className="editorBottom">
          <NewTableList
            needCheck={false}
            titles={["게시물 ID", "게시물 제목", "게시 일자"]}
            props={["id", "title", "date"]}
            datas={list}
            baseURL={"/notice/customer/read"}
            detailProp={"id"}
          />
        </section>
        <CustomBtn
          styleForBtn={[btnStyles.btnBlue, "noticeWriteBtn"].join(" ")}
          styleForText={typoStyles.fs36}
          text={"공지사항 등록"}
          onClick={() => navigate("/notice/customer/write")}
        />
      </section>
    </Layout>
  );
};
export default CustomerNoticeList;
