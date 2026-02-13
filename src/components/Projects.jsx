const projects = [
  {
    title: 'TTOMPH',
    description:
      'Built as an engineering system project with a focus on reliability, modular design, and testable integration between hardware-facing logic and software workflows.',
    skills: ['Systems Integration', 'Embedded Mindset', 'Signal/Data Handling', 'Technical Documentation'],
    repoUrl: 'https://github.com/',
  },
  {
    title: 'Food Vision Model',
    description:
      'Designed and trained a computer vision pipeline for food classification, including dataset preparation, model training, and evaluation for real-world ML performance.',
    skills: ['Python', 'PyTorch', 'Computer Vision', 'Model Validation'],
    repoUrl: 'https://github.com/',
  },
  {
    title: 'Resistor Predictor CNN',
    description:
      'Developed a CNN model to predict resistor-related outputs from structured inputs, combining core electrical engineering domain understanding with machine learning optimization.',
    skills: ['CNN Architecture', 'Feature Engineering', 'Electrical Domain Modeling', 'Performance Tuning'],
    repoUrl: 'https://github.com/',
  },
]

function Projects() {
  return (
    <section id="projects" className="border-b border-slate-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Projects</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          A selection of engineering work focused on robust implementation and measurable results.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((item) => (
                  <li
                    key={`${project.title}-${item}`}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-md border border-slate-300 px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-slate-500"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
