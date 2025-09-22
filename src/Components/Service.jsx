import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'


function Service() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-cyan-500 transition duration-300">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            We freight to all over the world The best logistic company,
            <span className="font-bold text-cyan-500 hover:text-white transition">FAST</span> and
            <span className="font-bold text-cyan-500 hover:text-white transition">SAFELY!</span>
          </p>
          {/* Breadcrumb */}
          <p className="mt-4 text-sm font-bold">
            <a href="#" className="text-cyan-500 hover:underline"> <NavLink to={"/"}>Home</NavLink></a> /
            <span className="text-gray-300"><NavLink to={"/contact"}>Contact</NavLink></span>
          </p>
        </div>
      </section>


      {/* our Services */}
      <section className="py-16 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-200 tracking-wide drop-shadow-md">
            OUR GEMSTONE COLLECTION
          </h2>
          <p className="text-gray-300 mt-4 px-6 md:px-40">
            GemXpert brings you an exclusive selection of natural gemstones – Violet Stone,
            Panna (Emerald), Amethyst, Probal (Red Coral), Blue Sapphire, and Ruby.
            Every stone is certified, authentic, and chosen for its beauty, elegance,
            and lasting value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="container mx-auto px-6 md:px-20 grid gap-10 md:grid-cols-3">

          {/* Violet Stone */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition relative">
            <div className="relative group">
              <img
                src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-14.28.16_fb459a9c.jpg"
                alt="Violet Stone"
                className="w-full h-60 object-cover group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-800/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[rgb(128,0,255)]">Violet Stone</h3>
              <p className="text-gray-600 mt-2">
                A stone of peace and creativity, Violet Stones are loved for their rich
                color and spiritual power.
              </p>
              <a href="#" className="mt-4 inline-block text-[rgb(128,0,255)] font-semibold hover:underline">EXPLORE →</a>
            </div>
          </div>

          {/* Panna */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition relative">
            <div className="relative group">
              <img
                src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.17.56_44352893.jpg"
                alt="Panna Stone"
                className="w-full h-60 object-cover group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[rgb(0,128,0)]">Panna (Emerald)</h3>
              <p className="text-gray-600 mt-2">
                The gemstone of prosperity and wisdom, Emerald promotes growth, clarity, and balance.
              </p>
              <a href="#" className="mt-4 inline-block text-[rgb(0,128,0)] font-semibold hover:underline">EXPLORE →</a>
            </div>
          </div>

          {/* Amethyst */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition relative">
            <div className="relative group">
              <img
                src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.18.08_abf93a14.jpg"
                alt="Amethyst Stone"
                className="w-full h-60 object-cover group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[rgb(75,0,130)]">Amethyst Stone</h3>
              <p className="text-gray-600 mt-2">
                A calming gemstone that encourages balance, harmony, and inner strength.
              </p>
              <a href="#" className="mt-4 inline-block text-[rgb(75,0,130)] font-semibold hover:underline">EXPLORE →</a>
            </div>
          </div>

          {/* Probal */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition relative">
            <div className="relative group">
              <img
                src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.26.20_c00fc177-e1756313653798.jpg"
                alt="Probal Stone"
                className="w-full h-60 object-cover group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-800/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[rgb(220,20,60)]">Probal (Red Coral)</h3>
              <p className="text-gray-600 mt-2">
                Red Coral boosts confidence, vitality, and protects against negative energies.
              </p>
              <a href="#" className="mt-4 inline-block text-[rgb(220,20,60)] font-semibold hover:underline">EXPLORE →</a>
            </div>
          </div>

          {/* Sapphire */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition relative">
            <div className="relative group">
              <img
                src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-14.28.16_fb459a9c.jpg"
                alt="Blue Sapphire"
                className="w-full h-60 object-cover group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[rgb(0,0,255)]">Blue Sapphire</h3>
              <p className="text-gray-600 mt-2">
                A stone of wisdom and wealth, Sapphire brings clarity, focus, and prosperity.
              </p>
              <a href="#" className="mt-4 inline-block text-[rgb(0,0,255)] font-semibold hover:underline">EXPLORE →</a>
            </div>
          </div>

          {/* Ruby */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition relative">
            <div className="relative group">
              <img
                src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.18.08_abf93a14.jpg"
                alt="Ruby Stone"
                className="w-full h-60 object-cover group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-800/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[rgb(255,0,100)]">Ruby Stone</h3>
              <p className="text-gray-600 mt-2">
                Known as the king of gemstones, Ruby enhances passion, love, and leadership qualities.
              </p>
              <a href="#" className="mt-4 inline-block text-[rgb(255,0,100)] font-semibold hover:underline">EXPLORE →</a>
            </div>
          </div>
        </div>
      </section>

<Footer/>


    </div>
  )
}

export default Service