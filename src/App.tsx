import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, LayoutGrid } from 'lucide-react';

// ============================================================================
// BAHAGIAN EDIT DATA APLIKASI
// ============================================================================
// CARA UNTUK TAMBAH APLIKASI BARU:
// 1. Copy blok kod di bawah yang bermula dengan { dan berakhir dengan },
// 2. Paste di bawah aplikasi terakhir.
// 3. Tukar "title", "url", dan "category" mengikut aplikasi baru anda.
//
// PILIHAN KATEGORI YANG SAH: "UMUM", "KURIKULUM", "HEM", "KOKURIKULUM"
// ============================================================================

type AppData = {
  title: string;
  url: string;
  category: string;
  fullWidth?: boolean;
};

const SENARAI_APLIKASI: AppData[] = [
  {
    title: "One Page Report (OPR)",
    url: "https://opr-sksa.vercel.app/",
    category: "UMUM"
  },
  {
    title: "Sistem Jadual Ganti (Relief)",
    url: "https://sistem-janaan-relief-sksa.vercel.app/",
    category: "KURIKULUM"
  },
  {
    title: "Sistem Penjanaan Borang PLaN",
    url: "https://janaan-borang-p-la-n-sk-sg-abong.vercel.app/",
    category: "KURIKULUM"
  },
  {
    title: "Laporan Guru Bertugas",
    url: "https://laporan-guru-bertugas-sksa.vercel.app/",
    category: "HEM"
  },
  {
    title: "Dashboard Kehadiran Harian",
    url: "https://kehadiran-harian-sksa.vercel.app/",
    category: "HEM"
  },
  {
    title: "Analisa Kehadiran Murid - Bulanan & Sistem Surat Amaran",
    url: "https://analisa-kehadiran-murid-bulanan.vercel.app",
    category: "HEM"
  },
  {
    title: "Portal Unit Kokurikulum",
    url: "https://sites.google.com/moe-dl.edu.my/portalunitkokurikulum/laman-utama?authuser=0",
    category: "KOKURIKULUM",
    fullWidth: true
  },
  {
    title: "Pengurusan Penyediaan Anggaran Belanja Mengurus (ABM)",
    url: "https://pengurusan-penyediaan-abm-pasukan-s.vercel.app/",
    category: "KOKURIKULUM"
  },
  {
    title: "Sistem Penjanaan Surat Kebenaran Ibubapa & Akuan Kesihatan",
    url: "https://sistem-penjanaan-surat-kebenaran-ib.vercel.app/",
    category: "KOKURIKULUM"
  },
  {
    title: "Sistem Penjanaan Surat Pelepasan Sekolah Agama",
    url: "https://pelepasan-sekolah-agama.vercel.app/",
    category: "KOKURIKULUM"
  },
  {
    title: "Sistem Penjanaan Laporan Pasukan Sekolah",
    url: "https://laporan-pasukan-sekolah.vercel.app/",
    category: "KOKURIKULUM"
  },
  {
    title: "Sistem BMI 5-9T & SEGAK",
    url: "https://bmi-segak-sksa-2026.vercel.app/",
    category: "KURIKULUM"
  },
  {
    title: "Poster Pasukan Sekolah Generator",
    url: "https://poster-pasukan-sekolah-generator-8l.vercel.app/",
    category: "KOKURIKULUM"
  }
  // TAMBAH APLIKASI BARU DI SINI (Jangan lupa letak koma ',' pada aplikasi sebelumnya)
  // Contoh:
  // ,{
  //   title: "Nama Sistem Baru",
  //   url: "https://link-sistem-baru.com",
  //   category: "HEM"
  // }
];

// ============================================================================
// TAMAT BAHAGIAN EDIT DATA. 
// TIDAK PERLU UBAH KOD DI BAWAH JIKA ANDA BUKAN ORANG TEKNIKAL.
// ============================================================================

