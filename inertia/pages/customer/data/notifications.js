// Bildirim verileri (Notification data)
export const notificationsData = [
  {
    id: 1,
    type: 'request', // talep
    title: 'Talebiniz onaylandı',
    message: 'TLP-2026-001 numaralı Yaşlı Bakımı talebiniz onaylanmıştır. Bakıcınız Fatma Demir olarak atanmıştır.',
    date: '2026-02-28T10:30:00',
    read: false, // okundu
  },
  {
    id: 2,
    type: 'caregiver', // bakıcı
    title: 'Bakıcınız yarın geliyor',
    message: 'Fatma Demir yarın saat 09:00\'da hizmet adresinizde olacaktır.',
    date: '2026-02-27T18:00:00',
    read: false,
  },
  {
    id: 3,
    type: 'review', // yorum
    title: 'Yorum hatırlatması',
    message: 'TLP-2026-003 numaralı talebiniz tamamlandı. Bakıcınız Elif Kaya hakkında yorum yapabilirsiniz.',
    date: '2026-02-21T09:00:00',
    read: false,
  },
  {
    id: 4,
    type: 'system', // sistem
    title: 'Profilinizi tamamlayın',
    message: 'Daha iyi hizmet alabilmek için profil bilgilerinizi eksiksiz doldurun.',
    date: '2026-02-20T14:15:00',
    read: true,
  },
  {
    id: 5,
    type: 'request',
    title: 'Talep tamamlandı',
    message: 'TLP-2026-003 numaralı Yaşlı Bakımı talebiniz başarıyla tamamlanmıştır.',
    date: '2026-02-20T17:00:00',
    read: true,
  },
  {
    id: 6,
    type: 'payment', // ödeme
    title: 'Ödeme alındı',
    message: 'TLP-2026-003 için 1.250,00 TL tutarındaki ödemeniz başarıyla alınmıştır.',
    date: '2026-02-20T12:00:00',
    read: true,
  },
  {
    id: 7,
    type: 'caregiver',
    title: 'Bakıcı değişikliği',
    message: 'TLP-2026-004 numaralı talebiniz için bakıcınız Fatma Demir olarak güncellenmiştir.',
    date: '2026-02-18T10:00:00',
    read: true,
  },
  {
    id: 8,
    type: 'system',
    title: 'Hoş geldiniz!',
    message: 'BakıcıKolay ailesine katıldığınız için teşekkür ederiz. Hizmetlerimizi keşfetmeye başlayabilirsiniz.',
    date: '2025-11-15T09:00:00',
    read: true,
  },
];
