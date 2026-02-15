import { Routes, Route } from 'react-router-dom';
import Anasayfa from './pages/Anasayfa';
import Hizmetler from './pages/Hizmetler';
import HizmetDetay from './pages/HizmetDetay';
import Hakkimizda from './pages/Hakkimizda';
import Iletisim from './pages/Iletisim';
import GirisYap from './pages/GirisYap';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/hizmetler" element={<Hizmetler />} />
      <Route path="/hizmet-detay" element={<HizmetDetay />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/iletisim" element={<Iletisim />} />
      <Route path="/giris" element={<GirisYap />} />
    </Routes>
  );
}
