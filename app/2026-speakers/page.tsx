import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SpeakerCard from "@/components/SpeakerCard";
import { Section, EmptyState, CTAButton } from "@/components/ui";
import { speakers2026, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "2026 Speakers",
  description: "Meet the speakers confirmed for TEDxSouthlake 2026: Unlearn.",
};

export default function Speakers2026Page() {
  return (
    <>
      <PageHero
        eyebrow="2026 Event"
        title="2026 Speakers"
        description="Speaker cards are revealed on a rolling basis as they're confirmed. Check back through the fall for the full lineup."
      />

      <Section>
        {speakers2026.length === 0 ? (
          <div className="space-y-6">
            <EmptyState message="The 2026 speaker lineup will be revealed here starting in August. Follow along as speakers are announced." />
            <div className="text-center">
              <CTAButton href={site.ticketUrl} external>
                Buy Tickets Now
              </CTAButton>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers2026.map((s) => (
              <SpeakerCard key={s.name} speaker={s} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
