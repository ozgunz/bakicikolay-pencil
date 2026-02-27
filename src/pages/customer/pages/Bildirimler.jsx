import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CustomerLayout } from '../components/layout/CustomerLayout';
import { notificationsData } from '../data/notifications';
import {
  Bell,
  ClipboardList,
  UserCheck,
  MessageSquare,
  Settings,
  CreditCard,
  CheckCheck,
  Circle,
  Clock,
} from 'lucide-react';

// Bildirim tipi ikon haritası (Notification type icon map)
const typeIcons = {
  request: { icon: ClipboardList, color: 'var(--color-primary)', bg: 'var(--color-primary-soft)', label: 'Talep' },
  caregiver: { icon: UserCheck, color: '#22C55E', bg: '#ECFDF5', label: 'Bakıcı' },
  review: { icon: MessageSquare, color: 'var(--color-accent-gold)', bg: '#FFFBEB', label: 'Yorum' },
  system: { icon: Settings, color: '#6B7280', bg: '#F3F4F6', label: 'Sistem' },
  payment: { icon: CreditCard, color: '#8B5CF6', bg: '#F5F3FF', label: 'Ödeme' },
};

// Tarih formatlama (Format date)
function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Saat formatlama (Format time)
function formatTime(date) {
  const d = new Date(date);
  return d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
}

// Tarihe göre gruplama (Group by date)
function groupByDate(notifications) {
  const groups = {};
  notifications.forEach((n) => {
    const day = formatDate(n.date);
    if (!groups[day]) groups[day] = [];
    groups[day].push(n);
  });
  return Object.entries(groups);
}

export default function Bildirimler() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [highlightId, setHighlightId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const cardRefs = useRef({});

  const setCardRef = useCallback((id, el) => {
    if (el) cardRefs.current[id] = el;
  }, []);

  // URL parametresinden vurgulama (Highlight from query param)
  useEffect(() => {
    const id = searchParams.get('highlight');
    if (!id) return;

    const numId = Number(id);
    setHighlightId(numId);

    const timer = setTimeout(() => {
      const el = cardRefs.current[numId];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    // Vurgulamayı temizle (Clear highlight)
    const clearTimer = setTimeout(() => {
      setHighlightId(null);
      setSearchParams({}, { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(clearTimer);
    };
  }, [searchParams, setSearchParams]);

  const unreadCount = notifications.filter((n) => !n.read).length; // okunmamış sayısı
  const dayGroups = groupByDate(notifications); // gün grupları

  // Tümünü okundu işaretle (Mark all as read)
  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  // Tek bildirimi okundu işaretle (Mark single as read)
  const markAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <CustomerLayout title="Bildirimler - BakıcıKolay">
      {/* Başlık (Header) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)]">Bildirimler</h1>
          <p className="text-[14px] text-[var(--color-text-muted)] mt-0.5">
            {unreadCount > 0
              ? `${unreadCount} okunmamış bildiriminiz var.`
              : 'Tüm bildirimleriniz okundu.'}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-[var(--color-primary)] border border-[var(--color-primary)] rounded-[var(--radius-sm)] hover:bg-[var(--color-primary-soft)] transition-colors"
          >
            <CheckCheck size={16} />
            Tümünü Okundu İşaretle
          </button>
        )}
      </div>

      {/* Zaman çizelgesi (Timeline) */}
      <div className="space-y-8">
        {dayGroups.map(([day, items]) => (
          <div key={day}>
            {/* Tarih başlığı (Date header) */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[var(--color-border)] rounded-full">
                <Clock size={13} className="text-[var(--color-text-muted)]" />
                <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">
                  {day}
                </span>
              </div>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>

            {/* Bildirim kartları (Notification cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {items.map((notification) => {
                const typeInfo = typeIcons[notification.type] || typeIcons.system;
                const Icon = typeInfo.icon;
                const isHighlighted = highlightId === notification.id;
                return (
                  <div
                    key={notification.id}
                    ref={(el) => setCardRef(notification.id, el)}
                    onClick={() => markAsRead(notification.id)}
                    className={`bg-white rounded-[var(--radius-md)] border p-5 flex gap-4 transition-all duration-500 ${
                      isHighlighted
                        ? 'border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/15 ring-2 ring-[var(--color-primary)]/20'
                        : !notification.read
                          ? 'border-[var(--color-primary)]/30 shadow-md shadow-[var(--color-primary)]/5 cursor-pointer hover:shadow-lg hover:shadow-[var(--color-primary)]/10'
                          : 'border-[var(--color-border)] hover:shadow-sm'
                    }`}
                  >
                    {/* Sol ikon (Left icon) */}
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: typeInfo.bg }}
                      >
                        <Icon size={20} style={{ color: typeInfo.color }} />
                      </div>
                      {!notification.read && (
                        <Circle size={8} className="text-[var(--color-primary)] fill-[var(--color-primary)]" />
                      )}
                    </div>

                    {/* İçerik (Content) */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className={`text-[14px] font-semibold leading-tight ${!notification.read || isHighlighted ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}>
                          {notification.title}
                        </p>
                        <span
                          className="text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                          style={{ backgroundColor: typeInfo.bg, color: typeInfo.color }}
                        >
                          {typeInfo.label}
                        </span>
                      </div>
                      <p className={`text-[13px] leading-relaxed mb-3 ${!notification.read || isHighlighted ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-muted)]'}`}>
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-1.5 text-[12px] text-[var(--color-text-muted)]">
                        <Clock size={12} />
                        <span>{formatTime(notification.date)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Boş durum (Empty state) */}
      {notifications.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <Bell size={40} className="text-[var(--color-border)] mx-auto mb-3" />
          <p className="text-[15px] font-medium text-[var(--color-text-primary)]">Bildirim yok</p>
          <p className="text-[13px] text-[var(--color-text-muted)] mt-1">
            Yeni bildirimleriniz burada görünecek.
          </p>
        </div>
      )}
    </CustomerLayout>
  );
}
