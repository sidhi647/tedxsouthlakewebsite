import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PersonCard from "@/components/PersonCard";
import { Section, SectionHeading } from "@/components/ui";
import { founder, organizers, programManagement, departments, coaches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Board & Departments",
  description: "Meet the founder, organizers, and department chairs behind TEDxSouthlake.",
};

const allPeople = [
  founder,
  ...organizers,
  ...programManagement,
  ...departments.flatMap((d) => d.chairs),
];

export default function OurBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The People Behind the Ideas"
        description="Meet the TEDxSouthlake board: founder, organizers, and the department chairs who run the event."
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPeople.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Coaching" title="Meet the coaching team" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((c) => (
            <PersonCard key={c.name} person={c} />
          ))}
        </div>
      </Section>
    </>
  );
}
