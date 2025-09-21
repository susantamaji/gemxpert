import React, { useState } from "react";
import { Star, Gem, Heart, Brain, Sparkles } from "lucide-react"; // icons
import pic from "./Images/Home-Photos/faceHero.jpg";
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Footer from "./Footer";



// Data for videos and testimonials
const videoData = [
  { id: 1, title: 'Client Video 1', src: 'https://www.youtube.com/embed/r9oJzNDSuIA?iv_load_policy=3&modestbranding=1&playinline=1&showinfo=0&rel=0&enablejsapi=1' },
  { id: 2, title: 'Client Video 2', src: 'https://www.youtube.com/embed/Rg2uhgUAv_s?iv_load_policy=3&modestbranding=1&playinline=1&showinfo=0&rel=0&enablejsapi=1' },
  { id: 3, title: 'Client Video 3', src: 'https://www.youtube.com/embed/QWx0u6bYkV0?iv_load_policy=3&modestbranding=1&playinline=1&showinfo=0&rel=0&enablejsapi=1' },
];

const testimonialsData = [
  {
    id: 1,
    name: 'Lakshmi, Bengaluru',
    text: 'Meeting Sujoy Sir has been a life-changing experience...',
    banglaText: 'Meeting Sujoy Sir has been a life-changing experience. He is not only an experienced Gemstone Expert but also an Aura Reader and Chakra Analyzer, with rare insight into the deeper connections between energy and life. What sets him apart is his unique ability to blend scientific gem testing with a profound understanding of human energy fields. I went to Kolkata simply out of curiosity to meet him, and the experience exceeded my expectations. He patiently explains everything, listens carefully, and provides guidance that is both practical and spiritually enriching. His counseling goes far beyond gemstones — it touches upon personal growth, emotional balance, and overall well-being....',
    rating: 5,
    profilePic: 'https://gemxpert.in/wp-content/uploads/2025/08/agency-img19.jpg',
  },
  {
    id: 2,
    name: 'Gopal Pandy, UP',
    text: 'The experience exceeded my expectations. He patiently explains everything, listens carefully, and provides guidance...',
    banglaText: 'আমার আশা প্রত্যাশার চেয়ে বেশি অভিজ্ঞতা হয়েছে।...',
    rating: 5,
    profilePic: 'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-08.31.27_4fd662e6.jpg',
  },
  {
    id: 3,
    name: 'Nilabha Roy',
    text: 'Youtube er video dekhe ami Sujoy Sir ke...',
    banglaText: 'Youtube er video dekhe ami Sujoy Sir ke...',
    rating: 5,
    profilePic: 'https://gemxpert.in/wp-content/uploads/2025/08/Nil-PP-150x150.png',
  },
];

