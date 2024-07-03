import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/logodark.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>About us</a>
      </li>
    </>
  );
  return (
    <div className="navbar pt-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="w-24 object-cover bg-cover bg-center">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-8  font-inter font-normal menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="flex space-x-2 items-center border-2 px-4 py-2 border-[#343268]  rounded-xl">
          <span className="font-inter  text-[#020043] font-medium">
            Appointment
          </span>
          <span>
            <GoArrowUpRight size={25} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
