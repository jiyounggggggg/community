import { Button } from "./button";
import { Input } from "./input";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between bg-gray-800 p-4 text-white">
      <Nav />
      <div className="flex gap-16">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search" />
          <Button type="submit">검색</Button>
        </div>
      </div>
      <div className="">
        <a href="/category" className="font-bold">
          Login
        </a>
      </div>
    </header>
  );
}
