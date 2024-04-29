import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";

export default function Nav() {
    return (
        <Sheet>
        <SheetTrigger>메뉴</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>최근 방문한 게시판</SheetTitle>
            <SheetDescription>최근 방문한 게시판이 없습니다.</SheetDescription>
            <SheetTitle>게이머 존</SheetTitle>
            <SheetDescription>카툰갤러리</SheetDescription>
            <SheetDescription>동영상 갤러리</SheetDescription>
            <SheetDescription>공지사항 & 이벤트</SheetDescription>
            <SheetDescription>기사제보 및 건의</SheetDescription>
            <SheetDescription>인벤 어플 제보 및 건의</SheetDescription>
            <SheetDescription>인벤 스크립트 게시판</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }
  