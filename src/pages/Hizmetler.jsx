import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/layout/Layout';
import {
  HeartHandshake,
  Baby,
  Moon,
  Users,
  House,
  ShieldCheck,
  ArrowRight,
  Phone,
  ChevronRight,
} from 'lucide-react';

export default function Hizmetler() {
  const { t } = useTranslation();

  const services = [
    {
      icon: HeartHandshake,
      title: t('services.items.elderly.title'),
      description: t('services.items.elderly.description'),
      iconBg: 'bg-[var(--color-primary-soft)]',
      iconColor: 'text-[var(--color-primary)]',
    },
    {
      icon: Baby,
      title: t('services.items.child.title'),
      description: t('services.items.child.description'),
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#22C55E]',
    },
    {
      icon: Moon,
      title: t('services.items.night.title'),
      description: t('services.items.night.description'),
      iconBg: 'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
    },
    {
      icon: Users,
      title: t('services.items.companion.title'),
      description: t('services.items.companion.description'),
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
    },
    {
      icon: House,
      title: t('services.items.home.title'),
      description: t('services.items.home.description'),
      iconBg: 'bg-[#FEE2E2]',
      iconColor: 'text-[#EF4444]',
    },
    {
      icon: ShieldCheck,
      title: t('services.items.special.title'),
      description: t('services.items.special.description'),
      iconBg: 'bg-[#FFF7ED]',
      iconColor: 'text-[#EA580C]',
    },
  ];

  return (
    <Layout title="Hizmetler | BakıcıKolay" activePage="hizmetler">
      {/* Page Hero */}
      <section className="flex flex-col items-center text-center py-14 px-5 md:px-20 gap-4 bg-[linear-gradient(160deg,#352EF2_0%,#1a1578_100%)]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-white/60 hover:text-white/80 transition-colors">
            {t('common.homeBreadcrumb')}
          </Link>
          <ChevronRight className="w-4 h-4 text-white/40" />
          <span className="text-white/80">{t('services.hero.breadcrumb')}</span>
        </nav>

        <h1 className="font-heading text-[28px] md:text-[40px] font-bold text-white tracking-tight">
          {t('services.hero.title')}
        </h1>

        <p className="text-white/75 max-w-[600px] text-center leading-relaxed font-body">
          {t('services.hero.description')}
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-[var(--color-white)] py-[72px] px-5 md:px-[120px]">
        <div className="flex flex-col items-center gap-12 max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="bg-[var(--color-primary-soft)] text-[var(--color-primary)] rounded-full px-[18px] py-2 text-[13px] font-semibold">
              {t('services.section.badge')}
            </span>
            <h2 className="font-heading text-[32px] font-bold text-[var(--color-text-primary)] tracking-tight">
              {t('services.section.title')}
            </h2>
            <p className="text-[var(--color-text-secondary)] font-body">
              {t('services.section.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 flex flex-col gap-5"
              >
                <div
                  className={`w-14 h-14 rounded-[var(--radius-md)] ${service.iconBg} flex items-center justify-center`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-body">
                  {service.description}
                </p>

                <Link
                  to="/hizmet-detay"
                  className="flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-sm mt-auto hover:gap-2.5 transition-all"
                >
                  {t('common.readMore')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-bg)] py-[72px] px-5 md:px-[200px]">
        <div className="flex flex-col items-center gap-6 max-w-[1200px] mx-auto">
          <h2 className="font-heading text-[28px] font-bold text-[var(--color-text-primary)] text-center tracking-tight">
            {t('services.cta.title')}
          </h2>

          <p className="text-[var(--color-text-secondary)] text-center max-w-[500px] font-body">
            {t('services.cta.subtitle')}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              to="/hizmet-detay"
              className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-text-on-primary)] font-semibold rounded-[var(--radius-md)] px-8 py-3.5 hover:bg-[var(--color-primary-dark)] transition-colors w-full md:w-auto"
            >
              {t('services.cta.requestCare')}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:08501234567"
              className="flex items-center justify-center gap-2 border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-text-primary)] font-semibold rounded-[var(--radius-md)] px-8 py-3.5 hover:bg-[var(--color-bg-warm)] transition-colors w-full md:w-auto"
            >
              {t('services.cta.callUs')}
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
