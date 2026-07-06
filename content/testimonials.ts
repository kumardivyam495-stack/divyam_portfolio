export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company?: string;
  quote: string;
  platform?: string;
  avatar?: string;
  verified?: boolean;
};

// Add real testimonials here when available
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    name: "Client Name",
    title: "Content Creator",
    company: "Personal Brand",
    quote: "Testimonial coming soon. Real client feedback will be featured here.",
    platform: "Instagram",
    verified: false,
  },
  {
    id: "testimonial-02",
    name: "Client Name",
    title: "YouTube Creator",
    company: "YouTube Channel",
    quote: "Testimonial coming soon. Real client feedback will be featured here.",
    platform: "YouTube",
    verified: false,
  },
  {
    id: "testimonial-03",
    name: "Client Name",
    title: "Founder",
    company: "Startup",
    quote: "Testimonial coming soon. Real client feedback will be featured here.",
    platform: "LinkedIn",
    verified: false,
  },
];
