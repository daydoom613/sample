import { MenuType } from "@/types/header";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  item: MenuType;
  level?: number;
};

export default function MenuItem({ item, level = 0 }: Props) {
  const hasSub = item.subMenu && item.subMenu.length > 0;

  const renderHeaderBrandTerms = (text: string): ReactNode => {
    const parts = text.split(/(NATURE GURU CREATIONS|NGC)/gi);
    return parts.map((part, idx) => {
      if (!part) return null;
      const upper = part.toUpperCase();
      if (upper !== "NGC" && upper !== "NATURE GURU CREATIONS") {
        return <span key={`${part}-${idx}`}>{part}</span>;
      }
      const first = part.charAt(0);
      const rest = part.slice(1);
      return (
        <span key={`${part}-${idx}`}>
          <span className="text-[#07961B]">{first}</span>
          <span className="text-[#F87171]">{rest}</span>
        </span>
      );
    });
  };

  return (
    <div className="relative">
      <div className="group relative">
        <Link
          href={item.href}
          className="flex items-center justify-between px-3 py-1.5 text-base text-gray-600 font-mono hover:text-[var(--ngc-accent)] whitespace-nowrap hover:border-[var(--ngc-accent)] border-2 border-transparent rounded-md transition-all duration-300 ease-in-out hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ngc-accent)]"
        >
          <span>{renderHeaderBrandTerms(item.title.toUpperCase())}</span>
          {hasSub && <span className="ml-2">›</span>}
        </Link>

        {hasSub && (
          <div
            className={`
              absolute ${
                level === 0
                  ? "top-full left-0 bg-white"
                  : "top-0 left-full bg-gray-50 border-l border-black/10"
              }
              min-w-64 px-5 py-3 shadow-lg rounded-md
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
            `}
          >
            <div className="flex flex-col py-2">
              {item.subMenu!.map((sub) => (
                <MenuItem key={sub.title} item={sub} level={level + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
