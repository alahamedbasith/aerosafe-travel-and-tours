import SectionHeading from "../components/SectionHeading";
import Counter from "../components/Counter";
import ContactForm from "../components/ContactForm";

const HERO = "/hero.jpg";
const ABOUT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEO0bfd0zwNVJSXMzXSZt8dFOdQ2yITpIa27WgN2gt6SmGast6aQzgxyqY7pk265YWPjDO9trIyRkkjB9CudFUzGyuSOuPZcUmfsymCmMj34H2DlDH-by5qflVVHhScB88-dl-_s8E3h-ENrMh5gjmC1ZgowJQvxZMWHdx5B2-c9kKIbv4lwoy4GkA9qjftFRSuCgomz36v6cPczZFuZv1bZZZIXYLo5MHVTRjcv9DVleIwUtD9fyn";
const MAPS_URL =
  "https://www.google.com/maps/place/4,+34th+St,+Ponnambalam+Colony,+Sector+7,+Ashok+Nagar,+Chennai,+Greater+Chennai,+Tamil+Nadu+600078,+India/@13.0378765,80.1983426,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5266d761316d91:0x6434afc96265a616!8m2!3d13.0378765!4d80.1983426!16s%2Fg%2F11w1fpptg9?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D";

const services = [
  { icon: "flight", title: "Air Ticket Booking", body: "Domestic and international flight bookings across all major airlines with competitive fares." },
  { icon: "apartment", title: "Hotel Reservations", body: "Worldwide hotel bookings for business and leisure travelers at competitive rates." },
  { icon: "description", title: "International Visa Assistance", body: "Tourist, Business and Visit Visa processing with professional guidance." },
  { icon: "shield", title: "Travel Insurance", body: "Comprehensive travel insurance plans for international and domestic travel." },
  { icon: "airport_shuttle", title: "Airport Transfer", body: "Reliable airport pickup and drop services with professional drivers." },
  { icon: "explore", title: "Holiday Packages", body: "Customized domestic and international holiday packages for families, groups and corporate travelers." },
];

const whoWeServe = [
  {
    icon: "business_center",
    title: "Corporate Clients",
    body: "Business travel management",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcEHV4WyRsi5UAEQfvst8y22dlH2TiX0Xgbd0f53gwx-l9NmZLaakuQ6-lKeWgemEPyWM7R5_ZjsxTXILK2NMNUW3nfVKI5WPlQ4Ha5zhpMkT_5rtVvlcU6Ts4ZQmXdftkGGBKpoxnTS_nyQRVWDoOR3oNsXyWl50JOfeEZBq4RGhCl8LsFNl87Zh1K-fbIdnkxoV5Ba64I4DLIgmivj5tPSCF6NmAgG-msh_8ocAX0JZK4zHenil-",
  },
  {
    icon: "hub",
    title: "Travel Agencies",
    body: "Wholesale solutions and distribution",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPVH_pOMo8NehWs-glhirNuK4oe-9L060G7g5Ul4vwjLYc9lnu-YV4j6s3EvYce6pMef9Fjdsrt2T-kJS6nY3cXDLl-DxmHK5klUTNQT7ztIgKqFgq1c3yjXkIdIu69TqqeYXVHQd71klU7yykcxPBYuDsoILCFRQu40IGqmH4phQuBx-UMBI9JX4Mj2WENX1IP_GiF0bUey4PiZoZDs9ncTQgWnflH7zVD-3aDcMpkUzGmo1WuBy8",
  },
  {
    icon: "tour",
    title: "Tour Operators",
    body: "Reliable partner support for packages, flights, hotels, and visas.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCitoUEuwsb7cEfHNHfL-qLcdMJHzMdCt79cJ5E5jUP49G8kLXZcSiDGP_BGWVfIKKF05wr38ScPdZ6CCk8xWtL0s8JcsqYoSnhBjvApfSvqp6K24N_Pr_Ncfk9uFNI7VMRFN8qFy7RlcROq_hEj-OQYYRUjCw-uja_j9TMbtpX4mHIzV8tODrCiGaic-cxantGEWtxgDIDfz8BDi6k7fSL7DlnOOC3QKOU9ANMKgzwfVJS_sU5xyhg",
  },
  {
    icon: "person",
    title: "Retail Clients",
    body: "Tailored packages and VIP support",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRgNCvDZncBPqtDb9cITAIq9ZR9QOwOKPPF5LvKOzNVf0FAokVRn0dZcnTNbXIEUSJ5FfE29uMRVCoBSg28BxjBogckC2HaH9Dwuk4OuQPHDazoREbyKzwr9jzpndGZLvtG1t491h_SL8Ur5jIKfAB77nBeLr5v4VN_S7-YfPCWGB5rXuK3gPsBJY7xqUymsY27u86Zsn8b-VOV46t57K37NAXjId9B8Hr8dLu_obS41ufrBaMj1E_",
  },
];

