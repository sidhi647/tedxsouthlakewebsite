import Link from "next/link";
import { site, event2026 } from "@/lib/data";

const columns = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "What Makes Us Different", href: "/why-us" },
      { label: "Board & Departments", href: "/our-board" },
    ],
  },
  {
    title: "2026 Event",
    links: [
      { label: "Attend", href: "/2026-conference" },
      { label: "2026 Speakers", href: "/2026-speakers" },
    ],
  },
  {
    title: "Speak",
    links: [
      { label: "Apply to Speak", href: "/apply-to-speak" },
      { label: "GEM Coaching Framework", href: "/gem-framework" },
    ],
  },
  {
    title: "Leadership",
    links: [
      { label: "Student Leadership Track", href: "/student-leadership" },
      { label: "4-Year Program", href: "/four-year-program" },
      { label: "Volunteer & Join Us", href: "/volunteer" },
    ],
  },
  {
    title: "Watch",
    links: [
      { label: "All Past Talks", href: "/past-talks" },
      { label: "2025 Conference", href: "/2025-conference" },
      { label: "2024 Conference", href: "/2024-conference" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Our Partners", href: "/our-partners" },
      { label: "Become a Partner", href: "/become-a-partner" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-tedx-black text-white mt-24">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-gray-400 mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-200 hover:text-tedx-red transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-1 font-bold text-lg">
              <span className="bg-tedx-red px-1.5 py-0.5">TEDx</span>
              <span>Southlake</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {event2026.date} · {event2026.venue}
            </p>
            <p className="text-xs text-gray-500 mt-3 max-w-md">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>
          <div className="text-sm text-gray-300">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Contact</p>
            <a href={`mailto:${site.email}`} className="hover:text-tedx-red transition-colors">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
