import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Logo } from '../components/Logo';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function GirisYap() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout title="Giriş Yap | BakıcıKolay">
      <section className="flex flex-1 items-center justify-center bg-[var(--color-bg)] px-5 py-16 md:py-24">
        <div className="flex w-full max-w-[440px] flex-col gap-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-white)] p-8 shadow-sm md:p-10">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <Logo className="h-9 w-auto" />
            <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
              Giriş Yap
            </h1>
            <p className="font-body text-sm text-[var(--color-text-secondary)]">
              Hesabınıza giriş yaparak devam edin.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <label className="flex flex-col gap-1.5">
              <span className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                E-posta veya Telefon
              </span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--color-text-muted)]" />
                <input
                  type="text"
                  placeholder="ornek@email.com"
                  className="h-[46px] w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] pl-10 pr-3.5 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-body text-[13px] font-medium text-[var(--color-text-primary)]">
                  Şifre
                </span>
                <a
                  href="#"
                  className="font-body text-xs font-medium text-[var(--color-primary)] hover:underline"
                >
                  Şifremi Unuttum
                </a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--color-text-muted)]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Şifrenizi giriniz"
                  className="h-[46px] w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] pl-10 pr-11 font-body text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                >
                  {showPassword ? (
                    <EyeOff className="h-[18px] w-[18px]" />
                  ) : (
                    <Eye className="h-[18px] w-[18px]" />
                  )}
                </button>
              </div>
            </label>

            <button
              type="submit"
              className="flex h-[48px] w-full items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-black)] font-body text-[15px] font-semibold text-white transition-opacity hover:opacity-80"
            >
              Giriş Yap
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="font-body text-xs text-[var(--color-text-muted)]">veya</span>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          {/* Register Link */}
          <p className="text-center font-body text-sm text-[var(--color-text-secondary)]">
            Hesabınız yok mu?{' '}
            <Link
              to="/kayit"
              className="font-semibold text-[var(--color-primary)] hover:underline"
            >
              Ücretsiz Kayıt Ol
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
