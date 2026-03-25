# Dokumentasi Komponen

Semua UI modular disimpan di dua sub-direktori: `ui/` untuk yang independen, dan `panels/` untuk business logic khusus.

### `src/components/ui`
Berisi komponen pondasi yang sangat *reusable*:
1. **`Badge.tsx`**: Penanda status warna-warni (merah, kuning, hijau, biru, link). Memiliki tipe properti yang disesuaikan secara proporsional.
2. **`Card.tsx`**: Komponen bungkus (wrapper) untuk konten kotak-kotak ber-"border". Memiliki utilitas anak komponen `CardTitle` dan `CardSub`.
3. **`PageHeader.tsx`**: Komponen pendukung header tab khusus (`PageHeader` besar, serta `Section` dan `SectionTitle` untuk pemisah).

### `src/components/layout`
- **`Sidebar.tsx`**: Menampilkan detail judul tugas, identitas kelompok, dan menu tabulasi utama. Menggunakan ikon semantik dan dinamis dari `lucide-react` (ClipboardList, Ruler, FolderTree) namun tetap menggunakan ikon SVG asli Vanilla untuk merepresentasi tombol pihak ketiga seperti (Microsoft Word, Google Slides, Google Drive).

### `src/components/panels`
Memuat 3 segmen besar konten proyek:
1. **`PembagianTugasPanel.tsx`**: Komponen presentasional. Di sini ada variasi Card yang spesifik `TaskCard` dan `CoordCard` yang disisipkan state properti khusus seperti `isLeader`, `isCritical`, dan `isSpecial` untuk memicu highlight dekorasi CSS tertentu (seperti border merah atau glow).
2. **`PanduanPenulisanPanel.tsx`**: Kompleksitas State tingkat menengah. Memiliki form Checklist tabel. State `checkedItems` dimonitor sebagai `Set` sehingga komputasi centang dan "0/9 selesai" akan langsung berubah ketika dicentang.
3. **`KerangkaMakalahPanel.tsx`**: Interaktivitas hirarkis Accordion. Mengimplementasi `OutlineNode` (state expanded/collapsed), menampilkan animasi Tailwind height ke node anak.
