import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "What Makes Us Different",
  description:
    "Cross-generational speakers, the GEM coaching framework, and a blind evaluation model: how TEDxSouthlake stands apart.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="What Makes Us Different"
        description="TEDxSouthlake isn't built like a typical TEDx event. Here's how."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              title="One stage, every generation."
              description="From 9-year-olds to C-suite executives, TEDxSouthlake puts every generation of idea-makers on the same stage, not as a gimmick, but as the core of how the event is curated."
            />
          </div>
          <div className="bg-tedx-black text-white p-8">
            <p className="eyebrow text-tedx-red mb-4">TED Main Stage</p>
            <p className="text-xl font-bold">Dr. Jessica Kriegal</p>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              A TEDxSouthlake speaker went on to earn an invitation to the TED main stage. Full
              story and talk link coming soon.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="Our Approach"
          title="The GEM Framework"
          description="We don't just select speakers, we build them. Every confirmed speaker moves through a 3-round evaluation and is matched with a dedicated coach."
        />
        <CTAButton href="/gem-framework">Explore the GEM Framework</CTAButton>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Selection"
          title="A blind evaluation model"
          description="Ideas are evaluated on merit, not name recognition, title, or connections."
        />
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Leadership" title="Student co-organizers, not student volunteers" />
        <p className="text-gray-700 max-w-2xl leading-relaxed">
          Every co-organizer in TEDxSouthlake's history has been a high school student. This
          isn't a junior program, students run departments, curate speakers, and lead the event
          itself. Learn more on our{" "}
          <a href="/student-leadership" className="text-tedx-red font-semibold">
            Student Leadership Track
          </a>{" "}
          page.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Compare" title="TEDxSouthlake vs. a typical TEDx event" />
        <div className="overflow-x-auto border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-tedx-black text-white text-left">
                <th className="p-4 font-semibold">&nbsp;</th>
                <th className="p-4 font-semibold">Typical TEDx Event</th>
                <th className="p-4 font-semibold">TEDxSouthlake</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Speaker development", "Select and stage", "Select, coach (GEM), and stage"],
                ["Leadership", "Adult-run", "Student co-organized every year"],
                ["Age range on stage", "Typically single-generation", "9 years old through C-suite"],
                ["Evaluation", "Varies by team", "Structured, blind, 3-round"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-gray-200">
                  <td className="p-4 font-semibold">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-900 font-medium">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
