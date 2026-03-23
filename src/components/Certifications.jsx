const certifications = [
  {
    title: 'Data Science Certificate',
    issuer: 'Udemy | 365 Careers',
    detail:
      'The Data Science Course: Complete Data Science Bootcamp 2024. Covers practical analytics, machine learning workflows, and model development fundamentals.',
    imagePath: '/certifications/data-science-certificate.png',
    link: null,
  },
  {
    title: 'Introduction to Microsoft Excel',
    issuer: 'Certificate of Completion',
    detail:
      'Demonstrates Excel proficiency for data organization, formulas, charting, and spreadsheet-based reporting workflows.',
    imagePath: '/certifications/excel-certificate.png',
    link: '/certifications/excel-certificate.pdf',
  },
  {
    title: 'Western Engineering Competition Winner',
    issuer: 'WEC Innovative 2025',
    detail:
      'Awarded through my work on the TTOMPH project, where I contributed to engineering design, system development, and technical execution for the WEC Innovative category.',
    imagePath: '/certifications/western-engineering-competition-certificate.png',
    link: null,
  },
]

function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 px-4 py-8">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-stone-300/70 bg-[#fbf8f2]/90 px-6 py-16 shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-10 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Credentials</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Certifications
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Certifications and credentials supporting my electrical engineering and machine learning profile.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-stone-200 bg-white/90 p-6">
              <a href={item.link || item.imagePath} target="_blank" rel="noreferrer">
                <img
                  src={item.imagePath}
                  alt={`${item.title} certificate`}
                  className="h-44 w-full rounded-[1.25rem] border border-stone-200 object-cover object-top"
                />
              </a>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{item.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.detail}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-stone-500"
                >
                  View Certificate
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
