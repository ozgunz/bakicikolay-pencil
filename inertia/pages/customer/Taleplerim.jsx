import { useState } from 'react';
import { CustomerLayout } from './components/layout/CustomerLayout';
import {
  Plus,
  Search,
  Eye,
  X,
  CheckCircle,
  Clock,
  AlertCircle,
  ShieldCheck,
  ChevronDown,
  Calendar,
  MapPin,
  FileText,
  Phone,
} from 'lucide-react';

// Talep verileri (Request data)
const requestsData = [
  {
    id: 'TLP-2026-001',
    service: 'Yaşlı Bakımı',
    date: '2026-02-25',
    time: '09:00 - 17:00',
    location: 'İstanbul, Kadıköy',
    status: 'active',
    caregiver: 'Fatma Demir',
    notes: 'Annem için düzenli bakım hizmeti.',
  },
  {
    id: 'TLP-2026-002',
    service: 'Çocuk Bakımı',
    date: '2026-02-27',
    time: '08:00 - 18:00',
    location: 'İstanbul, Beşiktaş',
    status: 'pending',
    caregiver: null,
    notes: '2 yaşında çocuğum için bakıcı arıyorum.',
  },
  {
    id: 'TLP-2026-003',
    service: 'Yaşlı Bakımı',
    date: '2026-02-20',
    time: '10:00 - 16:00',
    location: 'İstanbul, Üsküdar',
    status: 'completed',
    caregiver: 'Elif Kaya',
    notes: 'Babam için günlük bakım.',
  },
  {
    id: 'TLP-2026-004',
    service: 'Hasta Bakımı',
    date: '2026-02-18',
    time: '09:00 - 21:00',
    location: 'İstanbul, Kadıköy',
    status: 'completed',
    caregiver: 'Fatma Demir',
    notes: 'Ameliyat sonrası bakım desteği.',
  },
  {
    id: 'TLP-2026-005',
    service: 'Çocuk Bakımı',
    date: '2026-02-10',
    time: '07:00 - 19:00',
    location: 'İstanbul, Ataşehir',
    status: 'cancelled',
    caregiver: null,
    notes: 'İptal edildi.',
  },
  {
    id: 'TLP-2026-006',
    service: 'Yaşlı Bakımı',
    date: '2026-02-05',
    time: '09:00 - 17:00',
    location: 'İstanbul, Maltepe',
    status: 'completed',
    caregiver: 'Ayşe Çelik',
    notes: 'Haftalık bakım hizmeti.',
  },
];

// Durum yapılandırması (Status configuration)
const statusConfig = {
  active: { bg: '#ECFDF5', text: '#059669', label: 'Aktif', icon: CheckCircle },
  pending: { bg: '#FFFBEB', text: '#D97706', label: 'Beklemede', icon: Clock },
  completed: { bg: '#F0F0FF', text: 'var(--color-primary)', label: 'Tamamlandı', icon: CheckCircle },
  cancelled: { bg: '#FEF2F2', text: '#DC2626', label: 'İptal', icon: AlertCircle },
};

// Hizmet türleri (Service types)
const serviceTypes = ['Yaşlı Bakımı', 'Çocuk Bakımı', 'Hasta Bakımı', 'Engelli Bakımı'];

