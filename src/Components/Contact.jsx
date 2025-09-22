import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelopeOpenText, FaClock } from 'react-icons/fa';
import Footer from './Footer';

const contactData = [
  {
    icon: <FaPhoneAlt className="text-3xl text-purple-500 group-hover:text-pink-500 transition duration-300" />,
    title: 'AT YOUR SERVICE..',
    label: 'Call Us On',
    content: 'Mob : (+91) 79983 54708',
  },
  {
    icon: <FaEnvelopeOpenText className="text-3xl text-purple-500 group-hover:text-pink-500 transition duration-300" />,
    title: 'DROP A LINE..',
    label: 'Mail Address',
    content: 'sujoydas.gem@gmail.com',
  },
  {
    icon: <FaClock className="text-3xl text-purple-500 group-hover:text-pink-500 transition duration-300" />,
    title: 'SERVICE HOURS..',
    label: 'Opening Time',
    content: 'Mon – Fri : 10am – 10pm\nSunday (Closed)',
  },
];
function Contact() {
  return (
    <>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-cyan-500 transition duration-300">Contact Us</h1>
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


      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-white shadow-md text-sm font-semibold tracking-wide text-gray-700">
            <span className="text-blue-500 mr-2">●</span>
            <span className="text-gray-800">CONTACT INFO</span>
            <span className="text-blue-500 ml-2">●</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h4 className="uppercase text-sm font-semibold text-purple-600 mb-1">{item.title}</h4>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">{item.label}</h3>
              <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-white">
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-blue-500 text-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              {/* Replace with your headphone icon */}
              <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 00-8 8v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H8v-1a1 1 0 011-1h2a1 1 0 011 1v1h2a2 2 0 002-2v-2a8 8 0 00-8-8zM10 4a6 6 0 016 6v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a3 3 0 00-3-3h-2a3 3 0 00-3 3v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a6 6 0 016-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Chat With WhatsApp</h3>
            <p className="text-sm italic mb-4">
              "My life's work has been dedicated to exploring this science and harnessing its power to inspire profound transformations in people's lives."
            </p>
            <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              LET'S CHAT
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/3 p-4 flex flex-col lg:flex-row items-start lg:space-x-8 mt-8 lg:mt-0">
          {/* Person's image */}
          <div className="w-full lg:w-auto flex justify-center lg:block">
            {/* Add the image of the person here */}
            {/*  */}
          </div>

          {/* Contact form */}
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="uppercase text-sm">Contact us</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 leading-tight">
              <span className="text-purple-600">Reach &</span> Get In Touch
            </h2>

            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name.." className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Your Email.." className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Your Number.." className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Your Subject.." className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <textarea placeholder="Message" rows="6" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>


    </div>

      {/* <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471549.27002832975!2d88.357151!3d22.579901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277d5c7850e9f%3A0x136ad70ad33ef068!2sRotno%20Biponi!5e0!3m2!1sen!2sus!4v1758537785037!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1678511690034!2d88.35457567493746!3d22.57990047948646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277d5c7850e9f%3A0x136ad70ad33ef068!2sRotno%20Biponi!5e1!3m2!1sen!2sin!4v1758537941632!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    <Footer/>
    </>
  )
}

export default Contact