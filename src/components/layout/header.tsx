"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComments,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import AuthModal from "../AuthModal/AuthModal";
import Profile from "../Profile/Profile";

export default function Header() {
  const showMenu = () => {
    let menu = document.getElementById("navMain") as HTMLDivElement;
    menu.classList.remove("close");
    menu.classList.add("open");
  };

  // 로그인/회원가입
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  // 사용자
  const [user, setUser] = useState(false);
  const token = localStorage.getItem("access");
  console.log("token: ", token);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access");
      if (token) {
        setUser(true);
      }
    };

    fetchUser();
  }, [token]);

  // 로그아웃
  const logout = () => {
    localStorage.removeItem("access");
    setUser(false);
  };

  return (
    <>
      <header>
        <ul className="flex justify-between bg-white py-3">
          <li className="flex items-center">
            <button
              onClick={() => showMenu()}
              className="rounded p-1 hover:bg-slate-200"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
          <li>
            <ul className="flex">
              {user ? (
                <li className="mx-1 flex items-center">
                  <button onClick={logout}>
                    <Profile src="/noidea.jpeg" alt="Profile Image" size={35} />
                  </button>
                </li>
              ) : (
                <li className="mx-1 flex items-center">
                  <button onClick={openAuthModal}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                  </button>
                </li>
              )}

              {/* <li className="flex items-center">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </li> */}

              <li className="flex items-center">
                <button className="rounded p-1 hover:bg-slate-200">
                  <FontAwesomeIcon icon={faComments} />
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
      </header>
      {isAuthModalOpen && <AuthModal onClose={closeAuthModal} />}
    </>
  );
}
