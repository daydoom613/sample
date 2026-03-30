import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Shared inner width and padding for content below the intro (matches About Us section container). */
export default function PageSection({ children, className = "", id }: Props) {
  return (
    <section
      id={id}
      className={`py-24 px-6 max-w-7xl mx-auto ${className}`.trim()}
    >
      {children}
    </section>
  );
}
