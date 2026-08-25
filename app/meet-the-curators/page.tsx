import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PersonCard from "@/components/PersonCard";
import { Section, EmptyState } from "@/components/ui";
import { coaches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meet the Curators",
  description: "Meet the curators behind the TEDxSouthlake 2026 speaker lineup.",
};

export default function MeetTheCuratorsPage() {
  return (
    <>
      <PageHero
        eyebrow="2026 Event"
        title="Meet the Curators"
        description="The team helping shape the ideas and speakers for TEDxSouthlake 2026."
      />

      <Section>
        {coaches.length === 0 ? (
          <EmptyState message="Curator profiles are being added, check back soon." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((c) => (
              <PersonCard key={c.name} person={c} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
