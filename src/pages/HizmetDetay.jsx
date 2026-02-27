import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StepIndicator({ currentStep, t }) {
  const steps = [
    { number: 1, label: t('serviceDetail.steps.selectService') },
    { number: 2, label: t('serviceDetail.steps.yourInfo') },
    { number: 3, label: t('serviceDetail.steps.register') },
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
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

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

  const services = [
    {
      id: 'yasli',
      icon: <HeartHandshake className="w-6 h-6 text-[var(--color-primary)]" />,
      title: t('serviceDetail.steps.elderlyTitle'),
      description: t('serviceDetail.steps.elderlyDesc'),
    },
    {
      id: 'cocuk',
      icon: <Baby className="w-6 h-6 text-[var(--color-primary)]" />,
      title: t('serviceDetail.steps.childTitle'),
      description: t('serviceDetail.steps.childDesc'),
    },
    {
      id: 'gece',
      icon: <Moon className="w-6 h-6 text-[var(--color-primary)]" />,
      title: t('serviceDetail.steps.nightTitle'),
      description: t('serviceDetail.steps.nightDesc'),
    },
    {
      id: 'ozel',
      icon: <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />,
      title: t('serviceDetail.steps.specialTitle'),
      description: t('serviceDetail.steps.specialDesc'),
    },
  ];

  const faqData = [
    { question: t('serviceDetail.faq.q1'), answer: t('serviceDetail.faq.a1') },
    { question: t('serviceDetail.faq.q2'), answer: t('serviceDetail.faq.a2') },
    { question: t('serviceDetail.faq.q3'), answer: t('serviceDetail.faq.a3') },
    { question: t('serviceDetail.faq.q4'), answer: t('serviceDetail.faq.a4') },
    { question: t('serviceDetail.faq.q5'), answer: t('serviceDetail.faq.a5') },
  ];

  return (
    <Layout title="Hizmet Detay - BakıcıKolay" activePage="hizmetler">
      {/* 1. PAGE HERO */}
      <section
        className="flex flex-col items-center justify-center gap-4 py-12 px-5 md:px-20"
        style={{
          background: 'linear-gradient(160deg, #352EF2 0%, #1a1578 100%)',
        }}
      >
        <nav aria-label="Breadcrumb" className="flex items-center gap-2">
          <Link to="/" className="font-body text-sm text-white/60 hover:text-white/80 transition-colors">
            {t('common.homeBreadcrumb')}
          </Link>
          <ChevronRight className="w-4 h-4 text-white/40" />
          <span className="font-body text-sm text-white/80">{t('serviceDetail.hero.breadcrumb')}</span>
        </nav>

        <h1 className="font-heading text-2xl md:text-4xl font-bold text-white text-center">
          {t('serviceDetail.hero.title')}
        </h1>

        <p className="font-body text-sm md:text-base text-white/75 max-w-[550px] text-center">
          {t('serviceDetail.hero.description')}
        </p>
      </section>

      {/* 2. STEP 1 - SERVICE SELECTION */}
      {currentStep === 1 && (
        <section className="flex flex-col items-center bg-[var(--color-bg)] py-[60px] px-5 md:px-[200px]">
          <StepIndicator currentStep={1} t={t} />

          <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
            {t('serviceDetail.steps.whichService')}
          </h2>

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

          <button
            type="button"
            onClick={() => selectedService && setCurrentStep(2)}
            disabled={!selectedService}
            className="flex items-center justify-center px-12 py-3.5 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('serviceDetail.steps.continue')}
          </button>
        </section>
      )}

      {/* 3. STEP 2 - DETAIL FORM */}
      {currentStep === 2 && (
        <section className="flex flex-col items-center bg-[var(--color-white)] py-[60px] px-5 md:px-[300px]">
          <StepIndicator currentStep={2} t={t} />

          <div className="flex flex-col items-center gap-2 mb-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] text-center">
              {t('serviceDetail.steps.enterInfo')}
            </h2>
            <p className="font-body text-sm text-[var(--color-text-secondary)] text-center">
              {t('serviceDetail.steps.enterInfoSub')}
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full max-w-[740px] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-5 md:p-9">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                {t('serviceDetail.steps.fullName')}
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={t('serviceDetail.steps.fullNamePlaceholder')}
                className="h-[46px] px-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                {t('serviceDetail.steps.phone')}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t('serviceDetail.steps.phonePlaceholder')}
                className="h-[46px] px-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                {t('serviceDetail.steps.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('serviceDetail.steps.emailPlaceholder')}
                className="h-[46px] px-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="address" className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                {t('serviceDetail.steps.address')}
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={t('serviceDetail.steps.addressPlaceholder')}
                rows={3}
                className="px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full max-w-[740px]">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="w-full md:w-auto flex items-center justify-center px-8 py-3.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg)] transition-colors"
            >
              {t('serviceDetail.steps.goBack')}
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              {t('serviceDetail.steps.goToRegister')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* 4. STEP 3 - REGISTRATION */}
      {currentStep === 3 && (
        <section className="flex flex-col items-center bg-[var(--color-bg)] py-[60px] px-5 md:px-[350px]">
          <StepIndicator currentStep={3} t={t} />

          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-primary-soft)] font-body text-xs font-semibold text-[var(--color-primary)] mb-4">
            {t('serviceDetail.steps.lastStep')}
          </span>

          <h2 className="font-heading text-[28px] font-bold text-[var(--color-text-primary)] mb-2 text-center">
            {t('serviceDetail.steps.createAccount')}
          </h2>

          <p className="font-body text-sm text-[var(--color-text-secondary)] mb-8 text-center max-w-[500px]">
            {t('serviceDetail.steps.createAccountSub')}
          </p>

          <div className="flex flex-col gap-5 w-full max-w-[740px] bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-5 md:p-9">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                {t('serviceDetail.steps.password')}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t('serviceDetail.steps.passwordPlaceholder')}
                  className="w-full h-[46px] px-4 pr-12 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
                  aria-label={showPassword ? t('serviceDetail.steps.hidePassword') : t('serviceDetail.steps.showPassword')}
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="passwordConfirm" className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                {t('serviceDetail.steps.passwordConfirm')}
              </label>
              <div className="relative">
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={showPasswordConfirm ? 'text' : 'password'}
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                  placeholder={t('serviceDetail.steps.passwordConfirmPlaceholder')}
                  className="w-full h-[46px] px-4 pr-12 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-white)] font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
                  aria-label={showPasswordConfirm ? t('serviceDetail.steps.hidePassword') : t('serviceDetail.steps.showPassword')}
                >
                  {showPasswordConfirm ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
              />
              <span className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {t('serviceDetail.steps.termsAccept')}
              </span>
            </label>
          </div>

          <button
            type="button"
            disabled={!termsAccepted}
            className="flex items-center justify-center gap-2 w-full max-w-[740px] mt-8 py-3.5 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('serviceDetail.steps.submitApplication')}
            <CircleCheck className="w-4 h-4" />
          </button>
        </section>
      )}

      {/* 5. FAQ SECTION */}
      <section className="flex flex-col items-center bg-[var(--color-white)] py-[60px] px-5 md:px-[200px]">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-primary-soft)] font-body text-xs font-semibold text-[var(--color-primary)] mb-4">
          {t('serviceDetail.faq.badge')}
        </span>
        <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
          {t('serviceDetail.faq.title')}
        </h2>
        <p className="font-body text-sm text-[var(--color-text-secondary)] mb-10 text-center max-w-[500px]">
          {t('serviceDetail.faq.subtitle')}
        </p>

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

      {/* 6. CONTACT WIDGETS */}
      <section className="flex flex-col md:flex-row gap-6 bg-[var(--color-bg-warm)] py-[60px] px-5 md:px-[200px]">
        <div className="flex-1 flex flex-col items-center gap-4 bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-primary-soft)]">
            <Phone className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
            {t('serviceDetail.contact.phoneTitle')}
          </h3>
          <span className="font-body text-sm text-[var(--color-text-secondary)]">{t('serviceDetail.contact.phoneNumber')}</span>
          <a
            href="tel:08501234567"
            className="flex items-center justify-center px-8 py-3 rounded-[var(--radius-sm)] bg-[var(--color-primary)] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            {t('serviceDetail.contact.phoneAction')}
          </a>
        </div>

        <div className="flex-1 flex flex-col items-center gap-4 bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#DCFCE7]">
            <MessageCircle className="w-6 h-6 text-[var(--color-positive)]" />
          </div>
          <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
            {t('serviceDetail.contact.whatsappTitle')}
          </h3>
          <span className="font-body text-sm text-[var(--color-text-secondary)]">{t('serviceDetail.contact.whatsappNumber')}</span>
          <a
            href="https://wa.me/905321234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-3 rounded-[var(--radius-sm)] bg-[#22C55E] font-body text-sm font-semibold text-[var(--color-text-on-primary)] hover:bg-[#16A34A] transition-colors"
          >
            {t('serviceDetail.contact.whatsappAction')}
          </a>
        </div>
      </section>
    </Layout>
  );
}
