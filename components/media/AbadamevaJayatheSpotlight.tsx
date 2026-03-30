import Image from "next/image";
import { ExternalLink, Instagram, Youtube } from "lucide-react";

const LINKS = {
  reel: "https://www.instagram.com/reels/DQEl0qsjy9K/",
  post: "https://www.instagram.com/p/DT2GIFZCAzs/?igsh=MWx4emlwdzhtYWdsNQ%3D%3D&img_index=1",
  youtube: "https://youtu.be/5q_eVfgw-wY?si=HbT62vg4VlR1uGHr",
} as const;

const still = (n: 1 | 2 | 3) =>
  `/media/projects/abadameva-jayathe/still-${n}.jpg`;

function OutLink({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: typeof Instagram;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 type-body font-semibold text-[var(--ngc-text-primary)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[var(--ngc-accent)]/50 hover:bg-[var(--ngc-accent)]/5 transition-colors"
    >
      <Icon className="size-5 shrink-0 text-[var(--ngc-accent)]" aria-hidden />
      {children}
      <ExternalLink className="size-3.5 opacity-50 shrink-0" aria-hidden />
    </a>
  );
}

export default function AbadamevaJayatheSpotlight() {
  return (
    <section
      id="abadameva-jayathe"
      className="scroll-mt-28 rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[280px] lg:min-h-[380px] bg-black/5">
          <Image
            src={still(1)}
            alt="Abadameva Jayathe — Patela digital character, VFX by Nature Guru Creations"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center gap-5">
          <div className="type-body font-semibold uppercase tracking-[0.14em] text-[var(--ngc-accent)]">
            Featured • Digital character VFX
          </div>
          <h2 className="type-heading uppercase">Abadameva Jayathe</h2>
          <p className="type-body text-[var(--ngc-text-secondary)] leading-relaxed">
            Veteran actor Babu Mohan marks a first-of-its-kind milestone in
            Telugu cinema as a hyper-realistic 3D digital character—Patela—built
            entirely in VFX by Nature Guru Creations, preserving his
            expressions and screen presence through performance-driven CGI.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <OutLink href={LINKS.reel} icon={Instagram}>
              Instagram reel
            </OutLink>
            <OutLink href={LINKS.post} icon={Instagram}>
              Instagram post
            </OutLink>
            <OutLink href={LINKS.youtube} icon={Youtube}>
              YouTube interview
            </OutLink>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 sm:gap-2 border-t border-black/5 bg-black/[0.02]">
        <div className="relative aspect-[4/3]">
          <Image
            src={still(2)}
            alt="Abadameva Jayathe — behind the scenes still 2"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src={still(3)}
            alt="Abadameva Jayathe — behind the scenes still 3"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>

      <div className="p-8 lg:p-12 border-t border-black/5 space-y-5 type-body text-justify text-[var(--ngc-text-secondary)] leading-relaxed">
        <p>
          This innovative VFX-driven portrayal represents a significant leap for
          Indian cinema, blending technology with performance to achieve a
          lifelike digital presence.
        </p>
        <p>
          The character&apos;s realism lies not just in visual accuracy, but in
          the subtle emotional nuances and familiar body language that audiences
          associate with the actor, setting a new benchmark for digital
          character integration in regional filmmaking.
        </p>
        <p>
          The goal was never to simply recreate a face through technology, but
          to revive a presence—the subtle expressions, the quiet emotions, and
          the unmistakable charm that defined the character. To achieve this,
          the digital version of the Patela character was crafted using a
          world-class production pipeline, comparable to those used in top
          international studios. The entire process was executed by Nature Guru
          Creations.
        </p>
        <p>
          Great care was taken in every detail—from skin behavior and facial
          nuances to eye movement and body language—so that the character carries
          natural life and screen presence. The focus was always on
          believability, allowing audiences to connect with the performance
          rather than notice the technology behind it.
        </p>
        <p>
          This project stands at the intersection of cutting-edge visual effects
          and soulful storytelling. It is a tribute to the iconic legacy of
          Barrister Parvateesam and a step forward in redefining how digital
          characters can carry emotion, depth, and authenticity in Indian
          cinema.
        </p>
      </div>
    </section>
  );
}
