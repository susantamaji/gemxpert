import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer';



const testimonials = [
  {
    name: 'John Smith',
    role: 'Clients',
    text: 'Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.',
    avatar: 'https://img.freepik.com/premium-photo/hyperrealistic-photo-adult-asian-man_1087408-2978.jpg',
  },
  {
    name: 'Miley Cyrus',
    role: 'Supervisor',
    text: 'Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.',
    avatar: 'https://i.pinimg.com/originals/de/97/55/de975595890f0ed79238dc4d61532777.jpg',
  },
  {
    name: 'Thomas Walter',
    role: 'Customer',
    text: 'Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg',
  },
  {
    name: 'William Watt',
    role: 'Clients',
    text: 'Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'James Scott',
    role: 'Supervisor',
    text: 'Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.',
    avatar: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Sally Watson',
    role: 'Customer',
    text: 'Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];



const stats = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m-5 8h4a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2zm0-4V8m0 4V8m0 4h4m-4 4h4m0-4V8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m-5 8h4a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2zm0-4V8m0 4V8m0 4h4m-4 4h4m0-4V8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m-5 8h4a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2zm0-4V8m0 4V8m0 4h4m-4 4h4m0-4V8"
        />
      </svg>
    ),
    value: '3k+',
    label: 'Completed Projects',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h-4v-2a4 4 0 014-4V6a6 6 0 10-12 0v8a4 4 0 014 4v2H7M4 11a7 7 0 1114 0c0 1.258-.291 2.454-.805 3.535M12 4a4 4 0 100 8 4 4 0 000-8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h-4v-2a4 4 0 014-4V6a6 6 0 10-12 0v8a4 4 0 014 4v2H7M4 11a7 7 0 1114 0c0 1.258-.291 2.454-.805 3.535M12 4a4 4 0 100 8 4 4 0 000-8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h-4v-2a4 4 0 014-4V6a6 6 0 10-12 0v8a4 4 0 014 4v2H7M4 11a7 7 0 1114 0c0 1.258-.291 2.454-.805 3.535M12 4a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>
    ),
    value: '20k+',
    label: 'Happy Customer',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c-1.657 0-3 1.343-3 3v2c0 1.657 1.343 3 3 3h2c1.657 0 3-1.343 3-3v-2c0-1.657-1.343-3-3-3h-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c-1.657 0-3 1.343-3 3v2c0 1.657 1.343 3 3 3h2c1.657 0 3-1.343 3-3v-2c0-1.657-1.343-3-3-3h-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c-1.657 0-3 1.343-3 3v2c0 1.657 1.343 3 3 3h2c1.657 0 3-1.343 3-3v-2c0-1.657-1.343-3-3-3h-2z"
        />
      </svg>
    ),
    value: '13+',
    label: 'Award Winning',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12s3-5.5 10-5.5S22 12 22 12s-3 5.5-10 5.5S2 12 2 12z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12s3-5.5 10-5.5S22 12 22 12s-3 5.5-10 5.5S2 12 2 12z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12s3-5.5 10-5.5S22 12 22 12s-3 5.5-10 5.5S2 12 2 12z"
        />
      </svg>
    ),
    value: '99%',
    label: 'Satisfaction Rate',
  },
];


function Testimonials() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-cyan-500 transition duration-300">Testimonials</h1>
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

      {/* testimonials-------------- */}


      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                  <p
                    className={`text-sm font-medium ${testimonial.role === 'Clients'
                      ? 'text-blue-500'
                      : testimonial.role === 'Supervisor'
                        ? 'text-purple-500'
                        : 'text-gray-500'
                      }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{testimonial.text}</p>
              <div className="flex items-center text-yellow-400">
                <span className="text-2xl">★★★★★</span>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* client rate-- */}

      <div className="bg-blue-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                style={{ backgroundColor: 'rgb(59, 130, 246)' }}
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-lg text-white opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

<Footer/>
    </div>
  )
}

export default Testimonials