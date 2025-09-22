import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Footer from './Footer';


function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={"https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/527572536_122252362064232210_6732901580128629363_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6s9W16RRFhwQ7kNvwGYTeCN&_nc_oc=AdmUS5iBp6JBsOJeKTTaI31M3b0DGPPWb5cJAWWPo7femn_h0vmVh0bw4iyaGgyB39c&_nc_zt=23&_nc_ht=scontent-ccu1-1.xx&_nc_gid=BTimBa5FFQdj_Y1smyHA9A&oh=00_AfYqGk0lsoBmJXOd8Cdy_mfAtT2z71DDBfLZhvJxqPGswQ&oe=68D70809"} alt="Ship Export" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-cyan-500 transition duration-300">ABOUT US</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            We freight to all over the world The best logistic company,
            <span className="font-bold text-cyan-500 hover:text-white transition">FAST</span> and
            <span className="font-bold text-cyan-500 hover:text-white transition">SAFELY!</span>
          </p>
          {/* Breadcrumb */}
          <p className="mt-4 text-sm font-bold">
            <a href="#" className="text-cyan-500 hover:underline"> <NavLink to={"/"}>Home</NavLink></a> /
            <span className="text-gray-300"><NavLink>Our Services</NavLink></span>
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/cosmic_pattern.svg')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>

            <p className="text-gray-200 italic mb-4">
              "I am Sujoy Das, a seasoned Gemstone Expert, Aura Reader, and Chakra
              Analyst, with over 22 years of experience in the field of gemology
              and holistic well-being."
            </p>

            <p className="text-gray-200 mb-4">
              My journey with gemstones goes far beyond their external beauty.
            </p>

            <h3 className="text-xl font-semibold text-pink-700 mb-4">
              I Specialize in:
            </h3>

            <ul className="space-y-3 text-gray-200 font-medium">
              <li className="hover:text-indigo-600 transition">
                ♦ Authenticity & Quality Testing of natural gemstones.
              </li>
              <li className="hover:text-indigo-600 transition">
                ♦ Analyzing Energetic Vibrations that influence Aura & Chakras.
              </li>
              <li className="hover:text-indigo-600 transition">
                ♦ Counselling & Guidance for overall balance in life.
              </li>
            </ul>

            <p className="mt-6 text-gray-200">
              For me, gemstones are not just ornamental objects – they are carriers
              of natural energy that can transform one's life, mindset, and
              destiny. With my expertise, I bridge science with spirituality,
              offering people clarity, confidence, and authentic solutions.
            </p>

            <p className="mt-4 text-gray-200">
              Over the years, I have guided thousands of individuals worldwide,
              helping them find genuine gemstones, understand their aura-energy
              alignment, and achieve a healthier, more balanced lifestyle.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-20-at-08.01.16_9b9940601-1024x580.jpg" // replace with your image path
              alt="Sujoy Das"
              className="rounded-2xl shadow-xl transform hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-20-at-08.01.16_9b9940601-1024x580.jpg')` }} // update with your path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🌟 My Mission</h2>

          <p className="text-lg md:text-xl leading-relaxed mb-4">
            My mission is to bring authenticity, awareness, and healing through gemstones and energy science.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            I aim to empower individuals by:
          </p>

          <ul className="text-left list-disc list-inside mb-6 space-y-2 text-white text-base md:text-lg">
            <li>Providing genuine and scientifically tested gemstones</li>
            <li>Helping people understand their Aura and Chakra alignment</li>
            <li>Offering guidance that blends science with spirituality</li>
            <li>Promoting a balanced, conscious, and healthy lifestyle</li>
            <li>Transforming lives through energy-aligned gemstones</li>
          </ul>

          <p className="text-lg md:text-xl font-semibold">
            ✨ My ultimate mission is to guide people towards clarity, confidence, and holistic well-being.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-10">
            <a href="#" className="text-white hover:text-pink-400 transition transform hover:scale-110">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition transform hover:scale-110">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition transform hover:scale-110">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition transform hover:scale-110">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About