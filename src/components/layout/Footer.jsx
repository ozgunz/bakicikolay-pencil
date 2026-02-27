import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col w-full bg-[var(--color-black)]">
      {/* Divider */}
      <div className="h-px w-full bg-[#222222]" />

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-[60px] px-5 md:px-20 py-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 md:w-[300px] items-center md:items-start">
          <Logo variant="white" className="h-7 w-auto" />
          <p className="font-body text-sm text-[#888888] leading-relaxed text-center md:text-left">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 md:gap-[60px]">
          {/* Hizmetler */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">{t('footer.services.title')}</span>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.elderly')}</Link>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.child')}</Link>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.night')}</Link>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.special')}</Link>
          </div>

          {/* Kurumsal */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">{t('footer.corporate.title')}</span>
            <Link to="/hakkimizda" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.about')}</Link>
            <Link to="/blog" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.blog')}</Link>
            <Link to="/kariyer" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.career')}</Link>
            <Link to="/iletisim" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.contact')}</Link>
          </div>

          {/* Yasal */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">{t('footer.legal.title')}</span>
            <Link to="/gizlilik" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.legal.privacy')}</Link>
            <Link to="/kullanim-kosullari" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.legal.terms')}</Link>
            <Link to="/kvkk" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.legal.kvkk')}</Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#222222]" />

      {/* Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-1.5 px-5 md:px-20 py-6">
        <span className="font-body text-[13px] text-[#666666]">
          {t('footer.copyright')}
        </span>
        <span className="font-body text-[13px] text-[#666666]">
          {t('footer.rights')}
        </span>
      </div>
    </footer>
  );
}
