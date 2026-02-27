import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, ClipboardList, UserCheck, MessageSquare, Settings, CreditCard, ArrowRight } from 'lucide-react';
import { notificationsData } from '../../data/notifications';

// Bildirim tipi ikon haritası (Notification type icon map)
const typeIcons = {
  request: { icon: ClipboardList, color: 'var(--color-primary)', bg: 'var(--color-primary-soft)' }, // talep
  caregiver: { icon: UserCheck, color: '#22C55E', bg: '#ECFDF5' }, // bakıcı
  review: { icon: MessageSquare, color: 'var(--color-accent-gold)', bg: '#FFFBEB' }, // yorum
  system: { icon: Settings, color: 'var(--color-text-muted)', bg: 'var(--color-bg)' }, // sistem
  payment: { icon: CreditCard, color: '#8B5CF6', bg: '#F5F3FF' }, // ödeme
};

// Zaman farkı hesaplama (Relative time calculation)
function timeAgo(date) {
  const now = new Date('2026-02-28T12:00:00');
  const t = new Date(date);
  const diff = Math.floor((now - t) / 1000); // fark (saniye)
  if (diff < 3600) return `${Math.floor(diff / 60)} dk önce`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} saat önce`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} gün önce`;
  return t.toLocaleDateString('tr-TR');
}

export function TopBar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const unread = notificationsData.filter((n) => !n.read); // okunmamış bildirimler
  const recentNotifications = notificationsData.slice(0, 5); // son bildirimler

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="h-[72px] bg-white border-b border-[var(--color-border)] flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Sayfa başlığı (Page title) */}
      <div>
        <p className="text-[13px] text-[var(--color-text-muted)]">Hoş geldiniz</p>
        <h1 className="text-[18px] font-semibold text-[var(--color-text-primary)]">
          Ayşe Yılmaz
        </h1>
      </div>

      {/* Sağ bölüm (Right section) */}
      <div className="flex items-center gap-3">
        {/* Bildirimler (Notifications) */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="relative p-2.5 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg)] transition-colors"
          >
            <Bell size={20} className="text-[var(--color-text-secondary)]" />
            {unread.length > 0 && (
              <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 bg-[var(--color-negative)] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                {unread.length}
              </span>
            )}
          </button>

          {/* Açılır menü (Dropdown) */}
          {open && (
            <div className="absolute right-0 top-full mt-2 w-[380px] bg-white rounded-[var(--radius-md)] border border-[var(--color-border)] shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
                <h3 className="text-[14px] font-semibold text-[var(--color-text-primary)]">Bildirimler</h3>
                {unread.length > 0 && (
                  <span className="text-[12px] font-medium text-[var(--color-primary)] bg-[var(--color-primary-soft)] px-2 py-0.5 rounded-full">
                    {unread.length} yeni
                  </span>
                )}
              </div>

              <div className="max-h-[320px] overflow-y-auto">
                {recentNotifications.map((notification) => {
                  const typeInfo = typeIcons[notification.type] || typeIcons.system;
                  const Icon = typeInfo.icon;
                  return (
                    <button
                      key={notification.id}
                      onClick={() => {
                        setOpen(false);
                        navigate(`/customer/bildirimler?highlight=${notification.id}`);
                      }}
                      className={`w-full text-left px-4 py-3 flex gap-3 border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg)] transition-colors ${
                        !notification.read ? 'bg-[var(--color-primary-soft)]/30' : ''
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: typeInfo.bg }}
                      >
                        <Icon size={14} style={{ color: typeInfo.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-medium text-[var(--color-text-primary)] truncate">
                            {notification.title}
                          </p>
                          {!notification.read && (
                            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-[12px] text-[var(--color-text-muted)] line-clamp-2 mt-0.5">
                          {notification.message}
                        </p>
                        <p className="text-[11px] text-[var(--color-text-muted)] mt-1">
                          {timeAgo(notification.date)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <Link
                to="/customer/bildirimler"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 px-4 py-3 border-t border-[var(--color-border)] text-[13px] font-medium text-[var(--color-primary)] hover:bg-[var(--color-bg)] transition-colors"
              >
                Tümünü Gör
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>

        {/* Kullanıcı avatarı (User avatar) */}
        <div className="flex items-center gap-3 pl-3 border-l border-[var(--color-border)]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white text-[14px] font-semibold">
            AY
          </div>
          <div className="hidden md:block">
            <p className="text-[13px] font-medium text-[var(--color-text-primary)]">Ayşe Yılmaz</p>
            <p className="text-[11px] text-[var(--color-text-muted)]">Müşteri</p>
          </div>
        </div>
      </div>
    </header>
  );
}
