const workItems = [
  {
    company: 'Zora Corp',
    role: 'Software Engineering Intern',
    location: 'Kitchener, Ontario',
    period: 'May 2024 - Aug. 2024',
    points: [
      'Developed tenant scoring algorithms and automation tools using Python, SQL, and data analytics to improve rental application processing and operational efficiency.',
    ],
  },
  {
    company: 'NPHP Tutoring',
    role: 'High School Tutor',
    location: 'Toronto, Ontario',
    period: 'Sep 2024 - Present',
    points: [
      'Tutored IB Math, Chemistry, and Physics while tracking student performance and learning progress using structured records and analysis in MS Office.',
    ],
  },
]

const leadershipItems = [
  {
    organization: 'GLOW AI',
    role: 'Data-Driven Personal Assistant System',
    period: 'Mar. 2025 - Present',
    points: [
      'Built data and NLP pipelines using Python and machine learning tools to analyze scheduling patterns, weather data, and user preferences for improved assistant decision-making.',
    ],
  },
  {
    organization: 'WeMars - Western University Mars Rover Team',
    role: 'Electrical Team Contributor',
    period: 'Sept. 2024 - Present',
    points: [
      'Designed and validated rover electrical subsystems including PCB layouts, sensors, and motor controllers while collaborating with software and mechanical teams.',
    ],
  },
  {
    organization: 'UMOJA Robotics',
    role: 'Technical Mentor',
    period: 'Jan. 2023 - Present',
    points: [
      'Mentored students in robotics engineering by teaching circuit design, microcontroller programming in C++, and control systems for competitive robotics projects.',
    ],
  },
]

function Work() {
  return (
    <section id="work" className="px-4 py-8">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-stone-300/70 bg-[#f8f4ed]/90 px-6 py-16 shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-10 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Work and leadership</h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Experience spanning software engineering, analytics, and technical instruction.
        </p>
        <div className="mt-8 space-y-5">
          {workItems.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[1.5rem] border border-stone-200 bg-white/90 p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.role}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-500">
                    {item.company} • {item.location}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-500">{item.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                {item.points.map((point) => (
                  <li key={`${item.company}-${point}`}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <h3 className="mt-14 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Leadership and Technical Experience
        </h3>
        <div className="mt-6 space-y-5">
          {leadershipItems.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="rounded-[1.5rem] border border-stone-200 bg-white/90 p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-slate-950">{item.organization}</h4>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-500">{item.role}</p>
                </div>
                <p className="text-sm font-medium text-slate-500">{item.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                {item.points.map((point) => (
                  <li key={`${item.organization}-${point}`}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
