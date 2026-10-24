import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-construction-site.jpg";
import commercialOffice from "@/assets/project-commercial-office.jpg";
import siteTeam from "@/assets/site-team-planning.jpg";
import residentialCommunity from "@/assets/project-residential-community.jpg";
import { PageHero, meta } from "@/components/site";

const items = [
  { src: hero, t: "High-Rise Residential Tower", c: "Under Construction", span: "md:col-span-2" },
  { src: commercialOffice, t: "Corporate Office Complex", c: "Commercial", span: "" },
  { src: residentialCommunity, t: "Gated Apartment Community", c: "Residential", span: "" },
  {
    src: siteTeam,
    t: "Site Planning & Supervision",
    c: "Project Management",
    span: "md:col-span-2",
  },
];

export const Route = createFileRoute("/gallery")({
  head: () =>
    meta(
      "Project Gallery | Shri Shyam Construction",
      "A look at residential, commercial and infrastructure projects built and managed by Shri Shyam Construction.",
    ),
  component: () => (
    <>
      <PageHero eyebrow="Gallery" title="Our work speaks for itself" />
      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-20 md:grid-cols-3">
        {items.map((i) => (
          <figure key={i.t} className={`group relative overflow-hidden bg-ink ${i.span}`}>
            <img
              src={i.src}
              alt={i.t}
              loading="lazy"
              className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-70"
            />
            <figcaption className="absolute bottom-0 left-0 bg-ink p-4 text-ink-foreground">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{i.c}</p>
              <p className="font-display">{i.t}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  ),
});
