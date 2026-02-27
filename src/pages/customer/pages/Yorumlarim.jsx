import { useState, useRef, useEffect } from 'react';
import { CustomerLayout } from '../components/layout/CustomerLayout';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  Quote,
  Image,
  Camera,
  Award,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';

// Yorum verileri (Review data)
const reviewsData = [
  {
    id: 1,
    caregiver: 'Fatma Demir', // bakıcı
    service: 'Yaşlı Bakımı', // hizmet
    rating: 5, // puan
    comment: // yorum
      'Fatma Hanım annemin bakımında inanılmaz özenli ve sabırlı davrandı. Her gün düzenli olarak ilaçlarını verdi, egzersizlerini yaptırdı. Annem onunla çok mutlu ve huzurlu. Kendisini gönül rahatlığıyla herkese tavsiye ederim.',
    date: '2026-02-20', // tarih
    photo: null, // fotoğraf
  },
  {
    id: 2,
    caregiver: 'Elif Kaya',
    service: 'Yaşlı Bakımı',
    rating: 4,
    comment:
      'Elif Hanım oldukça profesyonel ve deneyimli bir bakıcı. İletişimi çok iyi, her konuda bilgilendirme yapıyor. Babamın bakımında güven veren bir yaklaşım sergiledi.',
    date: '2026-02-15',
    photo: 'elif-kaya',
  },
  {
    id: 3,
    caregiver: 'Ayşe Çelik',
    service: 'Hasta Bakımı',
    rating: 5,
    comment:
      'Ameliyat sonrası süreçte Ayşe Hanım\'ın desteği paha biçilemezdi. Hem tıbbi bakım hem de moral açısından harika bir iş çıkardı. Çok teşekkür ederim.',
    date: '2026-01-28',
    photo: null,
  },
  {
    id: 4,
    caregiver: 'Zeynep Arslan',
    service: 'Çocuk Bakımı',
    rating: 5,
    comment:
      'Zeynep Hanım kızımla harika bir bağ kurdu. Eğitici aktiviteler düzenliyor, beslenme konusunda çok titiz. Kızım onu çok seviyor ve her gün gelmesini bekliyor.',
    date: '2026-01-15',
    photo: 'zeynep-arslan',
  },
  {
    id: 5,
    caregiver: 'Fatma Demir',
    service: 'Yaşlı Bakımı',
    rating: 4,
    comment:
      'İkinci kez Fatma Hanım\'dan hizmet aldık. Yine çok memnun kaldık. Zamanında geliyor, işini titizlikle yapıyor. Güler yüzü ve pozitif enerjisi hastamıza çok iyi geliyor.',
    date: '2026-01-05',
    photo: null,
  },
];

// Avatar renkleri (Avatar colors)
const avatarColors = [
  'from-[#352EF2] to-[#1a1578]',
  'from-[#22C55E] to-[#15803D]',
  'from-[#F5A623] to-[#D97706]',
  'from-[#6B66F5] to-[#352EF2]',
  'from-[#EC4899] to-[#BE185D]',
];

