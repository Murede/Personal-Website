const workItems = [
  {
    company: 'Zora Corp',
    role: 'Software Engineering Intern',
    location: 'Kitchener, Ontario',
    period: 'May 2024 - Aug. 2024',
    points: [
      'Built tenant scoring algorithms with data analytics to improve efficiency and accuracy in rental application assessment.',
      'Created automation tools for property management workflows, reducing manual tasks and improving operational speed.',
      'Analyzed rental market trends and integrated new data sources to strengthen predictive decision support.',
    ],
  },
  {
    company: 'NPHP Tutoring',
    role: 'High School Tutor',
    location: 'Toronto, Ontario',
    period: 'Sep 2024 - Present',
    points: [
      'Tutored IB Math, Chemistry, and Physics with personalized learning plans for each student.',
      'Tracked performance and learning progress through consistent communication with students, parents, and teachers.',
      'Maintained structured academic records in MS Office to support data-backed teaching adjustments.',
    ],
  },
]

const leadershipItems = [
  {
    organization: 'GLOW AI',
    role: 'Data-Driven Personal Assistant System',
    period: 'Mar. 2025 - Present',
    points: [
      'Developed data and NLP pipelines to analyze scheduling, weather, and user preference trends.',
      'Applied NLP methods to categorize user queries and improve assistant decision quality.',
      'Designed UML models and collaborated across disciplines to optimize system performance.',
    ],
  },
  {
    organization: 'WeMars - Western University Mars Rover Team',
    role: 'Electrical Team Contributor',
    period: 'Sept. 2024 - Present',
    points: [
      'Supported electrical and power system design, including PCB layout and wiring reliability for competition environments.',
      'Integrated sensors and motor controllers with software and mechanical teams for stable rover operation.',
      'Led troubleshooting and circuit validation efforts ahead of rover field testing.',
    ],
  },
  {
    organization: 'UMOJA Robotics',
    role: 'Technical Mentor',
    period: 'Jan. 2023 - Present',
    points: [
      'Taught circuit design, sensor integration, and motor control using C++ and microcontrollers.',
      'Guided students in control systems, signal processing, and power management for competition performance.',
      'Worked with mentors to broaden African Canadian STEM participation and improve robot component performance.',
    ],
  },
]

function Work() {
  return (
    <section id="work" className="border-b border-slate-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Work</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          Experience spanning software engineering, analytics, and technical instruction.
        </p>
        <div className="mt-8 space-y-5">
          {workItems.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-xl border border-slate-200 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                  <p className="text-sm text-slate-600">
                    {item.company} | {item.location}
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
        <h3 className="mt-12 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Leadership and Technical Experience
        </h3>
        <div className="mt-6 space-y-5">
          {leadershipItems.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="rounded-xl border border-slate-200 p-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">{item.organization}</h4>
                  <p className="text-sm text-slate-600">{item.role}</p>
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
