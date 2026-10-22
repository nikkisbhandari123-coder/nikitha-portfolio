function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#E8D9B8] px-6 pt-28 pb-16 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* ---------- Left: text content ---------- */}
        <div>
          <div className="hero-reveal flex items-center gap-2" style={{ "--d": "0ms" }}>
            <span
              className="hero-dot-pulse h-1.5 w-1.5 rounded-full bg-gold"
              aria-hidden="true"
            />
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-brown-soft uppercase">
              01-HOME PAGE
            </p>
          </div>

          <h1 className="mt-5 font-display text-6xl leading-[1.05] text-brown md:text-7xl">
            <span className="hero-reveal block" style={{ "--d": "140ms" }}>
              Hi, I&apos;m
            </span>
            <span
              className="hero-reveal block italic text-burgundy"
              style={{ "--d": "300ms" }}
            >
              Nikitha.
            </span>
          </h1>

          <div
            className="hero-reveal mt-5 flex items-center gap-3"
            style={{ "--d": "460ms" }}
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <p className="font-sans text-sm text-brown-soft">CS Engineer</p>
          </div>

          <p
            className="hero-reveal mt-6 max-w-md font-sans text-base leading-relaxed text-brown-soft"
            style={{ "--d": "560ms" }}
          >
            Computer Science & Engineering Student
            Building software and intuitive digital experiences
          </p>

          {/* The reveal sits on the wrapper so it never fights the buttons' hover transforms */}
          <div
            className="hero-reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ "--d": "680ms" }}
          >
            <a
              href="#projects"
              className="btn-lift rounded-full bg-brown px-7 py-3 font-sans text-sm font-medium tracking-wide text-cream hover:bg-gold"
            >
              View Work <span className="btn-arrow" aria-hidden="true">→</span>
            </a>

            <a
              href="#contact"
              className="btn-lift rounded-full border border-brown/30 px-7 py-3 font-sans text-sm font-medium tracking-wide text-brown hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              Say Hello
            </a>
          </div>

          {/* Info / social row */}
          <div
            className="hero-reveal mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-brown/10 pt-6 font-sans text-sm text-brown-soft"
            style={{ "--d": "820ms" }}
          >
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-olive" aria-hidden="true" />
              B.Tech CSE · 2025–29
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-burgundy" aria-hidden="true" />
              Mumbai, India
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              Open to internships
            </span>

            <span className="ml-auto flex gap-2">
              <a
                href="https://github.com/nikkisbhandari123-coder"
                className="rounded-full border border-brown/20 px-4 py-1.5 tracking-wide uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nikitha-bhandari-b17a123a6"
                className="rounded-full border border-brown/20 px-4 py-1.5 tracking-wide uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="rounded-full border border-brown/20 px-4 py-1.5 tracking-wide uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Twitter
              </a>
            </span>
          </div>
        </div>
        {/* ---------- Right: illustration ---------- */}
        <div className="hidden items-center justify-center md:flex">
          <img
            src="/assets/hero-illustration.jpg"
            alt="Illustration of a developer working at a desk while a friendly assistant waves from behind the laptop"
            className="hero-illustration w-full max-w-[560px] mix-blend-multiply select-none"
            draggable="false"
          />
        </div>
      </div>

      {/* Floating help bubble */}
      <button
        type="button"
        aria-label="Say hello"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brown font-display text-lg text-cream shadow-md transition-colors hover:bg-gold"
      >
        ?
      </button>
    </section>
  );
}

export default Hero;