// Yeni yorum modalı (New review modal)
function NewReviewModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({
    caregiver: '', // bakıcı
    rating: 0, // puan
    comment: '', // yorum
  });
  const [hoverRating, setHoverRating] = useState(0); // hover puan

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      caregiver: form.caregiver,
      rating: form.rating,
      comment: form.comment,
    });
    setForm({ caregiver: '', rating: 0, comment: '' });
    setHoverRating(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-[var(--radius-lg)] shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Başlık (Header) */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ECFDF5] flex items-center justify-center">
              <MessageSquare size={20} className="text-[#22C55E]" />
            </div>
            <h2 className="text-[18px] font-semibold text-[var(--color-text-primary)]">
              Yeni Yorum Yaz
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg)] transition-colors"
          >
            <X size={20} className="text-[var(--color-text-muted)]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Bakıcı seçimi (Caregiver selection) */}
          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
              Bakıcı
            </label>
            <div className="relative">
              <select
                name="caregiver"
                value={form.caregiver}
                onChange={handleChange}
                required
                className="w-full appearance-none px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/10 transition-all"
              >
                <option value="">Bakıcı seçiniz...</option>
                <option value="Fatma Demir">Fatma Demir</option>
                <option value="Elif Kaya">Elif Kaya</option>
                <option value="Ayşe Çelik">Ayşe Çelik</option>
                <option value="Zeynep Arslan">Zeynep Arslan</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none" />
            </div>
          </div>

          {/* Puan (Rating) */}
          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-2">
              Puanınız
            </label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setForm({ ...form, rating: i })}
                  onMouseEnter={() => setHoverRating(i)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    size={28}
                    className={
                      i <= (hoverRating || form.rating)
                        ? 'text-[var(--color-accent-gold)] fill-[var(--color-accent-gold)]'
                        : 'text-[var(--color-border)]'
                    }
                  />
                </button>
              ))}
              {form.rating > 0 && (
                <span className="ml-2 text-[14px] font-medium text-[var(--color-text-primary)]">
                  {form.rating}/5
                </span>
              )}
            </div>
          </div>

          {/* Yorum (Comment) */}
          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
              Yorumunuz
            </label>
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Bakıcınız hakkındaki deneyiminizi paylaşın..."
              className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/10 transition-all resize-none"
            />
          </div>

          {/* Fotoğraf yükleme (Photo upload) */}
          <div>
            <label className="block text-[13px] font-medium text-[var(--color-text-primary)] mb-1.5">
              Fotoğraf (Opsiyonel)
            </label>
            <label className="block border-2 border-dashed border-[var(--color-border)] rounded-[var(--radius-sm)] p-6 text-center hover:border-[#22C55E]/50 transition-colors cursor-pointer">
              <input type="file" accept="image/*" className="hidden" />
              <Camera size={24} className="text-[var(--color-text-muted)] mx-auto mb-2" />
              <p className="text-[13px] text-[var(--color-text-muted)]">
                Fotoğraf yüklemek için tıklayın
              </p>
            </label>
          </div>

          {/* Butonlar (Actions) */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] text-[14px] font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-bg)] transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white text-[14px] font-semibold rounded-[var(--radius-sm)] hover:from-[#16A34A] hover:to-[#15803D] transition-all shadow-lg shadow-[#22C55E]/25"
            >
              Yorumu Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Yorum kartı (Review card)
function ReviewCard({ review, index }) {
  const colorClass = avatarColors[index % avatarColors.length];

  return (
    <div className="flex-shrink-0 w-[400px] sm:w-[480px] snap-center">
      <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group">
        {/* Üst renk çubuğu (Top accent bar) */}
        <div className={`h-1.5 bg-gradient-to-r ${colorClass}`} />

        <div className="p-7 flex flex-col flex-1">
          {/* Alıntı ikonu (Quote icon) */}
          <Quote size={32} className="text-[var(--color-primary-soft)] mb-4" />

          {/* Yorum metni (Review text) */}
          <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] flex-1 mb-6">
            "{review.comment}"
          </p>

          {/* Fotoğraf (Photo) */}
          {review.photo && (
            <div className="mb-5 rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg)] h-[180px] flex items-center justify-center">
              <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                <Image size={20} />
                <span className="text-[13px]">Paylaşılan fotoğraf</span>
              </div>
            </div>
          )}

          {/* Yıldızlar (Stars) */}
          <div className="flex items-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className={
                  i < review.rating
                    ? 'text-[var(--color-accent-gold)] fill-[var(--color-accent-gold)]'
                    : 'text-[var(--color-border)]'
                }
              />
            ))}
            <span className="ml-2 text-[14px] font-semibold text-[var(--color-text-primary)]">
              {review.rating}.0
            </span>
          </div>

          {/* Ayırıcı (Divider) */}
          <div className="border-t border-[var(--color-border)] pt-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white text-[14px] font-bold shadow-md`}
                >
                  {review.caregiver
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">
                    {review.caregiver}
                  </p>
                  <p className="text-[12px] text-[var(--color-text-muted)]">{review.service}</p>
                </div>
              </div>
              <span className="text-[12px] text-[var(--color-text-muted)]">{review.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Yorumlarim() {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState(reviewsData); // yorumlar
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Kart genişliğini hesapla (Calculate card width)
  const getCardWidth = () => {
    const el = scrollRef.current;
    if (!el || !el.children[0]) return 500;
    return el.children[0].offsetWidth + 20;
  };

  // Kaydırma durumunu kontrol et (Check scroll state)
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = getCardWidth();
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, reviews.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, [reviews.length]);

  // Yön ile kaydır (Scroll by direction)
  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  // İndexe kaydır (Scroll to index)
  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  // Yeni yorum ekleme (Add new review)
  const handleNewReview = (data) => {
    const newReview = {
      id: reviews.length + 1,
      caregiver: data.caregiver,
      service: 'Bakım Hizmeti',
      rating: data.rating,
      comment: data.comment,
      date: new Date().toISOString().split('T')[0],
      photo: null,
    };
    setReviews([newReview, ...reviews]);
  };

  // Ortalama puan (Average rating)
  const averageRating =
    (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <CustomerLayout title="Yorumlarım - BakıcıKolay">
      {/* Üst bölüm (Hero section) */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award size={20} className="text-[var(--color-accent-gold)]" />
              <span className="text-[13px] font-semibold text-[var(--color-accent-gold)] uppercase tracking-wide">
                Müşteri
              </span>
            </div>
            <h1 className="text-[28px] font-bold text-[var(--color-text-primary)]">Yorumlarım</h1>
            <p className="text-[15px] text-[var(--color-text-muted)] mt-1">
              Bakıcılarınız hakkında paylaştığınız değerlendirmeler
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white text-[14px] font-semibold rounded-[var(--radius-md)] hover:from-[#16A34A] hover:to-[#15803D] transition-all shadow-lg shadow-[#22C55E]/25 hover:shadow-xl hover:shadow-[#22C55E]/30 hover:-translate-y-0.5"
          >
            <Plus size={18} />
            Yeni Yorum Yaz
          </button>
        </div>

        {/* İstatistik barı (Stats bar) */}
        <div className="flex items-center gap-6 mt-4 py-4 px-6 bg-white rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-[var(--color-accent-gold)] fill-[var(--color-accent-gold)]"
                />
              ))}
            </div>
            <span className="text-[18px] font-bold text-[var(--color-text-primary)]">
              {averageRating}
            </span>
            <span className="text-[13px] text-[var(--color-text-muted)]">ortalama</span>
          </div>
          <div className="w-px h-6 bg-[var(--color-border)]" />
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-[var(--color-primary)]" />
            <span className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              {reviews.length}
            </span>
            <span className="text-[13px] text-[var(--color-text-muted)]">yorum</span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Navigasyon okları (Navigation arrows) */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white rounded-full shadow-lg border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-bg)] transition-colors"
          >
            <ChevronLeft size={20} className="text-[var(--color-text-primary)]" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white rounded-full shadow-lg border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-bg)] transition-colors"
          >
            <ChevronRight size={20} className="text-[var(--color-text-primary)]" />
          </button>
        )}

        {/* Kaydırma alanı (Scroll container) */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Kaydırma göstergeleri (Scroll indicators) */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? 'w-6 bg-[var(--color-primary)]' : 'w-1.5 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Yeni yorum modalı (New review modal) */}
      <NewReviewModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleNewReview} />
    </CustomerLayout>
  );
}
