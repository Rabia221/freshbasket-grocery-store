import { FiSearch, FiShoppingCart } from "react-icons/fi";

import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavLogo />

<div className="hidden lg:block">
  <NavLinks />
</div>
          <div className="flex items-center gap-4">
            <button
              className="hidden text-2xl text-gray-700 transition hover:text-green-600 lg:block"
              aria-label="Search"
            >
              <FiSearch />
            </button>

            <button
              className="relative text-2xl text-gray-700 transition hover:text-green-600"
              aria-label="Cart"
            >
              <FiShoppingCart />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                0
              </span>
            </button>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}