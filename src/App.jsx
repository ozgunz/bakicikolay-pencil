import { Routes, Route } from 'react-router-dom';
import Anasayfa from './pages/Anasayfa';
import Hizmetler from './pages/Hizmetler';
import HizmetDetay from './pages/HizmetDetay';
import Hakkimizda from './pages/Hakkimizda';
import Iletisim from './pages/Iletisim';
import GirisYap from './pages/GirisYap';

// Customer Panel
import Dashboard from './pages/customer/pages/Dashboard';
import Taleplerim from './pages/customer/pages/Taleplerim';
import Yorumlarim from './pages/customer/pages/Yorumlarim';
import Profil from './pages/customer/pages/Profil';
import Bildirimler from './pages/customer/pages/Bildirimler';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/hizmetler" element={<Hizmetler />} />
      <Route path="/hizmet-detay" element={<HizmetDetay />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/iletisim" element={<Iletisim />} />
      <Route path="/giris" element={<GirisYap />} />

      {/* Customer Panel */}
      <Route path="/customer" element={<Dashboard />} />
      <Route path="/customer/talepler" element={<Taleplerim />} />
      <Route path="/customer/yorumlar" element={<Yorumlarim />} />
      <Route path="/customer/profil" element={<Profil />} />
      <Route path="/customer/bildirimler" element={<Bildirimler />} />
    </Routes>
  );
}
