import React, { useMemo, useCallback, memo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // react-quill과 css파일 import 하기
import "./editor.css";

const Editor = memo(({ quillRef, api, htmlContent, setHtmlContent }) => {
  const imageHandler = useCallback(() => {
    const formData = new FormData();

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("name", "image");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      formData.append("image", file);

      const res = await api.uploadImage(formData);
      if (!res.success) {
        alert("이미지 업로드에 실패하였습니다.");
      }
      const url = res.payload.url;
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection()?.index;
      if (typeof range !== "number") return;

      quill.setSelection(range, 1);

      quill.clipboard.dangerouslyPasteHTML(
        range,
        `<img src=${url} alt="image" />`
      );
    };
  }, [api, quillRef]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler]
  );
  return (
    <>
      <ReactQuill
        ref={quillRef}
        value={htmlContent}
        onChange={setHtmlContent}
        modules={modules}
        theme="snow"
        className={"editorContents"}
      />
    </>
  );
});

export default Editor;