const whyChoose = [
  {
    n: "01",
    title: "Direct Global Partnerships",
    body: "We work directly with airlines, hotels, and service providers to secure the best rates and priority services for our clients.",
  },
  {
    n: "02",
    title: "Smart Technology",
    body: "Our advanced B2B portal simplifies travel management, providing instant access to bookings, insights, and tailored solutions.",
  },
  {
    n: "03",
    title: "B2B + B2C Expertise",
    body: "Whether you're a corporate client, travel agency, freelancer, or individual traveler, our services adapt to your unique needs.",
  },
  {
    n: "04",
    title: "Personalized Service",
    body: "From VIP concierge-style assistance to seamless visa approvals, we focus on making every journey effortless.",
  },
  {
    n: "05",
    title: "Proven Track Record",
    body: "With 10,000+ satisfied travelers and growing, we are trusted by businesses and individuals alike.",
  },
  {
    n: "06",
    title: "Future-Ready Vision",
    body: "Investing in AI-driven tools, mobile apps, and regional offices, shaping the future of travel today.",
  },
];

const timeline = [
  { year: "2017", title: "Inception", body: "Launched operations in India with air ticketing and visa services, laying the foundation of Aerosafe's vision.", future: false },
  { year: "2019", title: "Regional Expansion", body: "Extended operations into Dubai, tapping into new markets and customer segments.", future: false },
  { year: "2021", title: "Corporate Collaborations", body: "Began serving corporate clients with tailored travel management solutions.", future: false },
  { year: "2023", title: "Diversified Services", body: "Introduced business setup support, freelancer visa services, and tour packages across multiple destinations.", future: false },
  { year: "2025", title: "Local Partnerships", body: "Expanding B2B portal with 300+ trusted local partners to strengthen distribution.", future: true },
  { year: "2026", title: "Smart Technology", body: "Integrating AI-powered booking insights into the portal to enhance decision-making and efficiency.", future: true },
  { year: "2027", title: "Global Alliances", body: "Establishing strategic partnerships with additional international carriers for better connectivity.", future: true },
  { year: "2028", title: "Regional Presence & Innovation", body: "Opening support offices in GCC and Asia, launching the Aerosafe mobile app.", future: true },
];

const coreValues = [
  { icon: "verified_user", title: "Integrity", body: "We conduct business with honesty, transparency, and professionalism." },
  { icon: "workspace_premium", title: "Excellence", body: "We continuously improve our services to exceed customer expectations." },
  { icon: "shield", title: "Reliability", body: "We deliver dependable travel solutions with attention to every detail." },
  { icon: "favorite", title: "Customer Satisfaction", body: "Our customers are at the heart of everything we do." },
  { icon: "lightbulb", title: "Innovation", body: "We embrace technology and modern travel solutions to enhance customer experiences." },
];

const achievements = [
  "Partnered with leading airlines and hotel groups.",
  "Successfully served 18,000+ travelers worldwide.",
  "Recognized by clients for fast visa processing.",
  "Expanded into a B2B online travel distribution portal.",
];

