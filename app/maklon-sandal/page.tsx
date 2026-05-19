import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Jasa Maklon Sandal Custom Sidoarjo | Luqman Bintang Jaya",
  description:
    "Jasa maklon sandal custom Sidoarjo terpercaya sejak 1987. Sandal wanita, pria, anak, hotel. Bahan EVA, PVC, kulit. Harga pabrik, kirim seluruh Indonesia.",
  keywords: [
    "jasa maklon sandal custom sidoarjo",
    "maklon sandal surabaya",
    "pabrik sandal custom sidoarjo",
    "produsen sandal merek sendiri sidoarjo",
    "sandal private label",
    "maklon sandal wanita sidoarjo",
    "maklon sandal pria sidoarjo",
  ],
  openGraph: {
    title: "Jasa Maklon Sandal Custom Sidoarjo | Luqman Bintang Jaya",
    description: "Jasa maklon sandal custom Sidoarjo terpercaya sejak 1987. Sandal wanita, pria, anak, hotel.",
    url: "https://luqmanbintangjaya.com/maklon-sandal/",
  },
  alternates: { canonical: "https://luqmanbintangjaya.com/maklon-sandal/" },
};

const jenisSandal = [
  { img: "https://picsum.photos/600/400?random=41", label: "Sandal Wanita", desc: "Flat, wedges, heels, slip-on — semua varian tersedia dengan bahan pilihan." },
  { img: "https://picsum.photos/600/400?random=42", label: "Sandal Pria", desc: "Casual, formal, outdoor — desain maskulin berkualitas pabrik." },
  { img: "https://picsum.photos/600/400?random=43", label: "Sandal Anak", desc: "Aman, nyaman, dan tahan lama untuk si kecil." },
  { img: "https://picsum.photos/600/400?random=44", label: "Sandal Hotel & Souvenir", desc: "Produksi massal untuk hospitality dan acara korporat." },
  { img: "https://picsum.photos/600/400?random=45", label: "Sandal Outdoor", desc: "Material kuat dan anti-slip untuk aktivitas luar ruangan." },
  { img: "https://picsum.photos/600/400?random=46", label: "Sandal Olahraga", desc: "Sol khusus sport, ringan, fleksibel, cocok untuk aktivitas aktif." },
];

const mesin = [
  {
    nama: "Injection Molding",
    desc: "Cetak sol sandal dari bahan PVC/EVA/rubber dengan cetakan presisi tinggi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    nama: "Press Hidrolik",
    desc: "Merekatkan bagian upper dan sol dengan tekanan tinggi untuk daya rekat maksimal.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9H21m-18 0H2m15.07 6.07l-.7-.7M7.63 7.63l-.7-.7m0 11.31l.7-.7M16.37 7.63l.7-.7" />
      </svg>
    ),
  },
  {
    nama: "Cutting / Clicker Press",
    desc: "Memotong bahan upper (kulit, kain, PU) sesuai pola desain dengan presisi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    nama: "Jahit Industri",
    desc: "Menjahit bagian upper sandal dengan jahitan kuat, rapi, dan tahan lama.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
      </svg>
    ),
  },
  {
    nama: "Buffing / Gerinda",
    desc: "Menghaluskan permukaan sol dan tepi sandal untuk hasil akhir yang sempurna.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    nama: "Emboss / Hot Press",
    desc: "Mencetak logo atau brand pada sandal dengan hasil presisi dan tahan lama.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    nama: "Vulkanisasi",
    desc: "Proses pemanasan dan pengerasan khusus untuk sandal berbahan karet alam.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
];

const bahanUpper = [
  "Kulit asli (genuine leather)",
  "Kulit sintetis / PU (polyurethane)",
  "Kain kanvas",
  "Kain mesh / rajut",
  "EVA foam",
  "Karet (rubber)",
];

const bahanSol = [
  { nama: "EVA (Ethylene Vinyl Acetate)", ket: "Ringan & fleksibel" },
  { nama: "PVC (Polyvinyl Chloride)", ket: "Tahan lama & ekonomis" },
  { nama: "TPR (Thermoplastic Rubber)", ket: "Fleksibel & anti-slip" },
  { nama: "Karet alam (natural rubber)", ket: "Elastis & tahan lama" },
  { nama: "Phylon", ket: "Ringan, cocok untuk sandal olahraga" },
];

const faq = [
  {
    q: "Berapa minimum order untuk maklon sandal?",
    a: "Minimum order kami mulai dari 500 pasang per model. Untuk souvenir atau proyek khusus, silakan konsultasikan terlebih dahulu karena MOQ bisa disesuaikan.",
  },
  {
    q: "Apakah saya bisa bawa desain sendiri?",
    a: "Tentu. Anda bisa membawa file desain (AI, CDR, PDF, atau bahkan referensi gambar) dan kami akan eksekusi. Kami juga menyediakan layanan bantu desain dari nol jika diperlukan.",
  },
  {
    q: "Berapa lama waktu produksi?",
    a: "Pembuatan sampel biasanya membutuhkan 7-14 hari kerja. Setelah sampel disetujui, produksi massal membutuhkan 21-35 hari kerja tergantung quantity dan kompleksitas desain.",
  },
  {
    q: "Bahan apa yang paling cocok untuk sandal wanita fashion?",
    a: "Untuk sandal wanita fashion, kami merekomendasikan upper dari kulit sintetis PU atau kain mesh yang fleksibel, dengan sol EVA atau Phylon yang ringan. Kombinasi ini memberikan tampilan elegan namun tetap nyaman dipakai.",
  },
  {
    q: "Apakah bisa cetak logo brand saya di sandal?",
    a: "Bisa. Kami memiliki mesin Emboss/Hot Press yang dapat mencetak logo brand Anda langsung di upper atau sol sandal. Tersedia juga pilihan label jahit dan stiker emboss.",
  },
];

