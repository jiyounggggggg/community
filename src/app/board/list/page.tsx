import Link from "next/link";
import React from "react";

const post1 = [
  {
    id: 1,
    title: "크로아 벨라헤어 매물 찾습니다 + 버거뿌림",
    content: "This is the first post.",
    comments: 3,
    category: "메이플",
  },
  {
    id: 2,
    title: "같은 여성이 봐도 이해가 안간다는 목욕탕 특징",
    content: "Here is the second post.",
    comments: 349,
    category: "로아",
  },
  {
    id: 3,
    title: "타대가 패널티라는 정신병자가 있네",
    content: "And this is the third post.",
    comments: 27,
    category: "로아",
  },
];

async function fetchPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <>
      {/* <Board /> */}

      <section>
        <h1 className="my-4">
          <strong>커뮤니티 이슈 모아보기! 오늘의 핫벤</strong>
        </h1>
        <a href="/board/post">
          <button className="border">글쓰기</button>
        </a>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border-t p-1 last:border-b">
              <Link href={`/board/${post.id}`} className="inline-flex">
                <b className="pr-2 text-red-600">{post.id}</b>
                <small className="text-slate-500">category</small>
                <h2 className="pl-2">{post.title}</h2>
                <small className="pl-2 text-red-600">[10]</small>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
