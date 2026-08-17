import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";
import { pastEvents, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Past Talks",
  description: "Browse every TEDxSouthlake talk by year, speaker type, and theme.",
};

export default function PastTalksPage() {
  return (
    <>
      <PageHero
        eyebrow="Watch"
        title="All Past Talks"
        description="Seven years of ideas worth spreading, from students to seasoned professionals."
      />

      <Section>
        <SectionHeading eyebrow="Browse" title="By conference year" />
        <div className="grid sm:grid-cols-2 gap-6">
          {pastEvents.map((e) => (
            <div key={e.year} className="border border-gray-200 p-8">
              <p className="text-tedx-red font-bold text-sm">{e.year}</p>
              <p className="text-2xl font-extrabold mt-1">{e.theme}</p>
              {e.subtheme && <p className="text-gray-600">{e.subtheme}</p>}
              <p className="text-sm text-gray-500 mt-3">
                {e.date} · {e.venue}
              </p>
              <div className="mt-6">
                <CTAButton href={`/${e.year}-conference`} variant="outline">
                  View {e.year} Conference
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50 text-center">
        <SectionHeading
          eyebrow="Video Gallery"
          title="Watch every talk"
          description="The complete TEDxSouthlake video library lives on our YouTube channel: every talk, every year, in one playlist."
        />
        <CTAButton href={site.pastTalksPlaylistUrl} external>
          Watch on YouTube
        </CTAButton>
      </Section>
    </>
  );
}
