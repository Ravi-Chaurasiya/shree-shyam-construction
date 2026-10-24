import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-construction-site.jpg";
import siteTeam from "@/assets/site-team-planning.jpg";
import commercialOffice from "@/assets/project-commercial-office.jpg";
import residentialCommunity from "@/assets/project-residential-community.jpg";
import { services, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "Shree Shyam Construction | Construction & Management Consultants",
      "Trusted construction and project management consultants delivering residential, commercial and industrial projects on time and on budget.",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="home-hero relative overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="" width={1920} height={1088} className="hero-poster opacity-60" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={hero}
          className="hero-video opacity-60"
          aria-hidden="true"
        >
          <source src="/shree-shyam-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="home-hero-content relative mx-auto max-w-7xl px-6 py-32 pb-28 md:py-44 md:pb-44">
          <p className="hero-eyebrow text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Construction & Management Consultants
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] md:text-7xl">
            Shree Shyam
            <br />
            Construction<span className="text-primary">.</span>
          </h1>
          <div className="mt-8 flex flex-col gap-7 sm:max-w-3xl sm:flex-row sm:items-end sm:justify-start sm:gap-10">
            <p className="max-w-[22rem] text-lg leading-relaxed opacity-90">
              From the first survey to the final handover.
              <br />
              We build what lasts.
            </p>
            <Link
              to="/"
              hash="what-we-do"
              className="inline-flex min-h-14 w-fit shrink-0 items-center gap-4 bg-primary px-7 font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Explore our work
              <span aria-hidden="true" className="text-xl leading-none">
                ↗
              </span>
            </Link>
          </div>
        </div>
        <a
          href="#what-we-do"
          className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-3 text-sm font-semibold text-ink-foreground/90 transition hover:text-primary sm:bottom-8 sm:right-8"
        >
          Discover more
          <span aria-hidden="true" className="text-xl leading-none">
            ↓
          </span>
        </a>
      </section>

      <section className="border-b bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            ["15+", "Years Experience"],
            ["250+", "Projects Completed"],
            ["120+", "Happy Clients"],
            ["50+", "Engineers & Staff"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-4xl">{v}</p>
              <p className="text-sm font-semibold uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="what-we-do"
        className="mx-auto grid max-w-7xl scroll-mt-28 gap-10 px-6 py-20 sm:gap-12 md:grid-cols-[0.9fr_1.7fr] md:gap-14 md:py-28"
      >
        <div className="flex items-start">
          <p className="flex items-center gap-4 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-7 bg-primary" aria-hidden="true" />
            01 / Our expertise
          </p>
        </div>
        <div>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10 sm:pb-12">
            <h2 className="max-w-xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Every detail.
              <br />
              Every stage.
            </h2>
            <Link
              to="/services"
              className="mb-1 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
            >
              All services <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div>
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.n}
                to="/services"
                className="group grid grid-cols-[2rem_minmax(0,1fr)_1rem] gap-4 border-b border-border py-7 sm:grid-cols-[2.5rem_minmax(0,1fr)_1rem] sm:gap-5 sm:py-8"
              >
                <span className="pt-1 text-sm text-muted-foreground">{service.n}</span>
                <span>
                  <span className="block font-display text-xl leading-tight transition-colors group-hover:text-primary sm:text-2xl">
                    {service.t}
                  </span>
                  <span className="mt-3 block max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {service.d}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="pt-0.5 text-lg leading-none text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="relative pb-8 pr-8">
            <img
              src={siteTeam}
              alt="Construction engineers reviewing project blueprints on site"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/4.2] w-full object-cover sm:aspect-[1/1]"
            />
            <div className="absolute bottom-0 left-0 max-w-[min(19rem,85%)] bg-primary px-6 py-5 text-primary-foreground sm:px-8 sm:py-6">
              <p className="font-display text-3xl">Built on trust.</p>
              <p className="mt-1 text-sm">Driven by quality.</p>
            </div>
          </div>
          <div className="lg:py-8">
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" aria-hidden="true" />
              02 / The way we work
            </p>
            <h2 className="mt-8 max-w-xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Engineering discipline.
              <br />
              <span className="text-primary">Honest management.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We bring technical expertise and hands-on site experience to every assignment —
              planning, managing and delivering with integrity.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Transparent costing and weekly progress reports",
                "Certified engineers on every site",
                "Strict quality and safety standards",
                "On-time delivery commitment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 text-lg leading-6 text-primary">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex min-h-12 items-center gap-3 border border-border bg-background px-6 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Meet Shree Shyam
              <span aria-hidden="true" className="text-lg leading-none">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" aria-hidden="true" />
              03 / Selected work
            </p>
            <h2 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              From vision to reality.
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mb-1 inline-flex items-center gap-3 font-semibold text-primary transition hover:gap-4"
          >
            View gallery{" "}
            <span aria-hidden="true" className="text-lg">
              ↗
            </span>
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-2 md:gap-10">
          {[
            { src: commercialOffice, category: "Commercial", title: "Corporate Office Complex" },
            {
              src: residentialCommunity,
              category: "Residential",
              title: "Gated Apartment Community",
            },
          ].map((project) => (
            <Link key={project.title} to="/gallery" className="group block min-w-0">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[1.45/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  <h3 className="mt-2 text-2xl transition-colors group-hover:text-primary sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-5 shrink-0 text-xl text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
