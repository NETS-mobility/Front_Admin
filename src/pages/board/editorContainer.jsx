import React, { useEffect, useRef, useState, memo } from "react";
import Editor from "../../components/editor";
import Layout from "../../layout/layout";
import "./editorContainer.css";

const EditorContainer = memo(({ api, user }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [title, setTitle] = useState("");
  const quillRef = useRef();

  const handleSubmit = async () => {
    const description = quillRef.current.getEditor().getText(); //태그를 제외한 순수 text만을 받아온다.
    if (description.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }
  };
  const changeValue = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Layout>
      <section className="editorAll">
        <section className="editorTop">
          <div className="editorTopTitle">공지사항 등록</div>
        </section>
        <section className="editorBottom">
          <div>
            <input
              type="text"
              name="title"
              value={title}
              placeholder={"제목을 입력해주세요"}
              onChange={changeValue}
              className="editorTitle"
            />
            <Editor
              quillRef={quillRef}
              htmlContent={htmlContent}
              setHtmlContent={setHtmlContent}
              api={api}
            />
            <button className="editorSubmitBtn" onClick={handleSubmit}>
              작성 완료
            </button>
          </div>
        </section>
      </section>
    </Layout>
  );
});
export default EditorContainer;
