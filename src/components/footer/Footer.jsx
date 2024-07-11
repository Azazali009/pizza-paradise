import { smooch } from "@/app/helper/stylishFont";
import Logo from "@/ui/Logo";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-12  bg-neutral  p-10 text-white shadow-2xl">
      <aside className=" flex flex-col  justify-center">
        <Logo />
        <p className={`${smooch.className} text-2xl text-primary`}>
          Pizza paradise
          <br />
          Providing reliable service for 2 years
        </p>
      </aside>
      <div className="divider divider-horizontal m-0 h-40 gap-0 opacity-40 before:w-[1px] before:bg-primary after:w-[1px] after:bg-primary"></div>

      <nav>
        <header className="footer-title">Services</header>
        <a className="link-hover link">Branding</a>
        <a className="link-hover link">Design</a>
        <a className="link-hover link">Marketing</a>
        <a className="link-hover link">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link-hover link">About us</a>
        <a className="link-hover link">Contact</a>
        <a className="link-hover link">Jobs</a>
        <a className="link-hover link">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link-hover link">Terms of use</a>
        <a className="link-hover link">Privacy policy</a>
        <a className="link-hover link">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
