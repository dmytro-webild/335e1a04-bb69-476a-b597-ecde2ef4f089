import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'FFI | Internal Audit Dashboard - Kuningan',
  description: 'Executive overview of internal audit findings, risks, and corrective actions for Frisian Flag Indonesia - Kuningan Branch. Modern, interactive dashboard for Senior Management.',
  openGraph: {
    "title": "FFI Internal Audit Dashboard",
    "description": "Executive overview of internal audit findings, risks, and corrective actions for Frisian Flag Indonesia - Kuningan Branch.",
    "url": "https://www.frisianflag.com/internal-audit-dashboard",
    "siteName": "Frisian Flag Indonesia",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg",
        "alt": "Internal Audit Dashboard Screenshot"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "FFI Internal Audit Dashboard",
    "description": "Executive overview of internal audit findings, risks, and corrective actions for Frisian Flag Indonesia - Kuningan Branch.",
    "images": [
      "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
