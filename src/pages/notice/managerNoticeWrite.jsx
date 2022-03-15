import axios from "axios";
import React, { useEffect, useRef, useState, memo } from "react";
import Editor from "../../components/editor";
import Layout from "../../layout/layout";
import "./managerNoticeWrite.css";

const ManagerNoticeWrite = memo(() => {
  const [htmlContent, setHtmlContent] = useState("");
  const [title, setTitle] = useState("");
  const quillRef = useRef();

  const handleSubmit = async () => {
    const description = quillRef.current.getEditor().getText(); //태그를 제외한 순수 text만을 받아온다.
    if (description.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    } else {
      axios
        .post("http://localhost:5000/admin/board/manager/write", {
          title: title,
          writer_id: 2,
          content: htmlContent,
        })
        .then((response) => {
          console.log("response: ", response);
          // const accessToken = response.data.jwtToken;
          // localStorage.setItem("accessToken", accessToken);
          // if (accessToken) {
          //   navigate("/");
          // }
          // // if (response.status == 200) {
          // //   navigate("/");
          // // }
        })
        .catch(function (error) {
          console.log("error: ", error);
        });
    }
  };
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
            <div className="editorBtnArea">
              <button className="editorSubmitBtn" onClick={handleSubmit}>
                작성 완료
              </button>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
});
export default ManagerNoticeWrite;
