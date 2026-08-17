import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Apply to Speak",
  description: "TEDxSouthlake speaker applications: status, selection philosophy, and what we look for.",
};

const criteria = [
  "A single, clear idea worth spreading",
  "Originality: not a rehash of an existing talk or trend",
  "Evidence of depth: lived experience, research, or expertise",
  "A story that carries the idea, not just facts",
  "Willingness to go through the GEM coaching process",
  "Stage presence potential (coachable, not necessarily polished yet)",
  "Fit with the year's theme",
  "Relevance to a broad, cross-generational audience",
];

export default function ApplyToSpeakPage() {
  return (
    <>
      <PageHero
        eyebrow="Speak"
        title="Apply to Speak"
        description="Our selection philosophy, what we look for, and how to apply."
      />

      <Section>
        <div className="bg-tedx-black text-white p-8 max-w-2xl">
          <p className="eyebrow text-tedx-red mb-3">Application Status</p>
          <p className="text-2xl font-bold">2026 applications are currently closed.</p>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Have an idea worth spreading for 2027? Fill out this interest form to be notified
            when the 2027 application is live!
          </p>
          <div className="mt-6">
            <CTAButton href={site.apply2027Url} external>
              Apply for 2027
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="We select ideas, then we build speakers."
          description="Every speaker who is selected goes through the GEM Framework: a structured, 3-round evaluation followed by dedicated coaching. We're not just looking for polished talks; we're looking for ideas worth the work."
        />
        <CTAButton href="/gem-framework">See the GEM Framework</CTAButton>
      </Section>

      <Section>
        <SectionHeading eyebrow="What We're Looking For" title="Our 8-criteria scorecard" />
        <div className="grid sm:grid-cols-2 gap-4">
          {criteria.map((c, i) => (
            <div key={c} className="flex gap-4 border border-gray-200 p-4">
              <span className="text-tedx-red font-extrabold text-xl">{i + 1}</span>
              <p className="text-sm text-gray-700 pt-0.5">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-tedx-black text-white text-center">
        <SectionHeading title="Have an idea for 2027?" />
        <CTAButton href={site.apply2027Url} external>
          Apply for 2027
        </CTAButton>
      </Section>
    </>
  );
}
