"use client"

import React, { useEffect, useState } from "react"

const Page = () => {
  const [loading, setLoading] = useState(true)
  const [pdfSrc, setPdfSrc] = useState("/resume.pdf#view=FitH")

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < 640
      setPdfSrc(isMobile ? "/resume.pdf#view=FitW" : "/resume.pdf#view=FitH")
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <div className=" md:min-h-[calc(100vh-80px)] w-full bg-neutral-50 px-3 py-4 sm:px-6 sm:py-6 rounded-lg mt-6">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 rounded-lg">
        <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 sm:px-5 sm:py-4">
          <h2 className="text-base sm:text-lg font-semibold text-black">Resume</h2>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/resume.pdf"
              download
              className="rounded-md bg-black px-3 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-black/90 transition"
            >
              Download PDF
            </a>

            <button
              onClick={() => window.history.back()}
              className="flex h-9 w-9 items-center justify-center rounded-md text-black hover:bg-black/5 transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="relative bg-white h-[78vh] sm:h-[82vh]">
          {loading ? (
            <div className="flex h-full items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/15 border-t-black" />
            </div>
          ) : (
            <iframe
              src={pdfSrc}
              className="h-full w-full"
              title="Resume PDF"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Page
