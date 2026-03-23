function Contact() {
  return (
    <section id="contact" className="px-4 py-8">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] bg-slate-950 px-6 py-16 text-stone-100 shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:px-10 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s build something useful.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">
            I am open to internship opportunities, engineering collaborations, and project-based
            work. Reach out and I will get back to you promptly.
          </p>
        <div className="mt-8 grid gap-4 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <a
            href="mailto:murede2005@gmail.com"
            className="rounded-[1.5rem] border border-white/10 bg-white/8 px-6 py-5 text-sm font-medium text-white transition hover:bg-white/12"
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-stone-400">Email</span>
            <span className="mt-3 block text-base">murede2005@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/murede-adetiba-357430246"
            className="rounded-[1.5rem] border border-white/10 bg-white/8 px-6 py-5 text-sm font-medium text-white transition hover:bg-white/12"
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-stone-400">Network</span>
            <span className="mt-3 block text-base">LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            className="rounded-[1.5rem] border border-white/10 bg-white/8 px-6 py-5 text-sm font-medium text-white transition hover:bg-white/12"
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-stone-400">Code</span>
            <span className="mt-3 block text-base">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
