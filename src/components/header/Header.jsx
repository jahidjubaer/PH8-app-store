import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

import { CgMenuLeftAlt } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const listNav = (
    <>
      <Link>
        <li>Home</li>
      </Link>
      <Link>
        <li>Apps</li>
      </Link>
      <Link>
        <li>Installation</li>
      </Link>
    </>
  );
  return (
    <div className=" bg-white shadow-sm">
      <div className="navbar lg:w-10/12 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <CgMenuLeftAlt></CgMenuLeftAlt>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* add list  */}
              {listNav}
            </ul>
          </div>
          <div className="flex">
            <img className="w-10" src={logo} alt="" />
            <a className="btn btn-ghost p-1 text-xl font-bold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal space-x-8 px-1">
            {/* list */}
            {listNav}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/jahidjubaer/" target="_blank">
            <button className="btn py-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl flex items-center gap-2">
              <FaGithub /> Contribute
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
