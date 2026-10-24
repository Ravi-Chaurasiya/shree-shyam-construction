import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact | Shree Shyam Construction", "Get in touch with Shree Shyam Construction for a quote or consultation on your next project."),
  component: Contact,
});

const field = "w-full border bg-card px-4 py-3 outline-none focus:border-primary";
const contactDetails = [
  {
    label: "Office",
    value: "Mahalaxmi Garden, 1998/31, Part 2, Bajgera Road, Gurugram, Gurgaon, Haryana, 122001",
  },
  { label: "Phone", value: "+91 94167 79890", href: "tel:+919416779890" },
  {
    label: "Email",
    value: "info@shreeshyamconstruction.in",
    href: "mailto:info@shreeshyamconstruction.in",
  },
  { label: "Hours", value: "Mon – Sat, 9:30 AM – 6:30 PM" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something together">Tell us about your project and we'll respond within one business day.</PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
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
        {sent ? (
          <div className="grid place-items-center bg-ink p-12 text-center text-ink-foreground">
            <div><p className="font-display text-3xl text-primary">Thank you!</p><p className="mt-3">We've received your message and will be in touch soon.</p></div>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className={field} />
            <input required type="tel" placeholder="Phone" className={field} />
            <input required type="email" placeholder="Email" className={`${field} sm:col-span-2`} />
            <select className={`${field} sm:col-span-2`} defaultValue="">
              <option value="" disabled>Service required</option>
              <option>Civil Construction</option><option>Project Management</option><option>Consultancy</option><option>Other</option>
            </select>
            <textarea required rows={5} placeholder="Tell us about your project" className={`${field} sm:col-span-2`} />
            <button className="bg-primary px-7 py-4 font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110 sm:col-span-2">Send Message</button>
          </form>
        )}
      </section>
    </>
  );
}
