import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";

const SHOWREEL_MAIL =
  "mailto:connect@naturegurucreations.com?subject=Showreel%20access%20request";

export default function Home() {
  return (
    <div>
      <section className="home-banner h-screen bg-cover bg-center"></section>
      <PageIntro
        kicker="About Us"
        title={ngcBrandLeadingText("Nature Guru Creations")}
        tagline="Technology • Emotion • Story — The Future of Cinema."
        stats={[
          { value: "12+", label: "Global Awards" },
          { value: "500+", label: "VFX Shots Delivered" },
        ]}
        image={{
          src: "/about.avif",
          alt: "Nature Guru Creations — natural history filmmaking and VFX",
          priority: true,
        }}
      >
        <p>
          Nature Guru Creations is a{" "}
          <strong className="font-semibold text-[var(--ngc-text-primary)]">
            filmmaking studio
          </strong>{" "}
          focused on creating{" "}
          <strong className="font-semibold text-[var(--ngc-text-primary)]">
            original films and series
          </strong>{" "}
          for{" "}
          <strong className="font-semibold text-[var(--ngc-text-primary)]">
            global audiences
          </strong>
          , while also delivering{" "}
          <strong className="font-semibold text-[var(--ngc-text-primary)]">
            world-class VFX &amp; CG execution
          </strong>{" "}
          for{" "}
          <strong className="font-semibold text-[var(--ngc-text-primary)]">
            international productions
          </strong>{" "}
          through a{" "}
          <strong className="font-semibold text-[var(--ngc-text-primary)]">
            robust, engineering-driven pipeline
          </strong>
          .
        </p>
        <div className="pt-2 space-y-3">
          <h2 className="type-subheading">Our Vision</h2>
          <p>
            To build a{" "}
            <strong className="font-semibold text-[var(--ngc-text-primary)]">
              global ecosystem
            </strong>{" "}
            where{" "}
            <strong className="font-semibold text-[var(--ngc-text-primary)]">
              creativity, technology, and integrity
            </strong>{" "}
            unite — empowering{" "}
            <strong className="font-semibold text-[var(--ngc-text-primary)]">
              storytellers
            </strong>{" "}
            to craft unforgettable cinematic experiences. We invite{" "}
            <strong className="font-semibold text-[var(--ngc-text-primary)]">
              producers, directors, innovators, and investors
            </strong>{" "}
            to join us in this movement — a creative force committed to{" "}
            <strong className="font-semibold text-[var(--ngc-text-primary)]">
              reshaping the future of filmmaking
            </strong>
            .
          </p>
        </div>
      </PageIntro>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="type-heading uppercase mb-2">What We Do</h2>
            <p className="type-body max-w-2xl">
              A complete, end-to-end studio ecosystem where story, technology,
              and execution move together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/global-cinema-creation/ngc-originals"
            className="group rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform"
          >
            <h3 className="type-subheading">NGC Originals</h3>
            <p className="mt-3 type-body">
              In-house productions pushing the boundaries of natural history
              filmmaking.
            </p>
            <div className="mt-6 font-bold text-[var(--ngc-accent)] group-hover:underline">
              Explore
            </div>
          </Link>

          <Link
            href="/global-cinema-creation/the-science-of-storytelling"
            className="group rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform"
          >
            <h3 className="type-subheading">
              The Science of Storytelling
            </h3>
            <p className="mt-3 type-body">
              A disciplined, technically correct workflow that turns creative
              ideas into high-quality visuals with clarity and efficiency.
            </p>
            <div className="mt-6 font-bold text-[var(--ngc-accent)] group-hover:underline">
              Learn more
            </div>
          </Link>

          <Link
            href="/services"
            className="group rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform"
          >
            <h3 className="type-subheading">VFX / CG Services</h3>
            <p className="mt-3 type-body">
              High-end VFX and CG execution for global films and series,
              delivered through NGC’s integrated production pipeline.
            </p>
            <div className="mt-6 font-bold text-[var(--ngc-accent)] group-hover:underline">
              View capabilities
            </div>
          </Link>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="type-heading uppercase mb-2">NGC Originals</h2>
            <p className="type-body">
              In-house productions pushing the boundaries of natural history
              filmmaking.
            </p>
          </div>
          <Link
            className="text-primary font-bold hover:scale-110 transition-transform"
            href="/global-cinema-creation/ngc-originals"
          >
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative rounded-lg overflow-hidden aspect-3/4 cursor-pointer">
            <Image
              alt="The Last Jungle"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Movie poster for The Last Jungle featuring a lion in high contrast"
              src="/poster_1.png"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-gold type-body font-bold uppercase tracking-widest mb-2 block">
                Documentary
              </span>
              <h3 className="type-subheading font-bold mb-4">
                The Last Jungle
              </h3>
              <div className="flex gap-2">
                <span className="bg-white/10 backdrop-blur-md type-body px-2 py-1 rounded font-semibold">
                  HDR
                </span>
                <span className="bg-white/10 backdrop-blur-md type-body px-2 py-1 rounded font-semibold">
                  8K
                </span>
              </div>
            </div>
          </div>
          <div className="group relative rounded-lg overflow-hidden aspect-3/4 cursor-pointer">
            <Image
              alt="Apex Predator"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Movie poster for Apex Predator showing a Great White Shark underwater"
              src="/poster_2.png"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-gold type-body font-bold uppercase tracking-widest mb-2 block">
                Cinematic Series
              </span>
              <h3 className="type-subheading font-bold mb-4">Apex Predator</h3>
              <div className="flex gap-2">
                <span className="bg-white/10 backdrop-blur-md type-body px-2 py-1 rounded font-semibold">
                  HDR
                </span>
                <span className="bg-white/10 backdrop-blur-md type-body px-2 py-1 rounded font-semibold">
                  DOLBY VISION
                </span>
              </div>
            </div>
          </div>
          <div className="group relative rounded-lg overflow-hidden aspect-3/4 cursor-pointer">
            <Image
              alt="Wild Echoes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="Movie poster for Wild Echoes featuring an owl in flight at night"
              src="/poster_3.png"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-gold type-body font-bold uppercase tracking-widest mb-2 block">
                Short Film
              </span>
              <h3 className="type-subheading font-bold mb-4">Wild Echoes</h3>
              <div className="flex gap-2">
                <span className="bg-white/10 backdrop-blur-md type-body px-2 py-1 rounded font-semibold">
                  RAW
                </span>
                <span className="bg-white/10 backdrop-blur-md type-body px-2 py-1 rounded font-semibold">
                  ATMOS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 bg-black/5">
            <Image
              alt="Abadameva Jayathe — VFX and digital character work by Nature Guru Creations"
              className="w-full h-auto object-contain"
              data-alt="Abadameva Jayathe film artwork — Patela digital character VFX"
              src="/vfxPoster.jpg"
              sizes="(min-width: 768px) 50vw, 100vw"
              width={1600}
              height={900}
            />
          </div>
          <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6">
            <p className="type-subheading italic text-[var(--ngc-accent)] font-normal tracking-[0.02em]">
              Abadameva Jayathe
            </p>
            <h2 className="type-heading uppercase">NGC VFX Services</h2>
            <p className="type-body text-justify">
              Veteran actor Babu Mohan marks a first-of-its-kind milestone in
              Telugu cinema by appearing as a hyper-realistic 3D digital
              character in the film Abadameva Jayathe, where his character Patela
              has been created entirely through advanced visual effects. Instead
              of a traditional on-screen performance, the character has been
              brought to life using cutting-edge CGI and performance-driven
              digital artistry, preserving Babu Mohan&apos;s unmistakable
              expressions and screen presence.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/media-announcements#abadameva-jayathe"
                className="inline-flex items-center bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-gray-600 px-6 py-3 rounded-lg font-bold transition-all uppercase tracking-widest type-body"
              >
                Full project story
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-gray-600 px-6 py-3 rounded-lg font-bold transition-all uppercase tracking-widest type-body"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="type-heading uppercase mb-12">
            2026 Studio Showreel
          </h2>
          <div className="relative group rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <Image
              alt="Blurred Showreel"
              className="w-full h-full object-cover blur-md opacity-40 scale-105"
              data-alt="Blurred mountain landscape for a locked video player"
              src="/reel.png"
              fill
              sizes="(min-width: 768px) 800px, 100vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="bg-gray-900/30 backdrop-blur-xl p-10 rounded-2xl border border-white/10 max-w-sm">
                <h4 className="type-subheading font-bold mb-2 ngc-heading-plain text-white">
                  Protected Content
                </h4>
                <p className="type-body text-gray-100 mb-8 leading-relaxed">
                  Our latest showreel contains unreleased footage. Please
                  request access to view.
                </p>
                <a
                  href={SHOWREEL_MAIL}
                  className="block w-full text-center bg-cyan-400 hover:bg-cyan-400/90 text-background-dark font-bold py-3 rounded-lg transition-all uppercase tracking-wider type-body"
                >
                  Request Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="type-heading uppercase">Latest from Press</h2>
          <div className="h-px bg-black/40 grow mx-8 hidden md:block"></div>
          <p className="type-body mt-2 md:mt-0">
            Awards, announcements, and behind the scenes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/media-announcements#abadameva-jayathe"
            className="block border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all group shadow-2xl text-left"
          >
            <div className="relative h-56 overflow-hidden bg-slate-200/90 md:h-60">
              <span className="absolute top-4 left-4 z-10 rounded-full bg-cyan-500 px-3 py-1 type-body font-bold uppercase tracking-widest text-white shadow-lg">
                Digital character VFX
              </span>
              <Image
                alt="Abadameva Jayathe — Patela digital character, VFX by Nature Guru Creations"
                className="object-contain p-2 transition-opacity duration-500 group-hover:opacity-90"
                data-alt="Abadameva Jayathe film — hyper-realistic 3D character work"
                src="/media/projects/abadameva-jayathe/still-1.jpg"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="type-body text-gray-600 uppercase tracking-widest">
                  Mar 2026
                </span>
              </div>
              <h3 className="type-subheading font-bold mb-3 leading-tight group-hover:underline transition-colors">
                Abadameva Jayathe — Babu Mohan as Patela in full VFX
              </h3>
              <p className="type-body text-slate-500 line-clamp-2">
                Veteran actor Babu Mohan appears as a hyper-realistic 3D digital
                character; Patela was created entirely through advanced VFX and
                performance-driven artistry by Nature Guru Creations.
              </p>
            </div>
          </Link>
          <Link
            href="/media-announcements"
            className="block border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all group shadow-2xl text-left"
          >
            <div className="h-48 overflow-hidden relative">
              <span className="absolute top-4 left-4 bg-cyan-500 text-white type-body font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
                Technology
              </span>
              <Image
                alt="Technology News"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Technician working on a high-tech visual effects workstation"
                src="/press2.png"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="type-body text-gray-700 uppercase tracking-widest">
                  Sep 28, 2025
                </span>
              </div>
              <h3 className="type-subheading font-bold mb-3 leading-tight group-hover:underline transition-colors">
                Investing in the Future: NGC Unveils New AI-Driven Pipeline
              </h3>
              <p className="type-body text-slate-500 line-clamp-2">
                Our studio has integrated a proprietary AI workflow to
                accelerate the rendering of natural hair and fur...
              </p>
            </div>
          </Link>
          <Link
            href="/media-announcements"
            className="block border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all group shadow-2xl text-left"
          >
            <div className="h-48 overflow-hidden relative">
              <span className="absolute top-4 left-4 bg-cyan-500 text-white type-body font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
                Expeditions
              </span>
              <Image
                alt="Expedition News"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Wide shot of a mountain range with dramatic clouds"
                src="/press3.png"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="type-body text-gray-700 uppercase tracking-widest">
                  Jan 18, 2026
                </span>
              </div>
              <h3 className="type-subheading font-bold mb-3 leading-tight group-hover:underline transition-colors">
                Behind the Scenes: 6 Months in the High Andes
              </h3>
              <p className="type-body text-slate-500 line-clamp-2">
                Go behind the camera with our production team as they document
                the rarest creatures on Earth...
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
