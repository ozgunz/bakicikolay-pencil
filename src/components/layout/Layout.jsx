import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children, title = 'BakıcıKolay', activePage = 'anasayfa' }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
      <Header activePage={activePage} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
