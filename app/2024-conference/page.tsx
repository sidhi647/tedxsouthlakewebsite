import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SpeakerCard from "@/components/SpeakerCard";
import { Section, SectionHeading, EmptyState, CTAButton } from "@/components/ui";
import { pastEvents, featuredSpeakers } from "@/lib/data";

const event = pastEvents.find((e) => e.year === 2024)!;

export const metadata: Metadata = {
  title: "2024 Conference",
  description: `${event.theme}. ${event.date} at ${event.venue}.`,
};

export default function Conference2024Page() {
  const speakers = featuredSpeakers.filter((s) => s.year === 2024);

  return (
    <>
      <PageHero eyebrow={`Watch · ${event.date}`} title={event.theme} />

      <Section>
        <p className="text-gray-700 max-w-2xl leading-relaxed">{event.description}</p>
        <p className="mt-4 text-sm text-gray-500">
          {event.date} · {event.venue}
        </p>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Lineup" title="2024 Speakers" />
        {speakers.length === 0 ? (
          <EmptyState message="2024 speaker videos and recap photos are being added to this page." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((s) => (
              <SpeakerCard key={s.name} speaker={s} />
            ))}
          </div>
        )}
      </Section>

      <Section className="text-center">
        <CTAButton href="/past-talks" variant="outline">
          Back to All Past Talks
        </CTAButton>
      </Section>
    </>
  );
}
