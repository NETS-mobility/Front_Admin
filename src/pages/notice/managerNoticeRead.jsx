import axios from "axios";
import React, { useEffect, useRef, useState, memo } from "react";
import Layout from "../../layout/layout";
import "./managerNoticeWrite.css";

const ManagerNoticeRead = memo(() => {
  const [htmlContent, setHtmlContent] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  axios
    .post("http://localhost:5000/admin/board/manager/read/1")
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
      setTitle(response.data.title);
      setContent(response.data.content);
    })
    .catch(function (error) {
      console.log("error: ", error);
    });

  return (
    <Layout>
      <section className="editorAll">
        <section className="editorTop">
          <div className="editorTopTitle">공지사항 조회</div>
        </section>
        <section className="editorBottom">
          <div className="editorTitle">{title}</div>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </section>
      </section>
    </Layout>
  );
});
export default ManagerNoticeRead;
