import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="home-banner h-screen bg-cover bg-center"></section>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-gold/50 text-gold text-xs font-bold uppercase tracking-[0.3em] rounded-full">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Merging Raw Nature with
              <span className="text-red-600 italic ml-2">
                Digital Excellence
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Nature Guru Creations is a filmmaking studio focused on creating
              original films and series for global audiences, while also
              delivering world-class VFX & CG execution for international
              productions through a robust, engineering-driven pipeline.
            </p>
            <p className="text-red-600 font-bold tracking-wide">
              Technology • Emotion • Story — The Future of Cinema.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-4 border-cyan-600 pl-6">
                <h4 className="text-3xl font-bold">12+</h4>
                <p className="text-gray-500 text-sm uppercase">Global Awards</p>
              </div>
              <div className="border-l-5 border-amber-300 pl-6">
                <h4 className="text-3xl font-bold">500+</h4>
                <p className="text-gray-500 text-sm uppercase">
                  VFX Shots Delivered
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-2xl">
              <Image
                src="/about.avif"
                alt="about"
                className="w-full h-full object-center"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              What We <span className="text-red-600">Do</span>
            </h2>
            <p className="text-slate-500 max-w-2xl">
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
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
              Global Cinema Creation
            </div>
            <div className="mt-3 text-2xl font-extrabold tracking-tight">
              NGC Originals
            </div>
            <p className="mt-3 text-gray-700 leading-relaxed">
              In-house productions pushing the boundaries of natural history
              filmmaking.
            </p>
            <div className="mt-6 font-extrabold text-red-600 group-hover:underline">
              Explore
            </div>
          </Link>

          <Link
            href="/global-cinema-creation/the-science-of-storytelling"
            className="group rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform"
          >
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
              NGC Methodology
            </div>
            <div className="mt-3 text-2xl font-extrabold tracking-tight">
              The Science of Storytelling
            </div>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A disciplined, technically correct workflow that turns creative
              ideas into high-quality visuals with clarity and efficiency.
            </p>
            <div className="mt-6 font-extrabold text-red-600 group-hover:underline">
              Learn more
            </div>
          </Link>

          <Link
            href="/services"
            className="group rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform"
          >
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
              International VFX
            </div>
            <div className="mt-3 text-2xl font-extrabold tracking-tight">
              VFX / CG Services
            </div>
            <p className="mt-3 text-gray-700 leading-relaxed">
              High-end VFX and CG execution for global films and series,
              delivered through NGC’s integrated production pipeline.
            </p>
            <div className="mt-6 font-extrabold text-red-600 group-hover:underline">
              View capabilities
            </div>
          </Link>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              NGC <span className="text-red-600">Originals</span>
            </h2>
            <p className="text-slate-500">
              In-house productions pushing the boundaries of natural history
              filmmaking.
            </p>
          </div>
          <a className="text-primary font-bold hover:scale-110" href="#">
            View All
          </a>
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">
                Documentary
              </span>
              <h3 className="text-2xl font-bold mb-4">The Last Jungle</h3>
              <div className="flex gap-2">
                <span className="bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 rounded">
                  HDR
                </span>
                <span className="bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 rounded">
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">
                Cinematic Series
              </span>
              <h3 className="text-2xl font-bold mb-4">Apex Predator</h3>
              <div className="flex gap-2">
                <span className="bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 rounded">
                  HDR
                </span>
                <span className="bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 rounded">
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">
                Short Film
              </span>
              <h3 className="text-2xl font-bold mb-4">Wild Echoes</h3>
              <div className="flex gap-2">
                <span className="bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 rounded">
                  RAW
                </span>
                <span className="bg-white/10 backdrop-blur-md text-[10px] px-2 py-1 rounded">
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
              alt="VFX Rendering"
              className="w-full h-auto object-contain"
              data-alt="Abstract 3D particle landscape representing VFX technology"
              src="/vfxPoster.jpg"
              sizes="(min-width: 768px) 50vw, 100vw"
              width={1600}
              height={900}
            />
          </div>
          <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">
              NGC <span className="text-red-600">VFX Services</span>
            </h2>
            <p className="text-gray-400">
              From high-end creature simulation to seamless environment
              extensions, our VFX department specializes in hyper-realistic
              natural elements.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-gray-800 font-medium text-base">
              <li className="flex items-center gap-2">
                Fur &amp; Feather Simulation
              </li>
              <li className="flex items-center gap-2">Digital Environments</li>
              <li className="flex items-center gap-2">Fluid Dynamics</li>
            </ul>
            <button className="mt-4 self-start bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-gray-600 px-8 py-3 rounded-lg font-bold transition-all uppercase tracking-widest text-xs cursor-pointer">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold uppercase mb-12">
            2024 Studio <span className="text-red-600">Showreel</span>
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
                <h4 className="text-xl font-bold mb-2 text-white">
                  Protected Content
                </h4>
                <p className="text-gray-100 text-sm mb-8 leading-relaxed">
                  Our latest showreel contains unreleased footage. Please
                  request access to view.
                </p>
                <button className="w-full bg-cyan-400 hover:bg-cyan-400/90 text-background-dark font-bold py-3 rounded-lg transition-all uppercase tracking-wider text-xs cursor-pointer">
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-tight">
            Latest from <span className="text-red-600">Press</span>
          </h2>
          <div className="h-px bg-black/40 grow mx-8 hidden md:block"></div>
          <p className="text-gray-700 text-sm mt-2 md:mt-0">
            Awards, announcements, and behind the scenes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all group shadow-2xl">
            <div className="h-48 overflow-hidden relative">
              <span className="absolute top-4 left-4 bg-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
                Industry News
              </span>
              <Image
                alt="Awards News"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Cinematic camera setup at a film awards ceremony"
                src="/press1.png"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                  Oct 12, 2023
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                Nature Guru Wins &apos;Best Cinematography&apos; at Global Film
                Fest
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2">
                Our recent project &quot;The Last Jungle&quot; took home the top
                prize for its groundbreaking visual storytelling...
              </p>
            </div>
          </div>
          <div className="border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all group shadow-2xl">
            <div className="h-48 overflow-hidden relative">
              <span className="absolute top-4 left-4 bg-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
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
                <span className="text-[10px] text-gray-700 uppercase tracking-widest">
                  Sep 28, 2023
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                Investing in the Future: NGC Unveils New AI-Driven Pipeline
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2">
                Our studio has integrated a proprietary AI workflow to
                accelerate the rendering of natural hair and fur...
              </p>
            </div>
          </div>
          <div className="border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all group shadow-2xl">
            <div className="h-48 overflow-hidden relative">
              <span className="absolute top-4 left-4 bg-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
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
                <span className="text-[10px] text-gray-700 uppercase tracking-widest">
                  Aug 05, 2023
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                Behind the Scenes: 6 Months in the High Andes
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2">
                Go behind the camera with our production team as they document
                the rarest creatures on Earth...
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
