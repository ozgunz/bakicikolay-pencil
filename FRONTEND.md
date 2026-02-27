# FRONTEND.md — BakıcıKolay Frontend Documentation

## 1. Project Overview

**BakıcıKolay.com** is a Turkish care services platform connecting families with caregivers for elderly care, childcare, patient care, and disability care. The frontend serves both public-facing marketing pages and a customer panel for managing care requests.

## 2. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 6.1.x | Build tool & dev server |
| Tailwind CSS | 4.1.x | Utility-first CSS |
| Lucide React | 0.469.x | Icon library |
| React Router DOM | 7.1.x | Client-side routing (SPA) |
| DM Sans | — | Primary font (heading + body) |
| react-i18next | latest | Internationalization (i18n) |
| i18next | latest | i18n core library |
| i18next-browser-languagedetector | latest | Auto-detect browser language |

## 3. Project Structure

```
src/
├── App.jsx                          # Router — all routes defined here
├── main.jsx                         # Entry point
├── css/
│   └── globals.css                  # CSS variables, Tailwind config, base styles
├── components/
│   ├── Logo.jsx                     # SVG logo component (variant: default/white)
│   └── layout/
│       ├── Layout.jsx               # Public page wrapper (Header + Footer + title)
│       ├── Header.jsx               # Site header with nav + CTA button
│       └── Footer.jsx               # Site footer
├── pages/
│   ├── Anasayfa.jsx                 # Homepage
│   ├── Hizmetler.jsx                # Services listing
│   ├── HizmetDetay.jsx              # Service request form
│   ├── Hakkimizda.jsx               # About us
│   ├── Iletisim.jsx                 # Contact page with form
│   ├── GirisYap.jsx                 # Login page
│   └── customer/
│       ├── components/layout/
│       │   ├── CustomerLayout.jsx   # Panel wrapper (Sidebar + TopBar + title)
│       │   ├── Sidebar.jsx          # Left nav with icons + badges
│       │   └── TopBar.jsx           # Top bar with notifications dropdown
│       ├── data/
│       │   └── notifications.js     # Mock notification data
│       └── pages/
│           ├── Dashboard.jsx        # Panel homepage — stats, requests, caregiver
│           ├── Taleplerim.jsx       # Requests list with filters + new request modal
│           ├── Yorumlarim.jsx       # Reviews carousel + new review modal
│           ├── Profil.jsx           # Profile edit form
│           └── Bildirimler.jsx      # Notifications timeline with highlighting

inertia/                             # Inertia.js-compatible copies (for Laravel)
├── css/globals.css                  # Same variables + cursor:pointer rule
├── components/
│   ├── Logo.jsx                     # Same SVG logo
│   └── layout/
│       ├── Layout.jsx               # Uses <Head> instead of document.title
│       ├── Header.jsx               # Uses @inertiajs/react Link
│       └── Footer.jsx               # Uses @inertiajs/react Link
├── pages/
│   ├── Anasayfa.jsx
│   ├── Hizmetler.jsx
│   ├── HizmetDetay.jsx
│   ├── Hakkimizda.jsx
│   ├── Iletisim.jsx
│   ├── GirisYap.jsx
│   └── customer/
│       ├── components/layout/
│       │   ├── CustomerLayout.jsx   # Uses <Head> for title
│       │   ├── Sidebar.jsx          # Uses Link + usePage().url for active state
│       │   └── TopBar.jsx           # Uses router.visit() instead of useNavigate
│       ├── data/notifications.js
│       ├── Dashboard.jsx
│       ├── Taleplerim.jsx
│       ├── Yorumlarim.jsx
│       ├── Profil.jsx
│       └── Bildirimler.jsx          # Uses URLSearchParams instead of useSearchParams
```

## 4. Design System

### CSS Variables (defined in `globals.css`)

**Colors:**
- `--color-primary: #352EF2` (brand blue-purple)
- `--color-primary-dark: #2A24C2`
- `--color-primary-light: #6B66F5`
- `--color-primary-soft: #EEEDFE` (light tint for backgrounds)
- `--color-text-primary: #111111`
- `--color-text-secondary: #555555`
- `--color-text-muted: #999999`
- `--color-text-on-primary: #FFFFFF`
- `--color-bg: #FAFAFA`, `--color-bg-warm: #F5F5F7`
- `--color-border: #E5E5E5`, `--color-border-strong: #CCCCCC`
- `--color-positive: #22C55E`, `--color-negative: #EF4444`
- `--color-accent-gold: #F5A623`

**Border Radius:**
- `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--radius-xl: 24px`

**Gradients:**
- `--gradient-hero`: 160deg from `#352EF2` to `#1a1578`
- `--gradient-testimonials`: vertical from `#1a1578` → `#352EF2` → `#6B66F5`

### Typography
- Single font family: **DM Sans** (Google Fonts)
- `.font-heading` and `.font-body` both use DM Sans
- Headings: bold, tight tracking
- Body: regular/medium weight, relaxed line-height

### Spacing Conventions
- Page sections: `px-5 py-16 md:px-20 md:py-20`
- Max content width: `max-w-[1200px] mx-auto`
- Card padding: `p-5` to `p-8`
- Gaps: `gap-4` to `gap-6` for grids

## 5. Routing

| Path | Page | Layout |
|---|---|---|
| `/` | Anasayfa (Homepage) | Public Layout |
| `/hizmetler` | Hizmetler (Services) | Public Layout |
| `/hizmet-detay` | HizmetDetay (Service Request) | Public Layout |
| `/hakkimizda` | Hakkimizda (About) | Public Layout |
| `/iletisim` | Iletisim (Contact) | Public Layout |
| `/giris` | GirisYap (Login) | Public Layout |
| `/customer` | Dashboard | Customer Layout |
| `/customer/talepler` | Taleplerim (My Requests) | Customer Layout |
| `/customer/yorumlar` | Yorumlarim (My Reviews) | Customer Layout |
| `/customer/profil` | Profil (Profile) | Customer Layout |
| `/customer/bildirimler` | Bildirimler (Notifications) | Customer Layout |

