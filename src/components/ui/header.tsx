"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const SocialLoginButton = () => (
  <>
    <button className="mt-4 flex w-full items-center rounded bg-red-600 px-6 py-3 text-white opacity-100 hover:opacity-90">
      <FontAwesomeIcon icon={faGoogle} className=" mr-2 text-2xl text-white" />
      <span className="w-full text-center">Continue with Google</span>
    </button>
    <button className="mt-4 flex w-full items-center rounded bg-blue-600 px-6 py-3 text-white opacity-100 hover:opacity-90">
      <FontAwesomeIcon
        icon={faFacebook}
        className=" mr-2 text-2xl text-white"
      />
      <span className="w-full text-center">Continue with Facebook</span>
    </button>
  </>
);

const SignUpForm = () => (
  <form>
    <div className="mb-4">
      <label className="mb-2 block font-normal" htmlFor="email">
        Email
      </label>
      <input
        type="text"
        className="min-h-[48px] w-full rounded-lg border border-transparent bg-blue-50 p-2 px-4 leading-10 outline-none focus:border-blue-700 dark:bg-slate-800"
        id="email"
      />
    </div>
    <div className="mb-4">
      <label className="mb-2 block font-normal" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        className="min-h-[48px] w-full rounded-lg border border-transparent bg-blue-50 p-2 px-4 leading-10 outline-none focus:border-blue-700 dark:bg-slate-800"
        id="password"
      />
    </div>

    {/* <div className="mb-3">
			<input className="mr-2" type="checkbox" htmlFor="remember-me" />
			<label className="font-normal" htmlFor="remember-me">
				Keep me up to date on class events and new releases
			</label>
		</div> */}
    <button
      type="submit"
      className="w-full rounded bg-blue-500 px-8 py-3 text-white"
    >
      CREATE ACCOUNT
    </button>

    <div className="mt-4 text-center">
      <h6 className="mb-3">
        Already have an account?
        <a
          href="src/components/bootstrap/categories/signupForms/SignUp12#!"
          className="underline"
        >
          Log in.
        </a>
      </h6>
      <p className="mb-0">
        By signing up or creating an account, you agree to our <br />
        <a
          href="src/components/bootstrap/categories/signupForms/SignUp12#!"
          className="underline"
        >
          Privacy Policy and Terms &amp; Service.
        </a>
      </p>
    </div>
  </form>
);

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showMenu = () => {
    let menu = document.getElementById("navMain") as HTMLDivElement;
    menu.classList.remove("close");
    menu.classList.add("open");
  };

  return (
    <header>
      <ul className="flex justify-between bg-white py-3">
        <li className="flex items-center">
          <button
            onClick={() => showMenu()}
            className="rounded p-1 hover:bg-slate-200"
          >
            <img src="/icons/menu-svgrepo-com.svg" alt="menu" className="h-6" />
          </button>
        </li>
        <li>
          <ul className="flex">
            <li className="flex items-center">
              {/* <button
                className="rounded p-1 hover:bg-slate-200"
                onClick={handleShow}
              >
                <img src="/icons/login.svg" alt="login" className="h-6" />
              </button> */}
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </li>
            <li className="flex items-center">
              <button className="rounded p-1 hover:bg-slate-200">
                <img
                  src="/icons/menu-grid.svg"
                  alt="quick-menu"
                  className="h-6 p-0.5"
                />
              </button>
            </li>
          </ul>
        </li>
      </ul>

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

      <div className={show ? "" : "hidden"}>
        <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-black opacity-50"></div>
          <div className="fixed w-full max-w-lg rounded bg-white p-5 shadow">
            <button
              className="absolute right-0 top-0 z-20 mr-4 mt-4"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="relative p-0">
              <div className="grid grid-cols-12 justify-center py-4">
                <div className="col-span-12">
                  <div className="md:p-5">
                    <h2 className="m-2 p-2 text-center  text-3xl font-bold leading-6">
                      Create Account
                    </h2>

                    {/* Social Login Buttons */}
                    <SocialLoginButton />

                    <div className="relative">
                      <hr className="my-8 border-t border-gray-300" />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 dark:bg-gray-900">
                        Or
                      </span>
                    </div>

                    {/* form */}
                    <SignUpForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
