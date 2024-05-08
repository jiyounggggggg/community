"use client";
import React, { useState, FC } from "react";
import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";

// 동적으로 ReactQuill 컴포넌트를 로드하고 SSR은 비활성화합니다.
const ReactQuill = dynamic<ReactQuillProps>(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
}) as React.ComponentType<ReactQuillProps>;

interface QuillEditorProps {
    onContentChange?: (content: string) => void;
}

const modules = {
  toolbar: [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "link",
  "image",
  "video",
];

const QuillEditor: FC = ({ onContentChange }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (
    content: string,
    delta: any,
    source: string,
    editor: any,
  ): void => {
    setValue(editor.getHTML()); // 또는 content를 사용
    if (onContentChange) onContentChange(editor.getHTML());
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default QuillEditor;
