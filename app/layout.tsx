import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Lato, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteJsonLd } from "@/components/JsonLd";
import { Preloader } from "@/components/Preloader";
import { StickyBar } from "@/components/StickyBar";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Unfiltered Pull | ${site.tagline}`,
    template: "%s | Unfiltered Pull",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `Unfiltered Pull | ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/brand/logo-hand.jpg", width: 1200, height: 1200 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Unfiltered Pull | ${site.tagline}`,
    description: site.description,
    images: ["/brand/logo-hand.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F1E9",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} ${montserrat.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteJsonLd />
        <Preloader />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
