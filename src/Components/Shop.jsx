import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer';


const products = [
  {
    image: 'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-14.28.16_fb459a9c.jpg', // Placeholder image URL
    name: 'The Yashasvini Om Ring',
    price: '₹ 1,45,442',
    discount: '10% OFF ON MAKING CHARGES',
  },
  {
    image: 'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.17.56_44352893.jpg', // Placeholder image URL
    name: 'The Gianna Ring',
    price: '₹ 74,364',
    discount: '80% OFF ON MAKING CHARGES',
  },
  // {
  //   image: 'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.18.08_abf93a14.jpg', // Placeholder image URL for the large image
  //   name: 'CHECKMATE COLLECTION',
  //   isLarge: true,
  // },
  {
    image: 'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.26.20_c00fc177-e1756313653798.jpg', // Placeholder image URL
    name: 'The Tryst Ring',
    price: '₹ 35,465',
    discount: '10% OFF ON MAKING CHARGES',
  },
  {
    image: 'https://5.imimg.com/data5/HO/EB/MY-3915550/emerald-stone-500x500.png', // Placeholder image URL
    name: 'The Kaira Ring',
    price: '₹ 22,500',
    discount: '40% OFF ON MAKING CHARGES',
  },
  {
    image: 'https://th.bing.com/th/id/R.bc2d84d7ed2a7c204d7c3be8cb8ba0bc?rik=js3bOTOmWu6bVw&riu=http%3a%2f%2fwww.gemselect.com%2fgraphics%2fpurple-violet-amethyst-iolite-tanzanite-rubellite-sapphire-spinel.jpg&ehk=cLb5%2b6X1sGFB%2fuWuTr04YoBmiJQo6cj5gkpIiR6XbpM%3d&risl=&pid=ImgRaw&r=0', // Placeholder image URL
    name: 'The Elara Ring',
    price: '₹ 18,950',
    discount: '40% OFF ON MAKING CHARGES',
  },
];

const filters = [
  {
    title: 'Price',
    options: [
      { label: 'Below ₹ 10,000', count: 275 },
      { label: '₹ 10,000 - ₹ 20,000', count: 729 },
      { label: '₹ 20,000 - ₹ 30,000', count: 704 },
      { label: '₹ 30,000 - ₹ 40,000', count: 840 },
      { label: '₹ 40,000 - ₹ 50,000', count: 830 },
      { label: '₹ 50,000 and Above', count: 5070 },
    ],
  },
  {
    title: 'Type',
    options: [
      { label: 'Earrings', count: 2539 },
      { label: 'Rings', count: 2279 },
      { label: 'Pendants', count: 833 },
      { label: 'Necklaces', count: 635 },
      { label: 'Bangles', count: 512 },
      { label: 'Bracelets', count: 337 },
    ],
  },
];


function Shop() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 z-30 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={"https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/527572536_122252362064232210_6732901580128629363_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6s9W16RRFhwQ7kNvwGYTeCN&_nc_oc=AdmUS5iBp6JBsOJeKTTaI31M3b0DGPPWb5cJAWWPo7femn_h0vmVh0bw4iyaGgyB39c&_nc_zt=23&_nc_ht=scontent-ccu1-1.xx&_nc_gid=BTimBa5FFQdj_Y1smyHA9A&oh=00_AfYqGk0lsoBmJXOd8Cdy_mfAtT2z71DDBfLZhvJxqPGswQ&oe=68D70809"} alt="Ship Export" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-cyan-500 transition duration-300">Shop</h1>
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


      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-sans">
        {/* Filters Section */}
        <div className="w-full lg:w-1/4 p-4 bg-white shadow-md">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">FILTERS</h3>
            {filters.map((section, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-md font-medium text-gray-700">{section.title}</h4>
                {section.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded-sm text-blue-500 focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-600">
                      {option.label} ({option.count})
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content & Product Grid */}
        <div className="w-full lg:w-3/4 p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
            <div className="flex space-x-2">
              <h2 className="text-xl font-bold text-gray-800">JEWELLERY</h2>
              <span className="text-gray-500">B448 Designs</span>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                All
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
                Designs in Store
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
                Pincode
              </button>
              <select className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
                <option>Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 ${product.isLarge ? 'lg:col-span-1 row-span-2' : ''}`}
              >
                {/* Product Card Content */}
                <div className="relative">
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded-full z-10">
                      {product.discount}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-auto object-cover ${product.isLarge ? 'h-full' : ''}`}
                  />
                  {!product.isLarge && (
                    <div className="absolute top-2 right-2 p-1 rounded-full cursor-pointer hover:bg-rose-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400 hover:text-rose-500 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {!product.isLarge && (
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      {product.price}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

<Footer/>


    </div>
  )
}

export default Shop