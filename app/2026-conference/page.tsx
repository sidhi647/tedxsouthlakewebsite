import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";
import { event2026, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Attend TEDxSouthlake 2026",
  description: `${event2026.theme}: ${event2026.subtheme}. ${event2026.date} at ${event2026.venue}.`,
};

export default function AttendPage() {
  return (
    <>
      <PageHero
        eyebrow={`${event2026.edition} · ${event2026.date}`}
        title={`${event2026.theme}: ${event2026.subtheme}`}
        description={`${event2026.venue} · ${event2026.time}`}
      />

      <Section>
        <div className="grid sm:grid-cols-2 gap-8">
          {event2026.tickets.map((t) => (
            <div key={t.tier} className="border border-gray-200 flex flex-col">
              <div className="p-8 flex-1">
                <p className="eyebrow text-tedx-red mb-2">{t.tier}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-extrabold">{t.price}</p>
                  <p className="text-sm text-gray-500">{t.note}</p>
                </div>
                <p className="text-sm text-gray-400">Regular pricing: {t.priceRegular}</p>
                <p className="mt-4 text-gray-700">{t.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-tedx-red font-bold">-</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <CTAButton href={site.ticketUrl} external>
                  Buy {t.tier}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Event Details" title="What to expect" />
        <div className="grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-bold uppercase tracking-wide text-gray-500 mb-2">Date</p>
            <p className="text-gray-800">{event2026.date}</p>
            <p className="text-gray-800">{event2026.time}</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-wide text-gray-500 mb-2">Venue</p>
            <p className="text-gray-800">{event2026.venue}</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-wide text-gray-500 mb-2">Format</p>
            <p className="text-gray-800">Full-day conference with curated lunch and networking</p>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Ready to join us?" />
        <CTAButton href={site.ticketUrl} external>
          Get Your Tickets
        </CTAButton>
      </Section>
    </>
  );
}
