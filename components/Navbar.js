// import React from 'react'
// import Link from 'next/link'
// const Navbar = () => {
//   return (
//     <nav className='h-16 bg-purple-400 text-white flex items-center justify-between px-3 '>
//         <div className='logo font-bold text-lg'><Link href="/"> Trimly</Link></div>
//         <ul className='flex items-center justify-center gap-4 cursor-pointer'>
//             <Link href="/"> <li>Home </li></Link>
//             <Link href="/about"> <li>About </li></Link>
//             <Link href="/shorten"> <li>Shorten </li></Link>
//             <Link href="/contact"> <li>Contact </li></Link>
//             <li className='flex gap-2'>
//             <Link href="/shorten"><button className='bg-purple-400 shadow-lg p-3 rounded-lg py-1 font-bold'>Try Now</button></Link>
//              <Link href="/github"> <button className='bg-purple-400 shadow-lg p-3 rounded-lg py-1 font-bold'>GitHub</button></Link> 
//             </li>
//         </ul>  
//     </nav>
//   )
// }

// export default Navbar
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="logo font-extrabold text-2xl tracking-wide">
          <Link href="/">Trimly</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-gray-200 transition">Home</Link>
        
          <Link href="/shorten" className="hover:text-gray-200 transition">Shorten</Link>
          
          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold shadow-md hover:shadow-xl transition duration-300">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/pravallikaa4/Trimly">
              <button className="border border-white px-4 py-2 rounded-full font-bold hover:bg-white hover:text-purple-600 transition duration-300">
                GitHub
              </button>
            </Link>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-purple-600 px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)} className="block">Shorten</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
          <div className="flex flex-col gap-3">
            <Link href="/shorten">
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold shadow-md hover:shadow-xl transition duration-300 w-full">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="border border-white px-4 py-2 rounded-full font-bold hover:bg-white hover:text-purple-600 transition duration-300 w-full">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
