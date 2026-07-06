export type Service = {
  id: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
};

export const serviceCategories = [
  {
    id: "social-media-management",
    category: "Management",
    icon: "📱",
    title: "Social Media Management",
    description:
      "End-to-end management of your social media presence across Instagram, YouTube, and LinkedIn. I handle the strategy, content, posting, and community management so you can focus on what you do best.",
    items: [
      "Instagram Account Management",
      "YouTube Channel Management",
      "LinkedIn Profile Management",
      "Community Management",
      "Content Scheduling & Publishing",
    ],
    featured: true,
  },
  {
    id: "content-strategy",
    category: "Strategy",
    icon: "🎯",
    title: "Content Strategy & Planning",
    description:
      "A complete content blueprint tailored to your goals, audience, and platform. I build content systems that compound over time and drive consistent, measurable growth.",
    items: [
      "Content Strategy Development",
      "Content Calendar Creation",
      "Script Writing",
      "Caption Writing",
      "Hashtag Research",
      "Brand Positioning",
    ],
    featured: false,
  },
  {
    id: "platform-audits",
    category: "Audits",
    icon: "🔍",
    title: "Platform Audits",
    description:
      "A deep diagnostic of your Instagram or YouTube presence — identifying what's working, what isn't, and exactly what needs to change to unlock growth.",
    items: [
      "YouTube Channel Audit",
      "Competitor Analysis",
      "Content Gap Analysis",
      "Growth Opportunity Identification",
    ],
    featured: false,
  },
  {
    id: "content-creation",
    category: "Creation",
    icon: "🎬",
    title: "Content Creation",
    description:
      "High-quality content assets optimized for performance. From Reels to carousels, every piece is built with audience retention and engagement in mind.",
    items: [
      "Reel Editing & Optimization",
      "Carousel Design Strategy",
      "Thumbnail Strategy",
      "Video Editing",
      "Viral Content Research",
    ],
    featured: false,
  },
  {
    id: "analytics-reporting",
    category: "Analytics",
    icon: "📊",
    title: "Analytics & Reporting",
    description:
      "Data-driven insights that turn numbers into actionable decisions. I track what matters, eliminate what doesn't, and optimize for sustainable growth.",
    items: [
      "Performance Analytics",
      "Engagement Reporting",
      "Reach & Impressions Analysis",
      "Before & After Growth Analysis",
      "Monthly Performance Reports",
    ],
    featured: false,
  },
  {
    id: "growth-consulting",
    category: "Consulting",
    icon: "🚀",
    title: "Creator Growth Consulting",
    description:
      "Strategic one-on-one consulting for creators and personal brands ready to scale. From YouTube monetization planning to full brand positioning — I help you build with purpose.",
    items: [
      "YouTube Monetization Strategy",
      "Creator Growth Consulting",
      "Brand Positioning",
      "Content System Building",
      "Long-term Growth Roadmap",
    ],
    featured: false,
  },
];
