const skillGroups = [
  {
    title: 'Soft Skills',
    items: ['Collaboration', 'Leadership', 'Initiative', 'Communication'],
  },
  {
    title: 'Electrical and Embedded',
    items: [
      'Circuit Design',
      'Verilog',
      'FPGA',
      'AutoCAD Electrical',
      'PLC Programming',
      'Control Systems',
      'RTOS',
    ],
  },
  {
    title: 'AI and Data Science',
    items: [
      'Machine Learning',
      'NLP',
      'TensorFlow',
      'Scikit-learn',
      'PyTorch',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'SQL',
      'Data Pipelines',
    ],
  },
  {
    title: 'Tools and Languages',
    items: [
      'C',
      'C++',
      'Java',
      'Python',
      'MATLAB',
      'Django',
      'Git',
      'JIRA',
      'MySQL',
      'Simulink',
      'Altium',
      'IntelliJ',
      'Onshape',
      'Microcap',
      'Microsoft Excel',
    ],
  },
  {
    title: 'Interests',
    items: ['Music', 'Cooking', 'Soccer', 'Volunteering', 'Hiking'],
  },
]

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-slate-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Skills</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-base font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item}`}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
