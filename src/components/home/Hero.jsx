import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              🌿 Fresh Grocery Delivered
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Fresh Food Delivered
              <span className="block text-green-600">
                To Your Doorstep
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Shop fresh fruits, vegetables, dairy products, beverages and daily
              essentials with secure online payment and fast delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop">
                <Button>Shop Now</Button>
              </Link>

              <Link href="/categories">
                <Button variant="outline">Browse Categories</Button>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="/images/hero-banner.png"
              alt="Fresh Grocery"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}