function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-2 py-4 text-sm text-slate-500 sm:flex-row sm:items-center md:px-4">
        <p>(c) {new Date().getFullYear()} Murede Adetiba</p>
        <p>Built with React and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
