import React from "react";
import ArticleList from "~/app/_component/articlelist";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import type { Metadata } from 'next';
 
// about 페이지에서 title 설정 예시
export const metadata: Metadata = {
  title: 'About',
};

export default function CategoryPage({
  params: { id: id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="text-center text-2xl text-black">
      {id}번 글 입니다.
      <div className="text-center text-2xl text-black">
        <ArticleList
          category={id}
          articles={[
            "첫번째 글 입니다.",
            "두번째 글 입니다.",
            "세번째 글 입니다.",
          ]}
        ></ArticleList>
      </div>
    </div>
  );
}
