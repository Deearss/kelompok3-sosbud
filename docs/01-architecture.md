# Proyek Dashboard Kelompok 3 SOSBUD: Arsitektur

## Pengantar
Proyek ini adalah web dashboard interaktif untuk memfasilitasi penulisan makalah kelompok ("Peran Etika & Norma dalam Meredam Pertentangan Sosial sebagai Upaya Integrasi Masyarakat"). Proyek ini awalnya dibangun menggunakan Vanilla HTML, CSS, dan JS, dan telah ditransformasi 100% menjadi Next.js.

## Arsitektur Aplikasi (Next.js)
Proyek ini memakai **Next.js 15+ (App Router)**.
- **`/src/app/layout.tsx`**: Entry point untuk HTML root. Tempat memuat font inter dan montserrat dari `next/font/google`, dan inisialisasi basic class `antialiased` dan `flex flex-col min-h-full`.
- **`/src/app/page.tsx`**: Halaman utama (SPA-like). Daripada melakukan routing untuk tiap tab, aplikasi ini mengatur tab menggunakan state tunggal (`const [activeTab, setActiveTab] = useState<TabId>`). Halaman ini me-render `Sidebar` dan memanggil salah satu dari tiga Panel komponen (Pembagian, Panduan, atau Kerangka) tergantung tab yang aktif.
- **Top Progress Bar**: Di `page.tsx`, terdapat simulasi progress bar yang berjalan (mengisi warna dari 0 ke 100%) setiap kali transisi antar tab, sesuai instruksi gaya estetik Vanilla sebelumnya.

## Konvensi Hosting
Aplikasi direkayasa agar dapat dideploy mulus di lingkungan statis atau serverless (Vercel / Netlify). Skrip build (`npm run build`) sangat cepat tanpa ada isu tipe (*zero errors*). Konfigurasi Netlify disertakan di `netlify.toml` untuk mempertegas direktori publik (`.next`).
