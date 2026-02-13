function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Contact</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            I am open to internship opportunities, engineering collaborations, and project-based
            work. Reach out and I will get back to you promptly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:murede2005@gmail.com"
              className="rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              murede2005@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/murede-adetiba-357430246"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
