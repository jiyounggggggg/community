import { Menubar, MenubarMenu, MenubarTrigger } from "~/components/ui/menubar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

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

export function Board() {
  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
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
      </Table>
    </>
  );
}

export function CommunityNav() {
  return (
    <>
      <Menubar>
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
      </Menubar>
    </>
  );
}

export default function Page() {
  return (
    <>
      <CommunityNav />
      <div className="bg-orange-500">배너입니다</div>
      <Board />
    </>
  );
}
