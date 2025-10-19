import { Link, Links, NavLink } from "react-router";
import logo from "../../assets/logo.png";

import { CgMenuLeftAlt } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  // active btn calss
  const baseClass =
    "hover:text-[#632EE3] text-lg font-medium transition-all duration-200";
  const activeClass =
    "text-[#632EE3] text-lg font-bold border-b-2 border[#632EE3]";

  // navbar link
  const listNav = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? activeClass : baseClass}`}
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) => `${isActive ? activeClass : baseClass}`}
      >
        <li>Apps</li>
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) => `${isActive ? activeClass : baseClass}`}
      >
        <li>Installation</li>
      </NavLink>
    </>
  );
  return (
    <div className=" bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar lg:w-10/12 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-1 text-2xl font-bold text-[#632EE3] lg:hidden">
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
          <Link to="./">
            <div className="flex">
              <img className="w-10" src={logo} alt="" />
              <button className="btn btn-ghost p-1 text-xl font-bold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent hover:border-none">
                HERO.IO
              </button>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal space-x-8 px-1">
            {/* list */}
            {listNav}
          </ul>
        </div>
        <div className="sm:navbar-end">
          <a href="https://github.com/jahidjubaer/" target="_blank">
            <button className="btn lg:py-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl flex items-center gap-2">
              <FaGithub /> Contribute
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
