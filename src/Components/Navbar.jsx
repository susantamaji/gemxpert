import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoverColor, setHoverColor] = useState(false);

    return (
        <div className="">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-[#e4b416] text-white">
                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <span className="text-red-500">gemx</span>
                    <span className="text-gray-900">pert</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 font-medium text-gray-100">
                    <li className="cursor-pointer hover:text-gray-800">Home</li>
                    <li className="cursor-pointer hover:text-gray-800">About Me</li>

                    {/* Dropdown on Hover */}
                    <li
                        className="relative cursor-pointer hover:text-gray-800 "
                        onMouseEnter={() => setHoverColor(true)}
                        onMouseLeave={() => setHoverColor(false)}
                    >
                        <div className="flex items-center gap-1">
                            Pages <ChevronDown size={16} />
                        </div>

                        {hoverColor && (
                            <div className="absolute top-8 left-0 z-50 bg-white shadow-lg rounded-md w-40 py-2">
                                <a className="block px-4 py-2 hover:bg-gray-100">Warm Colors</a>
                                <a className="block px-4 py-2 hover:bg-gray-100">Cool Colors</a>
                            </div>
                        )}
                    </li>

                    <li className="cursor-pointer hover:text-gray-800">Blog</li>
                    <li className="cursor-pointer hover:text-gray-800">Contact</li>
                    <li className="cursor-pointer hover:text-gray-800">Shop</li>

                </ul>

                {/* Icons */}
                <div className="hidden md:flex items-center gap-4 text-[25px]">
                    <a href="https://www.facebook.com/profile.php?id=61556966303789"><FaFacebook /></a>
                    <a href="https://x.com/GemstoneExpert?t=P-g2QheS5jG1N4lnnmlMKQ&#038;s=09"><FaSquareXTwitter /></a>
                    <a href="https://www.youtube.com/@gemstone_expert"> <FaYoutube /></a>
                    <a href="https://www.instagram.com/gemstone_expert_sujoy_das/"><FaInstagram /></a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden bg-[#10717d] text-white shadow-lg p-4 space-y-2">
                    <li>HOME</li>
                    <li>About Me</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            )}

        </div>
    );
}

export default Navbar;
