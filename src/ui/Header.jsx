"use client";
import Navbar from "@/components/navbar/Navbar";
import Navleft from "@/components/navbar/Navleft";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import AuthNav from "@/components/navbar/AuthNav";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function controlNavbar() {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY) {
          setShow("-translate-y-[80px]");
        } else {
          setShow("shadow-xl");
        }
      } else {
        setShow("translate-y-0");
      }

      setLastScrollY(window.scrollY);
    }
    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);
  return (
    <header
      className={`${show} sticky top-0 z-30 flex items-center bg-primary px-12 py-2 text-tertiary shadow-lg transition-all duration-700 `}
    >
      <Link href={"/"}>
        <Logo />
      </Link>
      <Navbar />
      <Navleft />
      <AuthNav />
    </header>
  );
};

export default Header;
