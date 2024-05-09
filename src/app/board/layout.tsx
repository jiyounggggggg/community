import { ClerkProvider } from "@clerk/nextjs";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
