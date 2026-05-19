import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Tentang Kami | Luqman Bintang Jaya Sejak 1987",
  description:
    "Luqman Bintang Jaya produsen maklon sandal sepatu custom di Sidoarjo sejak 1987. Lebih dari 37 tahun melayani brand lokal Indonesia.",
  openGraph: {
    title: "Tentang Luqman Bintang Jaya — Produsen Sandal & Sepatu Sejak 1987",
    description: "Luqman Bintang Jaya produsen maklon sandal sepatu custom di Sidoarjo sejak 1987.",
    url: "https://luqmanbintangjaya.com/tentang-kami/",
  },
  alternates: { canonical: "https://luqmanbintangjaya.com/tentang-kami/" },
};

const pencapaian = [
  { val: "37+", label: "Tahun Pengalaman", sub: "Sejak 1987" },
  { val: "500+", label: "Brand Dilayani", sub: "Seluruh Indonesia" },
  { val: "30+", label: "Kota Terjangkau", sub: "Pengiriman nasional" },
  { val: "50+", label: "Model Produk", sub: "Sandal & sepatu" },
];

const nilaiPerusahaan = [
  {
    title: "Kualitas Tanpa Kompromi",
    desc: "Setiap produk yang kami hasilkan melewati quality control ketat. Kami tidak pernah mengorbankan kualitas demi kecepatan produksi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Kepercayaan & Transparansi",
    desc: "Kami membangun hubungan jangka panjang dengan klien berdasarkan kejujuran harga, waktu produksi yang realistis, dan komunikasi yang terbuka.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Inovasi Berkelanjutan",
    desc: "Kami terus memperbarui mesin dan mengikuti tren industri alas kaki untuk memastikan klien mendapatkan produk yang relevan dengan pasar.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Kemitraan yang Saling Menguntungkan",
    desc: "Kami memandang setiap klien sebagai mitra bisnis. Kesuksesan brand Anda adalah kebanggaan dan motivasi kami untuk terus berkembang.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero.tentang}
            alt="Workshop Luqman Bintang Jaya Sidoarjo"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/30 mb-6">
              <span className="text-gold-300 text-sm font-medium font-body">Berdiri 1987 · Sidoarjo, Jawa Timur</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-5">
              Tentang Luqman Bintang Jaya — Produsen Sandal & Sepatu Sejak 1987
            </h1>
            <p className="text-lg text-navy-200 font-body leading-relaxed">
              Lebih dari tiga dekade melayani industri alas kaki Indonesia dengan dedikasi,
              kualitas, dan harga yang transparan.
            </p>
          </div>
        </div>
      </section>

      {/* Pencapaian */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {pencapaian.map((p) => (
              <div key={p.label} className="text-center py-8 px-4 rounded-2xl border border-navy-700 bg-navy-800/50">
                <div className="text-4xl lg:text-5xl font-extrabold font-heading text-gold-400 mb-2">{p.val}</div>
                <div className="text-sm font-semibold font-heading text-white">{p.label}</div>
                <div className="text-xs text-navy-300 font-body mt-1">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-navy-50 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-6">
                Sejarah Kami
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900 mb-6">
                Dari Usaha Keluarga Menjadi Produsen Terpercaya
              </h2>
              <div className="space-y-4 text-sm text-slate-600 font-body leading-relaxed">
                <p>
                  Luqman Bintang Jaya berdiri pada tahun <strong className="text-navy-900">1987</strong> sebagai usaha keluarga kecil
                  yang bergerak di bidang produksi alas kaki di Sidoarjo, Jawa Timur. Dipimpin oleh pendirinya
                  yang memiliki visi untuk menghadirkan produk berkualitas dengan harga yang terjangkau,
                  usaha ini perlahan-lahan tumbuh dan berkembang.
                </p>
                <p>
                  Memasuki dekade 2000-an, Luqman Bintang Jaya mulai merambah layanan maklon — membantu
                  brand-brand lokal Indonesia untuk memproduksi sandal dan sepatu dengan desain mereka sendiri.
                  Permintaan terus meningkat seiring tumbuhnya industri fashion lokal dan gaya hidup
                  brand lokal Indonesia.
                </p>
                <p>
                  Kini, dengan pengalaman lebih dari <strong className="text-navy-900">37 tahun</strong>, kami telah melayani
                  lebih dari <strong className="text-navy-900">500 brand</strong> dari berbagai kota di Indonesia — dari Sabang hingga
                  Merauke. Kami bangga menjadi bagian dari perjalanan sukses banyak brand alas kaki lokal Indonesia.
                </p>
                <p>
                  Berlokasi strategis di <strong className="text-navy-900">Jl. Tropodo 1 No.287, Waru, Sidoarjo</strong>, kami
                  mudah dijangkau dan memiliki akses logistik yang sangat baik untuk pengiriman ke seluruh
                  penjuru Indonesia dengan biaya yang kompetitif.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(30,58,95,0.15)]">
              <Image
                src={IMAGES.tentang.workshop}
                alt="Workshop produksi Luqman Bintang Jaya Sidoarjo"
                width={800}
                height={500}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold font-heading text-navy-900">Workshop Produksi LBJ</p>
                  <p className="text-xs text-slate-500 font-body">Jl. Tropodo 1 No.287, Waru, Sidoarjo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-950 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold font-heading text-white mb-4">Visi</h2>
              <p className="text-navy-200 font-body leading-relaxed text-sm">
                Menjadi produsen maklon alas kaki terdepan di Indonesia yang dikenal atas kualitas premium,
                inovasi berkelanjutan, dan kemitraan yang saling menguntungkan — mendukung tumbuhnya
                ekosistem brand lokal alas kaki Indonesia di pasar nasional maupun internasional.
              </p>
            </div>
            <div className="bg-gold-500 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold font-heading text-white mb-4">Misi</h2>
              <ul className="space-y-2.5 text-sm font-body text-white/90 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-white font-bold mt-0.5">→</span>
                  Menghasilkan produk alas kaki berkualitas premium dengan harga pabrik yang kompetitif
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold mt-0.5">→</span>
                  Memberikan layanan konsultasi desain dan produksi yang profesional dan responsif
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold mt-0.5">→</span>
                  Memastikan setiap produk memenuhi standar kualitas dan ketepatan waktu produksi
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold mt-0.5">→</span>
                  Terus berinovasi dalam teknologi dan material untuk menghadirkan produk terbaik
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tim */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(30,58,95,0.15)]">
              <Image
                src={IMAGES.tentang.tim}
                alt="Tim produksi Luqman Bintang Jaya Sidoarjo"
                width={800}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-700 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-6">
                Tim Kami
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900 mb-4">
                Tenaga Ahli Berpengalaman
              </h2>
              <p className="text-slate-500 font-body leading-relaxed mb-4 text-sm">
                Di balik setiap sandal berkualitas yang kami hasilkan, ada tim pengrajin dan teknisi
                alas kaki berpengalaman yang telah bekerja bertahun-tahun di industri ini.
              </p>
              <p className="text-slate-500 font-body leading-relaxed text-sm">
                Banyak dari tim kami telah bersama LBJ selama lebih dari 10-20 tahun. Pengetahuan
                mendalam mereka tentang material, teknik produksi, dan quality control
                adalah aset terbesar yang kami miliki.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-navy-900/10 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Nilai Perusahaan
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900">
              Prinsip yang Menjadi Fondasi Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nilaiPerusahaan.map((n) => (
              <div
                key={n.title}
                className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-[0_8px_28px_rgba(30,58,95,0.1)] hover:border-navy-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center text-gold-400 mb-4">
                  {n.icon}
                </div>
                <h3 className="text-sm font-bold font-heading text-navy-900 mb-2">{n.title}</h3>
                <p className="text-xs text-slate-500 font-body leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy-900 to-navy-950">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white mb-4">
            Mulai Kolaborasi Bersama Kami
          </h2>
          <p className="text-navy-200 font-body mb-8 leading-relaxed">
            Bergabunglah dengan ratusan brand yang telah mempercayakan produksi alas kaki mereka kepada Luqman Bintang Jaya.
          </p>
          <a
            href="https://wa.me/6281233913988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold font-body rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(245,166,35,0.4)]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
