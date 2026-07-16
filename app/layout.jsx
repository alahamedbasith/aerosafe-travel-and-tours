import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ChatWidget from "../components/ChatWidget";

export const metadata = {
  title: "Aerosafe Travel & Tourism",
  description:
    "Your comprehensive partner for flights, hotels, and international visa services. B2B and B2C travel solutions from Dubai & Chennai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />

        {/* Floating WhatsApp / click-to-call */}
        <a
          href="https://wa.me/919944087106"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full shadow-card-lg w-14 h-14 flex items-center justify-center transition-colors"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7" aria-hidden="true">
            <path d="M16.003 4.07c-6.64 0-12.01 5.37-12.01 12.01 0 2.12.56 4.19 1.62 6.01L4.07 28.13l5.93-1.55c1.75.95 3.73 1.45 5.99 1.45h.003c6.64 0 12.01-5.37 12.01-12.01 0-6.64-5.37-12.01-12.01-12.01zm0 21.86h-.004c-1.87 0-3.71-.5-5.33-1.45l-.38-.23-3.51.92.94-3.42-.25-.39c-1.05-1.67-1.6-3.6-1.6-5.58 0-5.83 4.74-10.57 10.57-10.57 5.83 0 10.57 4.74 10.57 10.57 0 5.83-4.74 10.57-10.57 10.57zm5.8-7.93c-.31-.16-1.86-1.04-2.15-1.16-.29-.12-.5-.16-.71.16-.21.31-.81 1.04-1 1.25-.18.21-.37.24-.69.08-.31-.16-1.32-.49-2.52-1.57-.93-.84-1.56-1.88-1.74-2.19-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.56.16-.19.21-.33.31-.55.1-.21.05-.42-.03-.58-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.42-.29.33-1.11 1.09-1.11 2.64 0 1.56 1.14 3.06 1.3 3.27.16.21 2.24 3.42 5.42 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.86-.76 2.13-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37z" />
          </svg>
        </a>
        <a
          href="tel:+919944087106"
          aria-label="Call us"
          className="fixed bottom-6 right-24 z-50 bg-accent hover:bg-[#c1181f] text-white rounded-full shadow-card-lg w-14 h-14 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined filled text-2xl">call</span>
        </a>

        <ChatWidget />
      </body>
    </html>
  );
}
