export type Tool = {
  name: string;
  category: string;
  description?: string;
};

export type ToolCategory = {
  id: string;
  label: string;
  icon: string;
  tools: Tool[];
};

export const toolCategories: ToolCategory[] = [
  {
    id: "design",
    label: "Design & Content",
    icon: "palette",
    tools: [
      { name: "Canva", category: "design", description: "Content design & graphics" },
      { name: "Figma", category: "design", description: "UI & layout design" },
    ],
  },
  {
    id: "video",
    label: "Video Editing",
    icon: "film",
    tools: [
      { name: "CapCut", category: "video", description: "Short-form video editing" },
    ],
  },
  {
    id: "productivity",
    label: "Productivity",
    icon: "briefcase",
    tools: [
      { name: "Notion", category: "productivity", description: "Project & content management" },
      { name: "Google Docs", category: "productivity", description: "Documents & scripts" },
      { name: "Google Sheets", category: "productivity", description: "Analytics & reporting" },
    ],
  },
  {
    id: "ai",
    label: "AI Tools",
    icon: "cpu",
    tools: [
      { name: "ChatGPT", category: "ai", description: "Content ideation & research" },
      { name: "Claude", category: "ai", description: "Strategy & script writing" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & Platforms",
    icon: "bar-chart",
    tools: [
      { name: "Meta Business Suite", category: "analytics", description: "Instagram & Facebook analytics" },
      { name: "YouTube Studio", category: "analytics", description: "YouTube performance data" },
      { name: "Instagram Insights", category: "analytics", description: "Instagram analytics" },
      { name: "Google Analytics", category: "analytics", description: "Web & traffic analytics" },
      { name: "VidIQ", category: "analytics", description: "YouTube SEO & research" },
      { name: "TubeBuddy", category: "analytics", description: "YouTube optimization" },
    ],
  },
];
