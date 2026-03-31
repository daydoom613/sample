import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Video,
} from "lucide-react";
import { SITE_EMAILS } from "@/lib/emails";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";
import { getSocialLinks } from "@/lib/social";

const ADDRESS =
  "G2, Elite Residency, Road no 27, Alkapur Township, Neknampur Village, Hyderabad, Telangana - 500089, India";

const iconFor = (label: string) => {
  switch (label) {
    case "LinkedIn":
      return Linkedin;
    case "Instagram":
      return Instagram;
    case "Vimeo":
      return Video;
    case "ArtStation":
      return Palette;
    default:
      return Linkedin;
  }
};

export default function Footer() {
  const socialLinks = getSocialLinks();

  return (
    <footer className="bg-[#f9f9f9] border-t border-black/10 py-9 mt-20 text-[#424240]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tight uppercase leading-tight ngc-heading-plain">
              <span>
                {ngcBrandLeadingText("Nature Guru Creations")}
                <span className="text-[var(--ngc-text-primary)]">—</span>
              </span>
              <br />
              <span className="text-[var(--ngc-text-primary)]">
                The Science of Storytelling
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-justify">
            Nature Guru Creations is a filmmaking studio focused on creating
            original films and series for global audiences, while also
            delivering world-class VFX & CG execution for international
            productions through a robust, engineering-driven pipeline.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">
            Contact
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-[var(--ngc-accent)] shrink-0" />
              <span>{ADDRESS}</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-[var(--ngc-accent)] shrink-0" />
              <div className="space-y-1">
                <div>
                  Business:{" "}
                  <a
                    className="font-bold hover:underline"
                    href={`mailto:${SITE_EMAILS.business}`}
                  >
                    {SITE_EMAILS.business}
                  </a>
                </div>
                <div>
                  Careers:{" "}
                  <a
                    className="font-bold hover:underline"
                    href={`mailto:${SITE_EMAILS.careers}`}
                  >
                    {SITE_EMAILS.careers}
                  </a>
                </div>
                <div>
                  Creative collaborations:{" "}
                  <a
                    className="font-bold hover:underline"
                    href={`mailto:${SITE_EMAILS.creativeCollaborations}`}
                  >
                    {SITE_EMAILS.creativeCollaborations}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-[var(--ngc-accent)] transition-colors" href="/">
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--ngc-accent)] transition-colors"
                href="/global-cinema-creation"
              >
                Global Cinema Creation
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--ngc-accent)] transition-colors"
                href="/services"
              >
                International VFX / CG Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--ngc-accent)] transition-colors"
                href="/career"
              >
                Career & Talent Hub
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--ngc-accent)] transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-4 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
        <p>© 2026 Nature Guru Creations. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-6">
          {socialLinks.map((s) => {
            const Icon = iconFor(s.label);
            const className =
              "inline-flex items-center gap-2 hover:text-[var(--ngc-accent)] transition-colors";
            if (s.external) {
              return (
                <a
                  key={s.label}
                  className={className}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="size-4" />
                  {s.label}
                </a>
              );
            }
            return (
              <Link key={s.label} className={className} href={s.href}>
                <Icon className="size-4" />
                {s.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
