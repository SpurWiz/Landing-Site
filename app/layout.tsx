import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import { cerebri } from "./fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spurwiz.com"),

  title: {
    default: "Spur Wiz | Legacy-as-a-Service & Business Execution Partner",
    template: "%s | Spur Wiz",
  },

  description:
    "Spur Wiz helps startups and growing brands move from strategy to execution. Through our Legacy-as-a-Service model and LegacyLens AI platform, we build systems, structure operations, and ensure long-term business sustainability.",

  keywords: [
    "Spur Wiz",
    "LegacyLens",
    "business execution partner",
    "execution consulting",
    "startup operations structure",
    "brand consistency audit",
    "AI business audit tool",
    "operational consulting",
    "business systems development",
    "execution gap solution",
  ],

  authors: [{ name: "Spur Wiz Team" }],
  creator: "Spur Wiz",
  publisher: "Spur Wiz",

  openGraph: {
    type: "website",
    url: "https://spurwiz.com",
    title: "Spur Wiz | Stop Dreaming. Start Building.",
    description:
      "We close the execution gap. Spur Wiz builds operational systems, brand structure, and long-term business legacies powered by LegacyLens AI.",
    siteName: "Spur Wiz",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Spur Wiz - Legacy-as-a-Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spur Wiz | Legacy-as-a-Service",
    description:
      "From strategy to execution. We build operational systems and scalable business structures.",
    images: ["/logo/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Business Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${urbanist.variable} ${cerebri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
