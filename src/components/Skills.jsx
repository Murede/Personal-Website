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
    <section id="skills" className="scroll-mt-24 px-4 py-8">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-stone-300/70 bg-white/80 px-6 py-16 shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-10 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Capabilities</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Skills</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.5rem] border border-stone-200 bg-[#fffaf3] p-6"
            >
              <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item}`} className="rounded-full bg-white px-3 py-2">
                    {item}
                  </li>
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
