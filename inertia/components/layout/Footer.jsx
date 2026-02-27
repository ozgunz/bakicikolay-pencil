import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

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
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-primary)]">
              <span className="font-heading text-lg font-bold text-white">B</span>
            </div>
            <span className="font-heading text-xl font-bold text-white">BakıcıKolay</span>
          </div>
          <p className="font-body text-sm text-[#888888] leading-relaxed text-center md:text-left">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 md:gap-[60px]">
          {/* Hizmetler */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">{t('footer.services.title')}</span>
            <Link href="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.elderly')}</Link>
            <Link href="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.child')}</Link>
            <Link href="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.night')}</Link>
            <Link href="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.services.special')}</Link>
          </div>

          {/* Kurumsal */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">{t('footer.corporate.title')}</span>
            <Link href="/hakkimizda" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.about')}</Link>
            <Link href="/blog" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.blog')}</Link>
            <Link href="/kariyer" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.career')}</Link>
            <Link href="/iletisim" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.corporate.contact')}</Link>
          </div>

          {/* Yasal */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">{t('footer.legal.title')}</span>
            <Link href="/gizlilik" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.legal.privacy')}</Link>
            <Link href="/kullanim-kosullari" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.legal.terms')}</Link>
            <Link href="/kvkk" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">{t('footer.legal.kvkk')}</Link>
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
