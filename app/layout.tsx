import "./globals.css";
import type { Metadata } from "next";
import AuthGate from "./components/AuthGate";


export const metadata: Metadata = {
  title: {
    default: "Visat Institute AI Assistant | RAG Powered College Information System",
    template: "%s | Visat Institute AI",
  },

  description:
    "Official AI-powered RAG Assistant of Visat Institute. Get instant information about courses, faculty, admissions, departments, placements, and campus updates.",

  keywords: [
    "Visat Institute",
    "Visat AI Assistant",
    "Visat RAG Agent",
    "College AI chatbot",
    "Visat admissions",
    "Visat faculty",
    "Visat courses",
    "AI college assistant India",
    "RAG based chatbot",
    "Visat campus information"
  ],

  metadataBase: new URL("https://visat.in"),

  authors: [{ name: "Visat Institute" }],
  creator: "Visat Institute",
  publisher: "Visat Institute",

  openGraph: {
    title: "Visat Institute AI Assistant | Smart Campus Information",
    description:
      "Ask anything about Visat Institute — courses, teachers, admissions, placements, and more. Powered by Retrieval-Augmented Generation (RAG) AI.",
    url: "https://visat.in",
    siteName: "Visat Institute",
    images: [
      {
        url: "/gallery/logo.png",
        width: 1200,
        height: 630,
        alt: "Visat Institute AI Assistant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Visat Institute AI Assistant",
    description:
      "Official AI assistant of Visat Institute. Get instant campus information powered by RAG technology.",
    images: ["/gallery/logo.png"],
  },

  icons: {
    icon: "https://visat.in/gallery/logo.png",
    shortcut: "https://visat.in/gallery/logo.png",
    apple: "https://visat.in/gallery/logo.png",
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

  category: "education",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/pp-neue-montreal"
        />
      </head>
      <body className="font-primary">
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
}
