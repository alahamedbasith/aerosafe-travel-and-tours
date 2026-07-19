import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-navy/85"></div>
      <div className="relative max-w-container mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-xl p-2">
              <img
                src="/logo.png"
                alt="Aerosafe Travel & Tourism"
                className="h-9 w-auto"
              />
            </div>
            <p className="font-body text-sm text-white/70 max-w-sm leading-relaxed">
              At Aerosafe, every journey is managed with precision and care. From a single executive trip to large-scale
              corporate travel programs, our goal is to deliver a smooth travel experience backed by responsive support
              and expert guidance.
            </p>
            <div className="pt-1">
              <p className="font-heading font-bold text-white text-base">Aerosafe Travel &amp; Tourism</p>
              <p className="font-body text-sm text-white/70">Your Trusted Corporate Travel Partner.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-body text-sm">
            <p className="font-heading font-bold uppercase tracking-widest text-white/50 mb-1 text-xs">Explore</p>
            <a className="text-white/80 hover:text-accent transition-colors w-fit" href="#about">
              About Us
            </a>
            <a className="text-white/80 hover:text-accent transition-colors w-fit" href="#services">
              Our Services
            </a>
            <a className="text-white/80 hover:text-accent transition-colors w-fit" href="#who-we-serve">
              Who We Serve
            </a>
            <a className="text-white/80 hover:text-accent transition-colors w-fit" href="#journey">
              Our Journey
            </a>
          </div>

          <div className="flex flex-col gap-3 font-body text-sm">
            <p className="font-heading font-bold uppercase tracking-widest text-white/50 mb-1 text-xs">Get in Touch</p>
            <a className="text-white/80 hover:text-accent transition-colors w-fit" href="mailto:support@aerosafetravel.com">
              support@aerosafetravel.com
            </a>
            <a className="text-white/80 hover:text-accent transition-colors w-fit" href="tel:+919944087106">
              +91 99440 87106
            </a>
            <a className="text-white/80 hover:text-accent transition-colors w-fit"               href="https://wa.me/919944087106">
              WhatsApp Support
            </a>
            <span className="text-white/60">www.aerosafetravel.com</span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 font-body text-xs text-white/50">
          © {new Date().getFullYear()} Aerosafe Travel &amp; Tourism. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
