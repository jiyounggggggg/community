import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/ui/header";
import NavigationMenu from "~/components/ui/navigationMenu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "커뮤니티 이름입니다",
  description: "한번 만들어보죠",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        <NavigationMenu />
        {children}
      </body>
    </html>
  );
}
