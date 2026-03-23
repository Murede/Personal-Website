const projects = [
  {
    title: 'Transfer Learning on CIFAR',
    description:
      'Implemented a reproducible deep learning study comparing from-scratch CNN training, ImageNet transfer learning, Places365 transfer, and multi-stage CIFAR100 to CIFAR10 adaptation with confusion matrices and macro-F1 evaluation.',
    skills: ['PyTorch', 'Transfer Learning', 'ResNet50', 'Experiment Design'],
    repoUrl: null,
    reportUrl: null,
    downloadUrl: '/reports/transfer-learning-cifar-project.zip',
    downloadLabel: 'Download Notebook',
  },
  {
    title: 'BART Summarization Pipeline',
    description:
      'Built an NLP workflow around XSum and BART that continues self-supervised denoising pretraining before supervised summarization fine-tuning, then compares both checkpoints with ROUGE and generated outputs.',
    skills: ['Transformers', 'NLP', 'BART', 'ROUGE Evaluation'],
    repoUrl: null,
    reportUrl: null,
    downloadUrl: '/reports/bart-summarization-project.zip',
    downloadLabel: 'Download Notebook',
  },
  {
    title: 'Cyber-Physical Robot Car Control',
    description:
      'Developed a Python control program for a robot car integrating infrared line following, ultrasonic obstacle detection, motor commands, LEDs, servo control, and buzzer feedback in an object-oriented hardware loop.',
    skills: ['Python', 'Embedded Control', 'Sensors', 'Cyber-Physical Systems'],
    repoUrl: null,
    reportUrl: null,
    downloadUrl: '/reports/cps-robot-car-project.zip',
    downloadLabel: 'Download Source',
  },
  {
    title: 'Function Generator Circuit Simulation',
    description:
      'Created analog circuit simulation files for a function generator design in Micro-Cap, showing component-level circuit reasoning and practical electrical engineering design workflow.',
    skills: ['Circuit Simulation', 'Analog Design', 'Micro-Cap', 'ECE'],
    repoUrl: null,
    reportUrl: null,
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
              <div className="mt-5 flex flex-wrap gap-2">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-slate-500"
                  >
                    View on GitHub
                  </a>
                ) : null}
                {project.reportUrl ? (
                  <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-slate-500"
                  >
                    View Report
                  </a>
                ) : null}
                {project.downloadUrl ? (
                  <a
                    href={project.downloadUrl}
                    className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-slate-500"
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
