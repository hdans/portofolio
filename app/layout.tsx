import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Danish Rahadian', 
    default: 'Danish Rahadian - AI Engineer & Data Scientist',
  },
  description: 'Portofolio Danish Rahadian, seorang AI Engineer dan Data Scientist yang berfokus pada pengembangan solusi cerdas dan aplikasi berbasis data menggunakan Machine Learning, Python, dan Next.js.',
  
  icons: {
    icon: '/img/logo6.ico', 
    shortcut: '/img/logo6.png', 
    apple: '/img/logo16.png', 
  },

  openGraph: {
    title: 'Danish Rahadian - AI Engineer & Data Scientist',
    description: 'Portofolio Danish Rahadian, AI Engineer & Data Scientist.',
    url: 'https:/danishrahadian.vercel.app', 
    siteName: 'Danish Rahadian Portfolio',
    images: [
      {
        url: 'https://danishrahadian.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Danish Rahadian Portfolio Website',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Danish Rahadian - AI Engineer & Data Scientist',
    description: 'Portofolio AI Engineer & Data Scientist.',
    creator: '@username_twitter_anda',
    images: ['https://danishrahadian.vercel.app/og-image.png'],
  },

  keywords: ['Danish Rahadian', 'AI Engineer', 'Data Scientist', 'Portfolio', 'Machine Learning', 'Next.js', 'Python', 'Unpad', 'TI Unpad' ,'Teknik Informatika' ,'Teknik Informatika Unpad', 'Teknik Informatika Universitas Padjadjaran', 'Universitas Padjadjaran'],
  authors: [{ name: 'Danish Rahadian', url: 'https://www.linkedin.com/in/danishrahadian' }],
  creator: 'Danish Rahadian',
  publisher: 'Danish Rahadian',
  robots: 'index, follow',
  metadataBase: new URL('https://danishrahadian.vercel.app'),
};