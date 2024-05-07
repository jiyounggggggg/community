import { Metadata } from "next";
import Dropdown from "~/components/ui/dropdown";

export const metadata: Metadata = {
  title: "board",
  description: "board",
};

export default function BoardPage() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
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
        <form>
          <div>
            <Dropdown options={options} />
            <input
              type="text"
              name="title"
              placeholder="title"
              className="mb-2 w-full border p-1"
            ></input>
          </div>
        </form>
      </section>
    </>
  );
}
