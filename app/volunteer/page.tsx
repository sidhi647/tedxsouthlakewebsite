import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Volunteer & Join Us",
  description: "How to get involved with TEDxSouthlake: volunteer application and leadership track eligibility.",
};

const benefits = [
  "Sponsored coaching toward becoming a TEDxSouthlake speaker",
  "Eligibility for the 4-Year Leadership Program",
  "A community of student and adult leaders across every department",
  "Real ownership: departments are run by volunteers and students, not just adults",
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Volunteer & Join Us"
        description="Every organizer, department chair, and coach started as a volunteer. Here's how to get involved."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="Why Join" title="What you get" />
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-gray-700">
                  <span className="text-tedx-red font-bold">-</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-8">
            <p className="eyebrow text-tedx-red mb-3">Get Started</p>
            <p className="text-xl font-bold">Volunteer application</p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Fill out the volunteer application to join a department: Operations, Technology,
              PR, Partnerships, Coaching, or Community Engagement.
            </p>
            <div className="mt-6">
              <CTAButton href={site.volunteerFormUrl} external>
                Open Volunteer Form
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-tedx-black text-white text-center">
        <SectionHeading title="Questions before you apply?" />
        <a href={`mailto:${site.email}`} className="text-tedx-red font-bold text-lg">
          {site.email}
        </a>
      </Section>
    </>
  );
}
