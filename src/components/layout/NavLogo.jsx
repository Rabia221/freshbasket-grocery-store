import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl font-bold text-white">
        F
      </div>

      <div>
        <h1 className="text-xl font-extrabold text-gray-900">
          FreshBasket
        </h1>

        <p className="-mt-1 text-xs text-gray-500">
          Fresh Grocery Store
        </p>
      </div>
    </Link>
  );
}