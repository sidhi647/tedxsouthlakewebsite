// Central content store for the TEDxSouthlake site.
// Items marked PLACEHOLDER need real photos/bios/links supplied by the team
// (see Section 4, "Content Dependencies," in the 2026 Technology & Website Roadmap).

export const site = {
  name: "TEDxSouthlake",
  domain: "tedxsouthlake.com",
  email: "info@tedxsouthlake.com",
  ticketUrl:
    "https://www.zeffy.com/en-US/ticketing/tedx-southlake-2026-unlearn-the-7th-annual-conference",
  volunteerFormUrl:
    "https://forms.cloud.microsoft/pages/responsepage.aspx?id=unk1dUZJG0yWZ3T1opiGpPAT7SALlLREh1gsBKBxbYBUREhHNFpJTFhITUQ3OUZRTVA4MzhETFk2Mi4u&route=shorturl",
  summerLeadershipFormUrl:
    "https://forms.cloud.microsoft/pages/responsepage.aspx?id=unk1dUZJG0yWZ3T1opiGpPAT7SALlLREh1gsBKBxbYBUOU5STDJYWVZUT1IxSDZXNkVaNThSMUM5SC4u&route=shorturl",
  pastTalksPlaylistUrl: "https://www.youtube.com/playlist?list=PLfiOIwkP8zjo",
  apply2027Url: "https://forms.cloud.microsoft/r/UJYcYUnqrs",
};

export const event2026 = {
  year: 2026,
  edition: "7th Annual Conference",
  theme: "Unlearn",
  subtheme: "Let Go of What Limits You",
  date: "November 8, 2026",
  dateISO: "2026-11-08",
  time: "9:00 AM – 5:00 PM",
  venue: "The Westin Dallas Southlake",
  tickets: [
    {
      tier: "General Admission",
      price: "$150",
      note: "Early pricing",
      priceRegular: "$175",
      description:
        "Access to the full TEDxSouthlake 2026 experience.",
      features: [
        "Full-day entry to all TEDx talks",
        "Curated lunch experience",
        "Networking with attendees and speakers",
        "Meaningful post-event connections",
      ],
    },
    {
      tier: "VIP Admission",
      price: "$375",
      note: "Early pricing",
      priceRegular: "$400",
      description:
        "An elevated and immersive TEDxSouthlake experience designed for deeper connection and access.",
      features: [
        "Reserved front-row seating for all TEDxSouthlake 2026 talks",
        "Full-day access to the complete event experience",
        "Curated lunch with priority networking opportunities",
        "Exclusive post-event interaction time with speakers",
      ],
    },
  ],
};

export const stats = [
  { value: "7", label: "Years of TEDxSouthlake" },
  { value: "100+", label: "Speakers coached to the stage" },
  { value: "9 Year Olds to C-Suite", label: "All represented on one stage" },
];

// ---------------------------------------------------------------------------
// Board & Departments — /our-board (IMMEDIATE PRIORITY page)
// ---------------------------------------------------------------------------

export type Person = {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
  placeholder?: boolean;
  // Path under /public, e.g. "/team/veronica-dunford.png". Add once the photo exists in public/team.
  photo?: string;
};

export const founder: Person = {
  name: "Uma Devireddy",
  role: "Founder & License Holder, Head of Curation",
  photo: "/team/uma-devireddy.png",
  bio: "Uma Devireddy, founder and organizer of TEDxSouthlake, has combined her extensive experience in procurement, vendor management, and finance with a passion for coaching and mentorship to create a platform that empowers emerging voices. Since launching TEDxSouthlake in 2020, she has guided dozens of high school students to the TED stage, helping them share impactful ideas and personal stories. Over the past five years, the event has grown into a thriving community where youth and adults come together to learn, lead, and inspire one another across generations. Driven by her belief in the power of ideas, storytelling, and community, Uma has transformed TEDxSouthlake into a dynamic forum that celebrates diverse perspectives, fosters personal growth, and encourages individuals to discover and express their unique identities.",
};

