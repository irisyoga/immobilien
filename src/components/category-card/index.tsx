import { Category } from "@/common/types/Category";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";


const CategoryCard: FC<Category> = (category) => {
  const { id, name, image, slug } = category;
  return (
    <div className="p-4 bg-gray-300 rounded-2xl max-w-64 min-h-100 flex flex-col gap-4 items-center justify-center">
      <h3><Link href={`/categories/${id}`}>{name}</Link></h3>
      
      <Image src={image[0]} alt={name} width={300} height={400} unoptimized />
      <p>{slug}$</p>
    </div>
  );
};
export default CategoryCard;
