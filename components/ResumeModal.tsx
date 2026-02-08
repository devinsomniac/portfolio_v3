"use client"
import React, { useEffect } from "react"

const ResumeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-3 md:p-6">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-4 py-3 md:px-5 md:py-4">
          <h2 className="text-sm md:text-lg font-semibold text-black">Resume</h2>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="/resume.pdf"
              download
              className="rounded-md bg-black px-3 py-2 text-xs md:text-sm font-semibold text-white hover:bg-black/90 transition"
            >
              Download PDF
            </a>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-md text-black hover:bg-black/10 transition"
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="h-[80dvh] bg-[#111]">
          <iframe
            src="/resume.pdf#view=FitH"
            className="h-full w-full"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeModal
