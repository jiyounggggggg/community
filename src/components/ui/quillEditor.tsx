"use client";
import React, { useState, FC } from "react";
import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";
import Dropdown from "./dropdown";
import { useUser } from "@clerk/nextjs";

// 동적으로 ReactQuill 컴포넌트를 로드하고 SSR은 비활성화합니다.
const ReactQuill = dynamic<ReactQuillProps>(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
}) as React.ComponentType<ReactQuillProps>;

// interface QuillEditorProps {
//   onContentChange?: (content: string) => void;
// }

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

const QuillEditor: FC = () => {
  const [value, setValue] = useState<string>("");
  const { isLoaded, isSignedIn, user } = useUser();
  const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  // const author = user?.primaryEmailAddress?.emailAddress;
  const author = "test";
  const options = [
    { value: "카테고리 선택", label: "카테고리 선택" },
    { value: "잡담", label: "잡담" },
    { value: "질문", label: "질문" },
    { value: "소식", label: "소식" },
    { value: "멀티", label: "멀티" },
    { value: "기타", label: "기타" },
  ];

  const handleChange = (
    content: string,
    delta: any,
    source: string,
    editor: any,
  ): void => {
    setContent(editor.getHTML());
    setValue(editor.getHTML()); // 또는 content를 사용
    // if (onContentChange) onContentChange(editor.getHTML());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!title || !content) {
      // setError("값를 입력해보세요");
      alert("값를 입력해보세요");
      return;
    }

    // console.log("title: ", title, "author: ", author, "content: ", content);

    // Django API 호출
    const response = await fetch("http://localhost:8000/api/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
        author,
        content,
      }),
    });

    if (response.ok) {
      const post = await response.json();
      console.log("Post created", post);

      // router.push('/community');
    } else {
      console.error("Error creating post");
      setError("error");
    }
  };

  return (
    <>
      <section>
        <h1 className="mb-2 h-10 bg-slate-300 text-center leading-10">
          글쓰기
        </h1>
        <Dropdown options={options} />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
          className="mb-2 w-full border p-1"
        ></input>
        <form onSubmit={handleSubmit}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            modules={modules}
            formats={formats}
          />
          <button
            className="mt-2 w-full rounded-md border p-1 hover:bg-slate-200"
            type="submit"
          >
            등록
          </button>
        </form>
      </section>
    </>
  );
};

export default QuillEditor;
