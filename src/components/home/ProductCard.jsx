import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product }) {
  const discount =
    product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : 0;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-56 overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
          />

          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              -{discount}%
            </span>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-3 p-5">
        <p className="text-sm text-green-600">
          {product.category}
        </p>

        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition group-hover:text-green-600">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            Rs. {product.price}
          </span>

          {product.oldPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              Rs. {product.oldPrice}
            </span>
          )}
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700">
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}