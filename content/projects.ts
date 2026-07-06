export type PortfolioItem = {
  id: string;
  category: string;
  categorySlug: string;
  title: string;
  description: string;
  tags: string[];
  metric?: string;
  metricLabel?: string;
  image?: string; // Place real images in /public/portfolio/
  link?: string;
};

export const portfolioCategories = [
  { id: "all", label: "All Work" },
  { id: "reels", label: "Reels" },
  { id: "carousels", label: "Carousels" },
  { id: "youtube-audit", label: "YouTube Audits" },
  { id: "content-calendar", label: "Content Calendars" },
  { id: "scripts", label: "Scripts" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "reel-01",
    category: "Reels",
    categorySlug: "reels",
    title: "High-Retention Short-Form Reel",
    description:
      "Strategic reel optimized for maximum watch time, saves, and shares using scroll-stopping hooks and high-impact pacing.",
    tags: ["Reel Optimization", "Hook Strategy", "Retention"],
    metric: "7.5M+",
    metricLabel: "Reel Views",
    image: "/portfolio/reel-01.jpg",
    link: "https://drive.google.com/file/d/1mxpg8rtLLJ5q7-p8derCY9xedo_S-4WI/view?usp=drivesdk",
  },
  {
    id: "reel-02",
    category: "Reels",
    categorySlug: "reels",
    title: "Viral Hook Framework",
    description:
      "Content planned around audience insights, trending metrics, and platform algorithm behaviors to maximize organic reach.",
    tags: ["Viral Strategy", "Trend Research", "Organic Reach"],
    metric: "1M+",
    metricLabel: "Total Views",
    image: "/portfolio/reel-02.jpg",
    link: "https://drive.google.com/file/d/1hgHm5Q_x0vIquD9-Ds3Q3vs3IUgenERY/view?usp=drivesdk",
  },
  {
    id: "carousel-01",
    category: "Carousels",
    categorySlug: "carousels",
    title: "Educational Value Carousel",
    description:
      "Data-driven educational carousel designed to maximize swipe-through rate, saves, and profile visits through visual flow.",
    tags: ["Carousel Design", "Value Content", "Engagement"],
    metric: "50+",
    metricLabel: "Carousels Created",
    image: "/portfolio/carousel-01.jpg",
    link: "https://drive.google.com/drive/folders/12HAcn5VUAlOKmXid5xufPRu2LfwM9Sau",
  },
  {
    id: "yt-audit-01",
    category: "YouTube Audits",
    categorySlug: "youtube-audit",
    title: "YouTube Channel Growth Audit",
    description:
      "In-depth YouTube spreadsheet audit analyzing watch time, audience retention, search volume, and channel growth strategy.",
    tags: ["YouTube Audit", "SEO", "Monetization"],
    image: "/portfolio/yt-audit-01.jpg",
    link: "https://docs.google.com/spreadsheets/d/1NeOlbkvPHXY6CcmrcZwdhj53Y8Xx-6xE/edit?usp=sharing&ouid=116460443470872886669&rtpof=true&sd=true",
  },
  {
    id: "calendar-01",
    category: "Content Calendars",
    categorySlug: "content-calendar",
    title: "Strategic Content Calendar",
    description:
      "Fully planned monthly content calendar featuring content pillars, specific post types, hooks, and scheduling strategy.",
    tags: ["Content Planning", "Strategy", "30-Day"],
    metric: "25+",
    metricLabel: "Calendars Created",
    image: "/portfolio/calendar-01.jpg",
    link: "https://docs.google.com/spreadsheets/d/19D5OuXBRtIMInLb1ht33Gr8F7g4SGl7K/edit?usp=sharing&ouid=116460443470872886669&rtpof=true&sd=true",
  },
  {
    id: "script-01",
    category: "Scripts",
    categorySlug: "scripts",
    title: "High-Retention Video Script",
    description:
      "Engagement-optimized video script written with strong hooks, clear pacing, and compelling call-to-actions (CTAs).",
    tags: ["Script Writing", "Retention", "Hooks"],
    metric: "40+",
    metricLabel: "Scripts Written",
    image: "/portfolio/script-01.jpg",
    link: "https://drive.google.com/file/d/1yQhziamKO0NL5gtkEFHIfnGfJpA3BlNf/view?usp=sharing",
  },
];
