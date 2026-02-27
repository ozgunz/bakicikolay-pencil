import { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function CustomerLayout({ children, title = 'Panel - BakıcıKolay' }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
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
  );
}
