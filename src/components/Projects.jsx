const projects = [
  {
    title: 'Transfer Learning on CIFAR',
    description:
      'Implemented a reproducible deep learning study comparing from-scratch CNN training, ImageNet transfer learning, Places365 transfer, and multi-stage CIFAR100 to CIFAR10 adaptation with confusion matrices and macro-F1 evaluation.',
    skills: ['PyTorch', 'Transfer Learning', 'ResNet50', 'Experiment Design'],
    repoUrl: null,
    reportUrl: '/reports/transfer-learning-cifar-report.html',
    downloadUrl: '/reports/transfer-learning-cifar-project.zip',
    downloadLabel: 'Download Notebook',
  },
  {
    title: 'BART Summarization Pipeline',
    description:
      'Built an NLP workflow around XSum and BART that continues self-supervised denoising pretraining before supervised summarization fine-tuning, then compares both checkpoints with ROUGE and generated outputs.',
    skills: ['Transformers', 'NLP', 'BART', 'ROUGE Evaluation'],
    repoUrl: null,
    reportUrl: '/reports/bart-summarization-report.html',
    downloadUrl: '/reports/bart-summarization-project.zip',
    downloadLabel: 'Download Notebook',
  },
  {
    title: 'Cyber-Physical Robot Car Control',
    description:
      'Developed a Python control program for a robot car integrating infrared line following, ultrasonic obstacle detection, motor commands, LEDs, servo control, and buzzer feedback in an object-oriented hardware loop.',
    skills: ['Python', 'Embedded Control', 'Sensors', 'Cyber-Physical Systems'],
    repoUrl: null,
    reportUrl: '/reports/cps-robot-car-report.html',
    downloadUrl: '/reports/cps-robot-car-project.zip',
    downloadLabel: 'Download Source',
  },
  {
    title: 'Function Generator Circuit Simulation',
    description:
      'Created analog circuit simulation files for a function generator design in Micro-Cap, showing component-level circuit reasoning and practical electrical engineering design workflow.',
    skills: ['Circuit Simulation', 'Analog Design', 'Micro-Cap', 'ECE'],
    repoUrl: null,
    reportUrl: '/reports/function-generator-circuit-report.html',
    downloadUrl: '/reports/function-generator-circuit-project.zip',
    downloadLabel: 'Download Circuit Files',
  },
  {
    title: 'TTOMPH',
    description:
      'Designed a low-cost, real-time microplastics detection prototype for aquaculture using a 505 nm laser, a photodiode at 90 degrees for light-scatter sensing, and ESP32 Wi-Fi data transmission in a continuous-flow water system.',
    skills: ['Systems Integration', 'Embedded Mindset', 'Signal/Data Handling', 'Technical Documentation'],
    repoUrl: 'https://github.com/',
    reportUrl: '/reports/ttomph-report.pdf',
    downloadUrl: null,
    downloadLabel: null,
  },
  {
    title: 'Food Vision Model',
    description:
      'Designed and trained a computer vision pipeline for food classification, including dataset preparation, model training, and evaluation for real-world ML performance.',
    skills: ['Python', 'PyTorch', 'Computer Vision', 'Model Validation'],
    repoUrl: 'https://github.com/',
    reportUrl: null,
    downloadUrl: null,
    downloadLabel: null,
  },
  {
    title: 'Resistor Predictor CNN',
    description:
      'Developed a CNN model to predict resistor-related outputs from structured inputs, combining core electrical engineering domain understanding with machine learning optimization.',
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
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Projects framed with more context and stronger visual structure.
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
          A selection of engineering work focused on robust implementation and measurable results.
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
                    View Report
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
