import Image from "next/image";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="">
        <h1 className="sr-only">community categories</h1>
        <ul className="flex flex-wrap justify-between text-center">
          <li className="basis-1/3 border py-1">
            <a href="/boards/category">팰월드 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">디아블로4 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">우마무스메 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">LOL 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">메이플 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">로스트아크 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">피파4 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">디아블로2 인벤</a>
          </li>
          <li className="basis-1/3 border py-1">
            <a href="/board">리니지M 인벤</a>
          </li>
        </ul>
      </nav>

      <aside className="relative my-2.5 flex items-center justify-center bg-slate-50">
        <h1 className="absolute left-0 top-0">광고</h1>
        <Image
          src="/noidea.jpeg"
          className="h-28"
          alt="advertisement"
          width={150}
          height={150}
          layout="intrinsic"
        />
        나는 아무 생각이 없다
      </aside>
      {children}
    </>
  );
}


