import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white flex items-center justify-between'>
      <div className='ml-4 text-lg font-bold'>Bitlinks</div>
      <ul className='flex space-x-4 bg-gray-800 text-white p-4 mr-3 text-lg'>
        <Link href="/"><li className="relative group cursor-pointer transition-colors duration-300 hover:text-gray-300">
          Home
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li></Link>
        <Link href="/about"><li className="relative group cursor-pointer transition-colors duration-300 hover:text-gray-300">
          About
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li></Link>
        <Link href="/shorten"><li className="relative group cursor-pointer transition-colors duration-300 hover:text-gray-300">
          Shorten
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li></Link>
        <Link href="/contact"><li className="relative group cursor-pointer transition-colors duration-300 hover:text-gray-300">
          Contact
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li></Link>
        <li className='relative group'>
          <Link href="/shorten">
            <button className="transition-colors duration-300 hover:text-gray-300">Try_Now</button>
          </Link>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
