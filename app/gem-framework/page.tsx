import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PersonCard from "@/components/PersonCard";
import { Section, SectionHeading, CTAButton, EmptyState } from "@/components/ui";
import { gemPhases, gemRounds, coaches } from "@/lib/data";

export const metadata: Metadata = {
  title: "The GEM Framework",
  description:
    "How TEDxSouthlake builds TEDx-ready speakers: Grounding the idea, Elevating the story, Mastering delivery.",
};

export default function GemFrameworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Speak · TEDx Speaker Coaching"
        title="The GEM Framework"
        description="How we build TEDx-ready speakers. We don't just select speakers, we build them."
      />

      {/* G-E-M phases */}
      <Section>
        <SectionHeading eyebrow="The Framework" title="Grounding. Elevating. Mastering." />
        <div className="grid md:grid-cols-3 gap-6">
          {gemPhases.map((phase) => (
            <div key={phase.letter} className="border-t-4 border-tedx-red bg-gray-50 p-8">
              <p className="text-6xl font-extrabold text-tedx-red/20">{phase.letter}</p>
              <p className="text-xl font-bold mt-2">{phase.title}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3-round evaluation */}
      <Section className="bg-tedx-black text-white">
        <SectionHeading
          eyebrow="Evaluation"
          title="A structured, 3-round process"
          description="Every applicant moves through the same three rounds, evaluated on the idea, then the story, then stage readiness."
        />
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {gemRounds.map((r, i) => (
            <div key={r.round} className="bg-tedx-black p-8">
              <p className="text-sm text-tedx-red font-bold">{r.round}</p>
              <p className="text-lg font-bold mt-1">{r.name}</p>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{r.description}</p>
              {i < gemRounds.length - 1 && (
                <p className="mt-4 text-gray-600 text-2xl">↓</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Coaching match */}
      <Section>
        <SectionHeading
          eyebrow="Coaching Match"
          title="Every speaker gets a dedicated coach"
          description="After Round 3, each speaker is matched to a TEDx coach for the remainder of their journey, from grounded idea to stage-ready talk."
        />
      </Section>

      {/* Coach profiles */}
      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Our Coaches" title="Meet the coaching team" />
        {coaches.length === 0 ? (
          <EmptyState message="Coach profiles are being added, check back soon." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((c) => (
              <PersonCard key={c.name} person={c} />
            ))}
          </div>
        )}
      </Section>

      {/* Outcomes */}
      <Section className="text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl font-medium">
          “Every speaker who completes GEM leaves with more than a talk. They leave with a
          lifelong framework.”
        </blockquote>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <CTAButton href="/apply-to-speak">Apply for 2027</CTAButton>
          <CTAButton href="/past-talks" variant="outline">
            Watch Our Speakers
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
