import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Clash Display font from Fontshare */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        {/* JetBrains Mono */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Divyam Kumar",
              url: siteConfig.url,
              jobTitle: "Social Media Manager & Content Strategist",
              description: siteConfig.description,
              worksFor: {
                "@type": "Organization",
                name: "Coffeee Media",
              },
              sameAs: [
                "https://linkedin.com/in/divyamkumar",
                "https://instagram.com/divyamkumar",
              ],
              knowsAbout: [
                "Social Media Management",
                "Content Strategy",
                "Instagram Growth",
                "YouTube Growth",
                "Content Marketing",
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased bg-background text-text-primary">
        {/* Loading screen */}
        <LoadingScreen />

        <SmoothScrollProvider>
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Back to top */}
          <BackToTop />

          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
