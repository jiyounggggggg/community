import { Metadata } from "next";

export const metadata: Metadata = {
  title: "board",
  description: "board",
};

export default function BoardPage() {
  return (
    <>
      <nav className="flex flex-wrap justisfy-center items-center">
        <a href="/community" className="h-10 w-full basis-full bg-slate-400">
          커뮤니티 게시판
        </a>
        <ul className="basis-full flex">
          <li className="basis-1/4">내글</li>
          <li className="basis-1/4">내 댓글</li>
          <li className="basis-1/4">3추글</li>
          <li className="basis-1/4">인증글</li>
        </ul>
      </nav>
    </>
  );
}
