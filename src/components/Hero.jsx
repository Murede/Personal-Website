import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="border-b border-slate-200">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={profile}
              alt="Murede Adetiba"
              className="h-24 w-24 rounded-full object-cover shadow-md sm:h-28 sm:w-28"
            />
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Hi I&apos;m Murede.
              </h1>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Electrical and AI Systems Engineering Student
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            I am an Electrical and AI Systems Engineering student focused on practical
            solutions, strong engineering fundamentals, and measurable outcomes.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-500"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-500">Current Focus</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>Embedded system prototyping</li>
            <li>Computer vision model deployment</li>
            <li>Data-driven performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;