export const organizers: Person[] = [
  {
    name: "Veronica Dunford",
    role: "Organizer",
    photo: "/team/veronica-dunford.png",
    bio: "Veronica Dunford is a seasoned professional committed to championing and empowering women and men within the automotive industry. With a career spanning over 35 years, Veronica has demonstrated a highly organized, efficient, and self-motivated approach to various roles in business development, executive management services, and technical support. In her current role as the Owner of Women In Automotive, Veronica is dedicated to providing mentorship, education, training, conferences, and community support tailored to empower women and men in the automotive sector.",
  },
  {
    name: "Shanvi Devireddy",
    role: "Organizer",
    photo: "/team/shanvi-devireddy.png",
    bio: "Shanvi Devireddy is an organizer of TEDxSouthlake. Shanvi is an incoming 11th grader in Carroll ISD. She was a TEDx speaker in 2022, speaking about how the environment shapes growth. She continued with TEDxSouthlake, volunteering in 2023 and 2024. She is passionate about continuing in TEDx because it gives others an opportunity to develop skills in public speaking.",
  },
];

export const programManagement: Person[] = [
  {
    name: "Cierra Graham",
    role: "Program Management",
    photo: "/team/cierra-graham.png",
    bio: "As Program Manager for TEDxSouthlake, Cierra Graham works closely with speakers, organizers, and partners to curate an engaging event experience that inspires connection and innovation. Drawing on her background in nonprofit leadership and community organizing, she is passionate about amplifying diverse voices and creating spaces for sparking new ideas. Through her work with TEDxSouthlake, she helps foster opportunities for learning, collaboration, and positive social impact.",
  },
];

export type Department = {
  name: string;
  chairs: Person[];
};

