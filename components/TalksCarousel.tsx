"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Speaker } from "@/lib/data";

export default function TalksCarousel({ talks }: { talks: Speaker[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 justify-[safe_center] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {talks.map((t) => (
          <a
            key={t.name}
            href={t.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 w-56 sm:w-64 snap-start"
          >
            <div className="aspect-[4/5] bg-gray-800 relative overflow-hidden">
              {t.photo && <Image src={t.photo} alt={t.name} fill className="object-cover" />}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-tedx-black ml-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {t.year && (
                <span className="absolute top-3 left-3 bg-tedx-red text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1">
                  {t.year}
                </span>
              )}
            </div>
            <div className="mt-3">
              <p className="font-bold text-white text-sm">{t.name}</p>
              {t.talkTitle && (
                <p className="text-xs text-gray-400 mt-1 leading-snug line-clamp-2">{t.talkTitle}</p>
              )}
            </div>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="hidden md:flex absolute -left-5 top-[38%] -translate-y-1/2 w-10 h-10 rounded-full bg-white text-tedx-black items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="hidden md:flex absolute -right-5 top-[38%] -translate-y-1/2 w-10 h-10 rounded-full bg-white text-tedx-black items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
