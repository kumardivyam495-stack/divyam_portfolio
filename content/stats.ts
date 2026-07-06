export type Stat = {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel?: string;
  icon: string;
};

export const stats: Stat[] = [
  {
    id: "views",
    value: "1M+",
    numericValue: 1,
    suffix: "M+",
    label: "Video Views",
    sublabel: "Combined across all platforms",
    icon: "play",
  },
  {
    id: "reels",
    value: "150+",
    numericValue: 150,
    suffix: "+",
    label: "Reels Managed",
    sublabel: "Planned, created, or optimized",
    icon: "video",
  },
  {
    id: "reach",
    value: "12K+",
    numericValue: 12,
    suffix: "K+",
    label: "Organic Reach",
    sublabel: "Generated through strategy",
    icon: "trending",
  },
  {
    id: "carousels",
    value: "50+",
    numericValue: 50,
    suffix: "+",
    label: "Carousels Created",
    sublabel: "High-engagement design",
    icon: "grid",
  },
  {
    id: "scripts",
    value: "40+",
    numericValue: 40,
    suffix: "+",
    label: "Scripts Written",
    sublabel: "High-retention video scripts",
    icon: "pen",
  },
  {
    id: "calendars",
    value: "25+",
    numericValue: 25,
    suffix: "+",
    label: "Content Calendars",
    sublabel: "Strategic content plans delivered",
    icon: "calendar",
  },
  {
    id: "accounts",
    value: "3+",
    numericValue: 3,
    suffix: "+",
    label: "Accounts Managed",
    sublabel: "Creators & brand partnerships",
    icon: "users",
  },
  {
    id: "experience",
    value: "1+",
    numericValue: 1,
    suffix: "+ Yr",
    label: "Experience",
    sublabel: "Social media management",
    icon: "star",
  },
];
