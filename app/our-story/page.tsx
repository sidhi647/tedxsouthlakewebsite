import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How TEDxSouthlake bridges generations through the power of ideas.",
};

const generationalPillars = [
  {
    title: "Youth Leadership and Achievement",
    description:
      "Every year, TEDxSouthlake coaches 20 to 22 pre-collegiate speakers, with over 80% of our youth speakers gaining admission to Ivy League colleges. Our platform gives these young leaders the tools and confidence to present their ideas on a global stage and shape the future of their fields.",
  },
  {
    title: "Business Professionals Success Stories",
    description:
      "TEDxSouthlake has also played a crucial role in professional growth for many adult speakers. Many of our past speakers have transitioned into professional speaking careers and achieved significant career milestones. The platform fosters an environment where individuals of all ages can share their ideas, connect with influential leaders, and grow together.",
  },
  {
    title: "Collaborative Learning",
    description:
      "The magic of TEDxSouthlake happens when youthful energy meets the wisdom of seasoned professionals. Our intergenerational platform promotes a culture of collaborative learning, where every generation benefits from the exchange of ideas and perspectives, making us all stronger and more innovative together.",
  },
];

const values = [
  {
    title: "Empowerment",
    description:
      "We believe in the power of ideas to inspire change. TEDxSouthlake empowers speakers of all ages by helping them craft impactful messages that resonate with audiences. Whether preparing youth for prestigious educational opportunities or helping adults advance in their careers, we open doors for growth and success.",
  },
  {
    title: "Inclusivity",
    description:
      "At TEDxSouthlake, every voice matters. We prioritize diversity, inviting individuals from all walks of life (students, industry veterans, and community leaders) to share their unique ideas. Our inclusive approach ensures that the stage remains a platform for intergenerational dialogue, bringing varied perspectives together to create a richer, more dynamic conversation.",
  },
  {
    title: "Community",
    description:
      "At the heart of TEDxSouthlake is our volunteer-driven commitment to our community. Our teams dedicate countless hours to mentoring and guiding our speakers, offering support and expertise to help them craft their messages and build their confidence. We are a community that comes together to create meaningful change, all while remaining focused on our mission of empowerment, without monetary gain.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our Story"
        description="TEDxSouthlake is a platform where generations connect, cultures intersect, and ideas spark real change."
      />

      <Section>
        <SectionHeading
          eyebrow="Since 2021"
          title="Bridging Generational Gaps"
          description={
            'One of the core elements of TEDxSouthlake is our commitment to intergenerational impact. Since 2021, we\'ve expanded our focus to include not only brilliant young minds but also seasoned professionals, creating a dynamic space for collaboration, learning, and growth. The "Written Together: The Ideas Among Us" theme represents our belief that the best ideas are born when we come together across generations, sharing our knowledge and learning from each other.'
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          {generationalPillars.map((p) => (
            <div key={p.title} className="border-t-4 border-tedx-red bg-gray-50 p-6">
              <p className="font-bold">{p.title}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-tedx-black text-white text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl md:text-3xl font-medium leading-snug">
          “Not optimizing for scale. Optimizing for depth of transformation.”
        </blockquote>
        <footer className="mt-6 text-sm text-gray-400 uppercase tracking-wide">
          Uma Devireddy, Founder &amp; License Holder
        </footer>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Our Values" title="The Foundation of TEDxSouthlake" />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 p-6">
              <p className="font-bold text-tedx-red">{v.title}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Looking Ahead" title="A story we're still writing" />
        <div className="max-w-2xl space-y-4 text-gray-700 leading-relaxed">
          <p>
            TEDxSouthlake each year is more than an event. It's a platform where generations
            connect, cultures intersect, and ideas spark real change.
          </p>
          <p>
            As we move forward, our mission remains clear: to create a space where meaningful
            conversations lead to bold thinking, and where the ideas among us shape what comes
            next.
          </p>
          <p>
            Whether you're joining us as a speaker, attendee, partner, or supporter, we invite
            you to be part of this evolving story. The future isn't something we wait for. It's
            something we create, together.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="/why-us">See What Makes Us Different</CTAButton>
          <CTAButton href="/our-board" variant="outline">
            Meet the Full Board
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
