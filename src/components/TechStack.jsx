import ProficiencyCard from "./ProficiencyCard";
import StackMarqueeCard from "./StackMarqueeCard";

function TechStack() {
  return (
    <section id="toolkit" className="bg-[#F6EFE3] px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-brown-soft uppercase">
            03-Toolkit
          </p>
        </div>

        <h2 className="mt-5 font-display text-5xl leading-[1.05] text-brown md:text-6xl">
          My <span className="italic text-burgundy">tech stack.</span>
        </h2>

        <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-brown-soft">
          The languages, frameworks and tools I use to build software and
          intuitive digital experiences.
        </p>

        {/* Two-column layout */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[360px_1fr] lg:gap-12">
          {/* LEFT: animated marquee card */}
          <StackMarqueeCard />

          {/* RIGHT: proficiency card */}
          <ProficiencyCard />
        </div>
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