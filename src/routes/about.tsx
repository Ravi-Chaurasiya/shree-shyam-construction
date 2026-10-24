import { createFileRoute } from "@tanstack/react-router";
import g2 from "@/assets/site-team-planning.jpg";
import { PageHero, meta, useScrollReveal } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About Us | Shree Shyam Construction",
      "Learn about Shree Shyam Construction — our story, mission and values as construction and management consultants.",
    ),
  component: About,
});

function About() {
  useScrollReveal();

  return (
    <>
      <PageHero eyebrow="About Us" title="Built on trust, driven by quality" />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div data-reveal className="space-y-5 text-lg text-muted-foreground">
          <p>
            Shree Shyam Construction is a construction and management consultancy firm committed to
            delivering projects that stand the test of time.
          </p>
          <p>
            Our team of civil engineers, project managers and surveyors brings technical expertise
            and hands-on site experience to every assignment — homes, commercial complexes,
            industrial sheds and public infrastructure.
          </p>
          <div className="grid gap-6 pt-6 sm:grid-cols-2">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl text-foreground">Mission</h3>
              <p className="mt-2 text-base">
                Deliver safe, durable and cost-effective structures with complete transparency.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl text-foreground">Vision</h3>
              <p className="mt-2 text-base">
                To be the most trusted construction partner in the region.
              </p>
            </div>
          </div>
        </div>
        <img
          src={g2}
          alt="Our engineering team on site"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover"
          data-reveal
        />
      </section>
    </>
  );
}
