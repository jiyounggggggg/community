import { Menubar, MenubarMenu, MenubarTrigger } from "./menubar";

export default function NavigationMenu() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <a href="/category/news" className="font-bold">
            <MenubarTrigger>뉴스</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/community" className="font-bold">
            <MenubarTrigger>커뮤니티</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/category/3" className="font-bold">
            <MenubarTrigger>팟벤</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/category/4" className="font-bold">
            <MenubarTrigger>오이갤</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/category/5" className="font-bold">
            <MenubarTrigger>이벤트</MenubarTrigger>
          </a>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
