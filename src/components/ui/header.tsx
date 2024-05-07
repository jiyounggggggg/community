"use client";

export default function Header() {

  const slideRight = () => {
   let slider = document.getElementById('nav') as HTMLDivElement; 
   slider.classList.remove('close');
   slider.classList.add('open');
  }

  return (
    <header className="">
      <div className="my-1 flex items-center justify-between bg-white">
        <button onClick={() => slideRight()}>
          <img src="/icons/menu-svgrepo-com.svg" alt="menu" className="h-6" />
        </button>
        <div className="flex items-center">
          <img src="/icons/login.svg" alt="login" className="h-6" />
          <img
            src="/icons/menu-grid.svg"
            alt="quick-menu"
            className="ml-1 h-6 p-0.5"
          />
        </div>
      </div>

      <a href="/" className="my-1 flex items-center justify-center bg-white">
        <img src="/favicon.ico" alt="logo" className="" />
      </a>

      <div className="relative my-1 flex items-center">
        <input
          type="search"
          className="h-10 w-full rounded-full border px-4 pr-16"
          placeholder="Search"
        />
        <button className="absolute right-0 mr-3 rounded-full bg-transparent hover:bg-transparent">
          <img src="/icons/search.svg" alt="search" className="h-6" />
        </button>
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
