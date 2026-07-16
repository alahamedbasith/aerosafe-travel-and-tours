import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import ContactForm from "./ContactForm";
import {
  HERO,
  ABOUT_IMG,
  MAPS_URL,
  aboutTexts,
  mission,
  vision,
  services,
  corporateTravel,
  whoWeServe,
  whyChoose,
  timeline,
  coreValues,
  achievements,
  testimonials,
  kajaSyed,
} from "../lib/data";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.75 1.69-1.54 1.12l-3.56-2.59a1 1 0 00-1.18 0l-3.56 2.59c-.78.57-1.83-.2-1.54-1.12l1.36-4.18a1 1 0 00-.36-1.12L1.4 11.61c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69L9.05 2.93z" />
        </svg>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${HERO.image}')` }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
          {HERO.eyebrow}
        </p>
        <h1
          className="mx-auto max-w-4xl font-montserrat font-extrabold leading-tight"
          style={{ fontSize: "clamp(1.5rem, 5.5vh, 3.5rem)" }}
        >
          {HERO.heading}
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-white/90"
          style={{ fontSize: "clamp(1rem, 0.55rem + 1.1vw, 1.375rem)" }}
        >
          {HERO.subtext}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={HERO.primaryCta.href}
            className="rounded-full bg-[#1273E3] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0B5BB8]"
          >
            {HERO.primaryCta.label}
          </Link>
          <Link
            href={HERO.secondaryCta.href}
            className="rounded-full border border-white/70 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            {HERO.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading eyebrow="Welcome" title="Who We Are" align="left" />
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{aboutTexts.welcome}</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{aboutTexts.whoWeAre}</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{aboutTexts.commitment}</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#1273E3]/10 to-[#CC1B36]/10 blur-2xl" />
          <img
            src={ABOUT_IMG}
            alt="Aerosafe Travel team"
            className="w-full rounded-2xl shadow-xl"
          />
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-slate-50 p-4 text-center shadow-sm">
              <Counter end={8} className="text-3xl font-bold text-[#1273E3]" />
              <p className="mt-1 text-sm text-slate-500">Years</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-center shadow-sm">
              <Counter end={5000} suffix="+" className="text-3xl font-bold text-[#1273E3]" />
              <p className="mt-1 text-sm text-slate-500">Travelers</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-center shadow-sm">
              <Counter end={40} className="text-3xl font-bold text-[#1273E3]" />
              <p className="mt-1 text-sm text-slate-500">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#042B71] py-24 text-white">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1273E3]/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#CC1B36]/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-md">
          <h3 className="font-montserrat text-2xl font-bold">Our Mission</h3>
          <p className="mt-4 text-lg leading-relaxed text-white/80">{mission}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-md">
          <h3 className="font-montserrat text-2xl font-bold">Our Vision</h3>
          <p className="mt-4 text-lg leading-relaxed text-white/80">{vision}</p>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ condensed = false } = {}) {
  const items = condensed ? services.slice(0, 3) : services;
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What We Do" title="Our Services" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{s.icon}</div>
              <h3 className="font-montserrat text-xl font-bold text-[#042B71]">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
        {condensed && (
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full bg-[#1273E3] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0B5BB8]"
            >
              View all Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function CorporateTravelSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="For Businesses" title="Corporate Travel Management" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          End-to-end travel programs built for companies that need control, clarity, and care.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {corporateTravel.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-3xl">{c.icon}</div>
              <h3 className="font-montserrat text-lg font-bold text-[#042B71]">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoWeServeSection({ condensed = false } = {}) {
  const items = condensed ? whoWeServe.slice(0, 2) : whoWeServe;
  const gradients = [
    "linear-gradient(135deg,#1273E3,#042B71)",
    "linear-gradient(135deg,#CC1B36,#042B71)",
    "linear-gradient(135deg,#1B7CF2,#042B71)",
    "linear-gradient(135deg,#0B5BB8,#1273E3)",
  ];
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Who We Serve" title="Travelers We Support" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((w, i) => (
            <div
              key={w.title}
              className="group relative h-72 overflow-hidden rounded-2xl shadow-md"
              style={{ background: gradients[i % gradients.length] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-montserrat text-2xl font-bold">{w.title}</h3>
                <p className="mt-1 text-sm text-white/85">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {condensed && (
          <div className="mt-10 text-center">
            <Link
              href="/who-we-serve"
              className="inline-block rounded-full bg-[#1273E3] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0B5BB8]"
            >
              See who we serve →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Aerosafe" title="Why Choose Us" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{w.icon}</div>
              <h3 className="font-montserrat text-xl font-bold text-[#042B71]">{w.title}</h3>
              <p className="mt-2 text-slate-600">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection({ condensed = false } = {}) {
  const items = condensed ? timeline.slice(0, 4) : timeline;
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Our Story" title="The Aerosafe Journey" />
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-[#1273E3]/20 md:left-1/2" />
          <div className="space-y-10">
            {items.map((t, i) => (
              <div
                key={t.year}
                className={`relative pl-12 md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-0 md:pr-12 md:pl-0 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className={`absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-white bg-[#1273E3] shadow md:left-auto ${
                    i % 2 === 0 ? "md:-right-4" : "md:-left-4"
                  }`}
                />
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="font-montserrat text-lg font-bold text-[#CC1B36]">{t.year}</span>
                  <h3 className="mt-1 font-montserrat text-xl font-bold text-[#042B71]">{t.title}</h3>
                  <p className="mt-2 text-slate-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {condensed && (
          <div className="mt-10 text-center">
            <Link
              href="/journey"
              className="inline-block rounded-full bg-[#1273E3] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0B5BB8]"
            >
              Read our full journey →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function LeadershipSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading eyebrow="Leadership" title="Meet the Founder" />
        <div className="mt-10 flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#1273E3] to-[#042B71] text-3xl font-bold text-white shadow-lg">
            {kajaSyed.initials}
          </div>
          <h3 className="mt-5 font-montserrat text-2xl font-bold text-[#042B71]">{kajaSyed.name}</h3>
          <p className="text-[#CC1B36] font-semibold">{kajaSyed.title}</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{kajaSyed.message}</p>
        </div>
      </div>
    </section>
  );
}

export function CoreValuesSection() {
  return (
    <section className="bg-[#042B71] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What Drives Us" title="Our Core Values" light />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-md"
            >
              <div className="mb-3 text-4xl">{v.icon}</div>
              <h3 className="font-montserrat text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-white/75">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {achievements.map((a) => (
          <div key={a.label} className="text-center">
            <Counter
              end={a.value}
              suffix={a.label.includes("Support") ? "/7" : a.label === "Happy Travelers" ? "+" : ""}
              className="text-4xl font-bold text-[#1273E3]"
            />
            <p className="mt-2 text-slate-600">{a.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection({ condensed = false } = {}) {
  const items = condensed ? testimonials.slice(0, 3) : testimonials;
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <Stars count={5} />
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-5">
                <p className="font-semibold text-[#042B71]">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        {condensed && (
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-block rounded-full bg-[#1273E3] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0B5BB8]"
            >
              Read more reviews →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="lg:flex lg:flex-col">
          <SectionHeading eyebrow="Get in Touch" title="Contact Us" light align="left" />
          <p className="mt-6 text-lg text-white/80">
            Ready to plan your next trip or set up a corporate travel program? Reach out and our team
            will get back to you quickly.
          </p>
          <div className="mt-8 space-y-4 text-white/90">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:support@aerosafetravel.com" className="underline">
                support@aerosafetravel.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone / WhatsApp:</span> +91 99440 87106
            </p>
            <p>
              <span className="font-semibold">Office:</span> Chennai, Tamil Nadu, India
            </p>
          </div>
          <div className="mt-8 lg:flex-1">
            <iframe
              title="Aerosafe Travel location"
              src={MAPS_URL}
              className="h-64 w-full rounded-2xl border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function ClosingBanner() {
  return (
    <section className="bg-gradient-to-r from-[#042B71] to-[#1273E3] py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-montserrat text-3xl font-bold md:text-4xl">
          Your Journey, Our Priority
        </h2>
        <p className="mt-4 text-lg text-white/85">
          Wherever you are headed, Aerosafe Travel & Tourism is here to make the path clear, safe,
          and memorable.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#042B71] shadow-lg transition hover:bg-slate-100"
        >
          Start Planning
        </Link>
      </div>
    </section>
  );
}
