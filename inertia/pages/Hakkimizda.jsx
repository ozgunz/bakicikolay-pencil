import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/layout/Layout';
import {
  ShieldCheck,
  Award,
  Eye,
  Users,
  Heart,
  Clock,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react';

export default function Hakkimizda() {
  const { t } = useTranslation();

  const values = [
    {
      icon: ShieldCheck,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
      iconBg: 'bg-[var(--color-primary-soft)]',
      iconColor: 'text-[var(--color-primary)]',
    },
    {
      icon: Award,
      title: t('about.values.professionalism.title'),
      description: t('about.values.professionalism.description'),
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#22C55E]',
    },
    {
      icon: Eye,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
    },
  ];

  const stats = [
    { value: '5,000+', label: t('about.stats.families') },
    { value: '1,200+', label: t('about.stats.caregivers') },
    { value: '6 Yıl', label: t('about.stats.experience') },
    { value: '%98', label: t('about.stats.satisfaction') },
  ];

  const team = [
    { name: t('about.team.member1.name'), role: t('about.team.member1.role') },
    { name: t('about.team.member2.name'), role: t('about.team.member2.role') },
    { name: t('about.team.member3.name'), role: t('about.team.member3.role') },
  ];

  return (
    <Layout title="Hakkımızda | BakıcıKolay" activePage="hakkimizda">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center gap-4 px-5 py-14 text-center md:px-20"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/60 transition-colors hover:text-white/80">
            {t('common.homeBreadcrumb')}
          </Link>
          <ChevronRight className="h-4 w-4 text-white/40" />
          <span className="text-white/80">{t('about.hero.breadcrumb')}</span>
        </nav>

        <h1 className="font-heading text-[28px] font-bold tracking-tight text-white md:text-[40px]">
          {t('about.hero.title')}
        </h1>

        <p className="max-w-[600px] text-center font-body leading-relaxed text-white/75">
          {t('about.hero.description')}
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-[var(--color-white)] px-5 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="flex flex-1 flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 font-body text-sm font-semibold text-[var(--color-primary)]">
              {t('about.story.badge')}
            </span>
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)] md:text-[32px]">
              {t('about.story.title')}
            </h2>
            <p className="font-body text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {t('about.story.p1')}
            </p>
            <p className="font-body text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {t('about.story.p2')}
            </p>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-[var(--color-primary)]" />
              <span className="font-body text-sm font-semibold text-[var(--color-primary)]">
                {t('about.story.mission')}
              </span>
            </div>
          </div>

          <div className="h-[300px] w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-warm)] md:h-[380px] md:w-[480px]">
            <div className="flex h-full w-full items-center justify-center">
              <Users className="h-16 w-16 text-[var(--color-text-muted)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--color-bg)] px-5 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 font-body text-sm font-semibold text-[var(--color-primary)]">
              {t('about.values.badge')}
            </span>
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)] md:text-[32px]">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="flex flex-col items-center gap-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-white)] p-8 text-center"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] ${v.iconBg}`}
                >
                  <v.icon className={`h-7 w-7 ${v.iconColor}`} />
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {v.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {v.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--color-white)] px-5 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
          <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)] md:text-[32px]">
            {t('about.stats.title')}
          </h2>

          <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 text-center md:p-8"
              >
                <span className="font-heading text-[28px] font-bold text-[var(--color-primary)] md:text-[32px]">
                  {s.value}
                </span>
                <span className="font-body text-sm text-[var(--color-text-secondary)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[var(--color-bg)] px-5 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 font-body text-sm font-semibold text-[var(--color-primary)]">
              {t('about.team.badge')}
            </span>
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)] md:text-[32px]">
              {t('about.team.title')}
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-white)] p-8"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary-soft)]">
                  <span className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                    {member.name}
                  </span>
                  <span className="font-body text-sm text-[var(--color-text-secondary)]">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-bg-warm)] px-5 py-16 md:px-[200px] md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6">
          <h2 className="text-center font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)]">
            {t('about.cta.title')}
          </h2>
          <p className="max-w-[500px] text-center font-body text-[var(--color-text-secondary)]">
            {t('about.cta.subtitle')}
          </p>
          <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
            <Link
              href="/hizmet-detay"
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-8 py-3.5 font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)] md:w-auto"
            >
              {t('about.cta.requestCare')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:02125550000"
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-white)] px-8 py-3.5 font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-warm)] md:w-auto"
            >
              {t('about.cta.callUs')}
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
