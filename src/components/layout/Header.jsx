import { Link } from 'react-router-dom';

export function Header({ activePage = 'anasayfa' }) {
  const navItems = [
    { key: 'anasayfa', label: 'Ana Sayfa', href: '/' },
    { key: 'hizmetler', label: 'Hizmetler', href: '/hizmetler' },
    { key: 'hakkimizda', label: 'Hakkımızda', href: '/hakkimizda' },
    { key: 'iletisim', label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <header className="flex items-center justify-between h-20 px-5 md:px-20 bg-[var(--color-white)] border-b border-[var(--color-border)] w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 h-11">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-primary)]">
          <span className="font-heading text-lg font-bold text-white">B</span>
        </div>
        <span className="font-heading text-[22px] font-bold tracking-tight text-[var(--color-text-primary)]">
          BakıcıKolay
        </span>
      </Link>

      {/* Navigation - Desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.href}
            className={`font-body text-[15px] transition-colors ${
              activePage === item.key
                ? 'font-semibold text-[var(--color-primary)]'
                : 'font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/hizmet-detay"
          className="flex items-center gap-2 px-7 py-3 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Başvuru Yap
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center justify-center w-10 h-10" aria-label="Menü">
        <svg className="w-6 h-6 text-[var(--color-text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
