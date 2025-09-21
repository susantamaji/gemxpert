import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 text-gray-300 py-12 md:py-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("/images/dot_pattern.svg")' }} />
                <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <img src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-26-at-18.05.52_053ac247.jpg" alt="Gemexpert Logo" className="w-20 h-20 mb-4 rounded-full" />
                        <p className="text-sm leading-relaxed">
                            A gemstone is only effective if it's selected and placed in harmony with the person's Aura (Electromagnetic Field) and Chakra.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"><FaFacebook /></a>
                            <a href="#" className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500"><FaTwitter /></a>
                            <a href="#" className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-lg mb-4 text-white">Useful Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">About Me</a></li>
                            <li><a href="#" className="hover:text-white">Service</a></li>
                            <li><a href="#" className="hover:text-white">Shop</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-lg mb-4 text-white">Contact Information</h4>
                        <p className="mb-4 text-sm">Feel free to contact &amp; reach us !!</p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                <span>ROTONO BIPONI<br />141 Mahatma Gandhi Road, Eastern Plaza Building 4th floor,Kolkata 70007{'{'}Barabazar{'}'}</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.95 21c-2.43.3-4.91-.7-7.05-2.84-2.14-2.14-3.14-4.62-2.84-7.05l2.09-2.09c.27-.27.35-.67.22-.9.16-.65.24-1.34.24-2.03V3.5c0-.55-.45-1-1-1h-3.5c-.55 0-1 .45-1 1C3.74 21 11.26 21 11.26 21c.55 0 1-.45 1-1V16c0-.69.08-1.38.24-2.03.14-.23.05-.63-.22-.9l-2.09-2.09c-.27-.27-.36-.67-.22-.9z" /></svg>
                                <span>+91 79983 54708</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                <span>sujoydas.gem@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8 pt-4 border-t border-gray-700 text-sm">
                    Copyright © 2025 GEMEXPERT.All rights reserved.
                <p>DESIGNED &amp; DEVELOPED BY: <span className="text-yellow-400 hover:text-yellow-500">LK TECHNOLOGY</span></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer