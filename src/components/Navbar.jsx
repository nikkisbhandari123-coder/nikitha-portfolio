import { useEffect, useState } from "react";

// The six main sections, in order. Each "id" should match the
// id attribute you give that section once you build it out,
// e.g. <section id="journey"> inside Education.jsx.
const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "toolkit", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeId, setActiveId] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Scroll-spy: watch which section is on screen and highlight
  // the matching nav link. Sections that don't exist yet are simply
  // skipped, so this won't crash before you've built them.
  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // --- Prevent background scrolling while the mobile thread-menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-brown/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Restrained wordmark, no logo mark */}
        <a href="#home" className="font-display text-lg tracking-[0.2em] text-brown">
          NIKITHA
        </a>

        {/* ---------- Desktop: the horizontal thread ---------- */}
        <div className="relative hidden md:block">
          {/* imperfect botanical thread, drawn once, running behind the nodes */}
          <svg
            className="pointer-events-none absolute left-0 top-[27px] h-3 w-full text-brown/20"
            viewBox="0 0 600 12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,6 C50,1 90,10 150,5 C210,1 250,10 310,5 C370,1 410,9 470,4 C510,2 550,8 600,5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          <ul className="relative flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="group flex flex-col items-center px-4 py-1">
                    <span
                      className={`text-sm tracking-wide transition-colors duration-300 ${
                        isActive ? "font-medium text-gold" : "text-brown-soft group-hover:text-brown"
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* leaf-like node marking this point on the thread */}
                    <span
                      className={`mt-2 rounded-full transition-all duration-300 ${
                        isActive ? "h-1.5 w-1.5 bg-gold" : "h-1 w-1 bg-brown/30 group-hover:bg-brown/60"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ---------- Mobile menu toggle (hamburger → X) ---------- */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-5 bg-brown transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-brown transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ---------- Mobile: the vertical thread ---------- */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-brown/10 bg-cream/98 backdrop-blur-md md:hidden">
          <ul className="relative flex flex-col gap-6 px-10 py-10">
            {/* vertical thread connecting each link */}
            <div className="absolute left-[46px] top-10 bottom-10 w-px bg-brown/15" />

            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id} className="relative flex items-center gap-4">
                                 <span
                                 
                    className={`relative z-10 rounded-full transition-all duration-300 ${
                      isActive ? "h-2 w-2 bg-gold" : "h-1.5 w-1.5 bg-brown/30"
                    }`}
                  />
                  <a
                  
                    href={`#${link.id}`}
                    onClick={closeMobileMenu}
                    className={`font-display text-xl transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-brown"
                    }`}
                    >
                  
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;