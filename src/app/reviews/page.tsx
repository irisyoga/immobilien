import { db } from "@/db";
import { reviewsTable } from "@/db/schema";

export default async function ReviewsPage() {
  const reviews = await db.select().from(reviewsTable);
  return (
    <div>
      <h2>Review</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <h3>{r.title}</h3>
            <span>{r.content}</span>
            <span>
              {r.createdAt.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// {/* {r.createdAt.getDate() +
//                 " " +
//                 r.createdAt.getHours() +
//                 " " +
//                 // r.createdAt.getMinutes()} */}

// {review.createdAt.toLocaleDateString("en-GB", {
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                 })}
