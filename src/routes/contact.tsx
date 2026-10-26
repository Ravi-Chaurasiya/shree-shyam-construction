import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta, useScrollReveal } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact | Shree Shyam Contractor", "Get in touch with Shree Shyam Contractor for a quote or consultation on your next project."),
  component: Contact,
});

const field = "w-full border bg-card px-4 py-3 outline-none focus:border-primary";
const contactDetails = [
  {
    label: "Office",
    value: "Mahalaxmi Garden, 1998/31, Part 2, Bajgera Road, Gurugram, Gurgaon, Haryana, 122001",
  },
  { label: "Phone", value: "+91 88266 36375", href: "tel:+918826636375" },
  {
    label: "Email",
    value: "shreeshyam33@yahoo.com",
    href: "mailto:shreeshyam33@yahoo.com",
  },
];

function Contact() {
  useScrollReveal();

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something together">Tell us about your project and we'll respond within one business day.</PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div data-reveal className="space-y-8">
          {contactDetails.map(({ label, value, href }) => (
            <div key={label} className="border-l-4 border-primary pl-4">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {label}
              </p>
              {href ? (
                <a href={href} className="mt-1 inline-block text-lg font-semibold hover:text-primary">
                  {value}
                </a>
              ) : (
                <p className="mt-1 text-lg font-semibold">{value}</p>
              )}
            </div>
          ))}
        </div>
        <form
          data-reveal
          action="https://formsubmit.co/shreeshyam33@yahoo.com"
          method="POST"
          className="grid gap-4 sm:grid-cols-2"
        >
          <input type="hidden" name="_subject" value="New project enquiry" />
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />
          <input required name="name" autoComplete="name" placeholder="Full name" className={field} />
          <input required name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={field} />
          <input required name="email" type="email" autoComplete="email" placeholder="Email" className={`${field} sm:col-span-2`} />
          <select required name="service" className={`${field} sm:col-span-2`} defaultValue="">
            <option value="" disabled>Service required</option>
            <option value="Civil Construction">Civil Construction</option>
            <option value="Project Management">Project Management</option>
            <option value="Consultancy">Consultancy</option>
            <option value="Other">Other</option>
          </select>
          <textarea required name="message" rows={5} placeholder="Tell us about your project" className={`${field} sm:col-span-2`} />
          <button type="submit" className="bg-primary px-7 py-4 font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110 sm:col-span-2">Send Message</button>
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Your enquiry will be sent to shreeshyam33@yahoo.com.
          </p>
        </form>
      </section>
    </>
  );
}
