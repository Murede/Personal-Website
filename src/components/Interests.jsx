const interests = [
  {
    title: "Embedded Systems",
    description: "I enjoy building hardware-software systems that connect sensing, control, and real-world problem solving.",
  },
  {
    title: "STEM Outreach",
    description: "I care about mentoring students and creating more accessible pathways into engineering and technology.",
  },
  {
    title: "Robotics",
    description: "I am interested in robotics as a space where electrical design, control systems, and teamwork come together.",
  },
]

function Interests() {
  return (
    <section id="interests" className="px-4 py-8">
      <div className="mx-auto w-full max-w-6xl border-b border-stone-300/70 px-2 py-16 md:px-4 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Interests</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Interests
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Areas that continue to shape the kind of engineer I want to become.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {interests.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.35rem] border border-stone-200/90 bg-white/60 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
