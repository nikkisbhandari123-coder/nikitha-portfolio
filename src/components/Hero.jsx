
function Hero() {
  return (
    <section
    
    //mainly contains jsx+tailwind css
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream px-6 pt-28 pb-16 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

        <div className="text-center md:text-left">
          <p className="mb-4 font-sans text-sm tracking-[0.25em] text-brown-soft uppercase">
            Hi, I&apos;m
          </p>

          <h1 className="font-display text-6xl leading-[1.05] text-brown md:text-7xl">
            Nikitha Bhandari
          </h1>

          <h2 className="mt-5 font-display text-2xl italic text-brown-soft md:text-3xl">
            Computer Science &amp; Engineering Student
          </h2>

          <p className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-brown-soft md:mx-0">
            B.Tech student at VJTI Mumbai, learning to design and build
            thoughtful software, one project at a time.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">

            <a
              href="#journey"
              className="rounded-full bg-brown px-7 py-3 font-sans text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-gold"
            >
              Explore My Journey
            </a>

            <a
              href="#projects"
              className="rounded-full border border-brown/30 px-7 py-3 font-sans text-sm font-medium tracking-wide text-brown transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              View My Projects
            </a>

          </div>
        </div>
         {/*hide my illustration on mobile, show on desktop*/}
        <div className="relative hidden h-full min-h-[480px] items-center justify-center md:flex">
          {/* code illustration of scalable vector graphics starts here */}
          <svg
            viewBox="0 0 320 480"
            className="h-full max-h-[480px] w-auto"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="30"
              y1="345"
              x2="290"
              y2="345"
              className="text-brown/20"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M85,300 L235,300 L250,328 L70,328 Z"
              className="text-brown/70"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
            />

            <path
              d="M100,300 L100,155 C100,150 104,147 109,147 L211,147 C216,147 220,150 220,155 L220,300"
              className="text-brown/70"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
            />

            <circle
              cx="160"
              cy="153"
              r="1.3"
              className="text-brown/40"
              fill="currentColor"
            />

            <line
              x1="120"
              y1="170"
              x2="150"
              y2="170"
              className="text-gold"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <line
              x1="120"
              y1="185"
              x2="195"
              y2="185"
              className="text-brown/50"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <line
              x1="132"
              y1="200"
              x2="175"
              y2="200"
              className="text-brown/50"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <line
              x1="120"
              y1="215"
              x2="148"
              y2="215"
              className="text-burgundy/60"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <line
              x1="120"
              y1="230"
              x2="188"
              y2="230"
              className="text-brown/50"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <line
              x1="132"
              y1="245"
              x2="165"
              y2="245"
              className="text-brown/40"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <line
              x1="120"
              y1="260"
              x2="140"
              y2="260"
              className="text-gold/70"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M160,147 C168,120 145,100 162,75 C176,54 150,35 166,15"
              className="text-olive/70"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M162,100 C182,92 196,96 210,82"
              className="text-olive/70"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
            />

            <path
              d="M150,60 C130,52 116,56 100,44"
              className="text-olive/70"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
            />

            <ellipse
              cx="212"
              cy="80"
              rx="10"
              ry="4.5"
              transform="rotate(-18 212 80)"
              className="text-olive/70"
              stroke="currentColor"
              strokeWidth="0.75"
            />

            <ellipse
              cx="98"
              cy="42"
              rx="10"
              ry="4.5"
              transform="rotate(20 98 42)"
              className="text-olive/70"
              stroke="currentColor"
              strokeWidth="0.75"
            />

            <circle cx="160" cy="147" r="3" className="fill-gold" />

            <circle
              cx="166"
              cy="15"
              r="3"
              className="text-olive/70"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
            />

            <circle
              cx="166"
              cy="15"
              r="1.2"
              className="fill-gold"
            />

            <path
              d="M45,301 L45,287 L67,287 L67,301 C67,305 63,307 56,307 C49,307 45,305 45,301 Z"
              className="text-brown/60"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinejoin="round"
            />

            <path
              d="M67,291 C73,291 73,299 67,299"
              className="text-brown/60"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}

export default Hero;

