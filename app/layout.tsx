import "./globals.css";
import type { Metadata } from "next";
import AuthGate from "./components/AuthGate";

export const metadata: Metadata = {
  title: "College Teacher Directory",
  description: "Browse and connect with college teachers",
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
