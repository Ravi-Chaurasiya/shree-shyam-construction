import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta, useScrollReveal } from "@/components/site";

const clients = [
  "Xavier Labour Relations Institute",
  "Royal Enfield",
  "AW10 Malibu Town",
  "Bhiwani Medical College",
  "IOCL",
  "AIIMS",
];

export const Route = createFileRoute("/clients")({
  head: () => meta("Our Clients | Shree Shyam Contractor", "Trusted by developers, institutions and government bodies across the region."),
  component: Clients,
});

function Clients() {
  useScrollReveal();

  return (
    <>
      <PageHero eyebrow="Clients" title="Trusted by builders, businesses & institutions" />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-px border bg-border md:grid-cols-3">
          {clients.map((c) => (
            <div key={c} data-reveal className="client-card grid h-32 place-items-center bg-card p-4 text-center font-display text-muted-foreground transition-colors hover:text-primary">{c}</div>
          ))}
        </div>
        <p className="mt-8 text-center font-display text-xl text-muted-foreground">
          Our client network extends beyond the organizations featured here.
        </p>
      </section>
    </>
  );
}
