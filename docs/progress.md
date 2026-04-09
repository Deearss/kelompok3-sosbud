# Progress Log

## Selesai (Done)
- Inisialisasi proyek Next.js 15+ dengan Tailwind v4 murni tanpa config file
- SPA Navigation system dengan global state via `<Sidebar />`
- Efek transisi artifisial (Progress Bar) pindah tab
- Implementasi Mobile UI (Hamburger Menu & Drawer)
- Hapus seksi `Ketentuan Referensi` dan `Ketentuan Konten` yang terlalu *alay*/verbose pada `PanduanPenulisanPanel`
- Mengganti tautan dan branding "Google Slides" menjadi "Canva" pada `Sidebar` dan `PanduanPenulisanPanel`
- Mengganti ikon standar dokumen pada menu Word menjadi replika vektor logo Microsoft Word yang lebih presisi dan modern
- Memperbarui ikon folder Google Drive menjadi vektor logo original Google Drive yang otentik
- Memperbarui link URL Canva untuk presentasi menjadi `https://canva.link/kelompok3sosbudd` via fitur redirect Next.js di `next.config.ts` untuk mempermudah sharing (lewat `/go/ppt` & `/go/makalah`).
- Menambahkan rich preview Metadata (OpenGraph) pada `layout.tsx` menggunakan gambar slide presentasi terbaru.
- Menghapus anggota bernama Imam dari daftar, menggabungkan tugas `Kata Pengantar` ke Haidir, dan menghapus section `Kolaborasi` yang tidak diperlukan lagi pada `PembagianTugasPanel`.
- Menyinkronkan section `Kerangka Makalah` pada `PanduanPenulisanPanel` untuk mendetailkan isi BAB I, II, dan III sesuai dengan teks asli `(KELOMPOK 3) - PERAN ETIKA DAN NORMA...docx`.
- Ekstraksi Daftar Pustaka menjadi array konstan untuk mapping antarmuka dan mengganti gaya penulisan ke APA 6 Style.
- Mengatur *state management* dengan Zustand dan persist middleware untuk mempertahankan riwayat status menu navigasi aktif di *Sidebar* dan riwayat *Checklist Panel Final* pada *PanduanPenulisanPanel*.

## Sedang Berjalan (In Progress)
- Minor UX & styling touch-ups sesuai masukan User.

## Berikutnya (Next)
- TBD
