import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { articles, getArticle } from "@/data/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getArticle(slug)?.title ?? "Article" };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <PageHero label={article.category} title={article.title}>
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/insights", label: "Insights" },
            { label: "Article" },
          ]}
        />
        <p className="label" style={{ marginTop: 16 }}>
          {article.date}
        </p>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container article-body">
          {article.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <div style={{ marginTop: 40 }}>
            <Button href="/contact">Speak with the authors →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
