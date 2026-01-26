import { Category } from "@/common/types/Category";
import { notFound } from "next/navigation";

async function fetchCategory(id: string): Promise<Category> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories${id}`, {
    next: { revalidate: 60 },
    //   cache: "force-cache", // default
  });
  if (res.status === 404) notFound();
  if (!res.ok) {
    const err = await res.json();
    //конкретно для сервера fakestore
    const {message} = err;
   throw new Error("Failed to fetch category");
   }

  return res.json();
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const category = await fetchCategory(id);
  return (
    <div>
      <h2>{category.name}</h2>
    </div>
  );
};

export default CategoryPage;
