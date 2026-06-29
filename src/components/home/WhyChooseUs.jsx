import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    id: 1,
    icon: FiTruck,
    title: "Fast Delivery",
    description: "Fresh groceries delivered quickly to your doorstep.",
  },
  {
    id: 2,
    icon: FiShield,
    title: "Secure Payment",
    description: "Safe and secure online payments with Stripe.",
  },
  {
    id: 3,
    icon: FiRefreshCw,
    title: "Easy Returns",
    description: "Simple return policy for eligible products.",
  },
  {
    id: 4,
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "Friendly customer support whenever you need help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Why Choose FreshBasket?"
          subtitle="We make grocery shopping simple, fast, and reliable."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}