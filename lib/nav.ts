export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/our-story" },
      { label: "What Makes Us Different", href: "/why-us" },
      { label: "Board & Departments", href: "/our-board" },
    ],
  },
  {
    label: "2026 Event",
    children: [
      { label: "Attend", href: "/2026-conference" },
      { label: "2026 Speakers", href: "/2026-speakers" },
    ],
  },
  {
    label: "Speak",
    children: [
      { label: "Apply to Speak", href: "/apply-to-speak" },
      { label: "GEM Coaching Framework", href: "/gem-framework" },
    ],
  },
  {
    label: "Leadership",
    children: [
      { label: "Student Leadership Track", href: "/student-leadership" },
      { label: "4-Year Program", href: "/four-year-program" },
      { label: "Volunteer & Join Us", href: "/volunteer" },
    ],
  },
  {
    label: "Watch",
    children: [
      { label: "All Past Talks", href: "/past-talks" },
      { label: "2025 Conference", href: "/2025-conference" },
      { label: "2024 Conference", href: "/2024-conference" },
    ],
  },
  {
    label: "Partners",
    children: [
      { label: "Our Partners", href: "/our-partners" },
      { label: "Become a Partner", href: "/become-a-partner" },
    ],
  },
];
