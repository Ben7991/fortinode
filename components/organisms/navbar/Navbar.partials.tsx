'use client'

import { MouseEvent, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { PiHamburger } from 'react-icons/pi'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'

import {
  LargeScreenNavProps,
  MobileNavProps,
  NavLinkProps,
} from './Navbar.type'
import Backdrop from '@/components/atoms/backdrop/Backdrop'
import AppLogo from '@/components/molecules/app-logo/AppLogo'

export function Nav() {
  const [showNav, setShowNav] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleOutsideClick = useCallback((event: globalThis.MouseEvent) => {
    event.stopPropagation()

    if (!(event.target as HTMLElement).classList.contains('dropdown')) {
      setShowDropdown(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
  }, [handleOutsideClick])

  const toggleNav = () => {
    setShowNav((prevState) => !prevState)
  }

  const toggleDropdown = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setShowDropdown((prevState) => !prevState)
  }

  return (
    <>
      <button
        type="button"
        className="inline-block lg:hidden mobile-toggle"
        onClick={toggleNav}
      >
        <PiHamburger className="text-2xl" />
      </button>
      <MobileNav showNav={showNav} onToggleNav={toggleNav} />
      <LargeScreenNav onToggleDropdown={toggleDropdown} state={showDropdown} />
      <Link
        className="hidden lg:block py-1.5 px-4 bg-[var(--dark-blue-100)] hover:bg-[var(--dark-blue-200)] text-white lg:rounded-md lg:cursor-pointer"
        href="#"
      >
        Our Academy
      </Link>
    </>
  )
}

function MobileNav({ showNav, onToggleNav }: MobileNavProps) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      {showNav && <Backdrop onClick={onToggleNav} />}
      <div
        className={`fixed top-0 left-0 h-screen z-10 py-3 transition-[width] bg-white shadow-2xl lg:hidden ${
          showNav ? 'w-[87%] px-4 md:w-[350px]' : 'overflow-hidden w-0'
        }`}
      >
        <AppLogo />
        <ul className="flex flex-col mt-6">
          <li onClick={onToggleNav}>
            <Link
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              href="/"
            >
              Home
            </Link>
          </li>
          <li onClick={onToggleNav}>
            <Link
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <button
              className="w-full flex items-center justify-between text-start py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Services <FiChevronDown />
            </button>
            {showDropdown && (
              <div
                className="flex flex-col ps-5 py-2 gap-y-2"
                onClick={onToggleNav}
              >
                <Link
                  href="/services/prevention-hardening"
                  className="flex gap-1 items-center hover:font-semibold"
                >
                  <FiChevronRight /> Proactive Prevention & Hardening
                </Link>
                <Link
                  href="/services/detection-monitoring"
                  className="flex gap-1 items-center hover:font-semibold"
                >
                  <FiChevronRight /> Detection & Monitoring
                </Link>
                <Link
                  href="/services/response-recovery"
                  className="flex gap-1 items-center hover:font-semibold"
                >
                  <FiChevronRight /> Response & Recovery
                </Link>
                <Link
                  href="/services/cybersecurity-training"
                  className="flex gap-1 items-center hover:font-semibold"
                >
                  <FiChevronRight /> Cybersecurity Training & Awareness
                </Link>
                <Link
                  href="/services/managed-services"
                  className="flex gap-1 items-center hover:font-semibold"
                >
                  <FiChevronRight /> Managed IT Services
                </Link>
              </div>
            )}
          </li>
          <li onClick={onToggleNav}>
            <Link
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

function LargeScreenNav({ onToggleDropdown, state }: LargeScreenNavProps) {
  return (
    <div className="hidden lg:block lg:z-[1] lg:overflow-visible lg:bg-transparent lg:h-auto lg:w-auto">
      <ul className="lg:flex lg:space-x-4">
        <NavLink href="/" text="Home" />
        <NavLink href="/about-us" text="About Us" />
        <li className="relative hover:last:block">
          <button
            className="dropdown flex items-center justify-between lg:justify-start gap-1 hover:text-[var(--dark-blue-100)] hover:bg-[var(--light-blue-100)] lg:hover:bg-transparent py-1 px-4 lg:px-0 hover:cursor-pointer lg:border-b-2 lg:border-b-transparent lg:hover:border-b-[var(--blue-100)]"
            type="button"
            onClick={onToggleDropdown}
          >
            Services <FiChevronDown />
          </button>
          {state && <DropdownList state={state} />}
        </li>
        <NavLink href="/contact-us" text="Contact Us" />
      </ul>
    </div>
  )
}

function NavLink({ href, text }: NavLinkProps) {
  return (
    <li>
      <Link
        className="block py-1 px-4 hover:bg-gray-200 lg:hover:bg-transparent lg:px-0 lg:border-b-2 lg:border-b-transparent lg:hover:border-b-[var(--blue-100)] lg:hover:text-[var(--dark-blue-100)]"
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
