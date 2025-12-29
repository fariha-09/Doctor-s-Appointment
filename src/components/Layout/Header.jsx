import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50  flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold text-green-700">🩺 MediCare</h1>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6">
        <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition">
          Home
        </a>
        <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition">
          About Us
        </a>
        <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition">
          Department
        </a>
        <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition">
          Blog
        </a>
        <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition">
          Doctors
        </a>
        <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition">
          Contact
        </a>
      </nav>

      {/* Button */}
      <Link className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition font-semibold">
        Get An Appointment
      </Link>
    </header>
  );
}
