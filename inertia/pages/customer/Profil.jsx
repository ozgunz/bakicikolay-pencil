import { useState } from 'react';
import { CustomerLayout } from './components/layout/CustomerLayout';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Hash,
  Save,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

// Kullanıcı bilgileri (User information)
const userInfo = {
  memberId: 'BK-2025-04821',
  registrationDate: '2025-11-15',
  firstName: 'Ayşe',
  lastName: 'Yılmaz',
  email: 'ayse.yilmaz@email.com',
  phone: '0532 123 45 67',
  address: 'Caferağa Mah. Moda Cad. No:42 D:5',
  district: 'Kadıköy',
  city: 'İstanbul',
};

export default function Profil() {
  const [form, setForm] = useState(userInfo);
  const [saved, setSaved] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email' && value !== userInfo.email) {
      setEmailChanged(true);
    } else if (name === 'email') {
      setEmailChanged(false);
    }
    setForm({ ...form, [name]: value });
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <CustomerLayout title="Profilim - BakıcıKolay">
      <div className="max-w-2xl">
        <div className="mb-6">
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)]">Profilim</h1>
          <p className="text-[14px] text-[var(--color-text-muted)] mt-0.5">
            Kişisel bilgilerinizi görüntüleyin ve güncelleyin.
          </p>
        </div>

        <div className="bg-[var(--color-primary-soft)] rounded-[var(--radius-md)] p-5 mb-6 flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <Hash size={16} className="text-[var(--color-primary)]" />
            <div>
              <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wide">Üye ID</p>
              <p className="text-[14px] font-semibold font-mono text-[var(--color-primary)]">{form.memberId}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-[var(--color-primary)]" />
            <div>
              <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wide">Kayıt Tarihi</p>
              <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">{form.registrationDate}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[var(--radius-md)] border border-[var(--color-border)]">
            <div className="p-5 border-b border-[var(--color-border)]">
              <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
                <User size={16} className="text-[var(--color-primary)]" />
                Kişisel Bilgiler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">Ad</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">Soyad</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="p-5 border-b border-[var(--color-border)]">
              <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
                <Mail size={16} className="text-[var(--color-primary)]" />
                İletişim Bilgileri
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                  />
                  {emailChanged && (
                    <div className="flex items-center gap-2 mt-2 text-[12px] text-[var(--color-accent-gold)]">
                      <AlertCircle size={14} />
                      <span>E-posta değişikliği için doğrulama e-postası gönderilecektir.</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">Telefon</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-[var(--color-primary)]" />
                Adres Bilgileri
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">Adres</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">İlçe</label>
                    <input
                      type="text"
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">İl</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary)] text-white text-[14px] font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Save size={16} />
              Değişiklikleri Kaydet
            </button>
            {saved && (
              <span className="flex items-center gap-1.5 text-[13px] text-[var(--color-positive)] font-medium">
                <CheckCircle size={16} />
                Bilgileriniz güncellendi.
              </span>
            )}
          </div>
        </form>
      </div>
    </CustomerLayout>
  );
}
