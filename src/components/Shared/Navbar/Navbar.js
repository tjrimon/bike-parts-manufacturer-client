import {
  faPlus,
  faSearch,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  const mainMenu = (
    <>
      <li tabIndex="0">
        <a to="/" className="justify-between">
          Home
          <FontAwesomeIcon icon={faPlus} className="text-sm ml-[-8px]" />
        </a>
        <ul className="p-2 font-normal bg-white">
          <li>
            <a>Home 1</a>
          </li>
          <li>
            <a>Home 2</a>
          </li>
          <li>
            <a>Home 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a>About</a>
      </li>
      <li tabIndex="0">
        <a className="justify-between">
          Services
          <FontAwesomeIcon icon={faPlus} className="text-sm ml-[-8px]" />
        </a>
        <ul className="p-2 font-normal bg-white">
          <li>
            <a>Service 1</a>
          </li>
          <li>
            <a>Service 2</a>
          </li>
          <li>
            <a>Service 3</a>
          </li>
        </ul>
      </li>
      <li tabIndex="0">
        <a className="justify-between">
          Pages
          <FontAwesomeIcon icon={faPlus} className="text-sm ml-[-8px]" />
        </a>
        <ul className="p-2 font-normal bg-white">
          <li>
            <a>Page 1</a>
          </li>
          <li>
            <a>Page 2</a>
          </li>
          <li>
            <a>Page 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a>News</a>
      </li>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      {/* Top Navbar  */}
      <div className="hidden md:block" id="home">
        <div className="h-[40px] flex justify-center items-center px-10 bg-gray-100">
          <div className="navbar p-0 m-0">
            <div className="flex-1">
              <p className="text-second">
                <b>Limited Time Offer:</b> Shop online and get free no-contact
                deliver
              </p>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0 text-secondary">
                <li>
                  <a className="py-0 text-sm font-bold">FAQ</a>
                </li>
                <li>
                  <a className="py-0 text-sm font-bold">Careers</a>
                </li>
                <li tabIndex="0">
                  <a className="py-0 text-sm">
                    English
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-gray-100 text-secondary">
                    <li>
                      <a className="">Spanish</a>
                    </li>
                    <li>
                      <a className="">Bangla</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* main nav section  */}

      <div className="navbar bg-white py-6 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              {mainMenu}
            </ul>
          </div>
          <a href="#">
            <h3 className="font-bold text-2xl text-center">
              Bike Parts Manufacture{" "}
            </h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex font-bold">
          <ul className="menu menu-horizontal p-0">{mainMenu}</ul>
        </div>
        <div className="navbar-end  md:flex justify-end">
          <div class="dropdown dropdown-end dropdown-hover">
            <level
              tabindex="0"
              className="text-[16px] text-white bg-primary py-3 px-4 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faUser} />
            </level>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
