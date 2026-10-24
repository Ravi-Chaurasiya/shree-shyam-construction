import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site";

const clients = ["Rajasthan Housing Board", "Agarwal Developers", "Shree Cements", "Sunrise Hospitals", "Metro Infra Ltd.", "Jaipur Development Authority", "Kothari Textiles", "Green Valley Schools"];
const reviews = [
  { q: "Completed our office block two weeks ahead of schedule with excellent finish quality.", n: "R. Sharma, Agarwal Developers" },
  { q: "Their project management and cost reporting gave us complete peace of mind.", n: "Dr. P. Mehta, Sunrise Hospitals" },
];

export const Route = createFileRoute("/clients")({
  head: () => meta("Our Clients | Shri Shyam Construction", "Trusted by developers, institutions and government bodies across the region."),
  component: () => (
    <>
      <PageHero eyebrow="Clients" title="Trusted by builders, businesses & institutions" />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-px border bg-border md:grid-cols-4">
          {clients.map((c) => (
            <div key={c} className="grid h-32 place-items-center bg-card p-4 text-center font-display text-muted-foreground transition-colors hover:text-primary">{c}</div>
          ))}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <blockquote key={r.n} className="bg-ink p-10 text-ink-foreground">
              <p className="font-display text-5xl text-primary">"</p>
              <p className="text-lg">{r.q}</p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">— {r.n}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  ),
});
