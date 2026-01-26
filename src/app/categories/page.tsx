import { Category } from "@/common/types/Category";
import CategoryCard from "@/components/category-card";


async function fetchCategories(): Promise<Category[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories",
     {next: { revalidate: 60 },
    //cache: "force-cache", // default

});

  return res.json();
}

export default async function CategoriesPage() {
  const categories = await fetchCategories();
  return (
    <section>
      <ul className="grid grid-cols-4 gap-4">
        {categories.map((c) => (
          <li key={c.id}>
            <CategoryCard {...c} />
          </li>
        ))}
      </ul>
    </section>
  );
}
