"use client";
import { useState } from "react";
import Dropdown from "~/components/ui/dropdown";
import QuillEditor from "~/components/ui/quillEditor";

export default function BoardPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Jiyoung");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  // const router = useRouter();

  const handleContentChange = (content: string) => {
    setContent(content);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !content) {
      setError("값를 입력해보세요");
      return;
    }

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

  const options = [
    { value: "카테고리 선택", label: "카테고리 선택" },
    { value: "잡담", label: "잡담" },
    { value: "질문", label: "질문" },
    { value: "소식", label: "소식" },
    { value: "멀티", label: "멀티" },
    { value: "기타", label: "기타" },
  ];

  return (
    <>
      <nav className="flex flex-col">
        <a href="/community" className="h-10 bg-slate-200 px-4 leading-10">
          커뮤니티 게시판
        </a>
        <ul className="flex h-10 items-center">
          <li className="basis-1/4 text-center">
            <a href="/community">
              <img
                src="/icons/pencil.svg"
                alt="my board"
                className="inline h-5"
              />
              내글
            </a>
          </li>
          <li className="basis-1/4 text-center">
            <a href="/community">
              <img
                src="/icons/comment.svg"
                alt="my comments"
                className="inline h-5"
              />
              내 댓글
            </a>
          </li>
          <li className="basis-1/4 text-center">
            <a href="/community">
              <img
                src="/icons/thumb.svg"
                alt="3recommended board"
                className="inline h-5"
              />
              3추글
            </a>
          </li>
          <li className="basis-1/4 text-center">
            <a href="/community">
              <img
                src="/icons/medal.svg"
                alt="certified board"
                className="inline h-5"
              />
              인증글
            </a>
          </li>
        </ul>
      </nav>

      <section>
        <h1 className="mb-2 h-10 bg-slate-300 text-center leading-10">
          글쓰기
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Dropdown options={options} />
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="mb-2 w-full border p-1"
            ></input>
            <div>
              <QuillEditor onContentChange={handleContentChange} />
            </div>
            <button className="mt-2 w-full border p-1 hover:bg-slate-200 rounded-md" type="submit">
              등록
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
