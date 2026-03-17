import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Video,
} from "lucide-react";

const ADDRESS =
  "G2, Elite Residency, Road no 27, Alkapur Township, Neknampur Village, Hyderabad, Telangana - 500089, India";

const EMAILS = {
  business: "partnerships@naturegurucreations.com",
  careers: "talent@naturegurucreations.com",
  media: "connect@naturegurucreations.com",
};

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-red-600 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tight uppercase">
              <span className="text-red-600">
                Nature Guru Creations — The Science of Storytelling
              </span>
            </h2>
          </div>
          <p className="text-slate-800 max-w-sm text-justify">
            Nature Guru Creations is a filmmaking studio focused on creating
            original films and series for global audiences, while also
            delivering world-class VFX & CG execution for international
            productions through a robust, engineering-driven pipeline.
          </p>
          <div className="space-y-2 text-sm text-slate-800">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-red-600" />
              <span>{ADDRESS}</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-red-600" />
              <div className="space-y-1">
                <div>
                  Business:{" "}
                  <a
                    className="font-bold hover:underline"
                    href={`mailto:${EMAILS.business}`}
                  >
                    {EMAILS.business}
                  </a>
                </div>
                <div>
                  Careers:{" "}
                  <a
                    className="font-bold hover:underline"
                    href={`mailto:${EMAILS.careers}`}
                  >
                    {EMAILS.careers}
                  </a>
                </div>
                <div>
                  Media:{" "}
                  <a
                    className="font-bold hover:underline"
                    href={`mailto:${EMAILS.media}`}
                  >
                    {EMAILS.media}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-red-600">
            Company
          </h4>
          <ul className="space-y-4 text-sm text-gray-800">
            <li>
              <Link className="hover:text-red-600 transition-colors" href="/">
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-600 transition-colors"
                href="/global-cinema-creation/ngc-originals"
              >
                Originals
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-600 transition-colors"
                href="/global-cinema-creation"
              >
                Global Cinema Creation
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition-colors" href="/investors">
                Investors & Partners
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-red-600">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-gray-700">
            <li>
              <Link className="hover:text-red-600 transition-colors" href="/services">
                International VFX / CG Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition-colors" href="/pipeline">
                NGC Technology & VFX Pipeline
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-600 transition-colors"
                href="/global-cinema-creation/the-science-of-storytelling"
              >
                The Science of Storytelling
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition-colors" href="/career">
                Careers & Talent Hub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2025 Nature Guru Creations. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            className="inline-flex items-center gap-2 hover:text-slate-800 transition-colors"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-slate-800 transition-colors"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="size-4" />
            Instagram
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-slate-800 transition-colors"
            href="https://vimeo.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Video className="size-4" />
            Vimeo
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-slate-800 transition-colors"
            href="https://www.artstation.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Palette className="size-4" />
            ArtStation
          </a>
        </div>
      </div>
    </footer>
  );
}
