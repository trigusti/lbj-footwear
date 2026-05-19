'use client'

import { useState } from 'react'

export default function FormKontak() {
  const [form, setForm] = useState({
    nama: '',
    nomorHP: '',
    jenisProduk: '',
    quantity: '',
    pesan: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    const msg = `Halo Luqman Bintang Jaya, saya ingin konsultasi maklon.
Nama: *${form.nama}*
HP: ${form.nomorHP}
Produk: ${form.jenisProduk}
Estimasi Qty: ${form.quantity}
Detail: ${form.pesan}`
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/6281233913988?text=${encoded}`, '_blank')
    setTimeout(() => setSubmitting(false), 2000)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-body placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all duration-200"
  const labelClass = "block text-sm font-semibold font-body text-slate-700 mb-1.5"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nama" className={labelClass}>
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          required
          value={form.nama}
          onChange={handleChange}
          placeholder="Contoh: Budi Santoso"
          className={inputClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="nomorHP" className={labelClass}>
          Nomor HP / WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="nomorHP"
          name="nomorHP"
          type="tel"
          required
          value={form.nomorHP}
          onChange={handleChange}
          placeholder="Contoh: 08123456789"
          className={inputClass}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="jenisProduk" className={labelClass}>
          Jenis Produk <span className="text-red-500">*</span>
        </label>
        <select
          id="jenisProduk"
          name="jenisProduk"
          required
          value={form.jenisProduk}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Pilih jenis produk...</option>
          <option value="Sandal">Sandal</option>
          <option value="Sepatu">Sepatu</option>
          <option value="Sandal dan Sepatu">Sandal dan Sepatu</option>
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className={labelClass}>
          Estimasi Quantity
        </label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Contoh: 500 pasang"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="pesan" className={labelClass}>
          Detail / Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={4}
          value={form.pesan}
          onChange={handleChange}
          placeholder="Ceritakan kebutuhan produksi Anda..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-gold-500 hover:bg-gold-600 active:bg-gold-700 disabled:bg-gold-300 text-white font-semibold font-body rounded-xl transition-all duration-200 shadow-[0_4px_16px_rgba(245,166,35,0.35)] hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {submitting ? 'Mengarahkan ke WhatsApp...' : 'Kirim via WhatsApp'}
      </button>
      <p className="text-center text-xs text-slate-500 font-body">
        Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi
      </p>
    </form>
  )
}
