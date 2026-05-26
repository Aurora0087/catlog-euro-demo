"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function DownloadPdfButton() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hide = () => {
      if (ref.current) ref.current.style.setProperty("display", "none", "important");
    };
    const show = () => {
      if (ref.current) ref.current.style.removeProperty("display");
    };
    window.addEventListener("beforeprint", hide);
    window.addEventListener("afterprint", show);
    return () => {
      window.removeEventListener("beforeprint", hide);
      window.removeEventListener("afterprint", show);
    };
  }, []);

  return (
    <div ref={ref} className="no-print fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <Link
        href="/book"
        className="flex items-center gap-2 bg-white/90 border border-black/10 px-5 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-black shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-80 active:opacity-60"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="18" rx="1" />
          <rect x="14" y="3" width="7" height="18" rx="1" />
        </svg>
        Browse as Book
      </Link>

      <button
        onClick={() => window.print()}
        className="flex items-center gap-2 bg-black px-5 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-opacity hover:opacity-80 active:opacity-60"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download PDF
      </button>
    </div>
  );
}
