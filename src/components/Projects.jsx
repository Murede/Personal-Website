const projects = [
  {
    title: 'Transfer Learning on CIFAR',
    description:
      'Deep learning study comparing a scratch CNN, ImageNet transfer learning, Places365 transfer, and a multi-stage CIFAR100 to CIFAR10 path.',
    skills: ['PyTorch', 'Transfer Learning', 'ResNet50', 'Experiment Design'],
    repoUrl: null,
    reportUrl: '/reports/transfer-learning-cifar-report.html',
    downloadUrl: '/reports/transfer-learning-cifar-project.zip',
    downloadLabel: 'Download Notebook',
  },
  {
    title: 'BART Summarization Pipeline',
    description:
      'Summarization project using XSum and BART, with a comparison between the original checkpoint and a checkpoint adapted through additional denoising training.',
    skills: ['Transformers', 'NLP', 'BART', 'ROUGE Evaluation'],
    repoUrl: null,
    reportUrl: '/reports/bart-summarization-report.html',
    downloadUrl: '/reports/bart-summarization-project.zip',
    downloadLabel: 'Download Notebook',
  },
  {
    title: 'Cyber-Physical Robot Car Control',
    description:
      'Python control program for a robot car with line following, obstacle detection, motor control, LED feedback, and buzzer output.',
    skills: ['Python', 'Embedded Control', 'Sensors', 'Cyber-Physical Systems'],
    repoUrl: null,
    reportUrl: '/reports/cps-robot-car-report.html',
    downloadUrl: '/reports/cps-robot-car-project.zip',
    downloadLabel: 'Download Source',
  },
  {
    title: 'Function Generator Circuit Simulation',
    description:
      'Micro-Cap simulation files for a function generator design built from analog components and waveform models.',
    skills: ['Circuit Simulation', 'Analog Design', 'Micro-Cap', 'ECE'],
    repoUrl: null,
    reportUrl: '/reports/function-generator-circuit-report.html',
    downloadUrl: '/reports/function-generator-circuit-project.zip',
    downloadLabel: 'Download Circuit Files',
  },
  {
    title: 'TTOMPH',
    description:
      'Microplastics detection prototype for aquaculture using laser scatter sensing, a photodiode, and ESP32-based data transfer.',
    skills: ['Systems Integration', 'Embedded Mindset', 'Signal/Data Handling', 'Technical Documentation'],
    repoUrl: 'https://github.com/',
    reportUrl: '/reports/ttomph-report.pdf',
    downloadUrl: null,
    downloadLabel: null,
  },
  {
    title: 'Food Vision Model',
    description:
      'Computer vision model for food classification, including dataset preparation, training, and evaluation.',
    skills: ['Python', 'PyTorch', 'Computer Vision', 'Model Validation'],
    repoUrl: 'https://github.com/',
    reportUrl: null,
    downloadUrl: null,
    downloadLabel: null,
  },
  {
    title: 'Resistor Predictor CNN',
    description:
      'CNN-based project focused on predicting resistor-related outputs from structured inputs.',
    skills: ['CNN Architecture', 'Feature Engineering', 'Electrical Domain Modeling', 'Performance Tuning'],
    repoUrl: 'https://github.com/',
    reportUrl: null,
    downloadUrl: null,
    downloadLabel: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="px-4 py-8">
      <div className="mx-auto w-full max-w-6xl border-b border-stone-300/70 px-2 py-16 md:px-4 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Selected Work</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Projects</h2>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
          A selection of projects in embedded systems, machine learning, and electrical engineering.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[1.35rem] border border-stone-200/90 bg-white/65 p-6 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:bg-white/78 hover:shadow-[0_14px_36px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                <span className="rounded-full border border-stone-200 bg-stone-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Project
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.skills.map((item) => (
                  <li
                    key={`${project.title}-${item}`}
                    className="rounded-full border border-stone-200 bg-[#f6f0e8] px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-stone-500"
                  >
                    View on GitHub
                  </a>
                ) : null}
                {project.reportUrl ? (
                  <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
                  >
                    Article
                  </a>
                ) : null}
                {project.downloadUrl ? (
                  <a
                    href={project.downloadUrl}
                    className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-stone-500"
                  >
                    {project.downloadLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
