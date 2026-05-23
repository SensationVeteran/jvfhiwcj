import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

/** Page metadata for SEO and browser tab display. */
export const metadata: Metadata = {
  title: "Linear-style Site",
  description: "A modern landing page with Linear-inspired dark design, gradient accents, and smooth animations.",
};

/**
 * Root layout wrapping all pages with shared font, body styles, and global CSS.
 *
 * @param props - Layout props containing child page content.
 * @param props.children - The page content to render within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0A0A0F] text-white`}>
        {children}
      </body>
    </html>
  );
}
