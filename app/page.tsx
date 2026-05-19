import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maklon Sandal Sidoarjo | Luqman Bintang Jaya",
  description:
    "Spesialis maklon sandal custom di Sidoarjo sejak 1987. Harga pabrik, custom desain bebas, fast turnaround. Melayani seluruh Indonesia. Konsultasi gratis!",
  openGraph: {
    title: "Maklon Sandal Sidoarjo | Luqman Bintang Jaya",
    description:
      "Spesialis maklon sandal custom di Sidoarjo sejak 1987. Harga langsung dari pabrik, melayani seluruh Indonesia.",
    url: "https://luqmanbintangjaya.com/",
    images: [{ url: "https://res.cloudinary.com/duqhnn1gc/image/upload/q_auto/f_auto/v1779166904/Desain_tanpa_judul_tnfxqp.png", alt: "Luqman Bintang Jaya" }],
  },
  alternates: { canonical: "https://luqmanbintangjaya.com/" },
};

const keunggulan = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "37+ Tahun Pengalaman",
    desc: "Berdiri sejak 1987, kami telah memproduksi jutaan pasang sandal untuk ratusan brand lokal Indonesia.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Harga Langsung Pabrik",
    desc: "Tanpa perantara, tanpa markup distribusi. Harga yang Anda dapat adalah harga langsung dari produsen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Custom Desain Bebas",
    desc: "Bawa desain Anda sendiri, atau kami bantu desain dari nol. Semua bisa dikustom sesuai kebutuhan brand Anda.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Kirim Seluruh Indonesia",
    desc: "Produksi cepat dengan pengiriman ke seluruh Indonesia. Lokasi Sidoarjo strategis untuk klien Jawa Timur.",
  },
];

const proses = [
  { step: "01", title: "Konsultasi & Diskusi", desc: "Ceritakan kebutuhan Anda — jenis sandal, desain, material, dan target quantity. Kami bantu arahkan pilihan terbaik." },
  { step: "02", title: "Pembuatan Sampel", desc: "Tim kami membuat sampel produk sesuai spesifikasi yang disepakati. Anda bisa minta revisi hingga puas." },
  { step: "03", title: "Persetujuan & Produksi", desc: "Setelah sampel disetujui, produksi massal dimulai. Kami pastikan setiap unit sesuai standar kualitas." },
  { step: "04", title: "QC & Pengiriman", desc: "Setiap batch melewati quality control ketat sebelum dikemas dan dikirimkan ke alamat Anda." },
];

