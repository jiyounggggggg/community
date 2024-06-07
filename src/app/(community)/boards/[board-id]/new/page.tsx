"use client";

import { useState } from "react";
import QuillEditor from "~/components/posts/QuillEditor";
import { createPost } from "~/app/api/posts";
import { UploadButton } from "~/utils/uploadthing";
import "@uploadthing/react/styles.css";


interface NewPostPageProps {
  params: {
    "board-id": number;
  };
}

const NewPostPage: React.FC<NewPostPageProps> = ({ params }) => {
  const boardId = params["board-id"];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("title: ", title, "content: ", content);
    e.preventDefault();
    const token = localStorage.getItem("access");
    if (!token) {
      setError("로그인이 필요합니다.");
      return;
    }

    try {
      console.log("boardId: ", boardId);
      await createPost(
        { board: Number(boardId), title, content, created_by: 7 },
        token,
      );
      setSuccess(true);
      setError("");
      // router.push(`/boards/${boardId}/posts`);
    } catch (error) {
      setError("게시글 작성에 실패했습니다.");
    }
  };

  return (
    <>
      <div>
        <h1></h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-1">
          <label htmlFor="title">제목:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
            className="mb-2 w-1/2 rounded-md border p-1"
          ></input>
        </div>
        <QuillEditor value={content} onChange={setContent} />
        {error && <p>{error}</p>}
        {success && <p>게시글이 성공적으로 작성되었습니다.</p>}
        <button
          className="mt-5 w-full rounded-md border p-1 hover:bg-slate-200"
          type="submit"
        >
          등록
        </button>
      </form>

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  );
};

export default NewPostPage;
