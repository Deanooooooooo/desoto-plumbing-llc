import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/desoto-plumbing-llc"),
  title: "Desoto Plumbing LLC | Plumber in Hernando MS",
  description:
    "Licensed plumber in Hernando MS for leaks, water heaters, drain work and general plumbing enquiries.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Desoto Plumbing LLC | Plumber in Hernando MS",
    description:
      "Licensed plumbing help for water heaters, leaks and drain work around Hernando and DeSoto County.",
    url: "https://deanooooooooo.github.io/desoto-plumbing-llc/",
    images: ["/assets/hero-plumbing.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desoto Plumbing LLC | Plumber in Hernando MS",
    description:
      "Licensed plumber in Hernando MS for leaks, water heaters, drain work and general plumbing.",
    images: ["/assets/hero-plumbing.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
