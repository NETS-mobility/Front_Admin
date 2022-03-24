import axios from "axios";
import React, { useEffect, useRef, useState, memo } from "react";
import typoStyles from "../../assets/fonts/typography.module.css";
import btnStyles from "../../components/buttons.module.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  DeleteCustomerNotice,
  GetCustomerNoticeRead,
} from "../../api/notice/noticeAPI";
import Layout from "../../layout/layout";
import CustomBtn from "../../components/buttons";
import "./noticeStyles.css";

const CustomerNoticeRead = memo(() => {
  const navigate = useNavigate();
  const param = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [writer, setWriter] = useState("");
  const [view, setView] = useState(0);

  useEffect(async () => {
    const res = await GetCustomerNoticeRead(param.id);
    setTitle(res.title);
    setContent(res.content);
    setDate(res.date.substring(0, 10));
    setWriter(res.writer_id);
    setView(res.view);
  }, []);

  return (
    <Layout>
      <section className="editorAll">
        <section className="editorTop">
          <div className="editorTopTitle">고객 공지사항 조회</div>
        </section>
        <section className="noticeReadBottom">
          <span className="noticeReadTitle">{title}</span>
          <span className="noticeReadTitleBottom">
            <span className="noticeReadTitleBottomMargin">
              게시일자: {date}
            </span>
            <span className="noticeReadTitleBottomMargin">조회수: {view}</span>
            <span className="noticeReadTitleBottomMargin">
              작성자: {writer}
            </span>
          </span>
          <hr />
          <br />
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </section>
        <div className="noticeBtnSet">
          <CustomBtn
            styleForBtn={[btnStyles.btnBlue, "noticeWriteBtn"].join(" ")}
            styleForText={typoStyles.fs36}
            text={"공지사항 수정"}
            onClick={() => navigate("/notice/customer/write")}
          />
          <CustomBtn
            styleForBtn={[btnStyles.btnOrange, "noticeWriteBtn"].join(" ")}
            styleForText={typoStyles.fs36}
            text={"공지사항 삭제"}
            onClick={async () => {
              const res = await DeleteCustomerNotice(param.id);
              if (res.status == 200) {
                alert("공지사항이 삭제되었습니다!");
                navigate("/notice/customer/list");
              } else {
                alert("삭제되지 않았습니다. 다시 시도해주세요.");
              }
            }}
          />
        </div>
      </section>
    </Layout>
  );
});
export default CustomerNoticeRead;
