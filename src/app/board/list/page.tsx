const posts = [
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

export function Board() {
  return (
    <>
      <section>
        <h1 className="my-4">
          <strong>커뮤니티 이슈 모아보기! 오늘의 핫벤</strong>
        </h1>
        <a href="/board/post">
          <button className="border">글쓰기</button>
        </a>
        <ol className="list-none p-0">
          {posts.map((post) => (
            <li className="border-t p-1 last:border-b">
              <a href={"/board/" + post.id} key={post.id} className="inline-flex">
                <b className="pr-2 text-red-600">{post.id}</b>
                <small className="text-slate-500">{post.category}</small>
                <h2 className="pl-2">{post.title}</h2>
                <small className="pl-2 text-red-600">[{post.comments}]</small>
              </a>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Board />
    </>
  );
}
