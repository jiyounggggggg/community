import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-black opacity-50"></div>
      <div className="flex justify-center">
        <SignUp path="/sign-up" />
      </div>
    </>
  );
}