export default function MaklonSandalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero.sandal}
            alt="Jasa maklon sandal custom Sidoarjo Luqman Bintang Jaya"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/30 mb-6">
              <span className="text-gold-300 text-sm font-medium font-body">Layanan Unggulan · Maklon Sandal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-5">
              Jasa Maklon Sandal Custom Sidoarjo — Harga Pabrik
            </h1>
            <p className="text-lg text-navy-200 font-body leading-relaxed mb-8">
              Luqman Bintang Jaya adalah spesialis produksi sandal custom sejak 1987. Kami melayani maklon sandal
              berbagai jenis — wanita, pria, anak, hotel, souvenir, hingga outdoor — dengan harga langsung dari pabrik
              dan kualitas premium terjamin.
            </p>
            <a
              href="https://wa.me/6281233913988"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold font-body rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(245,166,35,0.4)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Sandal Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Jenis Sandal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900 mb-3">
              Jenis Sandal yang Kami Produksi
            </h2>
            <p className="text-slate-500 font-body max-w-2xl leading-relaxed">
              Dengan pengalaman lebih dari 37 tahun, kami telah memproduksi hampir semua jenis sandal yang ada di
              pasaran Indonesia. Setiap jenis bisa dikustomisasi sesuai kebutuhan brand Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jenisSandal.map((j) => (
              <div
                key={j.label}
                className="group rounded-2xl border border-slate-100 bg-white overflow-hidden hover:border-gold-300 hover:shadow-[0_8px_32px_rgba(30,58,95,0.1)] transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={j.img}
                    alt={j.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold font-heading text-navy-900 mb-2">{j.label}</h3>
                  <p className="text-sm text-slate-500 font-body leading-relaxed">{j.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mesin Produksi */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-navy-900/10 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Teknologi Produksi
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900">
              Mesin Produksi Sandal Profesional
            </h2>
            <p className="mt-3 text-slate-500 font-body max-w-2xl mx-auto">
              Didukung oleh mesin-mesin industri modern yang dioperasikan tenaga berpengalaman sejak 1987.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mesin.map((m) => (
              <div
                key={m.nama}
                className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-[0_8px_28px_rgba(30,58,95,0.1)] hover:border-navy-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center text-gold-400 mb-4">
                  {m.icon}
                </div>
                <h3 className="text-sm font-bold font-heading text-navy-900 mb-2">{m.nama}</h3>
                <p className="text-xs text-slate-500 font-body leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bahan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-700 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Material
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900 mb-3">
              Bahan yang Tersedia
            </h2>
            <p className="text-slate-500 font-body max-w-2xl leading-relaxed">
              Kami menyediakan berbagai pilihan material untuk memenuhi kebutuhan estetika, kenyamanan, dan anggaran produksi Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-7">
              <h3 className="text-base font-bold font-heading text-navy-900 mb-5 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-navy-900 inline-block" />
                Bahan Upper
              </h3>
              <ul className="space-y-3">
                {bahanUpper.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-body text-slate-700">
                    <svg className="w-4 h-4 text-gold-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-7">
              <h3 className="text-base font-bold font-heading text-navy-900 mb-5 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-gold-500 inline-block" />
                Bahan Sol / Outsole
              </h3>
              <ul className="space-y-3">
                {bahanSol.map((b) => (
                  <li key={b.nama} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <div>
                      <span className="text-sm font-semibold font-body text-slate-800">{b.nama}</span>
                      <span className="text-xs text-slate-500 font-body ml-1.5">— {b.ket}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 bg-navy-900/10 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
                Portofolio
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900">
                Hasil Produksi Kami
              </h2>
              <p className="mt-2 text-slate-500 font-body">Contoh sandal yang telah kami produksi untuk klien dari berbagai daerah.</p>
            </div>
            <a
              href="https://wa.me/6281233913988"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold font-body rounded-xl transition-all duration-200 shadow-[0_4px_12px_rgba(245,166,35,0.3)]"
            >
              Mau seperti ini? Hubungi kami
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {IMAGES.portofolio.sandal.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-[0_8px_28px_rgba(30,58,95,0.12)] transition-all duration-300 aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-body">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-navy-50 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900">
              Pertanyaan Umum Maklon Sandal
            </h2>
          </div>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white mb-4">
            Siap Order Maklon Sandal Custom?
          </h2>
          <p className="text-navy-200 font-body mb-8">
            Konsultasikan kebutuhan sandal Anda sekarang — gratis, tanpa komitmen.
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
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
