'use client'

import { useState } from 'react'

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div
          key={i}
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
            open === i ? 'border-navy-300 shadow-[0_4px_24px_rgba(30,58,95,0.1)]' : 'border-slate-200 hover:border-navy-200'
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
            aria-expanded={open === i}
          >
            <span className={`text-base font-bold font-heading transition-colors duration-200 ${open === i ? 'text-navy-900' : 'text-slate-700'}`}>
              {f.q}
            </span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-navy-900 rotate-45' : 'bg-slate-100'}`}>
              <svg className={`w-4 h-4 transition-colors duration-200 ${open === i ? 'text-gold-400' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="px-7 pb-6 pt-1 bg-white border-t border-slate-100">
              <p className="text-base text-slate-600 font-body leading-relaxed">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