const testimonials = [
  { name: "Anitha Joseph", time: "2 months ago", text: "Praised assistance getting Schengen Visas: smooth process and timely guidance." },
  { name: "Rizwan Ghouse", time: "3 months ago", text: "Holiday turned into an unforgettable adventure; seamless itinerary, VIP-level guidance." },
  { name: "Syed Mohamed", time: "4 months ago", text: "One-week Dubai & Abu Dhabi family trip; tickets, airport pickups, hotels, itineraries all arranged beyond expectations." },
  { name: "Yogesh Max", time: "5 months ago", text: "Honeymoon to Dubai; service spectacular and safe, great support from airport pickup to drop-off." },
  { name: "HESAA", time: "6 months ago", text: "Best in class, no latency, no issues, no complaints. Pure service." },
  { name: "Abhinav Raj", time: "7 months ago", text: "Helped get to the airport during a Dubai storm/flooding despite road water-logging; praised for going above and beyond." },
  { name: "Sadiq Mams", time: "8 months ago", text: "Family of 5 from Uganda/East Africa spent 4 unforgettable days in Dubai; service exceptionally good, always welcoming." },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="material-symbols-outlined filled text-lg">
          star
        </span>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* ============ HERO ============ */}
      <section className="relative bg-black text-white overflow-hidden min-h-[100dvh] flex items-center">
        <div className="absolute inset-0">
          <img src={HERO} alt="An airplane parked on the airport tarmac" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        {/* aurora brand shapes */}
        <div className="aurora w-96 h-96 bottom-0 right-10 bg-accent/30"></div>

        <div className="relative z-10 w-full max-w-container mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7">
            <p className="font-body font-bold uppercase tracking-[0.25em] text-gradient mb-5 text-sm">
              Aerosafe Travel &amp; Tourism
            </p>
            <h1 className="font-heading font-extrabold uppercase leading-[1.05] text-4xl md:text-6xl mb-6">
              Your comprehensive partner for flights, hotels, and international visa services.
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl mb-9">
              A Dubai-based B2B and B2C travel solutions company — combining technology and hospitality to make travel
              smarter, simpler, and more meaningful.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-accent text-white font-body font-bold px-8 py-4 rounded-xl hover:bg-[#c1181f] transition-colors flex items-center gap-2"
              >
                Get in Touch
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a
                href="#services"
                className="bg-white/10 text-white font-body font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/30"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
        {/* angled bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,80 L1440,0 L1440,80 Z"></path>
          </svg>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Welcome" title="Aerosafe Travel & Tourism" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 space-y-6">
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                Aerosafe Travel &amp; Tourism is a Dubai-based travel solutions company specializing in B2B and B2C
                travel services, with a strong focus on innovation, cost efficiency, and service excellence — a trusted
                partner for corporates, travel agencies, freelancers, and frequent travelers across the globe. From our
                beginnings in India to our operations in the UAE, we have grown into a global travel partner trusted by
                clients worldwide.
              </p>
              <h3 className="font-heading font-bold uppercase text-navy text-xl">Who We Are</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                We are a team of passionate travel professionals dedicated to making every journey smooth, safe, and
                memorable. What sets us apart is our fusion of technology and hospitality — through an advanced B2B online
                portal and personalized VIP-style B2C services — delivering reliable travel solutions with attention to
                every detail.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent z-0"></div>
              <img src={ABOUT_IMG} alt="Minimalist corporate office overlooking an airport tarmac" className="w-full h-auto object-cover relative z-10 shadow-card" />
            </div>
          </div>

          {/* Stat counters */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: 13000, label: "B2B Ticket Bookings" },
              { v: 4500, label: "Tourist Visas" },
              { v: 430, label: "Hotel Bookings" },
              { v: 18000, label: "Happy Travellers" },
            ].map((s) => (
              <div key={s.label} className="bg-muted rounded-2xl p-5 md:p-8 text-center border-t-4 border-primary">
                <div className="font-heading font-extrabold text-2xl md:text-5xl mb-2 leading-none">
                  <Counter value={s.v} />
                </div>
                <p className="font-body font-semibold text-on-surface-variant text-xs md:text-sm uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-on-surface-variant text-center mt-8 max-w-3xl mx-auto">
            At Aerosafe, our commitment is to deliver travel services with honesty, professionalism, and care. We prioritize
            customer satisfaction by offering transparent pricing, timely support, and personalized solutions. Our goal is
            to make every travel experience safe, smooth, and memorable — building long-term trust with our clients.
          </p>
        </div>
      </section>

      {/* ============ VISION & MISSION ============ */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary rotate-12 opacity-30"></div>
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
              <h2 className="font-heading font-extrabold uppercase text-2xl mb-5 flex items-center gap-3">
                <span className="material-symbols-outlined text-accent filled">visibility</span> Vision
              </h2>
              <p className="font-body text-white/80 text-lg leading-relaxed">
                To be one of the most trusted and innovative travel solution providers in the UAE and globally,
                recognized for reliability, transparency, and customer-focused service.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
              <h2 className="font-heading font-extrabold uppercase text-2xl mb-5 flex items-center gap-3">
                <span className="material-symbols-outlined text-accent filled">flag</span> Mission
              </h2>
              <p className="font-body text-white/80 text-lg leading-relaxed">
                To provide seamless, reliable, and affordable travel solutions to individuals, businesses, and corporate
                clients by combining technology, expertise, and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-24 bg-muted">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Our Services" title="What We Offer" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-surface rounded-2xl p-8 shadow-card hover:-translate-y-1 transition-transform duration-300 border-t-4 border-primary">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-heading font-bold uppercase text-navy text-lg mb-2">{s.title}</h3>
                <p className="font-body text-on-surface-variant">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CORPORATE TRAVEL MANAGEMENT ============ */}
      <section className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="For Businesses" title="Corporate Travel Management" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {[
              "Corporate Air Ticket Booking",
              "Hotel & Accommodation Arrangements",
              "Business Visa Assistance",
              "Travel Insurance for Employees",
              "Airport Transfers & Transport",
              "Group & Conference Travel",
              "Customized Travel Policies & Reports",
              "24/7 Dedicated Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-muted rounded-2xl p-5 border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary filled text-2xl">check_circle</span>
                <p className="font-body text-on-surface-variant font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO WE SERVE ============ */}
      <section id="who-we-serve" className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Who We Serve" title="Built For Every Traveler" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoWeServe.map((w) => (
              <div key={w.title} className="group relative overflow-hidden rounded-2xl shadow-card h-72">
                <img src={w.img} alt={w.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined filled text-white">{w.icon}</span>
                  </div>
                  <h3 className="font-heading font-bold uppercase text-xl mb-1">{w.title}</h3>
                  <p className="font-body text-white/80 text-sm">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section id="why-choose" className="py-24 bg-muted">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Why Choose Aerosafe" title="More Than Just Price" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={item.n}
                className={
                  "bg-surface rounded-2xl p-8 shadow-card flex gap-5 border-l-4 " +
                  (i % 2 === 0 ? "border-primary" : "border-accent")
                }
              >
                <span className="font-heading font-extrabold text-4xl text-outline select-none">{item.n}</span>
                <div>
                  <h3 className="font-heading font-bold uppercase text-navy text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-on-surface-variant">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ JOURNEY & ROADMAP ============ */}
      <section id="journey" className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <SectionHeading kicker="Our Journey" title="Past, Present & The Road Ahead" centered />
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy/15 -translate-x-1/2"></div>
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className={"md:text-right mb-3 md:mb-0 " + (i % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12")}>
                    <div className={"block w-full md:inline-block rounded-2xl p-6 border shadow-card text-left md:text-right " + (t.future ? "bg-accent/10 border-accent/30" : "bg-muted border-outline")}>
                      <div className={"font-heading font-extrabold text-3xl mb-2 " + (t.future ? "text-accent" : "text-navy")}>
                        {t.year}
                      </div>
                      <h3 className="font-heading font-bold uppercase text-xl text-navy">{t.title}</h3>
                      <p className="font-body text-on-surface-variant text-base mt-2">{t.body}</p>
                    </div>
                  </div>
                  <div className={"hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-navy " + (t.future ? "bg-accent" : "bg-primary")}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Leadership" title="Messages From The Top" centered />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-muted rounded-2xl p-8 border-t-4 border-primary flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-primary text-white font-heading font-extrabold text-2xl flex items-center justify-center">KS</div>
                <div>
                  <h3 className="font-heading font-bold uppercase text-navy text-lg">Kaja Syed</h3>
                  <p className="font-body text-accent font-semibold text-sm uppercase tracking-wide">Founder &amp; CEO</p>
                </div>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Dear Stakeholders, at Aerosafe Travel &amp; Tourism, we believe travel is more than just moving from one
                place to another — it is about creating experiences, building connections, and shaping lasting memories.
                Since inception, we&apos;ve dedicated ourselves to empowering businesses and travelers alike with
                seamless, cost-effective, and innovative travel solutions. Our philosophy: combine technology with
                personalized service so every journey is safe, smooth, and meaningful. With strong industry partnerships,
                an advanced B2B platform, and a team committed to excellence, Aerosafe stands as a trusted name in travel.
                We&apos;re not stopping here — the future is about expansion, innovation, and global reach, continuously
                investing in smarter travel tools, digital platforms, and world-class partnerships. Together, we will
                continue to turn journeys into legacies.
              </p>
            </div>
            <div className="bg-muted rounded-2xl p-8 border-t-4 border-accent flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-accent text-white font-heading font-extrabold text-2xl flex items-center justify-center">M</div>
                <div>
                  <h3 className="font-heading font-bold uppercase text-navy text-lg">Mydeen</h3>
                  <p className="font-body text-accent font-semibold text-sm uppercase tracking-wide">Co-Founder &amp; MD</p>
                </div>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Dear Partners and Clients, at Aerosafe our journey began with a simple goal — to make travel smarter,
                easier, and more meaningful. What started with ticketing and visas has grown into a trusted global
                platform serving corporates, agencies, freelancers, and individual travelers. For me, Aerosafe is not
                just a business, it&apos;s a vision — where technology and hospitality work hand in hand to deliver
                experiences that build trust and create opportunities. Thank you for being part of this journey. Together,
                we are not just moving people, we are building a legacy in travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="py-24 bg-muted">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Core Values" title="What Drives Us" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((c) => (
              <div key={c.title} className="bg-surface rounded-2xl p-8 text-center shadow-card">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {c.icon}
                  </span>
                </div>
                <h3 className="font-heading font-bold uppercase text-navy text-lg mb-2">{c.title}</h3>
                <p className="font-body text-on-surface-variant">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACHIEVEMENTS ============ */}
      <section className="py-24 bg-muted">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Achievements" title="Milestones We're Proud Of" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((a) => (
              <div key={a} className="flex items-start gap-4 bg-surface border border-outline rounded-2xl p-7 shadow-card">
                <span className="material-symbols-outlined text-accent filled text-4xl flex-shrink-0">military_tech</span>
                <p className="font-body text-navy text-xl font-semibold leading-snug">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="testimonials" className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Testimonials" title="What Our Clients Say" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-muted rounded-2xl p-7 shadow-card flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <Stars />
                  <span className="font-body text-xs text-on-surface-variant uppercase tracking-wide">Google Review</span>
                </div>
                <p className="font-body text-on-surface italic flex-grow mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-outline">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body font-bold text-navy text-sm">{t.name}</p>
                    <p className="font-body text-xs text-on-surface-variant">{t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="py-24 bg-muted">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading kicker="Contact" title="Let's Plan Your Next Journey" centered />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Office info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy text-white rounded-2xl p-7">
                <h3 className="font-heading font-bold uppercase text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent filled">location_on</span> Corporate Office — Dubai, UAE
                </h3>
                <p className="font-body text-white/80 text-sm mb-4">
                  102 A Block, Auto Centre Building, Port Saeed, Dubai, UAE
                </p>
                <div className="space-y-2 font-body text-sm">
                  <p className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">mail</span> support@aerosafetravel.com</p>
                  <p className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">call</span> +971 52 108 4524 | +971 52 786 9060</p>
                </div>
              </div>
              <div className="bg-surface rounded-2xl p-7 shadow-card">
                <h3 className="font-heading font-bold uppercase text-lg mb-4 flex items-center gap-2 text-navy">
                  <span className="material-symbols-outlined text-accent filled">location_on</span> Head Office — Chennai, India
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-4">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    No 4, 34th Street, Ashok Nagar, Chennai - 600083
                  </a>
                </p>
                <div className="space-y-2 font-body text-sm text-on-surface-variant">
                  <p className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">mail</span> admin@aerosafetravel.com</p>
                  <p className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">call</span> +91 99440 87106 | +91 97900 93060</p>
                </div>
              </div>
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-card">
                <iframe
                  title="Aerosafe Head Office — Ashok Nagar, Chennai"
                  src="https://www.google.com/maps?q=13.0378765,80.1983426&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-navy/90 hover:bg-navy text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                >
                  View on Google Maps
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface rounded-2xl p-7 md:p-10 shadow-card">
                <h2 className="font-heading font-bold uppercase text-navy text-xl mb-6 border-b border-outline pb-4">
                  Professional Inquiry
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLOSING BANNER ============ */}
      <section className="py-20 bg-navy text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-sky to-accent opacity-20"></div>
        <div className="relative z-10 max-w-container mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-heading font-extrabold uppercase text-3xl md:text-5xl tracking-tight">
            Your Journey, Our Priority
          </h2>
          <p className="font-body text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Wherever you go, Aerosafe Travel &amp; Tourism is with you — making every trip safe, smooth, and memorable.
          </p>
        </div>
      </section>
    </div>
  );
}
