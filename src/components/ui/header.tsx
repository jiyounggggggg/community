import { Button } from "./button";
import { Input } from "./input";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="">
      <div className="flex justify-between bg-white items-center my-1">
        <img src="/icons/menu-svgrepo-com.svg" alt="menu" className="h-6"/>
        <div className="flex items-center">
          <img src="/icons/login.svg" alt="login" className="h-6"/>
          <img src="/icons/menu-grid.svg" alt="quick-menu" className="h-6 ml-1 p-0.5"/>
        </div>
      </div>

      <a href="/" className="flex justify-center bg-white items-center my-1">
        <img src="/favicon.ico" alt="logo" className=""/>
      </a>

      <div className="relative flex items-center my-1">
        <input type="search" className="w-full h-10 border rounded-full px-4 pr-16" placeholder="Search" />
        <Button className="absolute right-0 bg-transparent rounded-full hover:bg-transparent">
          <img src="/icons/search.svg" alt="search" className="h-6"/>
        </Button>
      </div>
      
      {/* <Nav />
      <div className="flex gap-16">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search" />
          <Button type="submit">검색</Button>
        </div>
      </div> */}

      {/* <div className="">
        <a href="/category" className="font-bold">
          Login
        </a>
      </div> */}
    </header>
  );
}
