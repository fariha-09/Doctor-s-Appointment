import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between px-10 py-16 ">
  
    <div className="max-w-lg space-y-6 text-left">
  <h2 className="text-green-700 text-lg font-semibold">
    Welcome to MediCare
  </h2>

  <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
    Exceptional Medical <br />
    Specialty Healthcare
  </h1>

  <p className="text-gray-600 text-lg mt-4">
    We care about your health — providing trusted doctors, modern facilities,
    and compassionate care to ensure a healthier tomorrow.
  </p>

  <div className="flex space-x-4 pt-4">
    <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition font-semibold">
      View Department
    </button>

    <button className="bg-white text-green-700 px-6 py-3 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition font-semibold">
      Contact Us
    </button>
  </div>
</div>

    
      <div className="w-1/2 flex justify-center">
        <img
          src="/download.png"
          alt="Healthcare"
          className="max-w-md w-full h-auto object-contain rounded-lg 
               transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>
    </section>
  );
}