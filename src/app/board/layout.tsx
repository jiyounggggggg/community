import { Metadata } from "next";

export const metadata: Metadata = {
  title: "community",
  description: "community",
};


export function CommunityNav() {
  return (
    <>
      <nav className="my-2.5 flex h-10 items-center gap-4 bg-slate-400 p-4">
        <h1
          className="absolute h-px w-px overflow-hidden border-0 p-0"
          style={{ margin: "-1px", clip: "rect(0 0 0 0)" }}
        >
          main categories
        </h1>
        <img src="/favicon.ico" alt="logo" className="h-6" />
        <a href="/">뉴스</a>
        <a href="/community">커뮤니티</a>
        <a href="/">팟벤</a>
        <a href="/">이벤트</a>
      </nav>

      <nav className="flex flex-wrap justify-between text-center">
        <h1
          className="absolute h-px w-px overflow-hidden border-0 p-0"
          style={{ margin: "-1px", clip: "rect(0 0 0 0)" }}
        >
          community categories
        </h1>
        <a href="/board" className="basis-1/3 border py-1">
          팰월드 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          디아블로4 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          우마무스메 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          LOL 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          메이플 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          로스트아크 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          피파4 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          디아블로2 인벤
        </a>
        <a href="/community" className="basis-1/3 border py-1">
          리니지M 인벤
        </a>
      </nav>
    </>
  );
}

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CommunityNav />
      <aside className="my-2.5 bg-slate-50">
        <h2>광고</h2>
        <div className="flex items-center justify-center">
          <img src="/noidea.jpeg" className="h-28"></img>
          나는 아무 생각이 없다
        </div>
      </aside>
      {children}
    </>
  );
}
