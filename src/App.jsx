import './App.css'
import transferLearningImage from './assets/AI-Transfer-Learning.jpg'
import summarizationImage from './assets/NLP.jpg'
import functionGeneratorImage from './assets/functiongenerator.jpg'
import ttomphImage from './assets/TTOMPH.jpg'
import instacartImage from './assets/Instacart_Prediction.jpg'
import resistorPredictorImage from './assets/Resistor-Predictor.jpg'

const projects = [
  {
    title: 'TTOMPH',
    description: 'Real-time microplastics detection prototype for aquaculture using laser scatter sensing, photodiode measurement, ESP32 processing, and a live-monitoring app.',
    link: 'https://github.com/Murede/TTOMPpH',
    label: 'GitHub',
    image: ttomphImage,
    tools: '505 nm green laser, photodiode sensing, ESP32, Wi-Fi data transfer, live-monitoring app',
    extraLinks: [
      { href: '/projects/ttomph-report.pdf', label: 'Report' },
      { href: '/projects/ttomph-presentation.pptx', label: 'Presentation' },
    ],
  },
  {
    title: 'Transfer Learning on CIFAR',
    description: 'Image classification study on CIFAR that compares from-scratch training, ImageNet transfer, Places365 transfer, and staged fine-tuning paths under a shared evaluation setup.',
    link: 'https://github.com/Murede/Transfer-Learning-on-CIFAR',
    label: 'GitHub',
    image: transferLearningImage,
    tools: 'Python, PyTorch, torchvision, scikit-learn',
  },
  {
    title: 'BART Summarization Pipeline',
    description: 'Abstractive summarization project built on BART that compares a baseline pretrained model against a version further adapted with denoising before supervised fine-tuning on XSum.',
    link: 'https://github.com/Murede/BART-Summarization-Pipeline',
    label: 'GitHub',
    image: summarizationImage,
    tools: 'Python, PyTorch, Transformers, Hugging Face Datasets',
  },
  {
    title: 'Function Generator Circuit Simulation',
    description: 'Analog function generator simulation focused on waveform generation, signal shaping, and verification of circuit behavior before physical implementation.',
    link: '/projects/function-generator-circuit-report.html',
    label: 'Report',
    image: functionGeneratorImage,
    tools: 'Micro-Cap, analog circuit simulation, op-amp design',
  },
  {
    title: 'Instacart Reorder Prediction',
    description: 'Machine learning pipeline for predicting product reorders using SQL-based feature engineering, relational dataset preparation, and Python model training on Instacart data.',
    link: 'https://github.com/Murede/Instacart-Reorder-Prediction',
    label: 'GitHub',
    image: instacartImage,
    tools: 'Python, SQL, pandas, scikit-learn',
  },
  {
    title: 'Resistor Predictor CNN',
    description: 'CNN-based prediction project that applies deep learning to resistor-related inputs and outputs through model training, inference, and interactive deployment.',
    link: 'https://huggingface.co/spaces/Murede/Resistor_Predictor_CNN',
    label: 'Demo',
    image: resistorPredictorImage,
    tools: 'Python, CNNs, model inference, Hugging Face Spaces',
  },
]

const experience = [
  {
    title: 'High School Tutor',
    org: 'NPHP Tutoring',
    period: 'Sep 2024 - Present',
    description: 'Tutoring IB Math, Chemistry, and Physics while tracking progress and learning plans.',
  },
  {
    title: 'Software Engineering Intern',
    org: 'Zora Corp',
    period: 'May 2024 - Aug 2024',
    description: 'Python, SQL, and automation work.',
  },
]

const links = [
  { href: 'mailto:murede2005@gmail.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/murede-adetiba-357430246', label: 'LinkedIn' },
  { href: 'https://github.com/', label: 'GitHub' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="wordmark">
          Murede Adetiba
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content" id="home">
        <section className="hero">
          <h1>Hi, I&apos;m Murede.</h1>
          <p className="intro">I build projects in software, machine learning, and electrical systems.</p>
          <div className="hero-links">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <h2>Projects</h2>
          </div>

          <div className="list">
            {projects.map((project) => (
              <article key={project.title} className="list-item project-item">
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title} preview`} />
                </div>
                <div className="project-tools">
                  <p className="project-tools-label">Tools</p>
                  <p className="project-tools-copy">{project.tools}</p>
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.label}
                  </a>
                  {project.extraLinks?.map((item) => (
                    <a key={`${project.title}-${item.label}`} href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <h2>Work</h2>
          </div>

          <div className="list">
            {experience.map((item) => (
              <article key={`${item.title}-${item.org}`} className="list-item compact">
                <div>
                  <h3>{item.title}</h3>
                  <p className="meta">
                    {item.org} <span>/</span> {item.period}
                  </p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <h2>Contact</h2>
          </div>

          <div className="contact-links">
            {links.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
