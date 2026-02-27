import { Head } from '@inertiajs/react';
import '../../i18n';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children, title = 'BakıcıKolay', activePage = 'anasayfa' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
        <Header activePage={activePage} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
