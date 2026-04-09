import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zy AI Academy - AI Tutoring for Kids | Math, Reading & Minecraft Coding",
  description:
    "Your child learns more in 20 minutes with AI than an hour of homework. Done-for-you AI tutors + Minecraft coding curriculum. Founding family access just $47.",
  openGraph: {
    title: "Zy AI Academy - AI Tutoring for Kids",
    description:
      "Done-for-you AI tutors + Minecraft coding curriculum. Founding family access just $47.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
