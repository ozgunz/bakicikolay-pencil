import { Link } from 'react-router-dom';
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

const values = [
  {
    icon: ShieldCheck,
    title: 'Güvenilirlik',
    description:
      'Tüm bakıcılarımız kapsamlı güvenlik kontrolünden geçer. Adli sicil kaydı, referans kontrolü ve sağlık raporu zorunludur.',
    iconBg: 'bg-[var(--color-primary-soft)]',
    iconColor: 'text-[var(--color-primary)]',
  },
  {
    icon: Award,
    title: 'Profesyonellik',
    description:
      'Alanında uzman, sertifikalı bakıcılarla çalışıyoruz. Düzenli eğitim programlarıyla kaliteyi sürekli artırıyoruz.',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#22C55E]',
  },
  {
    icon: Eye,
    title: 'Şeffaflık',
    description:
      'Tüm süreçlerimiz şeffaftır. Fiyatlandırma, bakıcı profilleri ve hizmet detayları açıkça paylaşılır.',
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#D97706]',
  },
];

const stats = [
  { value: '5,000+', label: 'Mutlu Aile' },
  { value: '1,200+', label: 'Profesyonel Bakıcı' },
  { value: '6 Yıl', label: 'Deneyim' },
  { value: '%98', label: 'Memnuniyet Oranı' },
];

const team = [
  { name: 'Ahmet Yılmaz', role: 'Kurucu & CEO' },
  { name: 'Elif Demir', role: 'Operasyon Müdürü' },
  { name: 'Mehmet Kaya', role: 'Bakıcı İlişkileri Müdürü' },
];

export default function Hakkimizda() {
  return (
    <Layout title="Hakkımızda | BakıcıKolay" activePage="hakkimizda">
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
          <span className="text-white/80">Hakkımızda</span>
        </nav>

        <h1 className="font-heading text-[28px] font-bold tracking-tight text-white md:text-[40px]">
          Hakkımızda
        </h1>

        <p className="max-w-[600px] text-center font-body leading-relaxed text-white/75">
          2020&apos;den beri Türkiye&apos;nin en güvenilir bakım platformu olarak
          binlerce aileye hizmet veriyoruz.
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-[var(--color-white)] px-5 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="flex flex-1 flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 font-body text-sm font-semibold text-[var(--color-primary)]">
              Hikayemiz
            </span>
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)] md:text-[32px]">
              BakıcıKolay&apos;ın Hikayesi
            </h2>
            <p className="font-body text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              2020 yılında, bakım hizmeti aramanın ne kadar zor ve güvensiz olduğunu
              bizzat yaşadıktan sonra BakıcıKolay&apos;ı kurduk. Amacımız, ailelerin
              güvenle bakıcı bulabileceği, bakıcıların ise hak ettikleri değeri
              göreceği bir platform oluşturmaktı.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              Bugün Türkiye&apos;nin 20&apos;den fazla şehrinde, 5.000&apos;den fazla
              aileye hizmet veriyoruz. Her geçen gün büyüyen ekibimiz ve bakıcı
              ağımızla, Türkiye&apos;nin en güvenilir bakım platformu olmaya devam
              ediyoruz.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-[var(--color-primary)]" />
              <span className="font-body text-sm font-semibold text-[var(--color-primary)]">
                Misyonumuz: Her aileye güvenilir bakım
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
              Değerlerimiz
            </span>
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)] md:text-[32px]">
              Bizi Biz Yapan Değerler
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
            Rakamlarla BakıcıKolay
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
              Ekibimiz
            </span>
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--color-text-primary)] md:text-[32px]">
              Deneyimli Ekibimiz
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-white)] p-8"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary-soft)]">
                  <span className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                    {t.name}
                  </span>
                  <span className="font-body text-sm text-[var(--color-text-secondary)]">
                    {t.role}
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
            Hemen Başvurun, Size Uygun Bakıcıyı Bulalım
          </h2>
          <p className="max-w-[500px] text-center font-body text-[var(--color-text-secondary)]">
            Formu doldurun, ihtiyacınıza en uygun bakıcıyı en kısa sürede sizinle
            eşleştirelim.
          </p>
          <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
            <Link
              to="/hizmet-detay"
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-8 py-3.5 font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)] md:w-auto"
            >
              Başvuru Yap
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:02125550000"
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-white)] px-8 py-3.5 font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-warm)] md:w-auto"
            >
              Bizi Arayın
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
