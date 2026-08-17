import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, StatBanner, CTAButton, EmptyState } from "@/components/ui";
import { leadershipStats, studentSpotlights, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Student Leadership Track",
  description: "The boldest differentiator of TEDxSouthlake: student co-organizers, not student volunteers.",
};

export default function StudentLeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Student Leadership Track"
        description="Not helpers. Not observers. Co-organizers, speakers, and leaders."
      />

      <Section>
        <StatBanner stats={leadershipStats} />
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="What Students Do"
          title="Students don't assist TEDxSouthlake. They run it."
          description="Every co-organizer in TEDxSouthlake's seven-year history has been a high school student. Students lead departments, curate the speaker lineup, and run the event day itself, with a goal of 50% youth voices on stage."
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Student Spotlights" title="Past Co-organizers" />
        {studentSpotlights.length === 0 ? (
          <EmptyState message="Student leadership spotlights are being added, check back soon." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentSpotlights.map((s) => (
              <div key={s.name} className="border border-gray-200">
                <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
                  {s.photo ? (
                    <Image src={s.photo} alt={s.name} fill className="object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-gray-400">
                      {s.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="font-bold">{s.name}</p>
                  {s.role && <p className="text-sm text-tedx-red font-medium">{s.role}</p>}
                  {s.quote && <p className="mt-2 text-sm text-gray-600 italic">“{s.quote}”</p>}
                  {s.summary && <p className="mt-2 text-sm text-gray-600">{s.summary}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section className="bg-tedx-black text-white text-center">
        <SectionHeading
          title="See the full 4-year path"
          description="From first-year volunteer to organizer, co-organizer, or speaker."
        />
        <div className="flex justify-center gap-4 flex-wrap">
          <CTAButton href="/four-year-program">View the 4-Year Program</CTAButton>
          <CTAButton href={site.summerLeadershipFormUrl} variant="outline-light" external>
            Apply Now
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
