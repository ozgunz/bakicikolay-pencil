import { Routes, Route } from 'react-router-dom';
import Anasayfa from './pages/Anasayfa';
import Hizmetler from './pages/Hizmetler';
import HizmetDetay from './pages/HizmetDetay';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/hizmetler" element={<Hizmetler />} />
      <Route path="/hizmet-detay" element={<HizmetDetay />} />
    </Routes>
  );
}
