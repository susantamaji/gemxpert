import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverColor, setHoverColor] = useState(false);
  const location = useLocation(); // ✅ active route tracking

  // 🔹 Reusable class for underline animation
  const underlineClass = (isActive) =>
    `relative px-1 transition-colors duration-300 ${
      isActive ? "text-yellow-300 font-bold" : "text-white"
    } after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <div>
      {/* Navbar */}
      <nav className="flex sticky top-0 items-center z-50 justify-between px-6 py-4 shadow-md bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-red-500">gemx</span>
          <span className="text-gray-900">pert</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-100">
          <NavLink to="/" className={({ isActive }) => underlineClass(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => underlineClass(isActive)}
          >
            About Me
          </NavLink>

          {/* Dropdown on Hover */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setHoverColor(true)}
            onMouseLeave={() => setHoverColor(false)}
          >
            <div className="flex items-center gap-1 hover:text-yellow-300">
              Pages <ChevronDown size={16} />
            </div>

            {hoverColor && (
              <div className="absolute top-6 left-0 z-50 bg-blue-950 shadow-lg rounded-md w-40 py-2">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${underlineClass(isActive)}`
                  }
                >
                  Service
                </NavLink>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${underlineClass(isActive)}`
                  }
                >
                  Testimonials
                </NavLink>
              </div>
            )}
          </li>

          <NavLink
            to="/blog"
            className={({ isActive }) => underlineClass(isActive)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => underlineClass(isActive)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => underlineClass(isActive)}
          >
            Shop
          </NavLink>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4 text-[25px]">
          <a href="https://www.facebook.com/profile.php?id=61556966303789">
            <FaFacebook />
          </a>
          <a href="https://x.com/GemstoneExpert?t=P-g2QheS5jG1N4lnnmlMKQ&#038;s=09">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.youtube.com/@gemstone_expert">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/gemstone_expert_sujoy_das/">
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 transition-transform duration-300"
        >
          {menuOpen ? (
            <X
              size={28}
              className="transform rotate-90 transition-transform duration-300"
            />
          ) : (
            <Menu
              size={28}
              className="transform rotate-0 transition-transform duration-300"
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden fixed top-10 left-0 h-full w-64 bg-[#0d4a52] text-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-4 flex flex-col font-bold mt-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>HOME</li>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>About Me</li>
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Shop</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
