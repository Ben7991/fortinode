"use client";

import { useState } from "react";
import Link from "next/link";
import { PiHamburger } from "react-icons/pi";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

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
        className={`absolute top-18 right-0 w-[200px] bg-gray-100 transition-[height] ${
          showNav ? "h-[200px]" : "h-0 overflow-hidden"
        } lg:static lg:bg-transparent lg:h-auto lg:w-auto`}
      >
        <ul className="lg:flex">
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-200)] hover:text-white"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-200)] hover:text-white"
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-200)] hover:text-white"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-200)] hover:text-white"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 hover:bg-[var(--dark-blue-200)] hover:text-white"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
