import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Jasa Maklon Sepatu Custom Sidoarjo | Luqman Bintang Jaya",
  description:
    "Jasa maklon sepatu custom Sidoarjo. Produksi sepatu merek sendiri desain bebas. Pengalaman 37 tahun, kualitas premium.",
  openGraph: {
    title: "Jasa Maklon Sepatu Custom Sidoarjo | Luqman Bintang Jaya",
    description: "Jasa maklon sepatu custom Sidoarjo. Produksi sepatu merek sendiri desain bebas. 37 tahun pengalaman.",
    url: "https://luqmanbintangjaya.com/maklon-sepatu/",
  },
  alternates: { canonical: "https://luqmanbintangjaya.com/maklon-sepatu/" },
};

const jenisSepatu = [
  { img: "https://picsum.photos/600/400?random=51", label: "Sepatu Casual / Sneakers", desc: "Desain trendi, nyaman dipakai sehari-hari." },
  { img: "https://picsum.photos/600/400?random=52", label: "Sepatu Formal / Pantofel", desc: "Elegan dan profesional untuk kebutuhan bisnis." },
  { img: "https://picsum.photos/600/400?random=53", label: "Sepatu Wanita", desc: "Heels, wedges, flat — semua model tersedia." },
  { img: "https://picsum.photos/600/400?random=54", label: "Sepatu Anak", desc: "Aman, ringan, dan tahan untuk aktivitas anak." },
  { img: "https://picsum.photos/600/400?random=55", label: "Sepatu Olahraga", desc: "Material breathable dan sol yang mendukung pergerakan." },
  { img: "https://picsum.photos/600/400?random=56", label: "Sepatu Safety / Kerja", desc: "Standar keamanan industri dengan konstruksi kuat." },
];

const mesin = [
  {
    nama: "Lasting Machine",
    desc: "Membentuk upper sepatu di atas cetakan (last) dengan presisi tinggi.",
  },
  {
    nama: "Cementing / Gluing Machine",
    desc: "Merekatkan upper dengan sol menggunakan lem industri khusus berkekuatan tinggi.",
  },
  {
    nama: "Press Hidrolik",
    desc: "Menekan dan menyatukan semua bagian sepatu dengan tekanan optimal.",
  },
  {
    nama: "Cutting / Clicker Press",
    desc: "Memotong bahan upper sesuai pola dan desain dengan akurasi tinggi.",
  },
  {
    nama: "Jahit Industri",
    desc: "Menjahit upper sepatu dengan jahitan presisi dan kuat yang tahan lama.",
  },
  {
    nama: "Injection Molding",
    desc: "Mencetak sol sepatu dari bahan PVC, rubber, atau TPR berkualitas.",
  },
  {
    nama: "Buffing / Roughing",
    desc: "Mengamplas permukaan sol agar lem lebih melekat sempurna.",
  },
  {
    nama: "Hot Air / Oven",
    desc: "Mengaktifkan lem dan proses pengeringan hasil produksi secara merata.",
  },
];

const bahanUpper = [
  "Kulit asli (genuine leather) — sapi, domba",
  "Kulit sintetis / PU",
  "Suede",
  "Kain kanvas",
  "Kain mesh / rajut (untuk sepatu olahraga)",
  "Bahan waterproof",
];

const bahanSol = [
  { nama: "Karet alam (natural rubber)", ket: "Fleksibel & grip kuat" },
  { nama: "TPR (Thermoplastic Rubber)", ket: "Fleksibel & tahan lama" },
  { nama: "EVA", ket: "Ringan & nyaman" },
  { nama: "PU (Polyurethane)", ket: "Ringan & empuk" },
  { nama: "PVC", ket: "Ekonomis & tahan lama" },
  { nama: "Crepe rubber", ket: "Anti-slip & natural" },
];

const faq = [
  {
    q: "Apakah tersedia layanan produksi sepatu merek sendiri (private label)?",
    a: "Ya. Kami menyediakan layanan full maklon termasuk branding — cetak logo, label, dan kemasan sesuai identitas brand Anda.",
  },
  {
    q: "Berapa minimum order untuk maklon sepatu?",
    a: "Minimum order untuk sepatu biasanya 300-500 pasang per model, tergantung kompleksitas desain dan material yang dipilih.",
  },
  {
    q: "Bisakah saya order sepatu safety bersertifikat?",
    a: "Kami dapat memproduksi sepatu safety dengan spesifikasi standar industri. Untuk sertifikasi khusus, silakan diskusikan kebutuhan Anda saat konsultasi.",
  },
  {
    q: "Berapa lama proses produksi sepatu custom?",
    a: "Sampel biasanya siap dalam 10-21 hari kerja. Produksi massal setelah persetujuan sampel membutuhkan 30-45 hari tergantung jumlah dan model.",
  },
];

export default function MaklonSepatuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero.sepatu}
            alt="Jasa maklon sepatu custom Sidoarjo Luqman Bintang Jaya"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/30 mb-6">
              <span className="text-gold-300 text-sm font-medium font-body">Layanan Tersedia · Maklon Sepatu</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-5">
              Jasa Maklon Sepatu Custom Sidoarjo — Luqman Bintang Jaya
            </h1>
            <p className="text-lg text-navy-200 font-body leading-relaxed mb-8">
              Selain sandal, kami juga melayani produksi maklon sepatu custom dengan standar kualitas yang sama.
              Dari sneakers hingga safety shoes — kami kerjakan dengan pengalaman lebih dari 37 tahun di industri alas kaki.
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
              Konsultasi Sepatu Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Jenis Sepatu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900 mb-3">
              Jenis Sepatu yang Kami Produksi
            </h2>
            <p className="text-slate-500 font-body max-w-2xl leading-relaxed">
              Dengan mesin dan tenaga ahli berpengalaman, kami siap memproduksi berbagai jenis sepatu
              custom sesuai spesifikasi brand Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jenisSepatu.map((j) => (
              <div key={j.label} className="group rounded-2xl border border-slate-100 bg-white overflow-hidden hover:border-gold-300 hover:shadow-[0_8px_32px_rgba(30,58,95,0.1)] transition-all duration-300">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image src={j.img} alt={j.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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

      {/* Mesin */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-navy-900/10 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Teknologi Produksi
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900">
              Mesin Produksi Sepatu Profesional
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mesin.map((m) => (
              <div key={m.nama} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-[0_8px_28px_rgba(30,58,95,0.1)] hover:border-navy-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
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
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 bg-navy-900/10 text-navy-900 text-xs font-semibold font-body uppercase tracking-widest rounded-full mb-4">
              Portofolio
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-navy-900">
              Hasil Produksi Kami
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {IMAGES.portofolio.sepatu.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 aspect-square">
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
              Pertanyaan Umum Maklon Sepatu
            </h2>
          </div>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white mb-4">
            Mulai Produksi Sepatu Brand Anda
          </h2>
          <p className="text-navy-200 font-body mb-8">
            Hubungi kami sekarang untuk konsultasi gratis seputar maklon sepatu custom.
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
