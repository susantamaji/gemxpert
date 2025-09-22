import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import { FaGem } from 'react-icons/fa';

const cards = [
  {
    image: 'https://gemxpert.in/wp-content/uploads/2025/09/Products-Gallery-2.webp', // Replace with your actual image URL or path
    title: '“All that glitters is not gold “',
    description: 'রত্নপাথরকে শুধু তার বাহ্যিক চাকচিক্য দেখে তার মূল্য নির্ধারণ করা অনুচিত। প্রায়শই কিছু পাথর দেখতে...',
    buttonText: 'Learn more',
    lang: 'bn',
  },
  {
    image: 'https://gemxpert.in/wp-content/uploads/2025/08/1756827016652-1024x1024.png', // Replace with your actual image URL or path
    title: 'Hello Gemstone enthusiast!',
    description:
      'Crystals and gemstones have long been revered for their beauty and their purported healing properties. The...',
    buttonText: 'Learn more',
    lang: 'en',
  },
];

function Blog() {


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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-cyan-500 transition duration-300">Blog</h1>
          {/* <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            We freight to all over the world The best logistic company,
            <span className="font-bold text-cyan-500 hover:text-white transition">FAST</span> and
            <span className="font-bold text-cyan-500 hover:text-white transition">SAFELY!</span>
          </p> */}
          {/* Breadcrumb */}
          <p className="mt-4 text-sm font-bold">
            <a href="#" className="text-cyan-500 hover:underline"> <NavLink to={"/"}>Home</NavLink></a> /
            <span className="text-gray-300"><NavLink>Our Services</NavLink></span>
          </p>
        </div>
      </section>

      <div className="h-[500px] bg-gradient-to-br from-blue-100 to-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[rgb(72,202,255)] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-xl w-full h-52 object-cover"
              />
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold flex items-center mb-2">
                  <FaGem className="mr-2 text-white text-lg" />
                  {card.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed">{card.description}</p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform duration-200">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog