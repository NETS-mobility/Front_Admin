import React, { useEffect, useRef, useState, memo } from "react";
import Editor from "../../components/editor";
import Layout from "../../layout/layout";
import { GetManagerNoticeWrite } from "../../api/notice/noticeAPI";
import { useNavigate } from "react-router-dom";
import "./noticeStyles.css";

const ManagerNoticeWrite = memo(() => {
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState("");
  const [title, setTitle] = useState("");
  const quillRef = useRef();

  const handleSubmit = async () => {
    const description = quillRef.current.getEditor().getText(); //태그를 제외한 순수 text만을 받아온다.
    if (description.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    } else {
      // const res = await GetManagerNoticeWrite();
      console.log("hello?");
      const res = await GetManagerNoticeWrite(title, htmlContent);
      if (res.status == 200) {
        alert("작성이 완료되었습니다.");
        navigate("/");
      } else alert("작성 내용이 저장되지 않았습니다.\n다시 시도해주세요.");
    }
  };
  useEffect(() => {
    console.log("title", title);
  }, [title]);
  const changeValue = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Layout>
      <section className="editorAll">
        <section className="editorTop">
          <div className="editorTopTitle">매니저 공지사항 등록</div>
        </section>
        <section className="editorBottom">
          <div>
            <input
              type="text"
              name="title"
              value={title}
              placeholder={"  제목을 입력해주세요."}
              onChange={changeValue}
              className="editorTitle"
            />
            <Editor
              quillRef={quillRef}
              htmlContent={htmlContent}
              setHtmlContent={setHtmlContent}
            />
          </div>
        </section>
        <div className="editorBtnArea">
          <button className="editorSubmitBtn" onClick={handleSubmit}>
            작성 완료
          </button>
        </div>
      </section>
    </Layout>
  );
});
export default ManagerNoticeWrite;
