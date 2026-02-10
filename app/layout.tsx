import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://inzamam.cloud'),
  title: {
    default: 'Inzamam Ul Haque Chowdhury - AI Engineer & Developer',
    template: '%s | Inzamam Ul Haque'
  },
  description: 'A curious mind weaving a journey from Bangladesh through India, now pursuing a master\'s in the UK, striving to become an AI engineer.',
  keywords: ['AI Engineer', 'Machine Learning', 'Portfolio', 'Developer', 'Bangladesh', 'UK', 'India'],
  authors: [{ name: 'Inzamam Ul Haque Chowdhury' }],
  creator: 'Inzamam Ul Haque Chowdhury',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://inzamam.cloud',
    siteName: 'Inzamam Ul Haque Portfolio',
    title: 'Inzamam Ul Haque Chowdhury - AI Engineer & Developer',
    description: 'A curious mind weaving a journey from Bangladesh through India, now pursuing a master\'s in the UK, striving to become an AI engineer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inzamam Ul Haque Chowdhury',
    description: 'AI Engineer & Developer',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE', // Add this after you get it from Google Search Console
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0F0F0F] flex justify-center items-center flex-col">
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}