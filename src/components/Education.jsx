import { useEffect, useRef, useState } from 'react'

const COLORS = {
  burgundy: '#6b1525',
  sage: '#4e6e58',
  mustard: '#c49a22',
  mauve: '#a06070',
  cream: '#f5ede0',
  background: '#e8d9b8',
  dark: '#2a1a0e',
  brown: '#6b4c2a',
  text: '#4a3520',
}

const ACCENTS = [
  COLORS.burgundy,
  COLORS.sage,
  COLORS.mustard,
  COLORS.mauve,
]

const journeyItems = [
  {
    side: 'left',
    phase: 'SCHOOLING',
    year: '2012–2023',
    title: 'PAWAR PUBLIC SCHOOL, Chandivali',
    subtitle: 'ICSE BOARD · 94.6%',
    desc: 'Twelve years of curiosity, science fairs, and the stubborn habit of asking "but why?" Graduated top of class and fell in love with how things work.',
    tags: ['Science Olympiad', 'Robotics Club', 'Head Girl'],
  },
  {
    side: 'right',
    phase: 'JUNIOR COLLEGE',
    year: '2023–2025',
    title: 'NARAYANA E-TECHNO SCHOOL, Mumbai',
    subtitle: 'CBSE — Science (PCM + PYSCHOLOGY) · 84.2%',
    desc: 'Navigated the pandemic and board exams through a screen. Discovered Python between JEE prep sessions and never looked back.',
    tags: ['Python', 'JEE Prep', 'Science'],
  },
  {
    side: 'left',
    phase: 'ENGINEERING',
    year: '2025–2029',
    title: 'Engineering at VJTI Mumbai',
    subtitle: 'B.Tech CSE · 2025–2029',
    desc: 'Building strong foundations in computer science while exploring thoughtful design and technology.',
    tags: ['Code', 'Systems', 'Algorithms', 'Projects'],
  },
  {
    side: 'right',
    phase: 'FUTURE',
    year: 'Next',
    title: 'Looking Ahead',
    subtitle: 'The journey continues',
    desc: 'Excited for what’s next — diving deeper into AI, building useful products, and creating meaningful digital experiences.',
    tags: ['AI & ML', 'Product Building', 'Open to Collaborate'],
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView]
}

