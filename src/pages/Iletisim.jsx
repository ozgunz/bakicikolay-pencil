import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronRight,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '0 (212) 555 00 00',
    iconBg: 'bg-[var(--color-primary-soft)]',
    iconColor: 'text-[var(--color-primary)]',
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@bakicikolay.com',
    iconBg: 'bg-[var(--color-primary-soft)]',
    iconColor: 'text-[var(--color-primary)]',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Levent, Beşiktaş / İstanbul',
    iconBg: 'bg-[var(--color-primary-soft)]',
    iconColor: 'text-[var(--color-primary)]',
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: 'Hafta içi 09:00 – 18:00',
    iconBg: 'bg-[var(--color-primary-soft)]',
    iconColor: 'text-[var(--color-primary)]',
  },
];

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout title="İletişim | BakıcıKolay" activePage="iletisim">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center gap-4 px-5 py-14 text-center md:px-20"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-white/60 transition-colors hover:text-white/80">
            Ana Sayfa
          </Link>
          <ChevronRight className="h-4 w-4 text-white/40" />
          <span className="text-white/80">İletişim</span>
        </nav>

        <h1 className="font-heading text-[28px] font-bold tracking-tight text-white md:text-[40px]">
          İletişim
        </h1>

        <p className="max-w-[600px] text-center font-body leading-relaxed text-white/75">
          Bizimle iletişime geçin, size en kısa sürede dönüş yapalım.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-[var(--color-white)] px-5 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:flex-row md:gap-16">
          {/* Contact Form */}
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
              Bize Mesaj Gönderin
            </h2>
            <p className="font-body text-sm text-[var(--color-text-secondary)]">
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 md:flex-row md:gap-4">
                <label className="flex flex-1 flex-col gap-1.5">
                  <span className="font-body text-[13px] font-semibold text-[var(--color-text-primary)]">
                    Ad Soyad
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    className="h-[44px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </label>
                <label className="flex flex-1 flex-col gap-1.5">
                  <span className="font-body text-[13px] font-semibold text-[var(--color-text-primary)]">
                    Telefon
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0 (5XX) XXX XX XX"
                    className="h-[44px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[13px] font-semibold text-[var(--color-text-primary)]">
                  E-posta
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  className="h-[44px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[13px] font-semibold text-[var(--color-text-primary)]">
                  Konu
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Mesajınızın konusu"
                  className="h-[44px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[13px] font-semibold text-[var(--color-text-primary)]">
                  Mesajınız
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınızı yazınız..."
                  rows={5}
                  className="resize-none rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 py-3 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </label>

              <button
                type="submit"
                className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-[15px] font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                <Send className="h-[18px] w-[18px]" />
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="flex w-full flex-col gap-5 md:w-[380px]">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
              İletişim Bilgileri
            </h2>
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-white)] p-4"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] ${info.iconBg}`}
                >
                  <info.icon className={`h-5 w-5 ${info.iconColor}`} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-body text-xs text-[var(--color-text-muted)]">
                    {info.label}
                  </span>
                  <span className="font-body text-sm font-semibold text-[var(--color-text-primary)]">
                    {info.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[var(--color-bg)] px-5 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8">
          <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)]">
            Bizi Ziyaret Edin
          </h2>
          <div className="flex h-[300px] w-full items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-white)] md:h-[400px]">
            <MapPin className="h-12 w-12 text-[var(--color-text-muted)]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-bg-warm)] px-5 py-16 md:px-[200px] md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6">
          <h2 className="text-center font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)]">
            Hemen Arayın, Yardımcı Olalım
          </h2>
          <p className="max-w-[500px] text-center font-body text-[var(--color-text-secondary)]">
            Bakım hizmetleri hakkında bilgi almak için bizi arayabilir veya WhatsApp üzerinden yazabilirsiniz.
          </p>
          <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
            <a
              href="tel:02125550000"
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-8 py-3.5 font-body font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)] md:w-auto"
            >
              <Phone className="h-[18px] w-[18px]" />
              0 (212) 555 00 00
            </a>
            <a
              href="https://wa.me/902125550000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[#25D366] px-8 py-3.5 font-body font-semibold text-white transition-opacity hover:opacity-90 md:w-auto"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
