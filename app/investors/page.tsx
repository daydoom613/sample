import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import InvestorsForm from "@/components/investors/InvestorsForm";

export const metadata: Metadata = {
  title: "Investors & Partners",
  description:
    "Express interest in partnering, investing, or developing IP with Nature Guru Creations.",
};

export default function InvestorsPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="Expression of interest"
        title={ngcBrandLeadingText(
          "Partner. Invest. Create. Collaborate.",
        )}
        image={{
          src: "/ngcOrg.avif",
          alt: "Nature Guru Creations — partnerships and investment",
          priority: true,
        }}
      >
        <p>
          Nature Guru Creations invites producers, investors, studios, and
          collaborators to express interest in partnering with us. Whether you
          want to co-produce, invest, or develop new IP, this is your gateway to
          joining our global creative network.
        </p>
      </PageIntro>

      <PageSection className="pb-24 pt-0">
        <InvestorsForm />
      </PageSection>
    </div>
  );
}
