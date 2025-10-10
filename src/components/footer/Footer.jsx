import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#001931] text-neutral-content">
      <footer className="footer sm:footer-horizontal  pt-10 pb-5">
        <div className="w-11/12 lg:w-10/12 lg:flex justify-between mx-auto border-b-1 border-white/50 pb-4 ">
          <aside className="flex gap-2 items-center">
            <img className="w-10" src={logo} alt="" />
            <p className="font-bold">HERO.IO</p>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col text-xl gap-4">
              <a>
                <FaFacebookF />
              </a>
              <a>
                <FaLinkedinIn />
              </a>
              <a>
                <FaXTwitter />
              </a>
            </div>
          </nav>
        </div>
      </footer>
      <p className="text-center pb-4">Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
