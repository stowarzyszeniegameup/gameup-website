/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React, { useState } from "react";

const navbarLinks = [
  {
    href: "/#about",
    text: "O nas",
  },
  {
    href: "/#workshops",
    text: "Warsztaty",
  },
  {
    href: "/#astrolabe",
    text: "Astrolabe Stories",
  },
  {
    href: "/#team",
    text: "Zespół",
  },
  {
    href: "/#contact",
    text: "Kontakt",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-white flex px-12 py-6 justify-center items-center">
      <div className="max-w-screen-xl w-full flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-row justify-between">
          <div>
            <Link href="/">
              <a>
                <img
                  src="/gameup_logo.webp"
                  alt="GameUP logo"
                  className="w-36"
                />
              </a>
            </Link>
          </div>
          <button
            className="sm:hidden"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-label="Menu mobilne"
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <ul
          id="desktop-menu"
          className="hidden sm:flex flex-row list-none gap-4 items-center font-secondary"
        >
          {navbarLinks.map((link, index) => (
            <li
              key={`navbar-${index}`}
              className="transition-all duration-100 border-lime-500 hover:font-bold hover:border-b-2"
            >
              <Link href={link.href} scroll={false}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
          <li className="flex gap-4">
            <a href="https://www.facebook.com/stowarzyszeniegameup">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/stowarzyszenie-game-up/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
        </ul>
        <ul
          id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          } sm:hidden flex-col list-none gap-4 items-center font-secondary pt-4`}
        >
          {navbarLinks.map((link, index) => (
            <li
              key={`navbar-mobile-${index}`}
              className="transition-all duration-100 hover:font-bold"
              onClick={() => setShowMenu(false)}
            >
              <Link href={link.href} scroll={false}>
                <a className="py-2">{link.text}</a>
              </Link>
            </li>
          ))}
          <li className="flex gap-8">
            <a href="https://www.facebook.com/stowarzyszeniegameup">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/stowarzyszenie-game-up/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
