
function Hero() {
  return (
    <section
      id="home"
     className="relative flex min-h-screen items-center overflow-hidden bg-[#E8D9B8] px-6 pt-28 pb-16 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* ---------- Left: text content ---------- */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-brown-soft uppercase">
             01-HOME PAGE 
            </p>
          </div>

          <h1 className="mt-5 font-display text-6xl leading-[1.05] text-brown md:text-7xl">
            Hi, I&apos;m
            <br />
            <span className="italic text-burgundy">Nikitha.</span>
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <p className="font-sans text-sm text-brown-soft">CS Engineer</p>
          </div>

          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-brown-soft">
            Building things at the edge of design and engineering — at VJTI
            Mumbai and beyond.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-brown px-7 py-3 font-sans text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold"
            >
              View Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-brown/30 px-7 py-3 font-sans text-sm font-medium tracking-wide text-brown transition-colors hover:border-gold hover:text-gold"
            >
              Say Hello
            </a>
          </div>

          {/* Info / social row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-brown/10 pt-6 font-sans text-xs text-brown-soft">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-olive" aria-hidden="true" />
              B.Tech CSE · 2025–29
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-burgundy" aria-hidden="true" />
              Mumbai, India
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Open to internships
            </span>

            <span className="ml-auto flex gap-2">
              <a
                href="#"
                className="rounded-full border border-brown/20 px-4 py-1.5 tracking-wide uppercase hover:border-gold hover:text-gold"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-full border border-brown/20 px-4 py-1.5 tracking-wide uppercase hover:border-gold hover:text-gold"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="rounded-full border border-brown/20 px-4 py-1.5 tracking-wide uppercase hover:border-gold hover:text-gold"
              >
                Twitter
              </a>
            </span>
          </div>
        </div>

        {/* ---------- Right: circular compass / flower diagram ---------- */}
        <div
          className="relative hidden h-[420px] items-center justify-center md:flex"
          aria-hidden="true"
        >
          <svg viewBox="0 0 400 400" className="h-full w-full max-w-[420px]">
            <defs>
              <clipPath id="circleClip">
                <circle cx="200" cy="200" r="168" />
              </clipPath>
            </defs>

            {/* grid, clipped to the circle only */}
            <g
              clipPath="url(#circleClip)"
              stroke="#3B281D"
              strokeOpacity="0.07"
              strokeWidth="1"
            >
              {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
                <line
                  key={`v${x}`}
                  x1={x}
                  y1="30"
                  x2={x}
                  y2="370"
                />
              ))}

              {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((y) => (
                <line
                  key={`h${y}`}
                  x1="30"
                  y1={y}
                  x2="370"
                  y2={y}
                />
              ))}
            </g>

            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#3B281D"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#3B281D"
              strokeOpacity="0.15"
              strokeWidth="1"
            />

            {/* petals — pointed almond shape, drawn back-to-front so gold sits on top */}
            {[
              { rot: 180, fill: "#a06070", opacity: 0.8 },
              { rot: 240, fill: "#4e6e58", opacity: 0.75 },
              { rot: 300, fill: "#7c9a86", opacity: 0.6 },
              { rot: 60, fill: "#c98a9c", opacity: 0.75 },
              { rot: 120, fill: "#dba9b7", opacity: 0.65 },
              { rot: 0, fill: "#C99B3E", opacity: 0.9 },
            ].map((petal) => (
              <path
                key={petal.rot}
                d="M0,0 C-24,-40 -24,-75 0,-100 C24,-75 24,-40 0,0 Z"
                fill={petal.fill}
                fillOpacity={petal.opacity}
                stroke={petal.fill}
                strokeWidth="0.75"
                transform={`translate(200 200) rotate(${petal.rot})`}
              />
            ))}

            <circle cx="200" cy="200" r="13" fill="#C99B3E" />

            {/* tiny flowers + leaves sitting on the outer circle border */}
            {[
              { angle: 45, type: "flower", fill: "#c48a95" },
              { angle: 135, type: "leaf", fill: "#4e6e58" },
              { angle: 225, type: "flower", fill: "#C99B3E" },
              { angle: 315, type: "leaf", fill: "#a06070" },
            ].map((d, i) => {
              const rad = (d.angle * Math.PI) / 180;
              const x = 200 + 170 * Math.cos(rad);
              const y = 200 + 170 * Math.sin(rad);

              return d.type === "flower" ? (
                <g
                  key={i}
                  transform={`translate(${x} ${y})`}
                  fillOpacity="0.6"
                >
                  <ellipse cx="0" cy="-7" rx="4" ry="7" fill={d.fill} />
                  <ellipse cx="0" cy="7" rx="4" ry="7" fill={d.fill} />
                  <ellipse cx="-7" cy="0" rx="7" ry="4" fill={d.fill} />
                  <ellipse cx="7" cy="0" rx="7" ry="4" fill={d.fill} />
                  <circle cx="0" cy="0" r="2.5" fill="#C99B3E" />
                </g>
              ) : (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx="12"
                  ry="5"
                  fill={d.fill}
                  fillOpacity="0.5"
                  transform={`rotate(${d.angle} ${x} ${y})`}
                />
              );
            })}

            <text
              x="200"
              y="45"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="11"
              letterSpacing="2"
              fill="#5C4636"
            >
              BUILD
            </text>

            <text
              x="355"
              y="205"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="11"
              letterSpacing="2"
              fill="#5C4636"
            >
              CODE
            </text>

            <text
              x="200"
              y="365"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="11"
              letterSpacing="2"
              fill="#5C4636"
            >
              DESIGN
            </text>

            <text
              x="48"
              y="205"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="11"
              letterSpacing="2"
              fill="#5C4636"
            >
              CREATE
            </text>
          </svg>
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
