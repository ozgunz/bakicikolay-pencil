import { useState, useRef } from 'react';
import { Layout } from '../components/layout/Layout';
import {
  Send,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Star,
  StarHalf,
  Facebook,
  Instagram,
  Twitter,
  ThumbsUp,
  MessageCircle,
  Share2,
  ArrowRight,
  Calendar,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Static Data                                                        */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question: 'BakıcıKolay nasıl çalışır?',
    answer:
      'BakıcıKolay, ihtiyacınıza uygun bakıcıları sizinle buluşturan bir platformdur. Başvurunuzu yaptıktan sonra, uzman ekibimiz sizin için en uygun bakıcı adaylarını belirler ve sizinle paylaşır. Mülakat sürecinde yanınızda olur, hizmet başladıktan sonra da düzenli takip yaparız.',
  },
  {
    question: 'Bakıcılar nasıl seçiliyor?',
    answer:
      'Tüm bakıcı adaylarımız kapsamlı bir değerlendirme sürecinden geçer. Adli sicil kaydı, referans kontrolü, sağlık raporu ve mesleki yetkinlik değerlendirmesi yapılır. Sadece bu aşamaların tümünü başarıyla tamamlayan adaylar platformumuza kabul edilir.',
  },
  {
    question: 'Ücretlendirme nasıl yapılıyor?',
    answer:
      'Ücretlendirme hizmet türüne, süresine ve bakıcının deneyimine göre belirlenir. Şeffaf fiyatlandırma politikamız sayesinde tüm ücretleri önceden görürsünüz. Ek veya gizli ücret yoktur.',
  },
  {
    question: 'Hizmetleriniz hangi şehirlerde geçerli?',
    answer:
      'Şu anda İstanbul, Ankara, İzmir, Bursa ve Antalya başta olmak üzere Türkiye\'nin 20\'den fazla büyük şehrinde hizmet vermekteyiz. Kapsama alanımızı sürekli genişletiyoruz.',
  },
  {
    question: 'Bakıcımdan memnun kalmazsam ne olur?',
    answer:
      'Memnuniyet garantimiz kapsamında, bakıcınızdan memnun kalmazsanız 7 gün içinde ücretsiz bakıcı değişikliği yapıyoruz. Müşteri memnuniyeti bizim için en önemli önceliktir.',
  },
];

const testimonials = [
  {
    quote:
      'Annem için harika bir bakıcı bulduk. Ekip çok ilgili ve profesyonel. Her aile bu hizmeti denemeli.',
    name: 'Ayşe Y.',
    role: 'İstanbul',
    rating: 5,
  },
  {
    quote:
      'Çocuklarım bakıcılarını çok seviyor. Güvenle işime gidebiliyorum. 2 yıldır memnunuz.',
    name: 'Mehmet K.',
    role: 'Ankara',
    rating: 4.5,
  },
  {
    quote:
      'Babam için gece bakımı ihtiyacımız vardı. Çok kısa sürede profesyonel bakıcı ile eşleştirildik.',
    name: 'Zeynep A.',
    role: 'İzmir',
    rating: 5,
  },
  {
    quote:
      'Hasta bakıcımız gerçekten çok iyi. Deneyimli ve sabırlı. Tüm ihtiyaçlarımızı karşılıyor.',
    name: 'Fatma S.',
    role: 'Bursa',
    rating: 4.5,
  },
  {
    quote:
      '3 aydır aldığımız hizmetten çok memnunuz. Bakıcımız ailemizin bir parçası oldu.',
    name: 'Hakan D.',
    role: 'Antalya',
    rating: 5,
  },
  {
    quote:
      'Yaşlı bakımında çok tecrübeli bir ekip. Annemin mutluluğu bizim için her şeyden önemli.',
    name: 'Selin T.',
    role: 'İstanbul',
    rating: 5,
  },
  {
    quote:
      'Profesyonel hizmet, güler yüzlü ekip. Çocuğumuz için en doğru seçimi yaptık.',
    name: 'Emre B.',
    role: 'İzmir',
    rating: 4.5,
  },
  {
    quote:
      'Referansları doğrulanmış bakıcılar bulmak artık çok kolay. Güvenle tavsiye ederim.',
    name: 'Derya K.',
    role: 'Ankara',
    rating: 5,
  },
];

