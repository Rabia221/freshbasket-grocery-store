import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryCard from "./CategoryCard";
import categories from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle
          title="Shop by Categories"
          subtitle="Browse fresh groceries by category and find everything you need in one place."
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}