const KATEGORI_INFO = [
  { id: 'UMUM', title: 'UMUM', logo: null },
  { id: 'KURIKULUM', title: 'KURIKULUM', logo: 'https://i.postimg.cc/w3K4TF3G/Gemini-Generated-Image-r3ak49r3ak49r3ak.png' },
  { id: 'HEM', title: 'HEM', logo: 'https://i.postimg.cc/vHfb7N7V/Whats-App-Image-2026-03-04-at-10-00-06.jpg' },
  { id: 'KOKURIKULUM', title: 'KOKURIKULUM', logo: 'https://i.postimg.cc/BvxBDPvw/Logo_Unit_Koku.png' },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = useMemo(() => {
    return SENARAI_APLIKASI.filter(app => 
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-emerald-50 font-sans text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      {/* Header Utama */}
      <header className="bg-white/90 backdrop-blur-md shadow-md border-b-4 border-amber-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col items-center justify-center text-center">
            <img 
              src="https://i.postimg.cc/3RF9M05N/Logo_SKSA.png" 
              alt="Logo Sekolah" 
              className="h-16 sm:h-20 w-auto mb-2 object-contain"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              SENARAI WEB APP
            </h1>
            <h2 className="text-sm sm:text-base font-medium text-slate-600">
              SEKOLAH KEBANGSAAN SUNGAI ABONG
            </h2>
          </div>
        </div>
      </header>

      {/* Kandungan Utama */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Kotak Carian */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3.5 sm:py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 shadow-sm transition-all text-base sm:text-lg"
              placeholder="Cari aplikasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Senarai Kategori & Aplikasi */}
        <div className="space-y-16 sm:space-y-24">
          {KATEGORI_INFO.map((kategori) => {
            const appsDalamKategori = filteredApps.filter(app => app.category === kategori.id);
            
            // Sembunyikan kategori jika sedang mencari dan tiada aplikasi yang sepadan
            if (searchTerm && appsDalamKategori.length === 0) {
              return null;
            }

            return (
              <section key={kategori.id} className="scroll-mt-32">
                {/* Tajuk Kategori */}
                <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 mb-10 pb-6 border-b-2 border-slate-200/60 text-center">
                  {kategori.logo && (
                    <img 
                      src={kategori.logo} 
                      alt={`Logo ${kategori.title}`} 
                      className="h-16 w-16 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-contain shrink-0 drop-shadow-sm"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight uppercase drop-shadow-sm">
                    {kategori.title}
                  </h3>
                </div>

                {/* Grid Aplikasi */}
                {appsDalamKategori.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {appsDalamKategori.map((app, index) => {
                      const commonWidthClass = "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]";
                        
                      const appButton = (
                        <a 
                          key={app.fullWidth ? undefined : index} 
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${commonWidthClass} min-h-[120px] bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border-b-4 border-emerald-500 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center group cursor-pointer`}
                        >
                          <h4 className="text-lg sm:text-xl font-bold text-slate-700 group-hover:text-amber-700 transition-colors">
                            {app.title}
                          </h4>
                        </a>
                      );

                      if (app.fullWidth) {
                        return (
                          <div key={index} className="w-full flex justify-center">
                            {appButton}
                          </div>
                        );
                      }

                      return appButton;
                    })}
                  </div>
                ) : (
                  /* Placeholder jika tiada aplikasi dalam kategori ini */
                  <div className="bg-white/50 border border-slate-200 border-dashed rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center">
                    <p className="text-slate-500 font-medium text-base sm:text-lg">Aplikasi akan ditambah kemudian</p>
                  </div>
                )}
              </section>
            );
          })}
          
          {/* Mesej jika carian tidak jumpa apa-apa */}
          {filteredApps.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-sm text-slate-400 mb-4">
                <Search className="h-8 w-8" />
              </div>
              <p className="text-slate-600 text-lg font-medium">Tiada aplikasi dijumpai untuk "{searchTerm}"</p>
              <p className="text-slate-500 mt-1">Sila cuba kata kunci yang lain.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-md border-t-4 border-amber-400 mt-8 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-700 text-sm sm:text-base font-bold leading-relaxed">
            @HAK MILIK SK SUNGAI ABONG<br />
            MODERATOR: ACAP GARANG
          </p>
        </div>
      </footer>
    </div>
  );
}
