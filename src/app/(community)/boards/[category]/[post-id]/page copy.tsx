import Link from "next/link";
import { Metadata } from "next";
import Profile from "~/components/Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp, faComment, faThumbsUp, faUpLong } from "@fortawesome/free-solid-svg-icons";
import CommentBox from "~/components/CommentBox/CommentBox";
import { fetchComments, createComment } from "~/utils/api";
import { format } from "date-fns";


export const metadata: Metadata = {
  title: "board",
  description: "board",
};

async function fetchPost(category: string, postId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

const options = [
  { value: "카테고리 선택", label: "카테고리 선택" },
  { value: "잡담", label: "잡담" },
  { value: "질문", label: "질문" },
  { value: "소식", label: "소식" },
  { value: "멀티", label: "멀티" },
  { value: "기타", label: "기타" },
];

export default async function PostPage({ params, }: { params: { category: string; "post-id": string }; }) {
  const post = await fetchPost(params.category, params["post-id"]);
  function formatDateTime(datetime) {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }

  post.created_at = formatDateTime(post.created_at);

  // 댓글 가져오기
  // async function getComments() {
  //   const res = await fetchComments(post.id);
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch comments");
  //   }

  //   return res.json();
  // }

  // const comments = await getComments();

  const comments = await fetchComments(post.id);
  // const comments = fetchComments(post.id).then(data => return data);
  console.log("comments:: ", comments);
  // console.log("comments: ", comments);
  // fetchComments(Number(id)).then(data => setComments(data));

  // 댓글 등록 API 콜백
  // const handleCommentAdded = async() => {
  //   if (post.id) {
  //     await fetchComments(post.id).then(data => console.log("callback: ", data));
  //   }
  // };

  return (
    <>
      <section className="flex flex-row-reverse">
        <Link href={`/boards/${params.category}`}><button className="border p-1 my-1">목록</button></Link>
      </section>

      <article>
        <header className="border-y flex flex-col gap-2 p-3">
          <Link href={`/boards/${params.category}`} className="text-slate-500">{params.category}</Link>
          <h1 className=""><strong className="text-2xl">{post.title}</strong></h1>
          <div className="flex">
            <Profile src="/noidea.jpeg" alt="Profile Image" size={40} />
            <div className="flex flex-col mx-3">
              <b className="text-sm">{post.author}</b>
              <div className="flex">
                <time id="publish-date" dateTime={post.created_at} className="text-slate-400 text-sm">{post.created_at}</time>
                <small className="text-slate-400 ml-3">조회 110</small>
              </div>
            </div>
          </div>
        </header>

        <section className="my-5" dangerouslySetInnerHTML={{ __html: post.content }}></section>
        
        <section className="text-center mb-2">
          <button className="border rounded-full p-2 hover:text-sky-600 text-slate-600">
            <FontAwesomeIcon icon={faThumbsUp} />
            <b className="ml-1">101</b>
          </button>
        </section>

        <footer className="">
          <h2><strong>댓글</strong></h2>
          <CommentBox post={Number(post.id)} author={1} />
          <small>Sort by: </small>
          {/* <Dropdown size="medium" options={options} onChange={handleDropdownChange} /> */}

          <ul className="my-10">
            {comments.map((comment) => (
              <li key={comment.id} className="my-5">
                <div className="flex gap-3 items-center">
                  <Profile src="/noidea.jpeg" alt="Profile Image" size={35} />
                  <b className="text-xs">{comment.author}</b>
                  <small className="text-slate-400">{format(comment.created_at, 'yyyy.MM.dd. HH:MM')}</small>
                </div>
                <p className="my-2">{comment.content}</p>
                <ul className="flex">
                  <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleUp} /><b className="text-sm mx-1">100</b></button></li>
                  <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleDown} /><b className="text-sm mx-1">10</b></button></li>
                  <li className="px-4"><button className="hover:text-sky-600"><FontAwesomeIcon icon={faComment} flip="horizontal" /><b className="text-sm mx-1">reply</b></button></li>
                </ul>
              </li>
            ))}
          </ul>

          <ul className="my-10">
            <li className="my-5">
              <div className="flex gap-3 items-center">
                <Profile src="/noidea.jpeg" alt="Profile Image" size={35} />
                <b className="text-xs">{post.author}</b>
                <small className="text-slate-400">16h ago</small>
              </div>
              <p className="my-2">Honestly, one of my biggest complaints besides the obvious is how cumbersome it is selecting your weapons, armor, and stratagems. This would be a very welcome QoL</p>

              <ul className="flex">
                <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleUp} /><b className="text-sm mx-1">100</b></button></li>
                <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleDown} /><b className="text-sm mx-1">10</b></button></li>
                <li className="px-4"><button className="hover:text-sky-600"><FontAwesomeIcon icon={faComment} flip="horizontal" /><b className="text-sm mx-1">reply</b></button></li>
              </ul>

              <ul className="ml-10 mt-5">
                <li>
                  {/* <CommentBox post={Number(post.id)} author={1} parent={comment.id} onCommentAdded={handleCommentAdded} /> */}
                </li>
                <li className="my-5">
                  <div className="flex gap-3 items-center">
                    <Profile src="/noidea.jpeg" alt="Profile Image" size={35} />
                    <b className="text-xs">{post.author}</b>
                    <small className="text-slate-400">16h ago</small>
                  </div>
                  <p className="my-2">Honestly, one of my biggest complaints besides the obvious is how cumbersome it is selecting your weapons, armor, and stratagems. This would be a very welcome QoL</p>
                  <ul className="flex">
                    <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleUp} /><b className="text-sm mx-1">100</b></button></li>
                    <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleDown} /><b className="text-sm mx-1">10</b></button></li>
                    <li className="px-4"><button className="hover:text-sky-600"><FontAwesomeIcon icon={faComment} flip="horizontal" /><b className="text-sm mx-1">reply</b></button></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </article>
    </>
  );
}
