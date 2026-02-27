import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function CustomerLayout({ children, title = 'Panel - BakıcıKolay' }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen bg-[var(--color-bg)]">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <div
          className={`transition-all duration-300 ${
            collapsed ? 'ml-[72px]' : 'ml-[260px]'
          }`}
        >
          <TopBar />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
