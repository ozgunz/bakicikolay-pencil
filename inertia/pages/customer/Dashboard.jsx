import { Link } from '@inertiajs/react';
import { CustomerLayout } from './components/layout/CustomerLayout';
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  TrendingUp,
  Heart,
} from 'lucide-react';

// İstatistik kartları (Stats cards)
const stats = [
  { label: 'Aktif Talepler', value: '3', icon: ClipboardList, color: 'var(--color-primary)', bg: 'var(--color-primary-soft)' },
  { label: 'Tamamlanan', value: '12', icon: CheckCircle2, color: 'var(--color-positive)', bg: '#ECFDF5' },
  { label: 'Bekleyen', value: '1', icon: Clock, color: 'var(--color-accent-gold)', bg: '#FFFBEB' },
  { label: 'Değerlendirme', value: '4.8', icon: Star, color: 'var(--color-accent-gold)', bg: '#FFFBEB' },
];

// Son talepler (Recent requests)
const requests = [
  {
    id: 'TLP-2024-001',
    service: 'Yaşlı Bakımı',
    date: '2026-02-25',
    status: 'active',
    caregiver: 'Fatma Demir',
    time: '09:00 - 17:00',
  },
  {
    id: 'TLP-2024-002',
    service: 'Çocuk Bakımı',
    date: '2026-02-27',
    status: 'pending',
    caregiver: null,
    time: '08:00 - 18:00',
  },
  {
    id: 'TLP-2024-003',
    service: 'Yaşlı Bakımı',
    date: '2026-02-20',
    status: 'completed',
    caregiver: 'Elif Kaya',
    time: '10:00 - 16:00',
  },
  {
    id: 'TLP-2024-004',
    service: 'Hasta Bakımı',
    date: '2026-02-18',
    status: 'completed',
    caregiver: 'Fatma Demir',
    time: '09:00 - 21:00',
  },
];

// Son yorumlar (Recent reviews)
const reviews = [
  {
    id: 1,
    caregiver: 'Fatma Demir',
    rating: 5,
    comment: 'Fatma Hanım annemin bakımında çok özenli ve sabırlı. Kendisini gönül rahatlığıyla tavsiye ederim.',
    date: '2026-02-20',
  },
  {
    id: 2,
    caregiver: 'Elif Kaya',
    rating: 4,
    comment: 'Elif Hanım oldukça profesyonel ve deneyimli. İletişimi çok iyi.',
    date: '2026-02-15',
  },
];

// Bakıcı bilgileri (Caregiver info)
const caregiverInfo = {
  name: 'Fatma Demir',
  expertise: 'Yaşlı & Hasta Bakımı',
  experience: '8 yıl',
  phone: '0532 *** ** 90',
  email: 'f***@email.com',
  location: 'İstanbul, Kadıköy',
  rating: 4.9,
  startDate: '2025-11-15',
  avatar: 'FD',
};

// Durum renkleri (Status colors)
const statusColors = {
  active: { bg: '#ECFDF5', text: '#059669', label: 'Aktif' },
  pending: { bg: '#FFFBEB', text: '#D97706', label: 'Beklemede' },
  completed: { bg: '#F0F0FF', text: 'var(--color-primary)', label: 'Tamamlandı' },
};

