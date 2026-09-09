import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ThemeToggle from "./components/theme-toggle";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

const SITE = "https://johnuberbacher.com";
const DESCRIPTION =
  "John Uberbacher is a solutions-focused developer delivering high-quality software across code, design, and everything in between.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "John Uberbacher — Developer",
    template: "%s — John Uberbacher",
  },
  description: DESCRIPTION,
  applicationName: "John Uberbacher",
  authors: [{ name: "John Uberbacher", url: SITE }],
  creator: "John Uberbacher",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "John Uberbacher",
    title: "John Uberbacher — Developer",
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "John Uberbacher — solving real user problems and delivering software from first idea to launch.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Uberbacher — Developer",
    description: DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { title: "John" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111516" },
  ],
  colorScheme: "light dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Uberbacher",
  url: SITE,
  image: `${SITE}/me.jpg`,
  jobTitle: "Software Developer",
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/johnuberbacher",
    "https://www.linkedin.com/in/johnuberbacher/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=localStorage.getItem("theme");' +
              'if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}' +
              'document.documentElement.dataset.theme=t}catch(e){}})()',
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        <ThemeToggle />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
