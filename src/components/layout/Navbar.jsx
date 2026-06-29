"use client";

import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Container from "@/components/ui/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 font-bold text-white">
                F
              </div>

              <div>
                <h1 className="text-lg font-bold">FreshBasket</h1>
                <p className="hidden text-xs text-gray-500 sm:block">
                  Grocery Store
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-700 transition hover:text-green-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="hidden lg:flex text-2xl">
                <FiSearch />
              </button>

              <button className="relative text-2xl">
                <FiShoppingCart />

                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">
                  0
                </span>
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-3xl lg:hidden"
              >
                {menuOpen ? <HiXMark /> : <HiBars3 />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-b bg-white lg:hidden">
          <Container>
            <div className="flex flex-col py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 font-medium hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}