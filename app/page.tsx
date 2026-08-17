import Link from "next/link";
import { event2026, site, stats, featuredTalks } from "@/lib/data";
import { CTAButton, Section, SectionHeading, StatBanner } from "@/components/ui";
import TalksCarousel from "@/components/TalksCarousel";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tedx-black text-white relative overflow-hidden">
        <div className="container-page py-24 md:py-36 relative z-10">
          <p className="eyebrow text-tedx-red mb-6">
            {event2026.edition} · {event2026.date}
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            {event2026.theme}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl">
            {event2026.subtheme}
          </p>
          <p className="mt-8 text-gray-400 max-w-lg leading-relaxed">
            {event2026.venue} · {event2026.time}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href={site.ticketUrl} external>
              Buy Tickets
            </CTAButton>
            <CTAButton href="/apply-to-speak" variant="outline-light">
              Apply to Speak
            </CTAButton>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/past-talks" className="text-gray-300 hover:text-tedx-red underline underline-offset-4">
              Watch Past Talks
            </Link>
            <Link href="/student-leadership" className="text-gray-300 hover:text-tedx-red underline underline-offset-4">
              Join Student Leadership
            </Link>
            <Link href="/2026-speakers" className="text-gray-300 hover:text-tedx-red underline underline-offset-4">
              See 2026 Speakers
            </Link>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute -right-32 -bottom-32 w-[520px] h-[520px] rounded-full bg-tedx-red/20 blur-3xl"
        />
      </section>

      {/* Stats */}
      <Section>
        <StatBanner stats={stats} />
      </Section>

      {/* Quick links */}
      <Section className="bg-gray-50" tight={false}>
        <SectionHeading
          eyebrow="Get Involved"
          title="However you show up, there's a place for you here."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Buy Tickets", desc: "Reserve your seat for Nov 8, 2026.", href: site.ticketUrl, external: true },
            { title: "Apply to Speak", desc: "Learn what we look for in a TEDx idea.", href: "/apply-to-speak" },
            { title: "Watch Past Talks", desc: "Explore 7 years of ideas worth spreading.", href: "/past-talks" },
            { title: "Join Leadership", desc: "Start the 4-year student leadership track.", href: "/student-leadership" },
          ].map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="block bg-white border border-gray-200 p-6 hover:border-tedx-red transition-colors"
            >
              <p className="font-bold text-lg">{card.title}</p>
              <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
              <p className="text-tedx-red text-sm font-semibold mt-4">Learn more →</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Featured quote */}
      <Section>
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-medium leading-snug">
            “Not optimizing for scale. Optimizing for depth of transformation.”
          </p>
          <footer className="mt-6 text-sm text-gray-500 uppercase tracking-wide">
            Uma, Founder &amp; License Holder
          </footer>
        </blockquote>
      </Section>

      {/* Featured Talks */}
      <Section className="bg-tedx-black text-white">
        <SectionHeading
          eyebrow="Watch"
          title="Featured Talks"
          description="A few of the ideas that have taken the TEDxSouthlake stage."
        />
        <TalksCarousel talks={featuredTalks} />
        <div className="mt-8">
          <CTAButton href="/past-talks" variant="outline-light">
            Watch All Talks
          </CTAButton>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          {event2026.date} · {event2026.venue}
        </h2>
        <p className="mt-4 text-gray-600">Tickets are limited. Reserve your seat for {event2026.theme}.</p>
        <div className="mt-8">
          <CTAButton href={site.ticketUrl} external>
            Get Your Tickets
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
