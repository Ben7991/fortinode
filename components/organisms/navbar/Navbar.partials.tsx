'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PiHamburger } from 'react-icons/pi'

export default function Nav() {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav((prevState) => !prevState)
  }

  return (
    <>
      <button
        type="button"
        className="inline-block lg:hidden"
        onClick={toggleNav}
      >
        <PiHamburger className="text-2xl" />
      </button>
      <div
        className={`absolute top-18 right-0 w-[200px] z-[1] bg-white transition-[height] ${
          showNav ? 'h-[174px] shadow-2xl' : 'h-0 overflow-hidden'
        } lg:static lg:bg-transparent lg:h-auto lg:w-auto`}
      >
        <ul className="lg:flex">
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-100)] hover:text-white lg:rounded-md"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-100)] hover:text-white lg:rounded-md"
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-100)] hover:text-white lg:rounded-md"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-100)] hover:text-white lg:rounded-md"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <Link
        className="hidden lg:block py-2 px-4 bg-[var(--dark-blue-100)] hover:bg-[var(--dark-blue-200)] text-white lg:rounded-md lg:cursor-pointer"
        href="#"
      >
        Our Academy
      </Link>
    </>
  )
}
