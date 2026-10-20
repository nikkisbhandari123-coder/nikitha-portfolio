// Edit names and percentages here
const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "Python & ML", level: 80 },
  { name: "Flutter", level: 75 },
  { name: "Solidity / Web3", level: 60 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js / Express", level: 82 },
];

function SkillRow({ name, level }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-sans text-sm text-[#F6EFE3] md:text-base">{name}</span>
        <span className="font-sans text-sm tabular-nums text-gold">{level}%</span>
      </div>

      <div
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
        className="mt-2.5 h-[3px] w-full bg-[#F6EFE3]/10"
      >
        <div
          className="h-full"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #C99B3E 0%, #7B2D3B 100%)",
          }}
        />
      </div>
    </li>
  );
}

function ProficiencyCard() {
  return (
    <section
      aria-labelledby="proficiency-heading"
     
      className="rounded-[32px] bg-[#211309] p-6 md:p-8 lg:-mt-6"
    >
      <h3
        id="proficiency-heading"
        className="font-sans text-xs font-medium tracking-[0.2em] text-gold uppercase"
      >
        Proficiency
      </h3>

      <ul className="mt-6 flex flex-col gap-4">
        {skills.map((skill) => (
          <SkillRow key={skill.name} {...skill} />
        ))}
      </ul>
    </section>
  );
}

export default ProficiencyCard;