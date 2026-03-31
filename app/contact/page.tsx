import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import { contentCardClass } from "@/components/page/contentStyles";
import { SITE_EMAILS } from "@/lib/emails";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Nature Guru Creations for business, careers, and creative collaborations.",
};

const ADDRESS =
  "G2, Elite Residency, Road no 27, Alkapur Township, Neknampur Village, Hyderabad, Telangana - 500089, India";

export default function ContactPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="Contact"
        title={ngcBrandInHeading("Get in touch")}
        tagline="Business • Careers • Creative collaborations — we’re listening."
        image={{
          src: "/about.avif",
          alt: "Nature Guru Creations — contact the studio",
          priority: true,
        }}
      >
        <p>
          Use the channels below for business development, casting and careers,
          or press and media. For showreel access or pipeline questions, mention
          it in your subject line.
        </p>
      </PageIntro>

      <PageSection className="pt-0 pb-28">
        <div className={`${contentCardClass} max-w-3xl mx-auto`}>
          <div className="flex gap-3 type-body text-[var(--ngc-text-primary)]">
            <MapPin className="size-5 shrink-0 text-[var(--ngc-accent)] mt-0.5" />
            <span>{ADDRESS}</span>
          </div>
          <div className="flex gap-3 type-body mt-8">
            <Mail className="size-5 shrink-0 text-[var(--ngc-accent)] mt-0.5" />
            <div className="space-y-4">
              <div>
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  Business
                </span>
                <br />
                <a
                  className="font-semibold text-[var(--ngc-text-primary)] hover:underline"
                  href={`mailto:${SITE_EMAILS.business}`}
                >
                  {SITE_EMAILS.business}
                </a>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  Careers
                </span>
                <br />
                <a
                  className="font-semibold text-[var(--ngc-text-primary)] hover:underline"
                  href={`mailto:${SITE_EMAILS.careers}`}
                >
                  {SITE_EMAILS.careers}
                </a>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  Creative collaborations
                </span>
                <br />
                <a
                  className="font-semibold text-[var(--ngc-text-primary)] hover:underline"
                  href={`mailto:${SITE_EMAILS.creativeCollaborations}`}
                >
                  {SITE_EMAILS.creativeCollaborations}
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="social" className="max-w-3xl mx-auto mt-12 space-y-4 text-center md:text-left">
          <h2 className="type-subheading">Social</h2>
          <p className="type-body text-justify text-[var(--ngc-text-secondary)]">
            Official social URLs can be configured for production (environment
            variables). Until then, email{" "}
            <a
              className="font-semibold text-[var(--ngc-accent)] hover:underline"
              href={`mailto:${SITE_EMAILS.creativeCollaborations}`}
            >
              {SITE_EMAILS.creativeCollaborations}
            </a>{" "}
            for links and updates.
          </p>
        </section>
      </PageSection>
    </div>
  );
}
