import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PromoBanner() {
  return (
    <section className="py-16">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-12 text-white lg:px-16">
          <div className="max-w-2xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              Limited Time Offer
            </span>

            <h2 className="mt-6 text-3xl font-bold lg:text-5xl">
              Get up to 30% OFF
            </h2>

            <p className="mt-4 text-green-100">
              Fresh fruits, vegetables, dairy products and daily essentials at
              amazing prices.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-100"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}