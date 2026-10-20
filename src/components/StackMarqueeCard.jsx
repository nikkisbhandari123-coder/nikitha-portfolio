import "./StackMarquee.css";

// ============ EDIT LABELS & SPEEDS HERE ============
// direction "right" = scrolls left → right, "left" = scrolls right → left
// speed = seconds for one full loop (bigger = slower)
const rows = [
  {
    direction: "right",
    speed: 35,
    items: [
      "UI/UX Basics",
      "HTML5/CSS3",
      "React & Next.js",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    direction: "left",
    speed: 28,
    items: [
      "Design Tools Mastery",
      "Collaborative Team Player",
      "TypeScript",
      "Git & GitHub",
      "Accessibility (a11y)",
    ],
  },
  {
    direction: "right",
    speed: 40,
    items: [
      "Keeping Abreast of Trends",
      "Attention to Detail",
      "Problem Solving",
      "Clean Code",
      "API Integration",
    ],
  },
];
// ====================================================

function StarIcon() {
  return (
    <svg
      className="marquee-star"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 2.8l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9L12 2.8z" />
    </svg>
  );
}

function MarqueeRow({ items, direction = "left", speed = 35, repeat = 2 }) {
  // repeat the list so one group is always wider than the card
  const group = Array.from({ length: repeat }).flatMap(() => items);

  const renderGroup = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden ? "true" : undefined}>
      {group.map((label, i) => (
        <li className="marquee-item" key={`${label}-${i}`}>
          <span className="marquee-pill">{label}</span>
          <StarIcon />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-row">
      <div
        className={`marquee-track marquee-track--${direction}`}
        style={{ "--row-duration": `${speed}s` }}
      >
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
    </div>
  );
}

function StackMarqueeCard() {
  return (
    <div className="stack-marquee">
      <h3 className="stack-marquee__heading">My Stack.</h3>

      <div
        className="stack-card stack-card--fade"
        role="region"
        aria-label="My tech stack"
      >
        <div className="stack-card__rows">
          {rows.map((row, i) => (
            <MarqueeRow key={i} {...row} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StackMarqueeCard;