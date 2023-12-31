import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {


 const dark= localStorage.getItem('darkMode');



  const [isDarkMode, setIsDarkMode] = useState(dark?true:false)
  const NavItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/booking">Booking</Link>
      </li>
      <li>
        <Link to="/house">House</Link>
      </li>
      <li>
        <Link to="/blogs">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );


  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.removeItem('darkMode');
    } else {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('darkMode', 'enabled');
    }
    setIsDarkMode(!isDarkMode);
  }


  return (
    <div className="navbar bg-base-100 shadow ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItems}
        </ul>
      </div>
      <div className="navbar-end">
      <button onClick={toggleDarkMode} className="mx-3 text-lg">
      
            {
              isDarkMode  ? <FaSun className="text-white"></FaSun> : <FaMoon></FaMoon>
            }
    
        </button>


        <Link to={'/login'} className="btn-secondary">Login</Link>


      </div>
    </div>
  );
};

export default Navbar;