export const departments: Department[] = [
  {
    name: "Operations",
    chairs: [
      {
        name: "Jason Jewert",
        role: "Operations Department Chair",
        photo: "/team/jason-jewert.png",
        bio: "As Operations Department Chair for TEDxSouthlake, Jason Jewert leads the planning and execution efforts that help bring the event experience to life. With decades of leadership experience spanning technology, product development, and business operations, he is passionate about building high-performing teams and creating systems that drive meaningful results. Jason's collaborative approach and strategic mindset help ensure TEDxSouthlake delivers a seamless and impactful experience for speakers, attendees, and volunteers alike. Through his work, he supports the organization's mission of sharing ideas that inspire curiosity, innovation, and positive change.",
      },
      {
        name: "Kaylee Jewert",
        role: "Operations Board Member",
        photo: "/team/kaylee-jewert.png",
        bio: "Kaylee Jewert is an 11th grader at Eagle Ridge Academy and a board member for the Operations Department. She spoke in 2024 about Shifting Generational Dynamics and How it Impacts Teenage Mental Health. She is a board member today because she wanted to be part of the amazing team that helped bring one of her passions to light. She hopes to one day become a forensic psychologist, as well as continuing to support TEDxSouthlake for years to come.",
      },
    ],
  },
  {
    name: "Technology",
    chairs: [
      {
        name: "Surya Kasibhatla",
        role: "Technology Department Chair",
        photo: "/team/surya-kasibhatla.png",
        bio: "Surya Kasibhatla is a recent graduate of Rock Hill High School and a determined individual who has faced significant challenges throughout his life due to Cerebral Palsy. Despite these obstacles, he has shown remarkable resilience and a commitment to personal growth. Surya's journey has been marked by his unwavering spirit and a desire to inspire others.\n\nHe is dedicated to sharing his experiences and insights to empower those facing their own struggles. In 2023, he took this commitment further by delivering a TEDxSouthlake talk, where he discussed overcoming physical limitations and embracing a philosophical shift in his approach to life. Following his talk, Surya felt inspired to contribute back to the TEDxSouthlake community, seeking to uplift and motivate others on their journey, thus leading social media marketing and curating posts for TEDxSouthlake.",
      },
    ],
  },
  {
    name: "PR & Communications",
    chairs: [
      {
        name: "Katie Mares",
        role: "PR & Communications Department Chair",
        photo: "/team/katie-mares.png",
        bio: "As a brand experience expert, TED talk speaker, and #1 Best Selling Author of CustomHER Experience, Katie knows firsthand the challenges organizations encounter as they strive to design a sustainable and effective CX program tailored for the female consumer. Using her experiences as a Chief Inspiration Officer, building company infrastructure, and designing customer experience programs, she is now a leading voice for positive, actionable change in the organizations with which she partners. As a highly sought-after speaker, Katie has inspired audiences around the world to think differently about the female consumer, customer experience, and leadership. She has worked with globally recognized brands, including Honda, Celebrity Cruises, and Canada Post.",
      },
      {
        name: "Sean Kannan",
        role: "PR & Communications Department Chair",
        photo: "/team/sean-kannan.png",
        bio: "As Public Relations Department Chair for TEDxSouthlake, Sean Kannan helps elevate the event's mission by fostering meaningful connections with audiences, media, and community partners. An accomplished actor, producer, author, and motivational speaker, Sean has dedicated his career to the power of storytelling and its ability to inspire personal growth and positive change. Drawing on decades of experience in entertainment, communications, and public speaking, he brings a unique perspective on crafting messages that resonate and create impact. Through his leadership, Sean helps amplify the ideas and voices that make TEDxSouthlake a catalyst for curiosity, connection, and transformation.",
      },
    ],
  },
  {
    name: "Partnerships",
    chairs: [
      {
        name: "Ariana Blanden",
        role: "Partnerships Department Chair",
        photo: "/team/ariana-blanden.png",
        bio: "As Partnerships Department Chair for TEDxSouthlake, Ariana Blanden leads efforts to cultivate meaningful relationships with sponsors, community organizations, and strategic partners who help bring the event's vision to life. With a passion for servant leadership and a proven track record of empowering people and building strong professional connections, she is dedicated to creating collaborations that generate lasting impact. Ariana believes that meaningful partnerships are built on trust, shared purpose, and a commitment to uplifting others. Through her leadership, she helps expand TEDxSouthlake's reach and strengthen the community of supporters who make the sharing of transformative ideas possible.",
      },
    ],
  },
  {
    name: "Community Engagement",
    chairs: [
      {
        name: "Justin Wagner",
        role: "Community Engagement Department Chair",
        photo: "/team/justin-wagner.png",
        bio: "As Community Engagement Department Chair for TEDxSouthlake, Justin Wagner leads efforts to strengthen relationships between the organization and the broader North Texas community. With a background in systems thinking, operations, and mission-driven leadership, he brings a strategic and people-centered approach to building meaningful connections. Justin is passionate about creating opportunities for collaboration that amplify local voices and expand access to transformative ideas. Through his work, he helps ensure TEDxSouthlake remains deeply rooted in community impact while fostering a culture of inclusion and engagement.",
      },
    ],
  },
  {
    name: "Curation",
    chairs: [
      {
        name: "Christine Krok",
        role: "Curation Department Chair",
        photo: "/team/christine-krok.png",
        bio: "As Curation Chair for TEDxSouthlake, Christine Krok leads the speaker selection and content development process, ensuring each talk aligns with the organization's mission of sharing ideas worth spreading. With over two decades of experience in leadership development, learning strategy, and organizational transformation, she brings a deep understanding of how to design experiences that inspire growth and impact. Christine is passionate about helping speakers uncover and refine their ideas so they can communicate with clarity, confidence, and authenticity. Through her work, she helps shape a TEDxSouthlake stage that reflects diverse perspectives, meaningful storytelling, and transformational ideas.",
      },
    ],
  },
  {
    name: "Marketing",
    chairs: [
      {
        name: "Nandini Gupta",
        role: "Marketing Department Chair",
        photo: "/team/nandini-gupta.png",
        bio: "After 20+ years in IT, AI has quietly leveled the playing field, and there's something humbling and exciting about all of us learning again, together. At TEDxSouthlake, we've embraced it not for efficiency's sake but because this work is done purely out of love for the mission, and AI lets a small nonprofit team move with more creativity and speed than we ever could alone. If I could leave the next generation with one thought: “let AI sharpen your thinking, not replace it.” Curiosity is still the advantage.",
      },
      {
        name: "Nikita Chawla",
        role: "Marketing Department Co-Chair",
        photo: "/team/nikita-chawla.png",
        bio: "Nikita Chawla is a technology and product transformation leader specializing in AI, cloud computing, cloud security, and digital transformation. She has led enterprise modernization initiatives for global organizations, delivering innovative, customer-centric solutions that drive business impact.\n\nBeyond her professional work, Nikita actively contributes to the technology community through mentoring, judging innovation competitions, public speaking, and volunteering. As a passionate advocate for women in STEM and responsible AI, she is committed to empowering future technology leaders and fostering innovation with purpose. As TEDx Marketing Co-Chair, she is dedicated to amplifying transformative ideas, and creating a platform that inspires curiosity and collaboration.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// GEM Coaching Framework — /gem-framework
// ---------------------------------------------------------------------------

export const gemPhases = [
  {
    letter: "G",
    title: "Grounding the idea",
    description:
      "Every talk starts with a single idea worth spreading. In this phase, speakers work with the curation team to sharpen that idea until it's clear, specific, and true.",
  },
  {
    letter: "E",
    title: "Elevating the story",
    description:
      "A strong idea needs a story that carries it. This phase is about structure, narrative arc, and finding the moments that make an idea unforgettable.",
  },
  {
    letter: "M",
    title: "Mastering delivery",
    description:
      "The final phase turns a written talk into a stage-ready performance: pacing, presence, and practice until the speaker owns the room.",
  },
];

export const gemRounds = [
  {
    round: "Round 1",
    name: "Idea Screen",
    description:
      "An initial review of the submitted idea for originality, clarity, and fit with the event theme. Ideas that pass move forward to story development.",
  },
  {
    round: "Round 2",
    name: "Story Depth",
    description:
      "A deeper look at how the idea is told: narrative structure, evidence, and emotional throughline. This round determines readiness for coaching.",
  },
  {
    round: "Round 3",
    name: "Stage Readiness",
    description:
      "A final evaluation of delivery and stage presence before a speaker is matched with a dedicated coach for the remainder of their journey.",
  },
];

export const coaches: Person[] = [
  // PLACEHOLDER — coach roster pending. Add name, specialty, bio, linkedin for each active coach.
];

// ---------------------------------------------------------------------------
// Student Leadership Track — /student-leadership + /four-year-program
// ---------------------------------------------------------------------------

export const leadershipStats = [
  { value: "7 years", label: "Of student-led co-organizing" },
  { value: "100%", label: "Of co-organizers have been high school students" },
  { value: "9 yr olds to C-Suite", label: "On one stage" },
];

export const fourYearTrack = [
  {
    year: "Year 1",
    title: "Volunteer",
    description:
      "Learn the platform, show commitment, and understand TEDx standards from the ground up.",
  },
  {
    year: "Year 2",
    title: "Board Member",
    description:
      "Join a department: Operations, Technology, PR, Partnerships, Coaching, or Community Engagement.",
  },
  {
    year: "Year 3",
    title: "Executive Board / Dept Chair",
    description: "Lead a department, or step into an organizer / co-organizer role.",
  },
  {
    year: "Year 4",
    title: "Organizer, Co-Organizer, or Speaker Track",
    description: "Lead the event outright, or take everything learned to the stage as a speaker.",
  },
];

export const studentSpotlights: {
  name: string;
  role?: string;
  quote?: string;
  summary?: string;
  photo?: string;
  placeholder?: boolean;
}[] = [
  {
    name: "Raghavi Danduboyina",
    role: "2020 Co-organizer",
    photo: "/students/raghavi-danduboyina.png",
  },
  {
    name: "Sahasra Kandukuri",
    role: "2021 Co-organizer",
    photo: "/students/sahasra-kandukuri.png",
  },
  {
    name: "Arnav Koppala",
    role: "2022 Co-organizer",
    photo: "/students/arnav-koppala.png",
  },
  {
    name: "Sidhi Devireddy",
    role: "2023 Co-organizer",
    photo: "/students/sidhi-devireddy.png",
  },
  {
    name: "Dhruv Singh",
    role: "2024 Co-organizer",
    placeholder: true,
  },
  {
    name: "Rayna Marthi",
    role: "2025 Co-organizer",
    photo: "/students/rayna-marthi.png",
  },
  {
    name: "Shanvi Devireddy",
    role: "2026 Co-organizer",
    photo: "/team/shanvi-devireddy.png",
  },
];

export type Speaker = {
  name: string;
  talkTitle?: string;
  idea?: string;
  year?: number;
  videoUrl?: string;
  speakerType?: "student" | "professional";
  placeholder?: boolean;
  // Path under /public, e.g. "/speakers/todd-klackley.png". Add once the photo exists in public/speakers.
  photo?: string;
};

export const featuredSpeakers: Speaker[] = [
  {
    name: "Todd Klackley",
    talkTitle: "Leading While Healing",
    idea: "Keynote Speaker",
    year: 2025,
    photo: "/speakers/todd-klackley.png",
    videoUrl: "https://youtu.be/JB1C6Tnpyxs",
  },
  {
    name: "Harvey Castro, MD, MBA",
    talkTitle: "Staying Connected: How AI, Satellites & Edge Tech Keep Your Doctor Close",
    year: 2025,
    photo: "/speakers/harvey-castro.png",
    videoUrl: "https://youtu.be/Y-dnIPhFkLA",
  },
  {
    name: "Jonathan Donath",
    talkTitle: "Giving... The Cheat Code to a Meaningful Life",
    year: 2025,
    photo: "/speakers/jonathan-donath.png",
    videoUrl: "https://youtu.be/QRGLaOWdHUY",
  },
  {
    name: "Dr. Christie McMullen",
    talkTitle: "I Am a Bold Favor",
    year: 2025,
    photo: "/speakers/christie-mcmullen.png",
    videoUrl: "https://youtu.be/WR8ZRZmPrTo",
  },
  {
    name: "Jill Waggoner, MD",
    talkTitle: "The Doctor Who Stopped Prescribing and Started Healing",
    year: 2025,
    photo: "/speakers/jill-waggoner.png",
    videoUrl: "https://youtu.be/9ENefiu0tNQ",
  },
  {
    name: "Sahana Shrinivas",
    talkTitle: "From Cart to Connection",
    year: 2025,
    photo: "/speakers/sahana-shrinivas.png",
    videoUrl: "https://youtu.be/EKH5hD3JdOs",
  },
  {
    name: "Dr. Suzanne Thai",
    talkTitle: "How To Reinvent Yourself and Find Joy Again",
    year: 2025,
    photo: "/speakers/suzanne-thai.png",
    videoUrl: "https://youtu.be/J1xRI199RUo",
  },
  {
    name: "Rachael Fritz",
    talkTitle: "When Parenting Advice Gets Wrong",
    year: 2025,
    photo: "/speakers/rachael-fritz.png",
    videoUrl: "https://youtu.be/bIgt5kwQgS0",
  },
  {
    name: "Stephanie Wedgeworth",
    talkTitle: "Fear is a Superpower for Career Growth",
    year: 2025,
    photo: "/speakers/stephanie-wedgeworth.png",
    videoUrl: "https://youtu.be/k88QmGgNhWk",
  },
  {
    name: "Justin Day",
    talkTitle: "Will AI Take Over the World?",
    year: 2025,
    photo: "/speakers/justin-day.png",
    videoUrl: "https://youtu.be/hG4epOZj1Fs",
  },
  {
    name: "Dr. Jessica Kriegal",
    talkTitle: "The Power of Surrender in Leadership",
    year: 2025,
    photo: "/speakers/jessica-kriegal.png",
    videoUrl: "https://youtu.be/oT_1qlY8BO8",
  },
  {
    name: "Morgan Massie",
    talkTitle: "The Leadership Lie No One Talks About: It's Not About Being Polished",
    year: 2025,
    photo: "/speakers/morgan-massie.png",
    videoUrl: "https://youtu.be/GycDFlun_U0",
  },
  {
    name: "David Olayanju",
    talkTitle: "Passion to Purpose",
    year: 2025,
    photo: "/speakers/david-olayanju.png",
    videoUrl: "https://youtu.be/sg9kuAJqHCo",
  },
  {
    name: "Shreya Kumar",
    talkTitle: "It's OK To Not Be OK",
    year: 2025,
    photo: "/speakers/shreya-kumar.png",
    videoUrl: "https://youtu.be/PTuAQDu6VaA",
  },
  {
    name: "Yashu Nagalla",
    talkTitle: "I Am What I Repeat",
    year: 2025,
    photo: "/speakers/yashu-nagalla.png",
    videoUrl: "https://youtu.be/0e9i0CHNdwk",
  },
  {
    name: "Kathy Gilbert",
    year: 2024,
    photo: "/speakers/kathy-gilbert.png",
  },
  {
    name: "Fern Johnson",
    talkTitle: "From Stuck in the Pack…to Leading the Pack: A Blueprint for Women in Tech",
    year: 2024,
    photo: "/speakers/fern-johnson.png",
    videoUrl: "https://youtu.be/chPPwLjPf_E",
  },
  {
    name: "Beatrice Pila",
    talkTitle: "Design Enlightenment Where Creativity Meets Consciousness",
    year: 2024,
    photo: "/speakers/beatrice-pila.png",
    videoUrl: "https://youtu.be/mzmdQtdCoWg",
  },
  {
    name: "Lindsay MacMillan",
    talkTitle: "Unleash Your Full Creative Potential...Even If You Don't Think You're Creative",
    year: 2024,
    photo: "/speakers/lindsay-macmillan.png",
  },
  {
    name: "Megan DiMartino",
    talkTitle: "Stir It Up: Innovating the Human Experience Through Creative Disruption",
    year: 2024,
    photo: "/speakers/megan-dimartino.png",
    videoUrl: "https://youtu.be/n9mqQIjnD7Q",
  },
  {
    name: "Val Niehaus",
    talkTitle: "The Missing Link: From Mentorship to Sponsorship",
    year: 2024,
    photo: "/speakers/val-niehaus.png",
    videoUrl: "https://youtu.be/Z29QJJPIHR4",
  },
  {
    name: "Don Radon",
    talkTitle: "Breaking the Cycle of Addiction Through Community Engagement",
    year: 2024,
    photo: "/speakers/don-radon.png",
    videoUrl: "https://youtu.be/Oac-g0CmZzc",
  },
  {
    name: "Dr. Anas Alomar",
    talkTitle: "From Beating to Healing: The Technological Transformation of Cardiology",
    year: 2024,
    photo: "/speakers/anas-alomar.png",
    videoUrl: "https://youtu.be/6nM12LvPyUc",
  },
  {
    name: "Katherine Lawrence",
    talkTitle: "Cerebral Nutrition for Children on the Spectrum",
    year: 2024,
    photo: "/speakers/katherine-lawrence.png",
    videoUrl: "https://youtu.be/tsTnl-2KkNg",
  },
  {
    name: "Denise DeBaun",
    talkTitle: "The Intersection of Innovation and Sleep",
    year: 2024,
    photo: "/speakers/denise-debaun.png",
    videoUrl: "https://youtu.be/h4Q7midkArc",
  },
  {
    name: "Sean Kannan",
    talkTitle: "The Journey of Unbecoming",
    year: 2024,
    photo: "/speakers/sean-kanan-2024.png",
    videoUrl: "https://youtu.be/KqzmSAHSciw",
  },
  {
    name: "Kaylee Jewert",
    talkTitle: "Shifting Generational Dynamics and How It Impacts Teenage Mental Health",
    year: 2024,
    photo: "/speakers/kaylee-jewert-2024.png",
    videoUrl: "https://youtu.be/wDqhkmKXEDw",
    speakerType: "student",
  },
  {
    name: "James Durham",
    talkTitle: "It Could NEVER Happen to Me",
    year: 2024,
    photo: "/speakers/james-durham.png",
    videoUrl: "https://youtu.be/tu4o3tCe0rM",
  },
  {
    name: "Justin Atherton",
    talkTitle: "The Suspect Within: How to Interrogate Yourself",
    year: 2024,
    photo: "/speakers/justin-atherton.png",
    videoUrl: "https://youtu.be/vvGYsNI8T9Q",
  },
  {
    name: "DeAngelo Burse",
    talkTitle: "Beyond the Screen: The Digital World's Influence on Human Personality and Behavior",
    year: 2024,
    photo: "/speakers/deangelo-burse.png",
    videoUrl: "https://youtu.be/i2a7XbPYzvo",
  },
  {
    name: "Mike Goodwin",
    talkTitle: "Resilience Through Comedy",
    year: 2024,
    photo: "/speakers/mike-goodwin.png",
    videoUrl: "https://youtu.be/jbX-FE_Ca-0",
  },
  {
    name: "Barbara Ann Jacques",
    talkTitle: "A Different Approach to Criminal Justice Reform",
    year: 2024,
    photo: "/speakers/barbara-ann-jacques.png",
    videoUrl: "https://youtu.be/uvjCHElSFy8",
  },
];

// ---------------------------------------------------------------------------
// 2026 Speakers — /2026-speakers (rolling reveal)
// ---------------------------------------------------------------------------

export const speakers2026: Speaker[] = [
  // Rolling reveal — speaker cards are added as they're confirmed, per Phase 3 of the roadmap.
];

// ---------------------------------------------------------------------------
// Featured Talks carousel — homepage
// ---------------------------------------------------------------------------

export const featuredTalks: Speaker[] = [
  {
    name: "Dr. Jessica Kriegal",
    talkTitle: "The Power of Surrender in Leadership",
    year: 2025,
    photo: "/speakers/jessica-kriegal.png",
    videoUrl: "https://youtu.be/oT_1qlY8BO8",
  },
  {
    name: "Sean Kannan",
    talkTitle: "How to Be the Hero of Your Own Story",
    photo: "/speakers/sean-kanan-2024.png",
    videoUrl: "https://youtu.be/TNVUi-UWjc8",
  },
  {
    name: "NBC 5 DFW",
    talkTitle: "Learn to Speak with Confidence",
    photo: "/speakers/nbc-dfw-segment.png",
    videoUrl: "https://www.nbcdfw.com/video/texas-today/learn-to-speak-with-confidence/4041743/",
  },
];

// ---------------------------------------------------------------------------
// Past Conferences — /past-talks, /2025-conference, /2024-conference
// ---------------------------------------------------------------------------

export type PastEvent = {
  year: number;
  theme: string;
  subtheme?: string;
  date: string;
  venue: string;
  description: string;
  speakersUrl?: string;
};

export const pastEvents: PastEvent[] = [
  {
    year: 2025,
    theme: "Written Together",
    subtheme: "The Ideas Among Us",
    date: "November 9, 2025",
    venue: "Frontiers of Flight Museum",
    description:
      "Join us for an unforgettable day of inspiration, innovation, and collaboration at TEDxSouthlake 2025. This year's theme, “Written Together: The Ideas Among Us,” celebrates the collective power of diverse ideas and voices. From students to seasoned professionals, TEDxSouthlake offers a platform for all generations to come together, share stories, spark change, and shape the future.",
  },
  {
    year: 2024,
    theme: "Innovating The Human Experience",
    date: "October 27, 2024",
    venue: "Lancaster Theatre",
    description:
      "What does it mean to evolve in a rapidly changing world? At TEDxSouthlake 2024, we explored “Innovating The Human Experience.” Visionary thinkers, trailblazers, and storytellers took the stage to redefine how technology, connection, and creativity shape what it means to be human today.",
  },
];

// ---------------------------------------------------------------------------
// Partners — /our-partners, /become-a-partner
// ---------------------------------------------------------------------------

export const partnerTiers = ["Presenting", "Gold", "Community"] as const;

export type Partner = {
  name: string;
  tier: (typeof partnerTiers)[number];
  bio?: string;
  url?: string;
  videoUrl?: string;
  // Path under /public, e.g. "/logos/menthra.png". Add once the logo file exists in public/logos.
  logo?: string;
};

export const partners: Partner[] = [
  {
    name: "Share a Smile, Charity",
    tier: "Presenting",
    logo: "/logos/share-a-smile.png",
    bio: "Under the leadership of Shiv Paul and Uma Devireddy, Share a Smile, Charity collaborates with Carroll ISD student executives to drive positive change. The organization operates with a core objective to ensure smiles remain both reachable and long-lasting by mentoring underrepresented youth. Through specialized training in articulation and public speaking, they equip young individuals with the tools needed to navigate daily challenges and eventually present their visions on a global stage.\n\nTheir flagship Global Speakers Circle initiative unites international communication mentors and aspiring voices. This program strives to transform the lives of 100 underprivileged students annually, providing the comprehensive coaching necessary to secure a spot at prestigious speaking events. This vital support system fosters a new generation of confident, articulate leaders ready to influence the world.\n\nAs a cornerstone sponsor, Share a Smile plays a pivotal role in bringing the TEDxSouthlake event to fruition. Their commitment to kindness and the empowerment of future leaders allows us to provide a platform for advocacy and innovative thought. We are immensely proud to partner with a charity so deeply invested in nurturing talent and uplifting the community through the power of speech.",
  },
  {
    name: "Menthra",
    tier: "Presenting",
    logo: "/logos/menthra.png",
    bio: "Menthra is an AI-powered emotional well-being platform designed to make mental health support immediate, affordable, and accessible to everyone. Instead of waiting weeks for an appointment or paying high out-of-pocket costs, users can access thoughtful, 24/7 guidance whenever they need it most. The app serves as a safe space for everyday stress, self-reflection, and personal growth, offering accessible tools for individuals, families, and organizations alike.\n\nAt the heart of Menthra is a unique approach to digital care: long-term memory. Most health apps reset after every conversation, forcing users to repeatedly explain their story from scratch. Menthra changes that by safely remembering past conversations and context across sessions. This continuous recall allows the app to provide deeply personalized, empathetic conversations that build on a user's ongoing journey over time, all while maintaining strict, HIPAA-aligned privacy standards.\n\nThe company was founded by Dinakara Nagalla, a serial entrepreneur and former Chief Architect at American Airlines. After years of designing high-stakes aviation systems where precision and memory were critical to safety, Nagalla turned his focus toward human connection and mental well-being, founding Menthra. We are proud to have been partnering with Menthra!",
  },
  {
    name: "Women In Automotive (WIA)",
    tier: "Presenting",
    logo: "/logos/wia.png",
    url: "https://womeninautomotive.com/",
    videoUrl: "https://youtu.be/mN-JWiTIkww",
    bio: "Women In Automotive (WIA) is dedicated to empowering and developing women leaders within the automotive industry. Their mission is to drive the advancement of women in this traditionally male-dominated field through education, mentorship, and networking opportunities. WIA is committed to creating an inclusive environment where women can thrive, connect, and lead the way toward innovation and progress.\n\nAs a Presenting Sponsor for TEDxSouthlake, WIA helps foster cross-generational collaboration and inspires transformative ideas. We are honored to partner with an organization that is passionate about empowering women, promoting diversity, and shaping the future of leadership in the automotive world and beyond.",
  },
  {
    name: "Recovered and Free",
    tier: "Gold",
    videoUrl: "https://youtu.be/x8DwL-Ocsv0",
    bio: "Recovered and Free is dedicated to providing compassionate and comprehensive recovery services for individuals struggling with addiction. With a mission to offer freedom from substance abuse through personalized care, they empower individuals to reclaim their lives and build a healthier, brighter future.",
  },
  {
    name: "Safeguard",
    tier: "Gold",
    logo: "/logos/safeguard.png",
    bio: "Safeguard specializes in providing customized solutions for businesses, offering everything from marketing services to promotional products and printing. With a focus on helping companies grow and succeed, Safeguard delivers innovative and tailored services to meet the unique needs of each client.",
  },
  { name: "Lucid Technologies Inc.", tier: "Community", logo: "/logos/lucid-technologies.png" },
  { name: "Society Life Magazine", tier: "Community", logo: "/logos/society-life.png" },
  { name: "Pista House", tier: "Community", logo: "/logos/pista-house.png" },
  { name: "Southlake Chamber of Commerce", tier: "Community", logo: "/logos/southlake-chamber.png" },
  { name: "IM@CS", tier: "Community", logo: "/logos/imacs.png" },
  { name: "Southlake Style", tier: "Community", logo: "/logos/southlake-style.png" },
];
