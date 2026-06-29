import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative mx-auto h-28 w-28">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-5 text-center text-lg font-semibold text-gray-800">
        {category.name}
      </h3>
    </Link>
  );
}