// Yeni talep modalı (New request modal)
function NewRequestModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({
    service: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      service: form.service,
      date: form.date,
      time: `${form.startTime} - ${form.endTime}`,
      location: form.location,
      notes: form.notes,
    });
    setForm({ service: '', date: '', startTime: '', endTime: '', location: '', phone: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-[var(--radius-lg)] shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 className="text-[18px] font-semibold text-[var(--color-text-primary)]">
            Yeni Talep Oluştur
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg)] transition-colors"
          >
            <X size={20} className="text-[var(--color-text-muted)]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
              Hizmet Türü
            </label>
            <div className="relative">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full appearance-none px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
              >
                <option value="">Seçiniz...</option>
                {serviceTypes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
                Tarih
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
                Başlangıç
              </label>
              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
                Bitiş
              </label>
              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
              Konum
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Örn: İstanbul, Kadıköy"
                required
                className="w-full pl-9 pr-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
              İletişim Telefonu
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="05XX XXX XX XX"
                required
                className="w-full pl-9 pr-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
              Notlar
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Bakım hizmetiyle ilgili eklemek istediğiniz detaylar..."
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] text-[14px] font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-bg)] transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[var(--color-primary)] text-white text-[14px] font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Talep Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Taleplerim() {
  const [modalOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState(requestsData);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleNewRequest = (data) => {
    const newRequest = {
      id: `TLP-2026-${String(requests.length + 1).padStart(3, '0')}`,
      service: data.service,
      date: data.date,
      time: data.time,
      location: data.location,
      status: 'pending',
      caregiver: null,
      notes: data.notes,
    };
    setRequests([newRequest, ...requests]);
  };

  const filtered = requests.filter((r) => {
    const matchesSearch =
      !search ||
      r.service.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      (r.caregiver && r.caregiver.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = filter === 'all' || r.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <CustomerLayout title="Taleplerim - BakıcıKolay">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)]">Taleplerim</h1>
          <p className="text-[14px] text-[var(--color-text-muted)] mt-0.5">
            Tüm bakım taleplerinizi buradan takip edebilirsiniz.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white text-[14px] font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-primary-dark)] transition-colors shadow-md shadow-[var(--color-primary)]/20"
        >
          <Plus size={18} />
          Yeni Talep
        </button>
      </div>

      <div className="bg-white rounded-[var(--radius-md)] border border-[var(--color-border)] mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Talep ara (ID, hizmet, bakıcı)..."
              className="w-full pl-9 pr-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
            />
          </div>

          <div className="flex gap-1 bg-[var(--color-bg)] rounded-[var(--radius-sm)] p-1">
            {[
              { key: 'all', label: 'Tümü' },
              { key: 'active', label: 'Aktif' },
              { key: 'pending', label: 'Beklemede' },
              { key: 'completed', label: 'Tamamlandı' },
              { key: 'cancelled', label: 'İptal' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-[6px] transition-all ${
                  filter === f.key
                    ? 'bg-white text-[var(--color-text-primary)] shadow-sm'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[var(--radius-md)] border border-[var(--color-border)] overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <th className="text-left text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-5 py-3">
                  Talep No
                </th>
                <th className="text-left text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-5 py-3">
                  Hizmet
                </th>
                <th className="text-left text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-5 py-3">
                  Tarih & Saat
                </th>
                <th className="text-left text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-5 py-3">
                  Konum
                </th>
                <th className="text-left text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-5 py-3">
                  Bakıcı
                </th>
                <th className="text-left text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-5 py-3">
                  Durum
                </th>
                <th className="text-right text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-5 py-3">
                  İşlem
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {filtered.map((request) => {
                const statusInfo = statusConfig[request.status];
                const StatusIcon = statusInfo.icon;
                return (
                  <tr key={request.id} className="hover:bg-[var(--color-bg)]/50 transition-colors">
                    <td className="px-5 py-4">
                      <span className="text-[13px] font-mono font-medium text-[var(--color-primary)]">
                        {request.id}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
                        {request.service}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="text-[13px] text-[var(--color-text-primary)]">{request.date}</div>
                      <div className="text-[12px] text-[var(--color-text-muted)]">{request.time}</div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-[var(--color-text-secondary)]">
                        {request.location}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      {request.caregiver ? (
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[var(--color-primary-soft)] flex items-center justify-center text-[var(--color-primary)] text-[11px] font-semibold">
                            {request.caregiver.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <span className="text-[13px] text-[var(--color-text-primary)]">
                            {request.caregiver}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[13px] text-[var(--color-text-muted)] italic">
                          Atanmadı
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: statusInfo.bg, color: statusInfo.text }}
                      >
                        <StatusIcon size={12} />
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="p-2 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg)] transition-colors">
                        <Eye size={16} className="text-[var(--color-text-muted)]" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="md:hidden divide-y divide-[var(--color-border)]">
          {filtered.map((request) => {
            const statusInfo = statusConfig[request.status];
            const StatusIcon = statusInfo.icon;
            return (
              <div key={request.id} className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-mono font-medium text-[var(--color-primary)]">
                    {request.id}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: statusInfo.bg, color: statusInfo.text }}
                  >
                    <StatusIcon size={12} />
                    {statusInfo.label}
                  </span>
                </div>
                <p className="text-[14px] font-medium text-[var(--color-text-primary)]">
                  {request.service}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {request.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {request.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {request.location}
                  </span>
                </div>
                {request.caregiver && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-primary-soft)] flex items-center justify-center text-[var(--color-primary)] text-[10px] font-semibold">
                      {request.caregiver.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="text-[13px] text-[var(--color-text-secondary)]">
                      {request.caregiver}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <FileText size={40} className="text-[var(--color-border)] mx-auto mb-3" />
            <p className="text-[15px] font-medium text-[var(--color-text-primary)]">
              Talep bulunamadı
            </p>
            <p className="text-[13px] text-[var(--color-text-muted)] mt-1">
              Arama kriterlerinizi değiştirmeyi deneyin.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 bg-[#ECFDF5] border border-[#BBF7D0] rounded-[var(--radius-md)] px-6 py-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0">
          <ShieldCheck size={20} className="text-white" />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#166534]">
            Taleplerinizi aynı gün yanıtlıyoruz
          </p>
          <p className="text-[13px] text-[#15803D] mt-0.5">
            Uzman ekibimiz talebinizi değerlendirip size en uygun bakıcıyı en kısa sürede atayacaktır.
          </p>
        </div>
      </div>

      <NewRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleNewRequest} />
    </CustomerLayout>
  );
}
