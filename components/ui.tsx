import Link from "next/link";

export function Section({
  children,
  className = "",
  tight = false,
}: {
  children: React.ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section className={`container-page ${tight ? "py-12" : "py-20"} ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl mb-12 [.text-center_&]:mx-auto">
      {eyebrow && <p className="eyebrow text-tedx-red mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>}
    </div>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  external?: boolean;
}) {
  const base = "inline-block text-sm font-bold uppercase tracking-wide px-6 py-3.5 transition-colors";
  const styles = {
    primary: "bg-tedx-red text-white hover:bg-red-700",
    secondary: "bg-tedx-black text-white hover:bg-gray-800",
    outline: "border-2 border-tedx-black text-tedx-black hover:bg-tedx-black hover:text-white",
    "outline-light": "border-2 border-white text-white hover:bg-white hover:text-tedx-black",
  };
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  if (external) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}

export function StatBanner({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
      {stats.map((s) => (
        <div key={s.label} className="text-center px-4 pt-8 sm:pt-0 first:pt-0">
          <p
            className={`font-extrabold text-tedx-red text-balance ${
              s.value.length > 10 ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"
            }`}
          >
            {s.value}
          </p>
          <p className="mt-2 text-sm text-gray-600 uppercase tracking-wide font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="border border-dashed border-gray-300 p-10 text-center text-gray-500">
      {message}
    </div>
  );
}
