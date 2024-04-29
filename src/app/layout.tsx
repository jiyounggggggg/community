import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "커뮤니티 이름입니다",
  description: "한번 만들어보죠",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function TopNav() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4 text-white">
      <div className="">
        <a href="/" className="font-bold">
          {metadata.title}
        </a>
      </div>
      <div className="flex gap-16">
        <a href="/category/1" className="font-bold">
          1
        </a>
        <a href="/category/2" className="font-bold">
          2
        </a>
        <a href="/category/3" className="font-bold">
          3
        </a>
        <a href="/category/4" className="font-bold">
          4
        </a>
      </div>
      <div className="">
        <a href="/category" className="font-bold">
          Login
        </a>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
