import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import {
  ChevronRight,
  HeartHandshake,
  Baby,
  Moon,
  ShieldCheck,
  ArrowRight,
  EyeOff,
  Eye,
  CircleCheck,
  ChevronDown,
  Phone,
  MessageCircle,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    id: 'yasli',
    icon: <HeartHandshake className="w-6 h-6 text-[var(--color-primary)]" />,
    title: 'Yaşlı Bakımı',
    description: 'Deneyimli bakıcılarımızla yaşlılarınız güvende.',
  },
  {
    id: 'cocuk',
    icon: <Baby className="w-6 h-6 text-[var(--color-primary)]" />,
    title: 'Çocuk Bakımı',
    description: 'Çocuklarınız için güvenilir ve sevecen bakıcılar.',
  },
  {
    id: 'gece',
    icon: <Moon className="w-6 h-6 text-[var(--color-primary)]" />,
    title: 'Gece Bakımı',
    description: 'Gece saatlerinde profesyonel bakım desteği.',
  },
  {
    id: 'ozel',
    icon: <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />,
    title: 'Özel Bakım',
    description: 'Özel ihtiyaçlara yönelik kişiselleştirilmiş bakım.',
  },
];

const faqData = [
  {
    question: 'Bakım hizmeti nasıl başlar?',
    answer:
      'Formu doldurduktan sonra ekibimiz sizinle iletişime geçer ve ihtiyacınıza uygun bakıcıyı eşleştiririz. İlk görüşme ücretsizdir.',
  },
  {
    question: 'Bakıcılar hangi eğitimlerden geçti?',
    answer:
      'Tüm bakıcılarımız sağlık bakanlığı onaylı eğitim programlarından mezun olmuştur ve düzenli olarak denetlenmektedir.',
  },
  {
    question: 'Ücretlendirme nasıl yapılır?',
    answer:
      'Ücretlendirme hizmet türüne ve süresine göre değişir. Detaylı fiyat bilgisi için bizimle iletişime geçebilirsiniz.',
  },
  {
    question: 'Hizmet iptali nasıl yapılır?',
    answer:
      'Hizmeti en az 24 saat önceden iptal edebilirsiniz. İptal işlemini hesabınız üzerinden veya telefon ile gerçekleştirebilirsiniz.',
  },
  {
    question: 'Acil durumlarda ne yapmalıyım?',
    answer:
      'Acil durumlarda 7/24 destek hattımızı arayabilirsiniz. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StepIndicator({ currentStep }) {
  const steps = [
    { number: 1, label: 'Hizmet Seçin' },
    { number: 2, label: 'Bilgileriniz' },
    { number: 3, label: 'Kayıt' },
  ];

  return (
    <div className="flex items-center justify-center gap-6 md:gap-8 mb-10">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-full font-heading text-sm font-bold transition-colors ${
                currentStep === step.number
                  ? 'bg-[var(--color-primary)] text-[var(--color-text-on-primary)]'
                  : currentStep > step.number
                    ? 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                    : 'bg-[var(--color-border)] text-[var(--color-text-muted)]'
              }`}
            >
              {step.number}
            </div>
            <span
              className={`hidden md:block font-body text-sm transition-colors ${
                currentStep === step.number
                  ? 'font-bold text-[var(--color-text-primary)]'
                  : 'font-medium text-[var(--color-text-muted)]'
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-8 md:w-12 h-px bg-[var(--color-border)]" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */

export default function HizmetDetay() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  /* Form state */
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout title="Hizmet Detay - BakıcıKolay" activePage="hizmetler">
      {/* ============================================================ */}
      {/*  1. PAGE HERO                                                */}
      {/* ============================================================ */}
      <section
        className="flex flex-col items-center justify-center gap-4 py-12 px-5 md:px-20"
        style={{
          background: 'linear-gradient(160deg, #352EF2 0%, #1a1578 100%)',
        }}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2">
          <span className="font-body text-sm text-white/60">Ana Sayfa</span>
          <ChevronRight className="w-4 h-4 text-white/40" />
          <span className="font-body text-sm text-white/80">Hizmet Detay</span>
        </nav>

        {/* Title */}
        <h1 className="font-heading text-2xl md:text-4xl font-bold text-white text-center">
          Bakım Hizmeti Başvurusu
        </h1>

        {/* Description */}
        <p className="font-body text-sm md:text-base text-white/75 max-w-[550px] text-center">
          İhtiyacınıza uygun hizmeti seçin, formu doldurun ve hemen başvurunuzu
          tamamlayın. Süreç çok basit!
        </p>
      </section>

      {/* ============================================================ */}
      {/*  2. STEP 1 - SERVICE SELECTION                               */}
      {/* ============================================================ */}
      {currentStep === 1 && (
        <section className="flex flex-col items-center bg-[var(--color-bg)] py-[60px] px-5 md:px-[200px]">
          <StepIndicator currentStep={1} />

          <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
            Hangi hizmete ihtiyacınız var?
          </h2>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[740px] mb-10">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service.id)}
                className={`flex items-center gap-4 bg-[var(--color-white)] rounded-[var(--radius-md)] p-6 text-left transition-all cursor-pointer ${
                  selectedService === service.id
                    ? 'border-2 border-[var(--color-primary)] shadow-sm'
                    : 'border border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary-soft)] shrink-0">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-base font-semibold text-[var(--color-text-primary)]">
                    {service.title}
                  </span>
                  <span className="font-body text-sm text-[var(--color-text-secondary)]">
                    {service.description}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={() => selectedService && setCurrentStep(2)}
            disabled={!selectedService}
            className="flex items-center justify-center px-12 py-3.5 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Devam Et
          </button>
        </section>
      )}

      {/* ============================================================ */}
      {/*  3. STEP 2 - DETAIL FORM                                     */}
      {/* ============================================================ */}
      {currentStep === 2 && (
        <section className="flex flex-col items-center bg-[var(--color-white)] py-[60px] px-5 md:px-[300px]">
          <StepIndicator currentStep={2} />

          {/* Form Header */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] text-center">
              Bilgilerinizi Girin
            </h2>
            <p className="font-body text-sm text-[var(--color-text-secondary)] text-center">
              Lütfen bilgilerinizi eksiksiz doldurun.
            </p>
          </div>

          {/* Form Card */}
          <div className="flex flex-col gap-5 w-full max-w-[740px] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-5 md:p-9">
            {/* Ad Soyad */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fullName"
                className="font-body text-[13px] font-medium text-[var(--color-text-primary)]"
              >
                Ad Soyad
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Adınız ve soyadınız"
                className="h-[46px] px-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>

            {/* Telefon */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="font-body text-[13px] font-medium text-[var(--color-text-primary)]"
              >
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="05XX XXX XX XX"
                className="h-[46px] px-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>

            {/* E-posta */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-body text-[13px] font-medium text-[var(--color-text-primary)]"
              >
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ornek@email.com"
                className="h-[46px] px-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>

            {/* Adres */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="address"
                className="font-body text-[13px] font-medium text-[var(--color-text-primary)]"
              >
                Adres
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Açık adresiniz"
                rows={3}
                className="px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full max-w-[740px]">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="w-full md:w-auto flex items-center justify-center px-8 py-3.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg)] transition-colors"
            >
              Geri Dön
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Kayıt Adımına Geç
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/*  4. STEP 3 - REGISTRATION                                    */}
      {/* ============================================================ */}
      {currentStep === 3 && (
        <section className="flex flex-col items-center bg-[var(--color-bg)] py-[60px] px-5 md:px-[350px]">
          <StepIndicator currentStep={3} />

          {/* Badge */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-primary-soft)] font-body text-xs font-semibold text-[var(--color-primary)] mb-4">
            Son Adım
          </span>

          {/* Title */}
          <h2 className="font-heading text-[28px] font-bold text-[var(--color-text-primary)] mb-2 text-center">
            Hesabınızı Oluşturun
          </h2>

          {/* Description */}
          <p className="font-body text-sm text-[var(--color-text-secondary)] mb-8 text-center max-w-[500px]">
            Başvurunuzu takip edebilmek için bir parola belirleyin.
          </p>

          {/* Card */}
          <div className="flex flex-col gap-5 w-full max-w-[740px] bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-5 md:p-9">
            {/* Parola */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="font-body text-[13px] font-medium text-[var(--color-text-primary)]"
              >
                Parola
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="En az 8 karakter"
                  className="w-full h-[46px] px-4 pr-12 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
                  aria-label={showPassword ? 'Parolayı gizle' : 'Parolayı göster'}
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Parola Tekrar */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="passwordConfirm"
                className="font-body text-[13px] font-medium text-[var(--color-text-primary)]"
              >
                Parola Tekrar
              </label>
              <div className="relative">
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={showPasswordConfirm ? 'text' : 'password'}
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                  placeholder="Parolanızı tekrar girin"
                  className="w-full h-[46px] px-4 pr-12 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
                  aria-label={
                    showPasswordConfirm ? 'Parolayı gizle' : 'Parolayı göster'
                  }
                >
                  {showPasswordConfirm ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
              />
              <span className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Kullanım koşullarını ve gizlilik politikasını okudum, kabul
                ediyorum.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            disabled={!termsAccepted}
            className="flex items-center justify-center gap-2 w-full max-w-[740px] mt-8 py-3.5 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Başvuruyu Tamamla
            <CircleCheck className="w-4 h-4" />
          </button>
        </section>
      )}

      {/* ============================================================ */}
      {/*  5. FAQ SECTION                                              */}
      {/* ============================================================ */}
      <section className="flex flex-col items-center bg-[var(--color-white)] py-[60px] px-5 md:px-[200px]">
        {/* Header */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-primary-soft)] font-body text-xs font-semibold text-[var(--color-primary)] mb-4">
          Sık Sorulanlar
        </span>
        <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
          Hizmetimiz Hakkında
        </h2>
        <p className="font-body text-sm text-[var(--color-text-secondary)] mb-10 text-center max-w-[500px]">
          Hizmetlerimiz hakkında en çok sorulan soruların cevaplarını burada
          bulabilirsiniz.
        </p>

        {/* Accordion */}
        <div className="w-full max-w-[740px] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${index < faqData.length - 1 ? 'border-b border-[var(--color-border)]' : ''}`}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-[var(--color-bg)] transition-colors"
                aria-expanded={openFaq === index}
              >
                <span className="font-body text-sm font-semibold text-[var(--color-text-primary)]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--color-text-muted)] shrink-0 transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. CONTACT WIDGETS                                          */}
      {/* ============================================================ */}
      <section className="flex flex-col md:flex-row gap-6 bg-[var(--color-bg-warm)] py-[60px] px-5 md:px-[200px]">
        {/* Phone Card */}
        <div className="flex-1 flex flex-col items-center gap-4 bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-primary-soft)]">
            <Phone className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
            Telefon ile Ulaşın
          </h3>
          <span className="font-body text-sm text-[var(--color-text-secondary)]">
            0850 123 45 67
          </span>
          <a
            href="tel:08501234567"
            className="flex items-center justify-center px-8 py-3 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Ara
          </a>
        </div>

        {/* WhatsApp Card */}
        <div className="flex-1 flex flex-col items-center gap-4 bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#DCFCE7]">
            <MessageCircle className="w-6 h-6 text-[var(--color-positive)]" />
          </div>
          <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
            WhatsApp ile Yazın
          </h3>
          <span className="font-body text-sm text-[var(--color-text-secondary)]">
            +90 532 123 45 67
          </span>
          <a
            href="https://wa.me/905321234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-3 rounded-[var(--radius-sm)] bg-[#22C55E] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[#16A34A] transition-colors"
          >
            Yaz
          </a>
        </div>
      </section>
    </Layout>
  );
}
