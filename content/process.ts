export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Goal Alignment",
    description:
      "Every great strategy starts with deep understanding. I take time to understand your goals, audience, current challenges, and where you want to be.",
    details: [
      "Brand & audience deep-dive",
      "Goal setting & KPI definition",
      "Current state assessment",
      "Growth objective alignment",
    ],
    icon: "compass",
  },
  {
    number: "02",
    title: "Account Audit & Research",
    description:
      "A thorough diagnostic of your social media presence — analyzing performance data, identifying growth gaps, and studying what your competitors are doing right.",
    details: [
      "Instagram & YouTube audit",
      "Analytics performance review",
      "Competitor landscape analysis",
      "Content gap identification",
    ],
    icon: "search",
  },
  {
    number: "03",
    title: "Growth Strategy",
    description:
      "With research in hand, I build a tailored growth strategy — defining content pillars, posting cadence, platform-specific tactics, and measurable milestones.",
    details: [
      "Content pillar development",
      "Platform-specific strategy",
      "Posting frequency optimization",
      "Growth milestone planning",
    ],
    icon: "target",
  },
  {
    number: "04",
    title: "Content Planning",
    description:
      "Strategy becomes a system. I create a structured content calendar, write high-retention scripts, and plan content around trends, audience behavior, and business goals.",
    details: [
      "30-day content calendar",
      "Script development",
      "Hook & CTA optimization",
      "Trend & timing research",
    ],
    icon: "layout",
  },
  {
    number: "05",
    title: "Execution & Optimization",
    description:
      "Ideas become results. I support content execution, monitor performance in real-time, and continuously optimize the strategy based on what the data tells us.",
    details: [
      "Content execution support",
      "Real-time performance monitoring",
      "Strategy optimization",
      "A/B content testing",
    ],
    icon: "zap",
  },
  {
    number: "06",
    title: "Performance Review",
    description:
      "Growth is a cycle, not a one-time event. I review key metrics, identify what's working, and deliver actionable recommendations to drive the next growth cycle.",
    details: [
      "Monthly performance report",
      "Key metrics analysis",
      "Growth cycle recommendations",
      "Next phase strategy planning",
    ],
    icon: "bar-chart",
  },
];
