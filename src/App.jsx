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
    description: 'Microplastics detection prototype for aquaculture monitoring.',
    link: 'https://github.com/Murede/TTOMPpH',
    label: 'View',
    image: ttomphImage,
  },
  {
    title: 'Transfer Learning on CIFAR',
    description: 'Transfer learning experiments for image classification.',
    link: 'https://github.com/Murede/Transfer-Learning-on-CIFAR',
    label: 'View',
    image: transferLearningImage,
  },
  {
    title: 'BART Summarization Pipeline',
    description: 'NLP summarization project built with BART.',
    link: 'https://github.com/Murede/BART-Summarization-Pipeline',
    label: 'View',
    image: summarizationImage,
  },
  {
    title: 'Function Generator Circuit Simulation',
    description: 'Analog circuit simulation for waveform generation and signal shaping.',
    link: '/projects/function-generator-circuit-report.html',
    label: 'View',
    image: functionGeneratorImage,
  },
  {
    title: 'Instacart Reorder Prediction',
    description: 'Machine learning pipeline combining SQL feature engineering and Python model training to predict product reorders.',
    link: 'https://github.com/Murede/Instacart-Reorder-Prediction',
    label: 'View',
    image: instacartImage,
  },
  {
    title: 'Resistor Predictor CNN',
    description: 'CNN-based modeling project for resistor-related prediction tasks.',
    link: 'https://huggingface.co/spaces/Murede/Resistor_Predictor_CNN',
    label: 'View',
    image: resistorPredictorImage,
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
