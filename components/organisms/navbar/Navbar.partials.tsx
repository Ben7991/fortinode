'use client'

import { MouseEvent, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { PiHamburger } from 'react-icons/pi'
import { FiChevronDown } from 'react-icons/fi'

export default function Nav() {
  const [showNav, setShowNav] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleOutsideClick = useCallback((event: globalThis.MouseEvent) => {
    event.stopPropagation()
    setShowDropdown(false)
    setShowNav(false)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
  }, [handleOutsideClick])

  const toggleNav = () => {
    setShowNav((prevState) => !prevState)
  }

  const toggleDropdown = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation()
    setShowDropdown((prevState) => !prevState)
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
          showNav ? 'h-[174px] shadow-2xl' : 'h-0'
        } lg:static lg:bg-transparent lg:h-auto lg:w-auto`}
      >
        <ul className="lg:flex lg:space-x-4">
          <NavLink href="/" text="Home" />
          <NavLink href="/about-us" text="About Us" />
          <li className="relative hover:last:block">
            <button
              className="flex items-center justify-between lg:justify-start gap-1 hover:text-[var(--dark-blue-100)] hover:bg-[var(--light-blue-100)] lg:hover:bg-transparent py-1 px-4 lg:px-0 hover:cursor-pointer"
              type="button"
              onClick={toggleDropdown}
            >
              Services <FiChevronDown />
            </button>
            {showDropdown && <DropdownList state={showDropdown} />}
          </li>
          <NavLink href="/contact-us" text="Contact Us" />
        </ul>
      </div>
      <Link
        className="hidden lg:block py-1.5 px-4 bg-[var(--dark-blue-100)] hover:bg-[var(--dark-blue-200)] text-white lg:rounded-md lg:cursor-pointer"
        href="#"
      >
        Our Academy
      </Link>
    </>
  )
}

type NavLinkProps = {
  href: string
  text: string
}

function NavLink({ href, text }: NavLinkProps) {
  return (
    <li>
      <Link
        className="block py-1 px-4 hover:bg-[var(--light-blue-100)] lg:hover:bg-transparent lg:px-0 lg:border-b-2 lg:border-b-transparent lg:hover:border-b-[var(--blue-100)] lg:hover:text-[var(--dark-blue-100)]"
        href={href}
      >
        {text}
      </Link>
    </li>
  )
}

function DropdownList(props: { state: boolean }) {
  const baseClassNames =
    'flex flex-col w-80 bg-white shadow-md border border-gray-200 absolute lg:left-0 lg:top-10 rounded-md overflow-hidden transition-[translate] opacity-0'
  return (
    <div
      className={`${baseClassNames} ${
        props.state ? 'translate-y-0 opacity-100' : 'translate-y-3'
      }`}
    >
      <Link
        href="/services/prevention-hardening"
        className="py-1.5 px-4 hover:bg-gray-100"
      >
        Proactive Prevention & Hardening
      </Link>
      <Link
        href="/services/detection-monitoring"
        className="py-1.5 px-4 hover:bg-gray-100"
      >
        Detection & Monitoring
      </Link>
      <Link
        href="/services/response-recovery"
        className="py-1.5 px-4 hover:bg-gray-100"
      >
        Response & Recovery
      </Link>
      <Link
        href="/services/cybersecurity-training"
        className="py-1.5 px-4 hover:bg-gray-100"
      >
        Cybersecurity Training & Awareness
      </Link>
      <Link
        href="/services/managed-services"
        className="py-1.5 px-4 hover:bg-gray-100"
      >
        Managed IT Services
      </Link>
    </div>
  )
}
