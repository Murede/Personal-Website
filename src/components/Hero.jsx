function Hero() {
  return (
    <section id="home" className="px-4 pt-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 border-b border-stone-300/70 px-2 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-4 md:py-18">
        <div className="space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Electrical Engineering • AI Systems • Embedded Work
          </p>

          <div className="space-y-3">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] text-slate-950 sm:text-6xl md:text-7xl">
              Building grounded engineering systems with AI, hardware, and software.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              I&apos;m Murede Adetiba, an Electrical and AI Systems Engineering student focused on
              practical prototypes, clean implementation, and technical work that holds up under
              real constraints.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-stone-500"
            >
              Contact Me
            </a>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200/80 bg-white/55 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Focus</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Embedded systems, ML workflows, and hardware-software integration.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200/80 bg-white/55 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Approach</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Measurable outcomes, reliable implementation, and strong engineering fundamentals.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200/80 bg-white/55 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Current</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Prototyping sensor-driven systems and refining project presentation for internships.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[1.75rem] border border-slate-800/20 bg-slate-950/92 p-7 text-stone-100 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
              Snapshot
            </p>
            <div className="mt-6 space-y-5">
              <div className="border-b border-white/10 pb-5">
                <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Discipline</p>
                <p className="mt-2 text-2xl text-white">Electrical and AI Systems Engineering</p>
              </div>
              <div className="border-b border-white/10 pb-5">
                <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Strengths</p>
                <p className="mt-2 text-base leading-relaxed text-stone-200">
                  Circuit simulation, Python workflows, machine learning experiments, and applied
                  engineering communication.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Direction</p>
                <p className="mt-2 text-base leading-relaxed text-stone-200">
                  Building a portfolio that feels technical, thoughtful, and hireable without
                  looking overly flashy.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/6 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Current Focus</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-200">
              <li>Embedded system prototyping</li>
              <li>Computer vision model deployment</li>
              <li>Data-driven performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
