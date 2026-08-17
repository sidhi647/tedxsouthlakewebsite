import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";
import { fourYearTrack, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "4-Year Leadership Program",
  description: "The path from first-year volunteer to TEDxSouthlake organizer, co-organizer, or speaker.",
};

export default function FourYearProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The 4-Year Leadership Program"
        description="A clear path from showing up to leading the event, or taking the stage yourself."
      />

      <Section>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200" />
          <div className="grid md:grid-cols-4 gap-8 relative">
            {fourYearTrack.map((step) => (
              <div key={step.year}>
                <div className="w-10 h-10 rounded-full bg-tedx-red text-white flex items-center justify-center font-bold relative z-10">
                  {step.year.replace("Year ", "")}
                </div>
                <p className="mt-4 font-bold">{step.year}</p>
                <p className="text-tedx-red font-semibold text-sm mt-1">{step.title}</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="Benefit"
          title="Sponsored coaching"
          description="Students who commit to the full track earn sponsored coaching toward becoming a TEDxSouthlake speaker: the same GEM coaching process our confirmed speakers go through."
        />
        <CTAButton href="/gem-framework" variant="outline">
          See the GEM Framework
        </CTAButton>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Ready to start Year 1?" />
        <CTAButton href={site.summerLeadershipFormUrl} external>
          Apply for the Summer Student Leadership Program
        </CTAButton>
      </Section>
    </>
  );
}