const testimoni = [
  {
    nama: "Rizky Pratama",
    kota: "Surabaya, Jawa Timur",
    rating: 5,
    pesan: "Sudah 3 kali order sandal hotel di LBJ dan hasilnya selalu konsisten. Kualitas jahitan rapi, bahan tidak mudah rusak. Pengiriman juga cepat, cocok untuk kebutuhan massal.",
  },
  {
    nama: "Siti Aisyah Rahmawati",
    kota: "Jakarta Selatan, DKI Jakarta",
    rating: 5,
    pesan: "Mau buka brand sandal wanita sendiri dan bingung cari produsen. Teman rekomendasikan LBJ Sidoarjo. Ternyata responsif, harga transparan, dan kualitasnya memuaskan. Produk pertama saya laris!",
  },
  {
    nama: "Budi Hartono",
    kota: "Makassar, Sulawesi Selatan",
    rating: 5,
    pesan: "Pesan sandal custom untuk souvenir acara perusahaan, 2.000 pasang. Selesai tepat waktu dan design sesuai brief. Tim LBJ komunikatif dari awal sampai barang tiba.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-950">
        {/* subtle bg gradient only — no full-bleed image */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(30,58,95,0.6) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(245,166,35,0.05) 0%, transparent 60%)" }} />

        <div className="relative w-full max-w-7xl xl:max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

            {/* LEFT — text */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-gold-300 text-sm xl:text-base font-medium font-body">Berdiri sejak 1987 · 37+ Tahun Pengalaman</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-heading text-white leading-tight tracking-tight mb-6">
                Maklon Sandal &amp; Sepatu Custom Sidoarjo —{" "}
                <span className="text-gold-400">Luqman Bintang Jaya</span>
              </h1>

              <p className="text-base xl:text-lg text-navy-200 font-body leading-relaxed mb-8">
                Spesialis maklon sandal custom sejak 1987. Terima desain sendiri atau bantu desain dari nol.
                Harga langsung pabrik, kualitas premium, melayani seluruh Indonesia.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/6281233913988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-white font-semibold font-body rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(245,166,35,0.4)] hover:shadow-[0_6px_28px_rgba(245,166,35,0.5)]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis via WhatsApp
                </a>
                <Link
                  href="/maklon-sandal/"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold font-body rounded-xl transition-all duration-200"
                >
                  Lihat Layanan
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { val: "37+", label: "Tahun Pengalaman" },
                  { val: "500+", label: "Brand Dilayani" },
                  { val: "30+", label: "Kota Terjangkau" },
                  { val: "50+", label: "Model Produk" },
                ].map((s) => (
                  <div key={s.label} className="text-center border border-white/10 rounded-xl px-3 py-4 bg-white/5">
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading text-gold-400">{s.val}</div>
                    <div className="text-xs text-navy-300 font-body mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — hero image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-full min-h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                <Image
                  src="https://picsum.photos/800/600?random=1"
                  alt="Produksi sandal custom berkualitas Luqman Bintang Jaya Sidoarjo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                {/* floating badge */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-navy-950/80 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold font-heading">Kualitas Premium Terjamin</div>
                      <div className="text-navy-300 text-xs font-body">Produksi sejak 1987 · Melayani 500+ brand</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* decorative glow */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl pointer-events-none z-0" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-navy-500/10 blur-3xl pointer-events-none z-0" />
            </div>

          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-navy-50 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Mengapa Memilih Kami
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold font-heading text-navy-900 tracking-tight">
              Keunggulan Luqman Bintang Jaya
            </h2>
            <p className="mt-4 text-slate-500 font-body max-w-xl mx-auto">
              Kami bukan sekadar produsen — kami mitra produksi sandal Anda yang terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keunggulan.map((k) => (
              <div
                key={k.title}
                className="group p-7 rounded-2xl border border-slate-100 bg-white hover:border-navy-200 hover:shadow-[0_8px_32px_rgba(30,58,95,0.1)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-50 group-hover:bg-navy-900 flex items-center justify-center text-navy-900 group-hover:text-gold-400 transition-all duration-300 mb-5">
                  {k.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-2">{k.title}</h3>
                <p className="text-base text-slate-500 font-body leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-navy-900/10 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Layanan Kami
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold font-heading text-navy-900 tracking-tight">
              Dua Layanan Maklon Utama
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                href: "/maklon-sandal/",
                badge: "Layanan Unggulan",
                title: "Maklon Sandal Custom",
                desc: "Spesialisasi utama kami. Sandal wanita, pria, anak, hotel, souvenir, hingga sandal outdoor — semua bisa diproduksi sesuai desain dan brand Anda.",
                cta: "Lihat Detail Sandal",
                highlight: true,
                img: "https://picsum.photos/600/400?random=2",
              },
              {
                href: "/maklon-sepatu/",
                badge: "Tersedia",
                title: "Maklon Sepatu Custom",
                desc: "Kami juga melayani produksi sepatu custom — sneakers, sepatu formal, sepatu wanita, sepatu anak, hingga safety shoes.",
                cta: "Lihat Detail Sepatu",
                highlight: false,
                img: "https://picsum.photos/600/400?random=3",
              },
            ].map((s) => (
              <div
                key={s.href}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-[0_12px_40px_rgba(30,58,95,0.12)] ${
                  s.highlight ? "border-gold-300 shadow-[0_4px_20px_rgba(245,166,35,0.15)]" : "border-slate-200"
                } bg-white`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold font-body ${
                      s.highlight ? "bg-gold-500 text-white" : "bg-white/90 text-navy-900"
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 font-body leading-relaxed mb-5">{s.desc}</p>
                  <Link
                    href={s.href}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-body transition-all duration-200 ${
                      s.highlight
                        ? "bg-gold-500 hover:bg-gold-600 text-white shadow-[0_4px_12px_rgba(245,166,35,0.3)]"
                        : "bg-navy-50 hover:bg-navy-100 text-navy-900"
                    }`}
                  >
                    {s.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses */}
      <section className="py-20 lg:py-24 bg-navy-950 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-gold-500/20 text-gold-300 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Alur Produksi
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold font-heading text-white tracking-tight">
              Proses Maklon yang Mudah & Transparan
            </h2>
            <p className="mt-4 text-navy-300 font-body max-w-xl mx-auto">
              Dari konsultasi hingga produk jadi di tangan Anda — kami pastikan prosesnya jelas dan tanpa ribet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proses.map((p) => (
              <div key={p.step} className="bg-navy-900/60 border border-navy-700 rounded-2xl p-6 h-full">
                <div className="text-4xl font-extrabold font-heading text-gold-500/30 mb-3">{p.step}</div>
                <h3 className="text-base font-bold font-heading text-white mb-2">{p.title}</h3>
                <p className="text-sm text-navy-300 font-body leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-700 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Testimoni Klien
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold font-heading text-navy-900 tracking-tight">
              Dipercaya Klien dari Seluruh Indonesia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimoni.map((t) => (
              <div
                key={t.nama}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:shadow-[0_8px_32px_rgba(30,58,95,0.08)] transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 font-body text-base leading-relaxed mb-5 italic">
                  &ldquo;{t.pesan}&rdquo;
                </p>
                <div>
                  <div className="font-bold font-heading text-navy-900 text-sm">{t.nama}</div>
                  <div className="text-xs text-slate-400 font-body mt-0.5">{t.kota}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Maps */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
                Siap Produksi Sandal Brand Anda?
              </h2>
              <p className="text-navy-200 font-body leading-relaxed mb-8">
                Konsultasikan kebutuhan maklon Anda sekarang. Tim kami siap membantu dari desain hingga produk jadi
                — gratis tanpa komitmen.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/6281233913988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold font-body rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(245,166,35,0.4)]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis Sekarang
                </a>
                <Link
                  href="/kontak/"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold font-body rounded-xl transition-all duration-200"
                >
                  Kirim Pesan
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-navy-700 shadow-[0_8px_32px_rgba(0,0,0,0.3)] h-72 lg:h-80">
              <iframe
                src="https://maps.google.com/maps?q=Jl.+Tropodo+1+No.287,+Tropodo+Kulon,+Tropodo,+Kec.+Waru,+Kabupaten+Sidoarjo,+Jawa+Timur+61256&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Luqman Bintang Jaya Sidoarjo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
