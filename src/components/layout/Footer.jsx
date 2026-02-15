import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export function Footer() {
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
            Türkiye&apos;nin güvenilir bakım platformu. Yaşlı ve çocuk bakımında profesyonel çözümler.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 md:gap-[60px]">
          {/* Hizmetler */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">Hizmetler</span>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Yaşlı Bakımı</Link>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Çocuk Bakımı</Link>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Gece Bakımı</Link>
            <Link to="/hizmetler" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Özel Bakım</Link>
          </div>

          {/* Kurumsal */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">Kurumsal</span>
            <Link to="/hakkimizda" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Hakkımızda</Link>
            <Link to="/blog" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Blog</Link>
            <Link to="/kariyer" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Kariyer</Link>
            <Link to="/iletisim" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">İletişim</Link>
          </div>

          {/* Yasal */}
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-sm font-semibold text-white">Yasal</span>
            <Link to="/gizlilik" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link to="/kullanim-kosullari" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">Kullanım Koşulları</Link>
            <Link to="/kvkk" className="font-body text-[13px] text-[#888888] hover:text-white transition-colors">KVKK</Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#222222]" />

      {/* Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-1.5 px-5 md:px-20 py-6">
        <span className="font-body text-[13px] text-[#666666]">
          &copy; 2026 BakıcıKolay.com &mdash; Tüm hakları saklıdır.
        </span>
        <span className="font-body text-[13px] text-[#666666]">
          Tüm hakları saklıdır.
        </span>
      </div>
    </footer>
  );
}
