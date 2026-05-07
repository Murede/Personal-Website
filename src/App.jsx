import './App.css'

const projects = [
  {
    title: 'Transfer Learning on CIFAR',
    description: 'Transfer learning experiments for image classification.',
    link: '/projects/transfer-learning-cifar-report.html',
    label: 'View',
  },
  {
    title: 'BART Summarization Pipeline',
    description: 'NLP summarization project built with BART.',
    link: '/projects/bart-summarization-report.html',
    label: 'View',
  },
  {
    title: 'Robot Car Control System',
    description: 'Control logic for a robot car with sensing and feedback.',
    link: '/projects/cps-robot-car-report.html',
    label: 'View',
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
                <div className="project-visual" aria-hidden="true">
                  Image placeholder
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
