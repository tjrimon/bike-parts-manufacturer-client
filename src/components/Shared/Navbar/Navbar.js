import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  const mainMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        {user ? (
          <NavLink to="/dashboard">Dashboard</NavLink>
        ) : (
          <>
          </>
        )}
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
          <Link to="/">
            <h3 className="font-bold text-2xl text-center">
              Bike Parts Manufacture{" "}
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex font-bold">
          <ul className="menu menu-horizontal p-0">{mainMenu}</ul>
        </div>
        <div className="navbar-end  md:flex justify-end">
          <div className="dropdown dropdown-end dropdown-hover">
            <label
              tabIndex="0"
              className="text-[16px] text-white bg-primary py-3 px-4 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faUser} />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                {user ? (
                  <button
                    className="btn btn-primary text-white text-decoration-none"
                    onClick={handleSignOut}
                  >
                    sign out
                  </button>
                ) : (
                  <>
                    {" "}
                    <NavLink className="pl-1" to="/login">
                      Login
                    </NavLink>{" "}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
