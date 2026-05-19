import type { Metadata } from "next";
import FormKontak from "@/components/FormKontak";

export const metadata: Metadata = {
  title: "Kontak & Order Maklon Sandal Sidoarjo | Luqman Bintang Jaya",
  description:
    "Hubungi Luqman Bintang Jaya untuk order maklon sandal custom Sidoarjo. Konsultasi gratis via WhatsApp +62 812-3391-3988.",
  openGraph: {
    title: "Kontak & Order Maklon Sandal Sidoarjo | Luqman Bintang Jaya",
    description: "Konsultasi gratis maklon sandal custom. WhatsApp +62 812-3391-3988. Sidoarjo, Jawa Timur.",
    url: "https://luqmanbintangjaya.com/kontak/",
  },
  alternates: { canonical: "https://luqmanbintangjaya.com/kontak/" },
};

const infoKontak = [
  {
    label: "WhatsApp",
    value: "+62 812-3391-3988",
    href: "https://wa.me/6281233913988",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Alamat",
    value: "Jl. Tropodo 1 No.287, Tropodo Kulon, Tropodo, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256",
    href: "https://maps.google.com/?q=Jl.+Tropodo+1+No.287,+Sidoarjo",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Jam Kerja",
    value: "Senin–Sabtu, 08.00–17.00 WIB",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function KontakPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/30 mb-6">
            <span className="text-gold-300 text-sm font-medium font-body">Konsultasi Gratis · Tanpa Komitmen</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Konsultasi & Order Maklon Sandal Sidoarjo
          </h1>
          <p className="text-lg text-navy-200 font-body max-w-2xl mx-auto leading-relaxed">
            Ceritakan kebutuhan maklon Anda dan kami akan respons dalam waktu singkat.
            Konsultasi gratis, tidak perlu komitmen.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(30,58,95,0.08)] p-8 lg:p-10">
              <h2 className="text-xl font-extrabold font-heading text-navy-900 mb-2">
                Kirim Pesan via WhatsApp
              </h2>
              <p className="text-sm text-slate-500 font-body mb-7">
                Isi form di bawah dan Anda akan diarahkan langsung ke WhatsApp kami.
              </p>
              <FormKontak />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(30,58,95,0.08)] p-7">
                <h2 className="text-base font-extrabold font-heading text-navy-900 mb-5">
                  Informasi Kontak
                </h2>
                <div className="space-y-5">
                  {infoKontak.map((info) => (
                    <div key={info.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-navy-900 flex-shrink-0 flex items-center justify-center text-gold-400">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold font-body text-slate-400 uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-body text-navy-900 hover:text-gold-600 transition-colors duration-200 leading-relaxed"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm font-body text-navy-900 leading-relaxed">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 h-72 shadow-[0_4px_24px_rgba(30,58,95,0.08)]">
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

              <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6">
                <h3 className="text-sm font-bold font-heading text-navy-900 mb-3">Kenapa Konsultasi dengan Kami?</h3>
                <ul className="space-y-2">
                  {[
                    "Respons cepat — biasanya dalam 1-2 jam kerja",
                    "Estimasi harga transparan tanpa biaya tersembunyi",
                    "Konsultasi gratis, tidak perlu bayar apapun",
                    "Tim berpengalaman siap memberikan saran terbaik",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600 font-body">
                      <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
