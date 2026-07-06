export type CaseStudy = {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  problem: string;
  strategy: string;
  execution: string[];
  results: { metric: string; value: string }[];
  tags: string[];
  platforms: string[];
  duration: string;
  coverImage?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "instagram-growth",
    number: "01",
    category: "Instagram Growth",
    title: "From Stagnant to Strategic",
    subtitle: "How a personal brand doubled its organic reach through a complete content system rebuild",
    problem:
      "The account had consistent posting but zero growth. Low engagement, minimal reach, and no clear content strategy were holding back a creator with real potential.",
    strategy:
      "Conducted a full Instagram audit, identified content gaps, rebuilt the content strategy around 3 core pillars, and implemented a data-driven posting schedule optimized for audience behavior.",
    execution: [
      "Instagram profile audit & competitor analysis",
      "3-pillar content framework development",
      "30-day content calendar with hooks & CTAs",
      "Carousel and Reel optimization",
      "Hashtag strategy overhaul",
    ],
    results: [
      { metric: "Organic Reach", value: "2x Growth" },
      { metric: "Engagement Rate", value: "+40%" },
      { metric: "Profile Visits", value: "+60%" },
      { metric: "Content Quality", value: "Significantly Improved" },
    ],
    tags: ["Instagram", "Organic Growth", "Content Strategy", "Audit"],
    platforms: ["Instagram"],
    duration: "30 Days",
    coverImage: "/case-studies/instagram-growth.jpg",
  },
  {
    id: "youtube-monetization",
    number: "02",
    category: "YouTube Growth",
    title: "Path to Monetization",
    subtitle: "Strategic YouTube channel optimization focused on watch time, retention, and subscriber growth",
    problem:
      "A YouTube creator had quality content but struggled with watch time, audience retention, and subscriber growth — falling short of YouTube monetization thresholds.",
    strategy:
      "Performed a comprehensive YouTube channel audit, optimized video strategy for the algorithm, and built a content plan focused on high-retention formats and consistent growth.",
    execution: [
      "Full YouTube channel audit & analytics deep-dive",
      "Watch time & retention analysis",
      "Title, thumbnail, and description optimization",
      "Content calendar for consistent uploads",
      "YouTube SEO keyword research",
    ],
    results: [
      { metric: "Watch Time", value: "Significant Improvement" },
      { metric: "Audience Retention", value: "+30% Avg" },
      { metric: "Subscriber Growth", value: "Consistent Gain" },
      { metric: "Monetization", value: "Path Established" },
    ],
    tags: ["YouTube", "Monetization", "SEO", "Watch Time", "Audit"],
    platforms: ["YouTube"],
    duration: "60 Days",
    coverImage: "/case-studies/youtube-monetization.jpg",
  },
  {
    id: "content-system",
    number: "03",
    category: "Content System",
    title: "Building a Content Machine",
    subtitle: "Full content system build for a creator-led brand — strategy, calendar, scripts, and analytics",
    problem:
      "A creator-led brand had no consistent content workflow. Posting was irregular, content had no clear purpose, and there was no system to track what was working.",
    strategy:
      "Built a complete content operating system from scratch — including content strategy, monthly calendars, high-retention scripts, and a performance tracking framework.",
    execution: [
      "Brand & audience research",
      "Content pillar & strategy development",
      "Monthly content calendar creation",
      "High-retention script writing",
      "Performance tracking system setup",
    ],
    results: [
      { metric: "Posting Consistency", value: "100%" },
      { metric: "Content Quality", value: "Dramatically Improved" },
      { metric: "Scripts Delivered", value: "10+ Per Month" },
      { metric: "Workflow Efficiency", value: "+80%" },
    ],
    tags: ["Content Strategy", "Scripts", "Calendar", "System Building"],
    platforms: ["Instagram", "YouTube"],
    duration: "Ongoing",
    coverImage: "/case-studies/content-system.jpg",
  },
];