function Education() {
  const [headerRef, headerIn] = useInView()
  const [dividerRef, dividerIn] = useInView(0.5)

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-20 md:py-32"
      style={{ background: COLORS.background }}
    >
      {/* Animated divider */}
      <div
        ref={dividerRef}
        className="absolute left-0 right-0 top-0 flex h-[2px] justify-center"
      >
        <div
          className="h-full transition-all duration-[2500ms] ease-in-out"
          style={{
            width: dividerIn ? '100%' : '0%',
            background:
              `linear-gradient(to right, transparent, ${COLORS.burgundy} 15%, ${COLORS.mustard} 50%, ${COLORS.sage} 85%, transparent)`,
            opacity: 0.7,
          }}
        />
      </div>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 100% 50%, rgba(184,150,90,0.12), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-20 transition-all duration-700 ease-out"
          style={{
            opacity: headerIn ? 1 : 0,
            transform: headerIn ? 'none' : 'translateY(24px)',
          }}
        >
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: COLORS.brown }}
          >
            03 — Education
          </p>

          <h2
            className="mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem,5vw,4rem)',
              lineHeight: 1.08,
              fontStyle: 'italic',
              color: COLORS.dark,
            }}
          >
            From curious kid to
            <br />
            <span style={{ color: '#5c1f2e' }}>VJTI engineer.</span>
          </h2>

          <p className="max-w-md text-base" style={{ color: COLORS.brown }}>
            Every milestone, every late night, every 'aha!' moment that shaped
            who I am today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 md:block"
            style={{
              background: `linear-gradient(
                to bottom,
                transparent,
                ${COLORS.mauve} 15%,
                ${COLORS.sage} 35%,
                ${COLORS.mustard} 55%,
                ${COLORS.burgundy} 75%,
                #b8965a 92%,
                transparent
              )`,
              opacity: 0.45,
            }}
          />

          <div className="flex flex-col">
            {journeyItems.map((item, index) => (
              <EducationItem
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* End mascot */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-2">
            <div
              className="
                flex h-20 w-20 cursor-default items-center justify-center
                overflow-hidden rounded-full
                transition-all duration-300 ease-out
                hover:scale-[1.08]
              "
              style={{
                background: '#1e1209',
                boxShadow: '0 0 20px rgba(184,150,90,0.4)',
              }}
            >
              <img
                src="/assets/cup.png"
                alt="Cute mascot sticker"
                className="h-16 w-16 object-contain"
              />
            </div>

            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: COLORS.brown }}
            >
              To be continued…
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationItem({ item, index }) {
  const [ref, inView] = useInView(0.15)
  const isLeft = item.side === 'left'
  const accent = ACCENTS[index % ACCENTS.length]
  const delay = `${index * 80}ms`

  const animationStyle = {
    opacity: inView ? 1 : 0,
    transitionDelay: delay,
  }

  return (
    <div
      ref={ref}
      className="relative mb-2 grid grid-cols-1 items-start md:grid-cols-[1fr_48px_1fr]"
    >
      {/* Left */}
      <div
        className="hidden justify-end pr-8 pt-6 transition-all duration-700 ease-out md:flex"
        style={{
          ...animationStyle,
          transform:
            inView || !isLeft ? 'none' : 'translateX(-28px)',
        }}
      >
        {isLeft ? (
          <ECard item={item} accent={accent} />
        ) : (
          <EYear
            year={item.year}
            phase={item.phase}
            align="right"
            accent={accent}
          />
        )}
      </div>

      {/* Timeline dot */}
      <div className="z-10 hidden flex-col items-center pt-7 md:flex">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black transition-all duration-500 ease-out"
          style={{
            background: inView ? accent : '#dfd0a8',
            border: `4px solid ${
              inView ? accent : 'rgba(90,60,20,0.15)'
            }`,
            color: COLORS.cream,
            boxShadow: inView ? `0 0 0 5px ${accent}22` : 'none',
            transform: inView ? 'scale(1)' : 'scale(0.85)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Right */}
      <div
        className="hidden justify-start pl-8 pt-6 transition-all duration-700 ease-out md:flex"
        style={{
          ...animationStyle,
          transform:
            inView || isLeft ? 'none' : 'translateX(28px)',
        }}
      >
        {!isLeft ? (
          <ECard item={item} accent={accent} />
        ) : (
          <EYear
            year={item.year}
            phase={item.phase}
            align="left"
            accent={accent}
          />
        )}
      </div>

      {/* Mobile */}
      <div
        className="flex gap-4 pb-10 transition-all duration-700 ease-out md:hidden"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateX(-16px)',
          transitionDelay: delay,
        }}
      >
        <div className="flex flex-shrink-0 flex-col items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black"
            style={{
              background: accent,
              color: COLORS.cream,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {index < journeyItems.length - 1 && (
            <div
              className="min-h-[2rem] w-px flex-1"
              style={{ background: `${accent}50` }}
            />
          )}
        </div>

        <div className="flex-1 pt-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className="px-2 py-0.5 text-xs font-black uppercase tracking-widest"
              style={{
                background: accent,
                color: COLORS.cream,
              }}
            >
              {item.phase}
            </span>

            <span
              className="text-xs font-semibold"
              style={{ color: COLORS.brown }}
            >
              {item.year}
            </span>
          </div>

          <ECard item={item} accent={accent} />
        </div>
      </div>
    </div>
  )
}

function ECard({ item, accent }) {
  return (
    <div
      className="
        w-full max-w-sm cursor-default p-6
        border-l-[3px]
        transition-all duration-300 ease-out
        hover:-translate-y-[3px]
        hover:scale-[1.01]
        hover:border-l-4
        hover:shadow-[0_10px_36px_rgba(30,18,9,0.13)]
      "
      style={{
        background: COLORS.cream,
        borderLeftColor: accent,
        borderTop: '1px solid rgba(90,60,20,0.15)',
        borderRight: '1px solid rgba(90,60,20,0.15)',
        borderBottom: '1px solid rgba(90,60,20,0.15)',
        boxShadow: '0 2px 12px rgba(30,18,9,0.06)',
      }}
    >
      <h3
        className="mb-0.5 text-base font-black"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          color: COLORS.dark,
        }}
      >
        {item.title}
      </h3>

      <p
        className="mb-3 text-xs font-bold"
        style={{ color: accent }}
      >
        {item.subtitle}
      </p>

      <p
        className="mb-4 text-sm leading-relaxed"
        style={{ color: COLORS.text }}
      >
        {item.desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-semibold"
            style={{
              background: `${accent}14`,
              color: accent,
              border: `1px solid ${accent}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function EYear({ year, phase, align, accent }) {
  const isRight = align === 'right'

  return (
    <div
      className={`flex flex-col gap-1 pt-5 ${
        isRight ? 'items-end text-right' : 'items-start'
      }`}
    >
      <span
        className="px-3 py-1 text-xs font-black uppercase tracking-widest"
        style={{
          background: accent,
          color: COLORS.cream,
        }}
      >
        {phase}
      </span>

      <span
        className="text-xl font-black"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          color: COLORS.dark,
        }}
      >
        {year}
      </span>
    </div>
  )
}

export default Education