## 6. Component Architecture

### Public Layout (`Layout.jsx`)
- Sets `document.title` via `useEffect` (SPA) or `<Head>` (Inertia)
- Renders: `Header` → `{children}` → `Footer`
- Accepts `activePage` prop for nav highlighting
- Header includes navigation links + "Bakıcı Talep Et" CTA button

### Customer Layout (`CustomerLayout.jsx`)
- Collapsible sidebar (260px / 72px) + sticky top bar
- Sidebar: nav links with active states + notification badge + logout
- TopBar: welcome message + notification dropdown with recent items
- Title managed via `document.title` (SPA) or `<Head>` (Inertia)

## 7. Pages Reference

### Public Pages
- **Anasayfa**: Hero with carousel, service cards, how-it-works steps, trust badges, testimonials, CTA
- **Hizmetler**: Service listing grid with category descriptions
- **HizmetDetay**: Multi-step service request form
- **Hakkimizda**: Story section, values grid, stats, team members, CTA
- **Iletisim**: Contact form + info cards + map placeholder + CTA
- **GirisYap**: Centered login card with email/password fields

### Customer Panel Pages
- **Dashboard**: Stats cards (4), recent requests list, caregiver info card, recent reviews
- **Taleplerim**: Filterable request table (desktop) + cards (mobile), new request modal with form
- **Yorumlarim**: Horizontal carousel of review cards, stats bar, new review modal
- **Profil**: Profile edit form with membership info, personal/contact/address sections
- **Bildirimler**: Timeline grouped by date, notification cards with type icons, highlight from URL param

### Mock Data
All pages use inline mock data (no API calls). Key data structures:
- `notificationsData` in `data/notifications.js` — shared between Sidebar badge count, TopBar dropdown, and Bildirimler page
- Status configs with color/icon mappings for requests and notifications

## 8. Inertia.js Migration

The `/inertia/` directory contains Laravel/Inertia.js-compatible versions of all pages.

### Conversion Patterns Applied

| SPA (react-router-dom) | Inertia (@inertiajs/react) |
|---|---|
| `import { Link } from 'react-router-dom'` | `import { Link } from '@inertiajs/react'` |
| `<Link to="/path">` | `<Link href="/path">` |
| `NavLink` with `isActive` callback | `Link` + `usePage().url` manual comparison |
| `useNavigate()` → `navigate('/path')` | `router.visit('/path')` |
| `useSearchParams()` | `new URLSearchParams(window.location.search)` |
| `document.title = x` in useEffect | `<Head><title>{x}</title></Head>` |
| `BrowserRouter` + `Routes` in App.jsx | Not needed — Laravel routes to individual pages |

### Laravel Integration Notes
- Each page in `inertia/pages/` is a standalone Inertia page component
- No App.jsx router — Laravel handles routing and renders the correct page
- `globals.css` should be imported in the Laravel app's main CSS entry point
- Font loading is handled via `<Head>` in Layout/CustomerLayout components
- The `inertia/` folder won't build standalone — it requires `@inertiajs/react` as a dependency (provided by the Laravel project)

## 9. Internationalization (i18n)

### Setup
- **Library**: `react-i18next` + `i18next` with `i18next-browser-languagedetector`
- **Config**: `src/i18n/index.js` (and `inertia/i18n/index.js` for Inertia)
- **Entry**: Imported in `src/main.jsx` (SPA) and `inertia/components/layout/Layout.jsx` (Inertia)

### Languages
| Code | Language | Status |
|------|----------|--------|
| `tr` | Turkish (default) | Primary |
| `ru` | Russian | AI-translated |
| `de` | German | AI-translated |

### Locale Files
- `src/i18n/locales/tr.json` / `ru.json` / `de.json`
- `inertia/i18n/locales/` — identical copies for the Inertia version

### Key Structure
```
nav.*           — Navigation labels
footer.*        — Footer content
home.*          — Homepage sections (hero, form, faq, testimonials, social, blog)
services.*      — Services page
serviceDetail.* — Service detail/request page
about.*         — About page
contact.*       — Contact page
login.*         — Login page
common.*        — Shared labels (readMore, submit, cancel, etc.)
```

### Language Switcher
- Component: `src/components/LanguageSwitcher.jsx` (and `inertia/components/`)
- Location: Header, right side before CTA button
- Shows current language flag + code (TR/RU/DE)
- Dropdown with 3 options, instant language change via `i18n.changeLanguage()`
- Persists selection in `localStorage` key `i18nextLng`

### Usage in Components
```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('nav.home')}</h1>;
}
```

### Scope
- All public-facing pages are fully translated
- Customer panel pages (Dashboard, Taleplerim, etc.) are **not** translated — they remain Turkish only

## 10. Development

### Commands
```bash
npm run dev      # Start Vite dev server (SPA version)
npm run build    # Production build
npm run preview  # Preview production build
```

### Adding a New Public Page
1. Create `src/pages/YourPage.jsx`
2. Wrap content with `<Layout title="..." activePage="...">`
3. Add route in `src/App.jsx`
4. Add nav item in `Header.jsx` if needed
5. Create corresponding `inertia/pages/YourPage.jsx` with Inertia imports

### Adding a New Customer Panel Page
1. Create `src/pages/customer/pages/YourPage.jsx`
2. Wrap content with `<CustomerLayout title="...">`
3. Add route in `src/App.jsx`
4. Add nav item in Sidebar's `navItems` array
5. Create corresponding inertia version
