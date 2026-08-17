import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading, EmptyState, CTAButton } from "@/components/ui";
import { partners, partnerTiers, type Partner } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Thank you to the Presenting, Gold, and Community sponsors who make TEDxSouthlake possible.",
};

const tierLabel: Record<(typeof partnerTiers)[number], string> = {
  Presenting: "Presenting Sponsors",
  Gold: "Gold Sponsors",
  Community: "Supporters",
};

const tierIntro: Record<(typeof partnerTiers)[number], string> = {
  Presenting:
    "A special thank you to our Presenting Sponsors, whose exceptional partnership has been instrumental in making this year's event a reality.",
  Gold: "A special thank you to our Gold Sponsors.",
  Community:
    "A heartfelt thank you to all our supporters. We extend our deepest gratitude to everyone who generously contributed to TEDxSouthlake, no matter the size of the support. Your commitment has helped make this event a reality and has played a key role in fostering an environment where ideas can flourish and inspire meaningful change.",
};

function PartnerLogoTile({ partner }: { partner: Partner }) {
  return (
    <div className="border border-gray-200 aspect-video p-4">
      {partner.logo ? (
        <div className="relative w-full h-full">
          <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-sm font-medium text-gray-500 text-center">{partner.name}</span>
        </div>
      )}
    </div>
  );
}

function PartnerBio({ partner }: { partner: Partner }) {
  return (
    <div className="border border-gray-200 p-8">
      {partner.logo && (
        <div className="h-16 mb-4 flex items-center">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={64}
            className="max-h-16 w-auto object-contain"
          />
        </div>
      )}
      <p className="font-bold text-xl">{partner.name}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
        {partner.url && (
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-semibold uppercase tracking-wide text-tedx-red"
          >
            Learn more →
          </a>
        )}
        {partner.videoUrl && (
          <a
            href={partner.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-semibold uppercase tracking-wide text-tedx-red"
          >
            Watch video →
          </a>
        )}
      </div>
      {partner.bio ? (
        <div className="mt-4 space-y-3">
          {partner.bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">Thank you for your support.</p>
      )}
    </div>
  );
}

export default function OurPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Thank You to Our Valued Partners!"
        description="At TEDxSouthlake, we believe in the power of collaboration and community support to bring impactful ideas to life. We are deeply grateful to all of our sponsors for their generous contributions, which make our annual event possible. Your support allows us to create a platform where innovative ideas, diverse voices, and powerful stories can inspire and unite our community."
      />

      {partnerTiers.map((tier, idx) => {
        const tierPartners = partners.filter((p) => p.tier === tier);
        const isCommunity = tier === "Community";
        return (
          <Section key={tier} className={idx % 2 === 1 ? "bg-gray-50" : ""}>
            <SectionHeading eyebrow={tier === "Community" ? "Every Bit Helps" : tier} title={tierLabel[tier]} description={tierIntro[tier]} />
            {tierPartners.length === 0 ? (
              <EmptyState message={`${tierLabel[tier]} coming soon.`} />
            ) : isCommunity ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {tierPartners.map((p) => (
                  <PartnerLogoTile key={p.name} partner={p} />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {tierPartners.map((p) => (
                  <PartnerBio key={p.name} partner={p} />
                ))}
              </div>
            )}
          </Section>
        );
      })}

      <Section className="text-center">
        <SectionHeading title="Interested in partnering with us?" />
        <CTAButton href="/become-a-partner">Partner With Us</CTAButton>
      </Section>
    </>
  );
}
