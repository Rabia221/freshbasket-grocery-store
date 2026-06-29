import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              FreshBasket
            </h2>

            <p className="mt-4 text-gray-400">
              Fresh groceries delivered to your doorstep with quality,
              convenience, and secure online shopping.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <FiPhone />
                +92 300 1234567
              </p>

              <p className="flex items-center gap-2">
                <FiMail />
                support@freshbasket.com
              </p>

              <p className="flex items-center gap-2">
                <FiMapPin />
                Karachi, Pakistan
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4">
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, index) => (
                <button
                  key={index}
                  className="rounded-full bg-gray-800 p-3 text-xl transition hover:bg-green-600"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FreshBasket. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}