"use client";
// import { useRouter } from "next/router";
import { useState } from "react";
import QuillEditor from "~/components/posts/QuillEditor";
import { createPost } from "~/utils/api/posts";
import useAuth from '~/hooks/useAuth';

interface NewPostPageProps {
  params: {
    category: string;
  };
}

const NewPostPage: React.FC<NewPostPageProps> = ({ params }) => {
  const { user, loading } = useAuth();
  const boardId = params.category;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("title: ", title, "content: ", content);
    e.preventDefault();
    const token = localStorage.getItem("access");
    if (!token) {
      setError("로그인이 필요합니다.");
      return;
    }
    
    try {
      await createPost(
        { board: Number(boardId), title, content, created_by: user.id },
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
        <h1>NewPostPage</h1>
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
          className="mt-2 w-full rounded-md border p-1 hover:bg-slate-200"
          type="submit"
        >
          등록
        </button>
      </form>
    </>
  );
};

export default NewPostPage;
