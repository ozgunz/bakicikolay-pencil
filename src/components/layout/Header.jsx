import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header({ activePage = 'anasayfa' }) {
  const { t } = useTranslation();

  const navItems = [
    { key: 'anasayfa', label: t('nav.home'), href: '/' },
    { key: 'hizmetler', label: t('nav.services'), href: '/hizmetler' },
    { key: 'hakkimizda', label: t('nav.about'), href: '/hakkimizda' },
    { key: 'iletisim', label: t('nav.contact'), href: '/iletisim' },
  ];

  return (
    <header className="flex items-center h-20 px-5 md:px-20 bg-[var(--color-white)] border-b border-[var(--color-border)] w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center h-11 shrink-0">
        <Logo className="h-10 w-auto" />
      </Link>

      {/* Navigation - Desktop (centered) */}
      <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
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
      </nav>

      {/* Action Buttons - Desktop */}
      <div className="hidden md:flex items-center gap-3 shrink-0">
        <LanguageSwitcher />
        <Link
          to="/hizmet-detay"
          className="flex h-[42px] items-center justify-center gap-2 px-6 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          {t('nav.requestCare')}
        </Link>
        <Link
          to="/giris"
          className="flex h-[42px] items-center justify-center gap-2 px-6 rounded-[var(--radius-sm)] bg-[var(--color-black)] font-body text-sm font-semibold text-white transition-opacity hover:opacity-80"
        >
          <User className="h-4 w-4" />
          {t('nav.login')}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden ml-auto flex items-center justify-center w-10 h-10" aria-label="Menu">
        <svg className="w-6 h-6 text-[var(--color-text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
