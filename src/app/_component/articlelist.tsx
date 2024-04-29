import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface ArticleListProps {
  articles: string[];
  category: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, category }) => {
  return (
    <Table className="mx-auto w-96 ">
      {/* <TableCaption>글 목록</T  ableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Index</TableHead>
          <TableHead className="text-center">Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articles.map((article, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <a
                href={"/category/" + category + "/" + (index + 1)}
                className="font-bold"
              >
                {article}
              </a>
            </TableCell>
          </TableRow>
        ))}
        {/* <TableRow>
         <TableCell className="font-medium">INV001</TableCell>
         <TableCell>Paid</TableCell>
         <TableCell>Credit Card</TableCell>
         <TableCell className="text-right">$250.00</TableCell>
       </TableRow> */}
      </TableBody>
    </Table>
  );
};

export default ArticleList;
