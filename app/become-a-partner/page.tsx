import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, CTAButton } from "@/components/ui";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Partner with TEDxSouthlake 2026: reach a diverse, engaged audience and help power ideas worth spreading.",
};

const finePrint = [
  "TEDxSouthlake follows the TED rules for sponsorships. We do not accept contributions from organizations that deal in weapons or ammunition, tobacco products or cigarettes, or adult-oriented products or services.",
  "Our partners have no editorial control or veto power over our event program, and they are ineligible to present from the stage.",
  "TEDxSouthlake speakers are not paid, and no one can pay to be part of our program. Speaker selection is based on the merit of each speaker's application.",
];

export default function BecomeAPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners · Join Us in Inspiring the Future"
        title="Become a Partner"
        description="At TEDxSouthlake, we believe in the power of ideas to shape the future. Our mission is to create a platform where diverse voices, from youth leaders to experienced professionals, come together to inspire, educate, and spark change. However, we can't do it alone. We rely on the support of like-minded partners who share our vision of empowering communities through transformative ideas."
      />

      <Section>
        <SectionHeading
          eyebrow="Why Partner"
          title="Showcase your brand. Empower a movement."
          description="Partnering with TEDxSouthlake showcases your brand to a diverse, engaged audience across our live and global digital platforms while connecting you with a network of forward-thinking leaders who believe in the power of ideas. By joining us on this exciting journey, your organization plays a direct role in empowering underrepresented voices, sparking meaningful cross-generational conversations, and inspiring lasting change. Together, let's partner to ignite new possibilities and make a real difference."
        />
        <div className="mt-2">
          <CTAButton href={`mailto:${site.email}`} external>
            Contact Us to Partner
          </CTAButton>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Sponsorship Tiers" title="2026 partnership packages" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Presenting Partner",
              description: "Top-tier visibility across the event, stage, and all 2026 marketing materials.",
            },
            {
              name: "Gold Partner",
              description: "Strong visibility at the event and across digital channels.",
            },
            {
              name: "Community Partner",
              description: "Recognition as a community supporter of TEDxSouthlake's mission.",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 p-8">
              <p className="font-bold text-lg">{t.name}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t.description}</p>
              <p className="mt-6 text-xs text-gray-400 uppercase tracking-wide">
                Full package details available on request
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The Fine Print" title="Sponsorship guidelines" />
        <div className="space-y-4 max-w-2xl">
          {finePrint.map((p, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed border-l-2 border-tedx-red pl-4">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section className="bg-tedx-black text-white text-center">
        <SectionHeading title="Let's talk partnership" />
        <CTAButton href={`mailto:${site.email}`} external>
          {site.email}
        </CTAButton>
      </Section>
    </>
  );
}