const blogPosts = [
  {
    tag: 'Sağlık',
    tagColor: 'bg-[var(--color-primary)]',
    title: 'Yaşlı Bakımında Dikkat Edilmesi Gereken 10 Önemli Nokta',
    date: '15 Ocak 2026',
  },
  {
    tag: 'Rehber',
    tagColor: 'bg-[var(--color-positive)]',
    title: 'Doğru Bakıcıyı Seçmek İçin 5 Altın Kural',
    date: '12 Ocak 2026',
  },
  {
    tag: 'Beslenme',
    tagColor: 'bg-[var(--color-accent-gold)]',
    title: 'Çocuklarda Sağlıklı Beslenme Alışkanlıkları',
    date: '8 Ocak 2026',
  },
  {
    tag: 'Kariyer',
    tagColor: 'bg-red-500',
    title: 'Profesyonel Bakıcı Olmak: Kariyer Rehberi',
    date: '5 Ocak 2026',
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section
      className="w-full px-5 py-12 md:px-20 md:py-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 md:flex-row md:gap-[60px]">
        {/* Left – Hero Content */}
        <div className="flex flex-1 flex-col items-center gap-7 text-center md:items-start md:justify-center md:text-left">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-positive)]" />
            <span className="font-body text-sm text-white/80">
              Türkiye&apos;nin 1 Numaralı Bakım Platformu
            </span>
          </span>

          {/* Title */}
          <h1 className="font-heading text-[36px] font-bold leading-[1.1] tracking-[-1.5px] text-white md:text-[56px]">
            Aileniz İçin
            <br />
            Güvenilir Bakım
            <br />
            Hizmeti
          </h1>

          {/* Description */}
          <p className="max-w-[480px] font-body text-base leading-relaxed text-white/75 md:text-lg">
            Profesyonel ve güvenilir bakıcılarla ailenizin ihtiyaçlarına uygun
            bakım hizmeti. Yaşlı bakımı, çocuk bakımı ve özel bakım
            çözümlerimizle yanınızdayız.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-heading text-[28px] font-bold text-white">5,000+</span>
              <span className="font-body text-sm text-white/60">Mutlu Aile</span>
            </div>
            <div className="hidden h-10 w-px bg-white/30 md:block" />
            <div className="flex flex-col items-center md:items-start">
              <span className="font-heading text-[28px] font-bold text-white">1,200+</span>
              <span className="font-body text-sm text-white/60">Profesyonel Bakıcı</span>
            </div>
            <div className="hidden h-10 w-px bg-white/30 md:block" />
            <div className="flex flex-col items-center md:items-start">
              <span className="font-heading text-[28px] font-bold text-white">4.9/5</span>
              <span className="font-body text-sm text-white/60">Memnuniyet</span>
            </div>
          </div>
        </div>

        {/* Right – Service Form */}
        <div className="flex w-full flex-col gap-6 rounded-[var(--radius-lg)] bg-[var(--color-white)] p-7 shadow-lg md:w-[440px] md:p-9">
          <div className="flex flex-col gap-1">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
              Bakım Hizmeti Talep Et
            </h2>
            <p className="font-body text-sm text-[var(--color-text-secondary)]">
              Formu doldurun, size en uygun bakıcıyı bulalım.
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-4 md:flex-row md:gap-3">
              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                  Ad Soyad
                </span>
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="h-[46px] w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </label>
              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                  Telefon
                </span>
                <input
                  type="tel"
                  placeholder="0 (5XX) XXX XX XX"
                  className="h-[46px] w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                Hizmet Türü
              </span>
              <select className="h-[46px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 font-body text-sm text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]">
                <option value="">Hizmet türü seçiniz</option>
                <option value="yasli">Yaşlı Bakımı</option>
                <option value="cocuk">Çocuk Bakımı</option>
                <option value="gece">Gece Bakımı</option>
                <option value="ozel">Özel Bakım</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                Tercih Edilen Tarih
              </span>
              <input
                type="date"
                className="h-[46px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 font-body text-sm text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                Not
              </span>
              <textarea
                placeholder="Eklemek istediğiniz notlar..."
                className="h-20 resize-none rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-3 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              />
            </label>

            <button
              type="submit"
              className="flex h-[50px] w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Ücretsiz Başvuru Yap
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--color-positive)]" />
            <span className="font-body text-xs text-[var(--color-text-muted)]">
              Bilgileriniz gizli tutulur ve 3. kişilerle paylaşılmaz.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[var(--color-white)] px-5 py-12 md:px-[200px] md:py-20">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 font-body text-sm font-semibold text-[var(--color-primary)]">
            SSS
          </span>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="max-w-[560px] font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqItems.length - 1;
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors ${
                    isOpen
                      ? 'bg-[var(--color-primary-soft)]'
                      : 'bg-[var(--color-white)] hover:bg-[var(--color-bg)]'
                  }`}
                >
                  <span
                    className={`font-body text-[15px] font-medium ${
                      isOpen
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--color-text-primary)]'
                    }`}
                  >
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronDown className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                  ) : (
                    <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-text-muted)]" />
                  )}
                </button>
                {isOpen && (
                  <div className="bg-[var(--color-primary-soft)] px-6 pb-5">
                    <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                )}
                {!isLast && !isOpen && (
                  <div className="border-b border-[var(--color-border)]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 360 + 20;
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section
      className="w-full px-5 py-12 md:px-20 md:py-20"
      style={{ background: 'var(--gradient-testimonials)' }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 font-body text-sm font-semibold text-white">
            Müşteri Yorumları
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Binlerce Ailenin Güvenini Kazandık
          </h2>
          <p className="max-w-[560px] font-body text-base leading-relaxed text-white/75">
            Müşterilerimizin deneyimlerini ve memnuniyetlerini dinleyin.
          </p>
        </div>

        <div className="relative w-full">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll('left')}
              className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 md:-left-5"
            >
              <ChevronLeft className="h-5 w-5 text-[var(--color-text-primary)]" />
            </button>
          )}

          {/* Carousel track */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, index) => (
              <article
                key={index}
                className="flex w-[280px] shrink-0 flex-col gap-4 rounded-[var(--radius-lg)] border border-[#E5E7EB] bg-white p-7 md:w-[360px] md:gap-5 md:p-8"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const fullStars = Math.floor(t.rating);
                    const hasHalf = t.rating % 1 !== 0;
                    if (i < fullStars) {
                      return (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[var(--color-accent-gold)] text-[var(--color-accent-gold)] md:h-5 md:w-5"
                        />
                      );
                    }
                    if (i === fullStars && hasHalf) {
                      return (
                        <span key={i} className="relative h-4 w-4 md:h-5 md:w-5">
                          <Star className="absolute inset-0 h-4 w-4 text-[var(--color-accent-gold)] md:h-5 md:w-5" />
                          <StarHalf className="absolute inset-0 h-4 w-4 fill-[var(--color-accent-gold)] text-[var(--color-accent-gold)] md:h-5 md:w-5" />
                        </span>
                      );
                    }
                    return (
                      <Star
                        key={i}
                        className="h-4 w-4 text-[var(--color-accent-gold)] md:h-5 md:w-5"
                      />
                    );
                  })}
                </div>
                <p className="flex-1 font-body text-[13px] leading-relaxed text-[#374151] md:text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--color-primary)] md:h-10 md:w-10">
                    <span className="font-heading text-xs font-bold text-white md:text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body text-xs font-semibold text-[#1F2937] md:text-sm">{t.name}</span>
                    <span className="font-body text-[10px] text-[#9CA3AF] md:text-xs">{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll('right')}
              className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 md:-right-5"
            >
              <ChevronRight className="h-5 w-5 text-[var(--color-text-primary)]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function SocialMediaSection() {
  return (
    <section className="w-full bg-[var(--color-bg-warm)] px-5 py-12 md:px-20 md:py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 md:flex-row md:gap-[60px]">
        <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
          <span className="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 font-body text-sm font-semibold text-[var(--color-primary)]">
            Sosyal Medya
          </span>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Bizi Takip Edin
          </h2>
          <p className="max-w-[440px] font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
            Sosyal medya hesaplarımızdan güncel haberler, bakım ipuçları ve
            kampanyalardan haberdar olun.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[#1877F2] px-5 py-3 font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-5 py-3 font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-black)] px-5 py-3 font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Twitter className="h-5 w-5" />
              X / Twitter
            </a>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-white)] shadow-sm md:w-[500px]">
          <div className="flex items-center gap-3 bg-[#1877F2] px-5 py-4">
            <Facebook className="h-6 w-6 text-white" />
            <div className="flex flex-col">
              <span className="font-body text-sm font-bold text-white">BakıcıKolay</span>
              <span className="font-body text-xs text-white/70">
                @bakicikolay &middot; 12.5K Takipçi
              </span>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-[var(--color-border)]">
            <div className="flex flex-col gap-3 px-5 py-4">
              <p className="font-body text-sm leading-relaxed text-[var(--color-text-primary)]">
                Yeni yıl, yeni hizmetler! 2026 yılında da ailelerimizin
                yanındayız. Detaylar için bio&apos;daki linke tıklayın.
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 font-body text-xs text-[var(--color-text-muted)]">
                  <ThumbsUp className="h-3.5 w-3.5" /> 234
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-[var(--color-text-muted)]">
                  <MessageCircle className="h-3.5 w-3.5" /> 45
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-[var(--color-text-muted)]">
                  <Share2 className="h-3.5 w-3.5" /> 12
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 py-4">
              <p className="font-body text-sm leading-relaxed text-[var(--color-text-primary)]">
                Profesyonel bakıcılarımızla tanışmak ister misiniz? Her hafta
                yeni bakıcı hikayeleri paylaşıyoruz.
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 font-body text-xs text-[var(--color-text-muted)]">
                  <ThumbsUp className="h-3.5 w-3.5" /> 189
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-[var(--color-text-muted)]">
                  <MessageCircle className="h-3.5 w-3.5" /> 32
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-[var(--color-text-muted)]">
                  <Share2 className="h-3.5 w-3.5" /> 8
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="w-full bg-[var(--color-black)] px-5 py-10 md:px-20 md:py-[60px]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            Blog&apos;dan Son Yazılar
          </h2>
          <a
            href="/blog"
            className="hidden items-center gap-1 font-body text-sm font-medium text-[var(--color-primary-light)] transition-colors hover:text-white md:inline-flex"
          >
            Tüm Yazıları Gör
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col gap-3 rounded-[var(--radius-md)] bg-[#1A1A1A] p-5"
            >
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-body text-xs font-semibold text-white ${post.tagColor}`}
              >
                {post.tag}
              </span>
              <h3 className="font-body text-[15px] font-semibold leading-snug text-white">
                {post.title}
              </h3>
              <span className="mt-auto flex items-center gap-1.5 font-body text-xs text-[#888888]">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
            </article>
          ))}
        </div>

        <a
          href="/blog"
          className="inline-flex items-center justify-center gap-1 font-body text-sm font-medium text-[var(--color-primary-light)] transition-colors hover:text-white md:hidden"
        >
          Tüm Yazıları Gör
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function Anasayfa() {
  return (
    <Layout activePage="anasayfa" title="BakıcıKolay - Güvenilir Bakım Hizmeti">
      <HeroSection />
      <FaqSection />
      <TestimonialsSection />
      <SocialMediaSection />
      <BlogSection />
    </Layout>
  );
}
