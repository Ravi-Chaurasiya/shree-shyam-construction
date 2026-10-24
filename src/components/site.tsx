import { Link } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

export function useScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const page = document.querySelector("main");
    if (!page) return;

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.08 },
    );
    page.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground">
      <div className="mx-auto grid min-h-[100px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 px-5 py-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-6 lg:px-10 lg:py-5">
        <Link to="/" className="group flex w-fit items-center gap-3">
          <span className="brand-mark grid h-10 w-10 place-items-center bg-primary font-sans text-lg font-bold text-primary-foreground">
            SS
          </span>
          <span className="font-sans text-lg font-bold leading-tight">
            SHREE SHYAM
            <br />
            <span className="text-xs tracking-[0.3em] text-primary">CONSTRUCTION</span>
          </span>
        </Link>
        <nav className="col-span-2 row-start-2 flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-0 pb-1 text-xs font-semibold tracking-wide sm:gap-x-6 sm:text-sm lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex-nowrap lg:gap-x-4 lg:pb-0 xl:gap-x-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="nav-link relative whitespace-nowrap py-2 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="col-start-2 row-start-1 inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-5 font-bold text-primary-foreground transition hover:brightness-110 sm:px-7 lg:col-start-3 lg:justify-self-end"
        >
          Let&apos;s talk
          <span aria-hidden="true" className="text-lg leading-none">
            ↗
          </span>
        </Link>
      </div>
      <div className="hazard h-1.5" aria-hidden="true" />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-8 border-b border-ink-foreground/20 pb-10 sm:flex-row sm:items-center sm:pb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Your next chapter
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A strong start. A lasting result.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-14 w-fit shrink-0 items-center gap-4 bg-primary px-7 font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Discuss your project
            <span aria-hidden="true" className="text-lg leading-none">
              ↗
            </span>
          </Link>
        </div>
        <div className="grid gap-10 border-b border-ink-foreground/20 py-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-12 lg:py-12">
          <div>
            <p className="font-sans text-xl font-bold">SHREE SHYAM CONSTRUCTION</p>
            <p className="mt-4 text-ink-foreground/70">
              Construction &amp; management consultants.
              <br />
              Built on trust. Driven by quality.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="w-fit text-ink-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <address className="not-italic leading-7 text-ink-foreground/80">
            <p>MAHALAXMI GARDEN, 1998/31, PART 2, BAJGERA ROAD, GURUGRAM, Gurgaon, Haryana, 122001</p>
            <a className="block transition-colors hover:text-primary" href="tel:+919416779890">
              +91 94167 79890
            </a>
            <a
              className="block break-words transition-colors hover:text-primary"
              href="mailto:info@shreeshyamconstruction.in"
            >
              info@shreeshyamconstruction.in
            </a>
          </address>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-sm text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shree Shyam Construction</p>
          <p>Construction. Consultancy. Confidence.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p data-reveal className="text-sm font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 data-reveal className="mt-3 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        {children && <p data-reveal className="mt-5 max-w-2xl text-lg text-muted-foreground">{children}</p>}
      </div>
    </section>
  );
}

export const services = [
  {
    n: "01",
    t: "Civil Construction",
    d: "Residential, commercial and industrial buildings delivered with structural precision.",
  },
  {
    n: "02",
    t: "Project Management",
    d: "End-to-end planning, scheduling, cost control and site supervision.",
  },
  {
    n: "03",
    t: "Construction Consultancy",
    d: "Feasibility studies, design review, tendering and contract advisory.",
  },
  {
    n: "04",
    t: "Quantity Surveying",
    d: "Accurate estimates, BOQs and billing audits to protect your budget.",
  },
  {
    n: "05",
    t: "Interior & Renovation",
    d: "Turnkey fit-outs and refurbishments for homes and offices.",
  },
  {
    n: "06",
    t: "Quality & Safety Audits",
    d: "Independent inspections ensuring code compliance and site safety.",
  },
];

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
