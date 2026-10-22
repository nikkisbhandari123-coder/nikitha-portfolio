import ProficiencyCard from "./ProficiencyCard";
import StackMarqueeCard from "./StackMarqueeCard";

/* Decorative, background-only pieces. All are aria-hidden and pointer-events-none. */

function Vine({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 320"
      fill="none"
      stroke="#C99B3E"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M200 10 C 120 60, 150 130, 90 180 S 40 270, 20 310" opacity="0.55" />
      <path d="M150 88 C 128 76, 112 80, 104 92 C 124 100, 142 98, 150 88 Z" opacity="0.5" />
      <path d="M112 150 C 136 146, 152 154, 158 168 C 136 172, 118 166, 112 150 Z" opacity="0.5" />
      <path d="M70 212 C 48 202, 32 206, 26 220 C 46 228, 64 224, 70 212 Z" opacity="0.5" />
      <path d="M48 270 C 68 266, 82 274, 86 286 C 66 288, 52 282, 48 270 Z" opacity="0.5" />
      <circle cx="200" cy="10" r="2.5" fill="#C99B3E" stroke="none" opacity="0.6" />
    </svg>
  );
}

function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C99B3E]/60" />
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="#C99B3E" fillOpacity="0.8">
        <path d="M8 0 L9.6 6.4 L16 8 L9.6 9.6 L8 16 L6.4 9.6 L0 8 L6.4 6.4 Z" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C99B3E]/60" />
    </div>
  );
}

function TechStack() {
  return (
    <section
      id="toolkit"
      className="relative overflow-hidden bg-[#F6EFE3] px-6 py-20 md:px-12 md:py-28"
    >
      {/* ---------- Background layers (decorative only) ---------- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* very faint colour washes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 92% 0%, rgba(118,45,60,0.07), transparent 70%), radial-gradient(50% 40% at 0% 100%, rgba(201,155,62,0.12), transparent 70%)",
          }}
        />

        {/* faint dotted pattern, fading out toward the edges */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,155,62,0.22) 1px, transparent 1.2px)",
            backgroundSize: "30px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 0%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 0%, transparent 75%)",
            opacity: 0.55,
          }}
        />

        {/* hairline gold rules at top and bottom of the section */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C99B3E]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C99B3E]/30 to-transparent" />

        {/* botanical vines in two corners (hidden on small screens) */}
        <Vine className="absolute -right-4 top-6 hidden h-72 w-auto md:block" />
        <Vine className="absolute -left-6 bottom-4 hidden h-60 w-auto rotate-180 md:block" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-brown-soft uppercase">
            03-Toolkit
          </p>
          <span
            className="h-px w-24 bg-gradient-to-r from-[#C99B3E]/60 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-brown md:text-6xl">
          My <span className="italic text-burgundy">tech stack.</span>
        </h2>

        <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-brown-soft">
          The languages, frameworks and tools I use to build software and
          intuitive digital experiences.
        </p>

        {/* Fine divider with ornament */}
        <div className="mt-8 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-[#3B281D]/20 via-[#C99B3E]/40 to-transparent" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[#C99B3E]/80" />
        </div>

        {/* Two-column layout (existing cards, unchanged) */}
        <div className="mt-10 grid items-start gap-10 md:mt-12 lg:grid-cols-[360px_1fr] lg:gap-12">
          {/* LEFT: animated marquee card */}
          <StackMarqueeCard />

          {/* RIGHT: proficiency card */}
          <ProficiencyCard />
        </div>

        {/* Closing ornament */}
        <Ornament className="mt-16 justify-center md:mt-20" />
      </div>

      {/* Floating sticker, bottom right of the screen */}
      <img
        src="/assets/stack.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed bottom-4 right-20 z-30 w-20 select-none md:w-28"
      />
    </section>
  );
}

export default TechStack;