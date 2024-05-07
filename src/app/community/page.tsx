import { Metadata } from "next";
import { Menubar, MenubarMenu, MenubarTrigger } from "~/components/ui/menubar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export const metadata: Metadata = {
  title: "community",
  description: "community",
};

const invoices = [
  {
    invoice: "1",
    paymentStatus: "FCO",
    totalAmount: "[29]",
    paymentMethod: "팜하니 근황",
  },
  {
    invoice: "1",
    paymentStatus: "FCO",
    totalAmount: "[29]",
    paymentMethod: "팜하니 근황",
  },
  {
    invoice: "1",
    paymentStatus: "FCO",
    totalAmount: "[29]",
    paymentMethod: "팜하니 근황",
  },
  {
    invoice: "1",
    paymentStatus: "FCO",
    totalAmount: "[29]",
    paymentMethod: "팜하니 근황",
  },
  {
    invoice: "1",
    paymentStatus: "FCO",
    totalAmount: "[29]",
    paymentMethod: "팜하니 근황",
  },
];

const posts = [
  { id: 1, title: "크로아 벨라헤어 매물 찾습니다 + 버거뿌림", content: "This is the first post.", comments: 3, category:"메이플" },
  { id: 2, title: "같은 여성이 봐도 이해가 안간다는 목욕탕 특징", content: "Here is the second post." , comments: 349, category:"로아" },
  { id: 3, title: "타대가 패널티라는 정신병자가 있네", content: "And this is the third post." , comments: 27, category:"로아" },
];

export function Board() {
  return (
    <>
      <section>
        <h1 className="my-4">
          <strong>커뮤니티 이슈 모아보기! 오늘의 핫벤</strong>
        </h1>
        <ol className="list-none p-0">
          {posts.map((post) => (
            <li className="p-1 border-t last:border-b">
              <a href="/" key={post.id} className="inline-flex">
                <b className="text-red-600 pr-2">{post.id}</b>
                <small className="text-slate-500">{post.category}</small>
                <h2 className="pl-2">{post.title}</h2>
                {/* <p>{post.content}</p> */}
                <small className="text-red-600 pl-2">[{post.comments}]</small>
              </a>
            </li>
            // <a href="/" key={post.id} className="flex">
            //   {post.id}
            //   <h2>{post.title}</h2>
            //   <p>{post.content}</p>
            // </a>
          ))}
        </ol>
      </section>
      {/* <Table> */}
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        {/* <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead></TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </>
  );
}

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
      {/* <Menubar>
        <MenubarMenu>
          <MenubarTrigger>주요 커뮤니티</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>팰월드 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>디아블로4 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>우마무스메 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>LOL 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>메이플 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>로스트아크 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>피파4 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>디아블로2 인벤</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>리니지 인벤</MenubarTrigger>
        </MenubarMenu>
      </Menubar> */}
    </>
  );
}

export default function Page() {
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
      <Board />
    </>
  );
}