function Home() {

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });


  const journeyQuotes = [
    "\"My 22-year journey in Gemology has given me the opportunity to guide thousands of people. For me, gemstones are not just ornaments, but a medium of energy and life balance.\"-Sujoy Das",
    "\"रत्न विज्ञान में 22 वर्षों की मेरी यात्रा ने मुझे हजारों लोगों का मार्गदर्शन करने का अवसर दिया। मेरे लिए रत्न केवल आभूषण नहीं, बल्कि ऊर्जा और जीवन संतुलन का माध्यम है !\" – सुजोय दास",
    "\"রত্নবিজ্ঞানের ২২+ বছরের আমার যাত্রা আমাকে হাজারো মানুষের পথপ্রদর্শনের সুযোগ দিয়েছে। আমার কাছে রত্ন কেবল অলংকার নয়, বরং শক্তি ও জীবনের ভারসাম্যের এক মাধ্যম।\"- সুজয় দাস"
  ];

  const galleryImages = [
    'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-09.51.28_22ce5961-pica.png', // Replace with actual image paths
    'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.18.08_abf93a14.jpg',
    'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-14.28.16_fb459a9c.jpg',
    'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.17.56_44352893.jpg',
    'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-13.26.20_c00fc177-e1756313653798.jpg',
    'https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-14.28.16_ef0e6d32.jpg',
  ];


  const expertiseData = [
    {
      title: 'Gemstone Expertise',
      image: "https://gemxpert.in/wp-content/uploads/2025/08/SDP.png", // Replace with your image path
      text: '“I go beyond the beauty of gemstones, studying their quality, natural energy, and impact on Aura and Chakras. With experience and scientific analysis, I determine their authenticity, purity, origin, and suitability for you."',
      banglaText: '“আমি কেবল রত্নর এর সুন্দরতাটা নয়, বরংকি তাদের গুণমান, প্রাকৃতিক শক্তি এবং Aura ও Chakra এর উপর প্রভাব কাওে অধ্যয়ন করি। আমি অভিজ্ঞতা ও বৈজ্ঞানিক বিশ্লেষণের আধার পার, যে রত্ন কাে আসল-নকল, শুদ্ধ, মূখ্য স্থান এবং আপনার জন্য উপযুক্ত অনুধাবন করা হয়।"'
    },
    {
      title: 'Aura & Chakra Analysis',
      image: "https://gemxpert.in/wp-content/uploads/2025/08/Aura-Chakra.png",// Replace with your image path
      text: '“The balance of Aura and the seven Chakras shapes our life. By reading the Aura, I identify a person’s strengths and weaknesses and help balance their Chakras through gemstones and other remedies."',
      banglaText: '“মানব শরীর কে শরীর ও অবস্থিত সাতটি (Aura) এর শরীর কে প্রাণবন্ত রাখা হয়। আমি Aura বিশ্লেষণ করে একজন ব্যক্তির শক্তি এবং দুর্বলতা সনাক্ত করি এবং gemstones এবং অন্যান্য সমাধান ব্যবহার করে তাদের Chakra balance করতে সাহায্য করি।”'
    },
    {
      title: 'Holistic Life Guidance',
      image: 'https://gemxpert.in/wp-content/uploads/2025/08/Holistic-Life-Guidance.png', // Replace with your image path
      text: '“Through Gemology, Aura reading, and Chakra balancing, I inspire people towards a healthier, successful, and harmonious life. My purpose is not just to provide gemstones, but to connect individuals with their inner energy and true potential."',
      banglaText: '“রত্নবিদ্যা, আয়া অনুধাবন এবং চক্র ভারসাম্য মাধ্যমে, আমি মানুষকে একটি স্বাস্থ্যকর, সফল এবং শান্তিপূর্ণ জীবনের দিকে পরিচালিত করি। আমার উদ্দেশ্য শুধু gemstones সরবরাহ করা নয়, বরংকি ব্যক্তিদেরকে তাদের আন্তরিক শক্তি এবং সত্যিকারের সম্ভাবনা দিয়ে সংযোগ করা।"'
    },
  ];


  const [currentVideo, setCurrentVideo] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: 'Lakshmi, Bengaluru',
      text: 'Meeting Sujoy Sir has been a life-changing experience...',
      banglaText: 'Meeting Sujoy Sir has been a life-changing experience. He is not only an experienced Gemstone Expert but also an Aura Reader and Chakra Analyzer, with rare insight into the deeper connections between energy and life. What sets him apart is his unique ability to blend scientific gem testing with a profound understanding of human energy fields. I went to Kolkata simply out of curiosity to meet him, and the experience exceeded my expectations. He patiently explains everything, listens carefully, and provides guidance that is both practical and spiritually enriching. His counseling goes far beyond gemstones — it touches upon personal growth, emotional balance, and overall well-being...',
      rating: 5,
      profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Gopal Pandy, UP',
      text: 'The experience exceeded my expectations. He patiently explains everything, listens carefully, and provides guidance...',
      banglaText: '“मेरा अनुभव सुझय दास के साथ बहुत ही अच्छा रहा । 20 साल से अधिक रत्न विशेषज्ञता और आभा विश्लेषण के अनुभव से वे सिर्फ रत्न की शक्ति ही नहीं समझाते, बल्कि स्वास्थ्य, करियर और जीवन में संतुलन लाने का मार्गदर्शन भी करते हैं। उनका स्वभाव प्रोफेशनल, भरोसेमंद और बेहद संवेदनशील है। सचमुच एक ऐसे मार्गदर्शक जो जीवन में सकारात्मकता लाते हैं।”...',
      rating: 5,
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Nilabha Roy',
      text: 'Youtube er video dekhe ami Sujoy Sir ke...',
      banglaText: 'Youtube এর video দেখে আমি সুজয়বাবু’র কাছে রত্ন কিনতে গেছিলাম,ওনার সঙ্গে পরামর্শ করার পর যে অসাধারণ অভিজ্ঞতা পেলাম, Gemstones বিষয়ে ওনার অভিজ্ঞতা এবং Aura বিশ্লেষণের মাধ্যমে তিনি শুধু রত্নের গুণাগুণই নয়, বরং স্বাস্থ্য, ক্যারিয়ার ও জীবনে সহজভাবে চলার বিষয়ে যে দিকনির্দেশনা দিলেন, সত্যিই অসাধারণ । তিনি সত্যিই একদিকে যেমন পেশাদার, নির্ভরযোগ্য এবং ভীষনই আন্তরিক প্রকৃতির । সত্যিই একজন positive mentor,যিনি আমার জীবনে ইতিবাচক দিকটা খুঁজে পেতে ভীষনই সাহায্য করেছেন । 👍...',
      rating: 5,
      profilePic: 'https://randomuser.me/api/portraits/men/88.jpg',
    },
  ];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 md:w-5 md:h-5 fill-current ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    ));
  };

  // testomonials------------------------------

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/r9oJzNDSuIA?iv_load_policy=3&modestbranding=1&playinline=1&showinfo=0&rel=0&enablejsapi=1",
      poster:
        "https://images.pexels.com/photos/14849663/pexels-photo-14849663.jpeg",
    },
    {
      id: 2,
      src: "video2.mp4",
      poster:
        "https://images.pexels.com/photos/14849664/pexels-photo-14849664.jpeg",
    },
    {
      id: 3,
      src: "video3.mp4",
      poster:
        "https://images.pexels.com/photos/14849665/pexels-photo-14849665.jpeg",
    },
    {
      id: 4,
      src: "video4.mp4",
      poster:
        "https://images.pexels.com/photos/14849666/pexels-photo-14849666.jpeg",
    },
    {
      id: 5,
      src: "video5.mp4",
      poster:
        "https://images.pexels.com/photos/14849667/pexels-photo-14849667.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  const nextVideo = () => {
    setCurrentIndex((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };


  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Overlay shapes */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug drop-shadow-lg">
              GemXpert.in
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              “Beyond beauty — I reveal gemstones’ <span className="text-yellow-300 font-semibold">authenticity</span>,
              <span className="text-pink-300 font-semibold"> subtle energies</span>, and their profound influence on{" "}
              <span className="underline decoration-yellow-400">Aura</span>,{" "}
              <span className="underline decoration-blue-400">Chakras</span>, and overall well-being.”
              <br /> <span className="font-bold text-white">— Sujoy Das</span>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:scale-105 hover:bg-yellow-300 transition transform">
                Free Consultation
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition">
                Book Paid Consultation
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-yellow-300 shadow-2xl hover:scale-105 transition transform">
              <img
                src={pic}
                alt="Sujoy Das"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-8 left-8 bg-white text-purple-700 p-4 rounded-full shadow-lg hover:rotate-12 hover:scale-125 transition cursor-pointer">
              <Gem size={28} />
            </div>
            <div className="absolute top-20 -right-10 bg-white text-blue-600 p-4 rounded-full shadow-lg hover:-rotate-12 hover:scale-125 transition cursor-pointer">
              <Brain size={28} />
            </div>
            <div className="absolute bottom-10 left-10 bg-white text-pink-600 p-4 rounded-full shadow-lg hover:rotate-6 hover:scale-125 transition cursor-pointer">
              <Heart size={28} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center mb-12 space-y-4 md:space-y-0 md:space-x-4 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-sm sm:text-base">
            ⭐ SUJOY DAS লোগোর স্দৃশ্যত এখানে
          </div>
          <div className="bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg text-sm sm:text-base">
            ✨ PROFESSIONAL পরিচয়
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 bg-gray-50 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition">
            <p className="mb-4 text-gray-700 text-base leading-relaxed">
              তিনি একজন অত্যন্ত <b className="text-purple-700">Gemstone Expert</b>,{" "}
              <b className="text-indigo-700">Aura Reader</b>, এবং{" "}
              <b className="text-pink-600">Healer</b>।
              দুই দশকেরও বেশি সময় ধরে <b className="text-yellow-600">Gemology &amp; Gemstone research</b> করে আসছেন।
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Sparkles className="text-purple-600" size={18} />
                <b className="text-black">আপনার রত্নটির গুণমান নির্ধারণ</b>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="text-indigo-600" size={18} />
                <b className="text-black">Aura & Chakra balance বিশ্লেষণ</b>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="text-pink-600" size={18} />
                <b className="text-black">মানসিক ও আধ্যাত্মিক স্বাস্থ্যের root mapping</b>
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              তিনি বিশ্বাস করেন, সঠিক রত্ন ও শক্তির প্রয়োগ একজন সাধারণ মানুষকেও অসাধারণ করে তুলতে পারে।
            </p>
            <p className="mt-4 text-gray-700">
              তাঁর নির্দেশনায় হাজারো মানুষ ইতিবাচক পরিবর্তন এনেছেন। Google Review-তেই প্রতিফলিত।
            </p>
            <button className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition">
              Learn More About Me
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="https://gemxpert.in/wp-content/uploads/2025/08/SD-03-e1756028144284.jpeg"
              alt="Sujoy Das with microscope"
              className="rounded-2xl shadow-2xl w-full max-w-lg hover:scale-105 transition"
            />
          </div>
        </div>
      </section>


      <section ref={ref} className="bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-yellow-300">●</span> MY EXPERTISE
          </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
          >
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="bg-purple-700 bg-opacity-50 border border-purple-600 rounded-xl p-6 flex flex-col items-center text-center transform transition duration-500 ease-in-out hover:scale-105 hover:bg-purple-600 hover:shadow-2xl"
              >
                <div className="w-24 h-24 rounded-full border-4 border-yellow-300 overflow-hidden mb-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base mb-4 italic leading-relaxed">
                  {item.banglaText}
                </p>
                <p className="text-xs md:text-sm text-gray-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-600">
              Know More
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16 md:py-28 overflow-hidden">
        {/* Decorative background pattern */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{ backgroundImage: "url('/images/zodiac_pattern.svg')" }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 text-sm md:text-base font-bold text-indigo-800 bg-white/70 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg border border-indigo-200">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              MY OTHER'S ACTIVITIES / BUSINESS
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 space-y-10 lg:space-y-0">
            {/* Info Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end space-y-10">
              {/* Business Card */}
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl w-full max-w-lg hover:scale-105 hover:shadow-purple-500/40 transition transform duration-500">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6l-2 4h4l-2 4m0 4v-2m0 2h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight">
                      Gemstone Dealer (Wholesale & Retail)
                    </h3>
                    <p className="mt-2 text-lg font-light">
                      Specialized in Untreated & Unheated Gemstones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Card */}
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-xl p-4 rounded-full shadow-xl max-w-sm border border-gray-200 hover:shadow-lg hover:scale-105 transition">
                <img
                  src="https://gemxpert.in/wp-content/uploads/2025/08/SD-Photo.png"
                  alt="Sujoy Das"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-indigo-500 shadow-lg"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Sujoy Das
                  </h4>
                  <p className="text-sm text-gray-600">
                    Gemstone Expert • Gem Consultant
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center p-4">
              <div className="relative group bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:shadow-indigo-400/40 transition">
                <img
                  src="https://gemxpert.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-20-at-08.01.16_9b9940601.jpg"
                  alt="Sujoy Das sitting at a desk"
                  className="rounded-2xl w-full h-auto object-cover max-w-xl group-hover:scale-105 transition duration-500"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-lg animate-bounce">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="fixed right-6 bottom-10 z-50 flex flex-col space-y-4">
          <a
            href="#"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-125 hover:rotate-6 hover:shadow-green-400 transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-125 hover:-rotate-6 hover:shadow-blue-400 transition duration-300"
          >
            <FaFacebookMessenger />
          </a>
          <a
            href="#"
            className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-125 hover:rotate-6 hover:shadow-pink-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* Top Contact Section */}
      <section
        ref={ref}
        className={`flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-3xl shadow-2xl mx-auto max-w-6xl -mt-16 relative z-20 transition-opacity duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Left side: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-6 w-full md:w-1/2">
          <div className="flex-shrink-0">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG for a call icon or phone */}
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36.9-.22.65.16 1.34.24 2.03.24.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.74 21 3 13.26 3 3.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 .69.08 1.38.24 2.03.14.23.05.63-.22.9l-2.2 2.2z" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm md:text-base font-semibold">GET A FREE CONSULTATION</p>
            <p className="text-2xl md:text-3xl font-bold mt-1">
              +91 79983
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              54708
            </p>
          </div>
        </div>

        {/* Right side: Text and Button */}
        <div className=" md:p-6 w-full md:w-1/2 text-center md:text-left">
          <p className="text-xs md:text-sm leading-relaxed mb-4">
            আমারীয়ে বিশেষজ্ঞ সাথ, ২২ বছররও অধিক অনুভবে সঙ্গে এক প্রামাণিক Gemstone Expert, Aura Reader এবং Chakra Analyst। আমি কেবল জেমস্টোন বিক্রি করি না, বরংকি আপনাকে স্বাস্থ্যকর জীবন এবং সুখী জীবন দেওয়ার জন্য সাহায্য করি।
          </p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100">
            Make An Consultation
          </button>
        </div>
      </section>
      {/* Bottom Services Section */}
      <section className="mt-10 relative bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white py-24 overflow-hidden">
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://gemxpert.in/wp-content/uploads/2025/08/Quick2Service-Blog-Banner-20.jpg')",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 space-y-12 lg:space-y-0">
            {/* Services List */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center space-x-2 text-sm md:text-base font-bold text-yellow-400 mb-8">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
                MY SERVICES
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
              </div>

              <ul className="grid gap-6">
                {/* Service Card */}
                <li className="flex items-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:scale-105 hover:shadow-blue-500/40 transition transform duration-500 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-xl shadow-lg mr-4 transform transition hover:rotate-12 hover:scale-110">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6l-2 4h4l-2 4m0 4v-2m0 2h.01" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg">
                    Gemstone Consultation <span className="text-gray-300">(রত্ন পরামর্শ)</span>
                  </span>
                </li>

                <li className="flex items-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:scale-105 hover:shadow-pink-500/40 transition transform duration-500 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-xl shadow-lg mr-4 transform transition hover:rotate-12 hover:scale-110">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg">
                    Aura Reading <span className="text-gray-300">(আওরা বিশ্লেষণ)</span>
                  </span>
                </li>

                <li className="flex items-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:scale-105 hover:shadow-purple-500/40 transition transform duration-500 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-xl shadow-lg mr-4 transform transition hover:rotate-12 hover:scale-110">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M7.34 16.66l-1.41 1.41m0-11.32l1.41 1.41M16.66 16.66l1.41 1.41" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg">
                    Chakra Analysis <span className="text-gray-300">(চক্র বিশ্লেষণ)</span>
                  </span>
                </li>

                <li className="flex items-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:scale-105 hover:shadow-green-500/40 transition transform duration-500 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-green-500 to-emerald-600 rounded-xl shadow-lg mr-4 transform transition hover:rotate-12 hover:scale-110">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg">
                    Healthy Lifestyle Mentorship
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <button className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-10 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-yellow-500/50">
                Make A Consultation
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <img
                  src="https://i.etsystatic.com/7067979/r/il/15256f/3197171919/il_fullxfull.3197171919_nb84.jpg"
                  alt="Person meditating with chakras"
                  className="w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500"
                />
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-lg animate-bounce">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('/images/cosmic_pattern.svg')", backgroundSize: 'cover' }}></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 text-sm md:text-base font-bold text-yellow-300 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-yellow-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></span>
              MY JOURNEY
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></span>
            </div>
          </div>

          {/* Quotes Section */}
          <div
            className={`text-center max-w-4xl mx-auto mb-16 space-y-6 transition-opacity duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {journeyQuotes.map((quote, index) => (
              <p key={index} className="text-base md:text-lg lg:text-xl italic font-light text-gray-200 leading-relaxed">
                {quote}
              </p>
            ))}
          </div>

          {/* Gallery Section */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-glow"
              >
                <img
                  src={src}
                  alt={`Gemstone related image ${index + 1}`}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Example Icon */}
                  {/* <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 3 3 5-5V15zM15 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Tailwind Glow Shadow (add to your tailwind.config.js) */}
        <style jsx>{`
                .hover\\:shadow-glow:hover {
                    /* box-shadow: 0 0 20px rgba(255, 255, 0, 0.7); Yellow glow */
                }
            `}</style>
      </section>

      {/* testimonials------ */}
      <section ref={ref} className="bg-gray-950 text-white py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto relative">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300">
            What Our Clients Say
          </h2>

          {/* Video Carousel */}

          <section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 relative">
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Client Testimonials
                </h2>
                <p className="mt-2 text-gray-400 max-w-xl mx-auto">
                  Hear what our clients have to say about their experience with us.
                </p>
              </div>

              {/* Video Carousel */}
              <div className="flex items-center justify-center space-x-6">
                {/* Left Arrow */}
                <button
                  onClick={prevVideo}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Video */}
                <div className="relative w-64 md:w-80 lg:w-[400px] h-[380px] rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <video
                    key={videos[currentIndex].id}
                    src={videos[currentIndex].src}
                    poster={videos[currentIndex].poster}
                    className="w-full h-full object-cover"
                    controls
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button className="bg-purple-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextVideo}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {videos.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex
                      ? "bg-purple-600"
                      : "bg-gray-500"
                      }`}
                  ></span>
                ))}
              </div>
            </div>
          </section>


          {/* Testimonial Cards */}
          <div
            className={`grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 transition-opacity duration-1000 delay-300 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 border-t-4 border-yellow-500 rounded-xl p-6 md:p-8 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:border-blue-400"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <img src={testimonial.profilePic} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" />
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center mt-1 space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed italic text-gray-300 mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-400">
                  "{testimonial.banglaText}"
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center mt-12 md:mt-16">
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-700">
              View More
            </button>
          </div>
        </div>
      </section>


      <section className="relative bg-gradient-to-b  from-purple-900 via-purple-800 to-purple-900 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
              Contact Us
            </h2>
            <p className="mt-3 text-gray-300 max-w-xl mx-auto">
              We’d love to hear from you! Let’s build something amazing together.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Contact Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white shadow-lg hover:scale-110 transition transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Office Address</h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    ROTNO BIPONI - 161 Mahatma Gandhi Road, Eastern Plaza Building,
                    4th floor, Kolkata 70007, (Barobazar)
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Enter Message"
                  className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: "👥", number: "20k+", label: "Happy Customers" },
              { icon: "🏆", number: "13+", label: "Award Winning" },
              { icon: "⭐", number: "99%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center text-white shadow-md hover:shadow-2xl hover:scale-105 transition transform"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <h4 className="text-3xl font-bold">{stat.number}</h4>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 font-semibold rounded-full text-sm shadow-md">
              OUR BLOGS
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              रत्न और ऊर्जा के बारे में पढ़ें
            </h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto">
              Explore the latest insights on gemstones, their energies, and benefits.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "“All that glitters is not gold “—",
                desc: "রূপসজ্জাকে শুধু তার বাহ্যিক চার্চিত দেখেই তার মূল্য নির্ধারণ করা অনুচিত ।",
                img: "https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg",
              },

              {
                id: 3,
                title: "Healing with Crystals",
                desc: "Discover how crystals can balance your life and energy fields naturally.",
                img: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg",
              },
            ].map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  {/* Overlay Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full uppercase tracking-wide">
                    Blog
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-purple-600 group-hover:text-pink-500 transition">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{blog.desc}</p>
                </div>

                {/* Footer with Icon */}
                <div className="flex items-center justify-between px-6 py-4 border-t text-gray-500 text-sm">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-7-9-7-9 7 9 7z" />
                    </svg>
                    <span>Read More</span>
                  </span>
                  <span className="text-xs">2 min read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <Footer/>
    </>
  );
}

export default Home;
