import Link from "next/link";

export function Breadcrumb({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav className="crumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {index < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  label,
  title,
  children,
}: {
  label?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {label ? <p className="label">{label}</p> : null}
        <h1 style={{ marginTop: 16 }}>{title}</h1>
        {children}
      </div>
    </section>
  );
}
