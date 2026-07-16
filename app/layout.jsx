import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

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
          href="https://wa.me/971521084524"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full shadow-card-lg px-4 py-4 flex items-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined filled text-2xl">chat</span>
          <span className="hidden sm:inline font-body font-bold text-sm pr-1">WhatsApp</span>
        </a>
        <a
          href="tel:+971521084524"
          aria-label="Call us"
          className="fixed bottom-6 right-24 sm:right-44 z-50 bg-accent hover:bg-[#c1181f] text-white rounded-full shadow-card-lg w-14 h-14 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined filled text-2xl">call</span>
        </a>
      </body>
    </html>
  );
}