export default function Dashboard() {
  return (
    <CustomerLayout title="Panel - BakıcıKolay">
      {/* İstatistikler (Stats) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-[var(--radius-md)] border border-[var(--color-border)] p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div
              className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center"
              style={{ backgroundColor: stat.bg }}
            >
              <stat.icon size={22} style={{ color: stat.color }} />
            </div>
            <div>
              <p className="text-[13px] text-[var(--color-text-muted)]">{stat.label}</p>
              <p className="text-[24px] font-bold text-[var(--color-text-primary)]">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ana içerik (Main content) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Talepler listesi (Requests list) */}
        <div className="lg:col-span-2 bg-white rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
            <h2 className="text-[16px] font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <ClipboardList size={18} className="text-[var(--color-primary)]" />
              Son Taleplerim
            </h2>
            <Link
              href="/customer/talepler"
              className="text-[13px] text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1"
            >
              Tümünü Gör <ArrowRight size={14} />
            </Link>
          </div>

          <div className="divide-y divide-[var(--color-border)]">
            {requests.map((request) => {
              const statusInfo = statusColors[request.status];
              return (
                <div
                  key={request.id}
                  className="p-5 flex items-center justify-between hover:bg-[var(--color-bg)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] flex items-center justify-center">
                      <Heart size={18} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-[var(--color-text-primary)]">
                        {request.service}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[12px] text-[var(--color-text-muted)] flex items-center gap-1">
                          <Calendar size={12} /> {request.date}
                        </span>
                        <span className="text-[12px] text-[var(--color-text-muted)] flex items-center gap-1">
                          <Clock size={12} /> {request.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {request.caregiver && (
                      <span className="text-[13px] text-[var(--color-text-secondary)] hidden sm:block">
                        {request.caregiver}
                      </span>
                    )}
                    <span
                      className="text-[12px] font-medium px-3 py-1 rounded-full"
                      style={{ backgroundColor: statusInfo.bg, color: statusInfo.text }}
                    >
                      {statusInfo.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bakıcı bilgisi (Caregiver info) */}
        <div className="bg-white rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <div className="p-5 border-b border-[var(--color-border)]">
            <h2 className="text-[16px] font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <Heart size={18} className="text-[var(--color-primary)]" />
              Bakıcım
            </h2>
          </div>

          <div className="p-5">
            {/* Avatar ve bilgi (Avatar & info) */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white text-[18px] font-bold">
                {caregiverInfo.avatar}
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  {caregiverInfo.name}
                </p>
                <p className="text-[13px] text-[var(--color-text-muted)]">{caregiverInfo.expertise}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={14} className="text-[var(--color-accent-gold)] fill-[var(--color-accent-gold)]" />
                  <span className="text-[13px] font-medium text-[var(--color-text-primary)]">
                    {caregiverInfo.rating}
                  </span>
                  <span className="text-[12px] text-[var(--color-text-muted)]">puan</span>
                </div>
              </div>
            </div>

            {/* Detaylar (Details) */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[13px]">
                <TrendingUp size={16} className="text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-muted)]">Deneyim:</span>
                <span className="text-[var(--color-text-primary)] font-medium">{caregiverInfo.experience}</span>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <Calendar size={16} className="text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-muted)]">Başlangıç:</span>
                <span className="text-[var(--color-text-primary)] font-medium">{caregiverInfo.startDate}</span>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <Phone size={16} className="text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-muted)]">Telefon:</span>
                <span className="text-[var(--color-text-primary)] font-medium">{caregiverInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <Mail size={16} className="text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-muted)]">E-posta:</span>
                <span className="text-[var(--color-text-primary)] font-medium">{caregiverInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <MapPin size={16} className="text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-muted)]">Konum:</span>
                <span className="text-[var(--color-text-primary)] font-medium">{caregiverInfo.location}</span>
              </div>
            </div>

            <button className="w-full mt-5 py-2.5 bg-[var(--color-primary)] text-white text-[13px] font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-primary-dark)] transition-colors">
              İletişime Geç
            </button>
          </div>
        </div>
      </div>

      {/* Yorumlar (Reviews) */}
      <div className="mt-6 bg-white rounded-[var(--radius-md)] border border-[var(--color-border)]">
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
          <h2 className="text-[16px] font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
            <Star size={18} className="text-[var(--color-accent-gold)]" />
            Yorumlarım
          </h2>
          <Link
            href="/customer/yorumlar"
            className="text-[13px] text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1"
          >
            Tümünü Gör <ArrowRight size={14} />
          </Link>
        </div>

        <div className="divide-y divide-[var(--color-border)]">
          {reviews.map((review) => (
            <div key={review.id} className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-primary-soft)] flex items-center justify-center text-[var(--color-primary)] text-[13px] font-semibold">
                    {review.caregiver.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[var(--color-text-primary)]">
                      {review.caregiver}
                    </p>
                    <p className="text-[12px] text-[var(--color-text-muted)]">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < review.rating
                          ? 'text-[var(--color-accent-gold)] fill-[var(--color-accent-gold)]'
                          : 'text-[var(--color-border)]'
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed ml-12">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CustomerLayout>
  );
}
