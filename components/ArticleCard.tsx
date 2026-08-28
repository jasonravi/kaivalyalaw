import Link from "next/link";
import type { Article } from "@/data/insights";

export function ArticleCard({
  article,
  feature = false,
}: {
  article: Article;
  feature?: boolean;
}) {
  return (
    <article className={`article ${feature ? "feature" : ""}`}>
      <div className="meta-row">
        <span>{article.category}</span>
        <span>{article.date}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <Link className="btn" href={`/insights/${article.slug}`} style={{ marginTop: 24 }}>
        Read Article →
      </Link>
    </article>
  );
}
