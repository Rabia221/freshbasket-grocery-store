"use client";

import { HiBars3 } from "react-icons/hi2";

export default function MobileMenu() {
  return (
    <button
      type="button"
      aria-label="Open Menu"
      className="rounded-lg p-2 text-2xl text-gray-700 transition hover:bg-gray-100 lg:hidden"
    >
      <HiBars3 />
    </button>
  );
}