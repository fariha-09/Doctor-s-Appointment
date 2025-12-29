import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUS() {
  const departments = [
    { name: "Cardiology", path: "/cardiology" },
    { name: "Neurology", path: "/neurology" },
    { name: "Orthopedics", path: "/orthopedics" },
    { name: "Pediatrics", path: "/pediatrics" },
    { name: "Dermatology", path: "/dermatology" },
    { name: "Radiology", path: "/radiology" },
    { name: "Oncology", path: "/oncology" },
    { name: "Psychiatry", path: "/psychiatry" },
  ];

  const doctors = [
    { 
      id: 1, 
      name: "Dr. Emily Carter", 
      specialty: "Cardiologist",  
      path: "/image.png", 
      info: "Dr. Emily Carter has over 10 years of experience in cardiology, specializing in heart disease prevention and treatment."
    },
    { 
      id: 2, 
      name: "Dr. James Lee", 
      specialty: "Neurologist", 
      path: "/doctor5.png", 
      info: "Dr. James Lee is a renowned neurologist with expertise in treating neurological disorders and stroke management."
    },
    { 
      id: 3, 
      name: "Dr. Sarah Khan", 
      specialty: "Orthopedist", 
      path: "/doctor4.png", 
      info: "Dr. Sarah Khan specializes in orthopedic surgery and joint replacement with a focus on patient recovery."
    },
    { 
      id: 4, 
      name: "Dr. Ahmed Patel", 
      specialty: "Pediatrician", 
      path: "/doctor3.jpg", 
      info: "Dr. Ahmed Patel is dedicated to child health, offering expert care in pediatrics and developmental issues."
    },
    { 
      id: 5, 
      name: "Dr. Maria Gonzalez", 
      specialty: "Dermatologist", 
      path: "/hn.png", 
      info: "Dr. Maria Gonzalez provides advanced dermatological care, focusing on skin health and cosmetic treatments."
    },
  ];

  return (
    <>
    
    
  
    <div className="bg-gray-100 py-12 px-6 text-center">
      {/* About Us Section */}
      <h1 className="text-3xl font-bold text-green-700 mb-4 pt-8">About Us</h1>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
        We are committed to your health and wellness. <br />
        Our experienced medical professionals are here to serve you with excellence and compassion.
      </p>

      {/* Departments Section */}
      <h1 className="text-3xl font-bold text-green-700 mb-8 pt-10">Departments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {departments.map((dept, index) => (
          <Link
            key={index}
            to={dept.path}
            className="bg-white rounded-lg shadow-md py-6 px-4 font-semibold text-gray-700 
                       hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer block"
          >
            {dept.name}
          </Link>
        ))}
      </div>

      {/* Our Doctors Section */}
    <h1 className="text-3xl font-bold text-green-700 mb-8 pt-20">Our Doctors</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
  {doctors.map((doc) => (
    <Link
      key={doc.id}
      to={doc.path}
      className="bg-white rounded-xl shadow-md p-8 h-[380px] flex flex-col items-center justify-center 
                 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
    >
      <div className="w-44 h-44 mb-6 rounded-full overflow-hidden border-4 border-green-100 
                      hover:scale-105 transition-transform duration-300">
        <img
          src={doc.path}
          alt={doc.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
      <p className="text-green-600 font-medium">{doc.specialty}</p>
    </Link>
  ))}
</div>

<h1 className="text-3xl font-bold text-green-700 mb-8 pt-20">Latest Blogs</h1>
<div className="space-y-8 max-w-5xl mx-auto">
  {/* Blog 1 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition duration-300">
    <img
      src="/heart.jpg"
      alt="Heart Health Blog"
      className="w-full md:w-1/3 h-60 object-cover"
    />
    <div className="p-6 flex flex-col justify-center text-left md:w-2/3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">5 Tips for Heart Health</h2>
      <p className="text-gray-600 mb-4">Learn how to maintain a healthy heart with daily habits.</p>
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg self-start hover:bg-green-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Blog 2 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition duration-300">
    <img
      src="/childblog.jpg"
      alt="Child Wellness Blog"
      className="w-full md:w-1/3 h-60 object-cover"
    />
    <div className="p-6 flex flex-col justify-center text-left md:w-2/3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Child Wellness & Nutrition</h2>
      <p className="text-gray-600 mb-4">Ensure your child’s growth with proper diet and care.</p>
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg self-start hover:bg-green-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Blog 3 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition duration-300">
    <img
      src="/skinblog.jpg"
      alt="Skin Care Blog"
      className="w-full md:w-1/3 h-60 object-cover"
    />
    <div className="p-6 flex flex-col justify-center text-left md:w-2/3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skin Care Essentials</h2>
      <p className="text-gray-600 mb-4">Discover tips and treatments to keep your skin healthy and glowing.</p>
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg self-start hover:bg-green-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Blog 4 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition duration-300">
    <img
      src="/hepatitus.jpg"
      alt="Hepatitis Blog"
      className="w-full md:w-1/3 h-60 object-cover"
    />
    <div className="p-6 flex flex-col justify-center text-left md:w-2/3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Understanding Hepatitis</h2>
      <p className="text-gray-600 mb-4">Learn about causes, symptoms, and treatments for hepatitis to protect your liver health.</p>
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg self-start hover:bg-green-700 transition">
        Read More
      </button>
    </div>
  </div>
</div>



<h1 className="text-3xl font-bold text-green-700 mb-8 pt-20">Contact Us</h1>
<div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
  <form className="space-y-6">
    {/* Name */}
    <div className="text-left">
      <label className="block text-gray-700 font-medium mb-2">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
    </div>

    {/* Email */}
    <div className="text-left">
      <label className="block text-gray-700 font-medium mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
    </div>

    {/* Message */}
    <div className="text-left">
      <label className="block text-gray-700 font-medium mb-2">Message</label>
      <textarea
        rows="5"
        placeholder="Type your message here..."
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      ></textarea>
    </div>

    {/* Send Button */}
    <button
      type="submit"
      className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
    >
      Send Message
    </button>
  </form>
</div>


    </div>
<footer className="bg-green-700 text-center py-7">
  <p className="text-white text-sm">
    © 2025 Medic. All rights reserved.
  </p>
</footer>
      </>
  );
}