import './App.css'
import transferLearningImage from './assets/AI-Transfer-Learning.jpg'
import summarizationImage from './assets/NLP.jpg'
import functionGeneratorImage from './assets/functiongenerator.jpg'

const projects = [
  {
    title: 'Transfer Learning on CIFAR',
    description: 'Transfer learning experiments for image classification.',
    link: '/projects/transfer-learning-cifar-report.html',
    label: 'View',
    image: transferLearningImage,
  },
  {
    title: 'BART Summarization Pipeline',
    description: 'NLP summarization project built with BART.',
    link: '/projects/bart-summarization-report.html',
    label: 'View',
    image: summarizationImage,
  },
  {
    title: 'Robot Car Control System',
    description: 'Control logic for a robot car with sensing and feedback.',
    link: '/projects/cps-robot-car-report.html',
    label: 'View',
    image: '/projects/visuals/cps-robot-car.svg',
  },
  {
    title: 'Function Generator Circuit Simulation',
    description: 'Analog circuit simulation for waveform generation and signal shaping.',
    link: '/projects/function-generator-circuit-report.html',
    label: 'View',
    image: functionGeneratorImage,
  },
  {
    title: 'TTOMPH',
    description: 'Microplastics detection prototype for aquaculture monitoring.',
    link: '/projects/ttomph-report.pdf',
    label: 'View',
    image: '/projects/visuals/transfer-learning-cifar.svg',
  },
  {
    title: 'Food Vision Model',
    description: 'Computer vision model for food image classification.',
    link: 'https://github.com/',
    label: 'View',
    image: '/projects/visuals/bart-summarization.svg',
  },
  {
    title: 'Resistor Predictor CNN',
    description: 'CNN-based modeling project for resistor-related prediction tasks.',
    link: 'https://github.com/',
    label: 'View',
    image: '/projects/visuals/function-generator-circuit.svg',
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

const featuredNlpProject = {
  title: 'BART Summarization Pipeline',
  summary:
    'An NLP summarization project that compares a baseline pretrained BART model against a version additionally adapted with denoising before supervised fine-tuning on XSum.',
  details: [
    'Focuses on abstractive summarization rather than extractive sentence selection.',
    'Compares both training paths under the same evaluation setup using ROUGE and generated examples.',
    'Shows the full workflow from preprocessing and tokenization through training and inference.',
  ],
  link: '/projects/bart-summarization-report.html',
  image: summarizationImage,
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="wordmark">
          Murede Adetiba
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#nlp">NLP</a>
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
            <a href="#nlp">NLP Project</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </section>

        <section className="section feature-section" id="nlp">
          <div className="section-heading">
            <h2>NLP Project</h2>
          </div>

          <article className="feature-card">
            <div className="feature-visual">
              <img src={featuredNlpProject.image} alt={`${featuredNlpProject.title} workflow preview`} />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Featured Work</p>
              <h3>{featuredNlpProject.title}</h3>
              <p>{featuredNlpProject.summary}</p>
              <ul className="feature-points">
                {featuredNlpProject.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a href={featuredNlpProject.link} target="_blank" rel="noreferrer">
                Read Full NLP Summary
              </a>
            </div>
          </article>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <h2>Projects</h2>
          </div>

          <div className="list">
            {projects.map((project) => (
              <article key={project.title} className="list-item project-item">
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title} preview`} />
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.label}
                </a>
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
