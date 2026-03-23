const interests = [
  {
    title: 'Embedded Systems',
    description: 'I like building hardware-software systems that combine sensing, control, and real-world use.',
  },
  {
    title: 'STEM Outreach',
    description: 'I care about mentoring students and making engineering feel more accessible.',
  },
  {
    title: 'Robotics',
    description: 'I am interested in robotics because it brings together electrical design, control systems, and teamwork.',
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
          Areas I keep coming back to outside of classes and formal project work.
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
