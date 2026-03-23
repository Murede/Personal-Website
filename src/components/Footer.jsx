function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 rounded-[1.5rem] border border-stone-300/70 bg-[#fffaf3]/85 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center">
        <p>(c) {new Date().getFullYear()} Murede Adetiba</p>
        <p>Built with React and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
