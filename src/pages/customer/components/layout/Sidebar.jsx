import { NavLink } from 'react-router-dom';
import { Logo } from '../../../../components/Logo';
import {
  LayoutDashboard,
  ClipboardList,
  Star,
  User,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { notificationsData } from '../../data/notifications';

// Okunmamış bildirim sayısı (Unread notification count)
const unreadCount = notificationsData.filter((n) => !n.read).length;

// Menü öğeleri (Navigation items)
const navItems = [
  { to: '/customer', icon: LayoutDashboard, label: 'Panel', end: true },
  { to: '/customer/talepler', icon: ClipboardList, label: 'Taleplerim' }, // talepler
  { to: '/customer/yorumlar', icon: Star, label: 'Yorumlarım' }, // yorumlar
  { to: '/customer/bildirimler', icon: Bell, label: 'Bildirimler', badge: unreadCount }, // bildirimler
  { to: '/customer/profil', icon: User, label: 'Profilim' }, // profil
];

export function Sidebar({ collapsed, onToggle }) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-[var(--color-border)] flex flex-col z-40 transition-all duration-300 ${
        collapsed ? 'w-[72px]' : 'w-[260px]'
      }`}
    >
      {/* Logo */}
      <div className="h-[72px] flex items-center px-5 border-b border-[var(--color-border)]">
        {!collapsed && (
          <NavLink to="/">
            <Logo className="h-8" />
          </NavLink>
        )}
        <button
          onClick={onToggle}
          className={`p-1.5 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg)] text-[var(--color-text-muted)] transition-colors ${
            collapsed ? 'mx-auto' : 'ml-auto'
          }`}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigasyon (Navigation) */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-[14px] font-medium transition-all ${
                isActive
                  ? 'bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text-primary)]'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            <item.icon size={20} />
            {!collapsed && (
              <span className="flex-1 flex items-center justify-between">
                {item.label}
                {item.badge > 0 && (
                  <span className="min-w-[20px] h-5 px-1.5 bg-[var(--color-negative)] rounded-full flex items-center justify-center text-white text-[11px] font-bold">
                    {item.badge}
                  </span>
                )}
              </span>
            )}
            {collapsed && item.badge > 0 && (
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[var(--color-negative)] rounded-full" />
            )}
          </NavLink>
        ))}
      </nav>

      {/* Çıkış (Logout) */}
      <div className="p-3 border-t border-[var(--color-border)]">
        <NavLink
          to="/giris"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-[14px] font-medium text-[var(--color-negative)] hover:bg-red-50 transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut size={20} />
          {!collapsed && <span>Çıkış Yap</span>}
        </NavLink>
      </div>
    </aside>
  );
}
