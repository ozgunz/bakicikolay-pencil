import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'tr', label: 'TR', flag: '\u{1F1F9}\u{1F1F7}' },
  { code: 'ru', label: 'RU', flag: '\u{1F1F7}\u{1F1FA}' },
  { code: 'de', label: 'DE', flag: '\u{1F1E9}\u{1F1EA}' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-2 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg)]"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 flex flex-col overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 text-left font-body text-sm transition-colors hover:bg-[var(--color-bg)] ${
                i18n.language === lang.code
                  ? 'font-semibold text-[var(--color-primary)]'
                  : 'text-[var(--color-text-primary)]'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
