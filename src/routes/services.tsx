import { createFileRoute } from "@tanstack/react-router";
import { PageHero, services, meta } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => meta("Services | Shree Shyam Construction", "Civil construction, project management, consultancy, quantity surveying, interiors and quality audits."),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Complete construction & consultancy solutions">One partner for planning, building and managing your project.</PageHero>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-px border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="group bg-card p-10 transition-colors hover:bg-ink hover:text-ink-foreground">
              <p className="font-display text-4xl text-primary">{s.n}</p>
              <h3 className="mt-6 text-2xl">{s.t}</h3>
              <p className="mt-3 text-muted-foreground group-hover:text-ink-foreground/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  ),
});
