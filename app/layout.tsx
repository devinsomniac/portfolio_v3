import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0F0F0F] flex justify-center items-center flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
