const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-stone-300/70 bg-[#fffaf3]/90 px-6 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur">
        <a href="#home" className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
          Murede Adetiba
        </a>
        <ul className="flex items-center gap-5 text-sm text-slate-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-stone-200/70 hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
