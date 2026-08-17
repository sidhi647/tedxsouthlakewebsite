import Image from "next/image";
import type { Speaker } from "@/lib/data";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const photo = (
    <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center relative overflow-hidden">
      {speaker.photo ? (
        <Image src={speaker.photo} alt={speaker.name} fill className="object-cover" />
      ) : (
        <span className="text-4xl font-bold text-gray-300">
          {speaker.name
            .split(" ")
            .map((p) => p[0])
            .join("")}
        </span>
      )}
      {speaker.speakerType === "student" && (
        <span className="absolute top-3 left-3 bg-tedx-red text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1">
          Youth Voice
        </span>
      )}
      {speaker.videoUrl && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-tedx-black ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="border border-gray-200 group">
      {speaker.videoUrl ? (
        <a href={speaker.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${speaker.name}'s talk`}>
          {photo}
        </a>
      ) : (
        photo
      )}
      <div className="p-4">
        {speaker.year && <p className="text-xs text-gray-500 font-semibold">{speaker.year}</p>}
        <p className="font-bold mt-1">{speaker.name}</p>
        {speaker.talkTitle && <p className="text-sm text-gray-700 mt-1">{speaker.talkTitle}</p>}
        {speaker.idea && <p className="text-sm text-gray-500 mt-1 italic">{speaker.idea}</p>}
        {speaker.videoUrl && (
          <a
            href={speaker.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs font-semibold uppercase tracking-wide text-tedx-red"
          >
            Watch talk →
          </a>
        )}
      </div>
    </div>
  );
}
