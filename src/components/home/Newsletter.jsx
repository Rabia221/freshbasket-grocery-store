import Container from "@/components/ui/Container";

export default function Newsletter() {
  return (
    <section className="bg-green-600 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white lg:text-5xl">
            Subscribe to our Newsletter
          </h2>

          <p className="mt-4 text-green-100">
            Get the latest offers, discounts and grocery updates directly in
            your inbox.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-xl border-none px-5 text-gray-900 outline-none"
            />

            <button
              type="submit"
              className="h-14 rounded-xl bg-gray-900 px-8 font-semibold text-white transition hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}