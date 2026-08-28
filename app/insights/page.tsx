import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/insights";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <PageHero label="Publications" title="Thinking beyond the case.">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Insights" }]} />
        <p className="lede" style={{ marginTop: 20 }}>
          Research and commentary from the practice — legal updates, analysis and
          publications as listed by the firm.
        </p>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: 32 }}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
