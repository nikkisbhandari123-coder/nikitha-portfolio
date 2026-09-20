function About() {
  const hobbies = ["Travelling", "Sports", "Music", "Sketching"];
  const exploring = [
    "Machine Learning & AI",
    "UI/UX Design & Creative Development",
    "JavaScript & React",
    "Building, experimenting & learning",
  ];
//where ui react should display
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#eee0d0] px-6 py-24 md:px-12 md:py-32"
    >
      {/* Background image */}
      <img
        src="/assets/about-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-[1.25fr_1fr] md:gap-12">

        {/* ---------- LEFT COLUMN ---------- */}
        <div>
          <p className="font-sans text-[11px] tracking-[0.28em] text-[#C9A87C] uppercase">
            02 — About Me
          </p>

          <h2 className="mt-3 font-serif text-[2.6rem] leading-[1.15] text-[#3D2B1F] md:text-[3.1rem]">
            A little more about me.
          </h2>

          {/* thin gold underline */}
          

          <div className="relative mt-7 max-w-lg space-y-5 pl-5 font-sans text-[15px] leading-relaxed text-[#5C4636] md:text-base">
  <span
    className="absolute left-0 top-0 h-24 w-[2px] bg-[#cfa874]/60"
    aria-hidden="true"
  />
  <p>
    Hi, I&apos;m Nikitha, a Computer Science &amp; Engineering
    student at VJTI Mumbai. I&apos;m interested in understanding
    how ideas turn into things that people can actually use, and
    I&apos;m enjoying the process of figuring out what kind of
    developer I want to become.
  </p>
  <p>
    Outside of academics, I enjoy travelling, exploring new places,
    playing sports, listening to music, and sketching. I like
    solving problems, trying new things, and keeping a balance
    between building things and simply enjoying the process.
  </p>
</div>

          {/* Hobby bar */}
          <div className="relative mt-14 max-w-xl">
            {/* offset burgundy layer behind */}
            <div
              className="absolute -bottom-2.5 -right-2.5 h-full w-full  bg-[#762D3C]"
              aria-hidden="true"
            />

            <div className="relative overflow-visible  bg-[#3B281D] px-6 py-6 md:px-8 md:py-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-[#C9A87C]" aria-hidden="true" />
                <p className="font-sans text-[11px] tracking-[0.22em] text-[#C9A87C] uppercase">
                  When I&apos;m Not Coding
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2.5 pr-24">
                {hobbies.map((hobby, index) => (
                  <div key={hobby} className="flex items-center gap-2.5">
                    {/* Hobby tags with hover */}
                    <span
                      className="rounded-full border border-[#F8F1E9]/35 px-4 py-1.5 font-sans text-[13px] text-[#F8F1E9]/90
                                 transition-all duration-300 ease-out
                                 hover:scale-105 hover:border-[#C9A87C] hover:bg-[#C9A87C]/20
                                 hover:shadow-[0_0_12px_rgba(201,168,124,0.4)] cursor-default"
                    >
                      {hobby}
                    </span>
                    {index < hobbies.length - 1 && (
                      <span className="h-1 w-1 rounded-full bg-[#C9A87C]" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>

              {/* Skateboard character - kept exactly the same */}
              <img
                src="/assets/skateboard.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 right-4 h-[5.2rem] w-auto select-none object-contain md:bottom-2 md:right-10 md:h-[7rem]"
              />
            </div>
          </div>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">

            {/* Burgundy card with hover */}
            <div
              className="flex min-h-[385px] flex-col justify-between  bg-[#762D3C] px-5 py-7 shadow-sm
                         transition-all duration-300 ease-out
                         hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(92,31,42,0.4)]
                         md:px-6 md:py-8"
            >
              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] text-[#E8C9A0] uppercase">
                  Where I&apos;m Headed
                </p>
                <p className="mt-5 font-sans text-[14.5px] leading-relaxed text-[#F8F1E9]/90">
                  Building a strong foundation in computer science while
                  exploring how thoughtful design and technology can come
                  together to create useful digital experiences.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-sans text-[12.5px] text-[#E8C9A0]">
                  CSE · VJTI Mumbai
                </p>
                <p className="mt-1 font-sans text-[12.5px] text-[#E8C9A0]/70">
                  2025 — 2029
                </p>
              </div>
            </div>

            {/* Light beige card with hover */}
            <div
              className="flex min-h-[340px] flex-col  bg-[#b4862f] px-5 py-7 shadow-sm
                         transition-all duration-300 ease-out
                         hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(92,70,54,0.22)]
                         md:px-6 md:py-8"
            >
              <p className="font-sans text-[11px] tracking-[0.2em] text-[#5C4636] uppercase">
                Currently Exploring
              </p>
              <ul className="mt-6 space-y-4">
                {exploring.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-[14.5px] leading-snug text-[#3D2B1F]/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Thinking character - kept exactly the same */}
          
        </div>
      </div>
    </section>
  );
}

export default About;