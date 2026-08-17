import Image from "next/image";
import type { Person } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div className="border border-gray-200">
      <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
        {person.photo ? (
          <Image src={person.photo} alt={person.name} fill className="object-cover" />
        ) : (
          <span className="text-3xl font-bold text-gray-400">{initials(person.name)}</span>
        )}
      </div>
      <div className="p-4">
        <p className="font-bold">{person.name}</p>
        <p className="text-sm text-tedx-red font-medium">{person.role}</p>
        {person.bio && (
          <div className="mt-2 space-y-2">
            {person.placeholder ? (
              <p className="text-sm text-gray-600 leading-relaxed">Bio coming soon.</p>
            ) : (
              person.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))
            )}
          </div>
        )}
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500 hover:text-tedx-red"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}
