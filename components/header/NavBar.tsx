"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_MENU } from "@/lib/nav";
import MenuItem from "./MenuItem";
import type { MenuType } from "@/types/header";

function MobileNavLinks({
  items,
  level,
  onNavigate,
}: {
  items: MenuType[];
  level: number;
  onNavigate: () => void;
}) {
  return (
    <ul
      className={level ? "mt-1 space-y-1 border-l border-gray-200 pl-3 ml-1" : "space-y-1"}
    >
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--ngc-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ngc-accent)]"
          >
            {item.title}
          </Link>
          {item.subMenu && item.subMenu.length > 0 && (
            <MobileNavLinks
              items={item.subMenu}
              level={level + 1}
              onNavigate={onNavigate}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <nav className="bg-white/75 backdrop-blur-md w-full flex items-center justify-between px-5 py-4 text-sm text-gray-600 gap-5">
      <Link href="/" className="flex items-center gap-2.5 shrink-0">
        <Image
          src="/Logo (2).png"
          alt="NGC"
          width={52}
          height={52}
          priority
        />
        <div className="leading-[1.05]">
          <div className="text-2xl font-black tracking-tight text-gray-900 drop-shadow-[0_4px_10px_rgba(0,0,0,0.28)]">
            <span className="text-[#049518]">N</span>
            <span className="text-[#EA2F2F]">GC</span>
          </div>
          <div className="text-[12px] font-semibold uppercase tracking-[0.05em] text-gray-500 mt-0.5">
            The Science of Storytelling
          </div>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-5 flex-wrap justify-end">
        {NAV_MENU.map((menuItem, idx) => (
          <div
            key={menuItem.title}
            className="relative group nav-item opacity-0"
            style={{ animationDelay: `${idx * 0.18}s` }}
          >
            <MenuItem item={menuItem} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-800 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ngc-accent)]"
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMobileOpen((o) => !o)}
      >
        {mobileOpen ? (
          <X className="size-6" aria-hidden />
        ) : (
          <Menu className="size-6" aria-hidden />
        )}
        <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[110] flex justify-end">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-navigation"
            className="relative h-full w-[min(100%,20rem)] overflow-y-auto bg-white shadow-xl p-4 pt-6"
          >
            <MobileNavLinks
              items={NAV_MENU}
              level={0}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
