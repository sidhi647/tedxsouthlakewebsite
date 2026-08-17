export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-tedx-black text-white">
      <div className="container-page py-20 md:py-28">
        {eyebrow && <p className="eyebrow text-tedx-red mb-4">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
