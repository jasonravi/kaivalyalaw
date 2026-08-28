import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  solid?: boolean;
  fill?: boolean;
};

export function Button({ href, children, light, solid, fill }: Props) {
  const cls = [
    "btn",
    light ? "btn-light" : "",
    solid ? "btn-solid" : "",
    fill ? "btn-fill" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="label">{children}</p>;
}
