import { useState } from 'react'
import { motion } from 'motion/react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

const videos = [
  { name: 'Rubia', src: '/assets/pico-rubia.webm', value: 'R$134k', city: 'PR' },
  { name: 'Laila', src: '/assets/pico-laila.webm', value: 'R$36k', city: 'ES' },
  { name: 'Kamila', src: '/assets/pico-kamila.webm', value: 'R$17k', city: 'RS' },
  { name: 'Royal Face', src: '/assets/pico-royal-face.webm', value: 'R$34k', city: 'PR' },
  { name: 'Botoclinic', src: '/assets/pico-botoclinic.webm', value: 'R$53k', city: 'MG' },
  { name: 'Maykon', src: '/assets/pico-maykon.webm', value: 'R$58k', city: 'PR' },
]

export function PicoShowcase() {
  const [offset, setOffset] = useState(0)
  const visibleCount = 3
  const maxOffset = videos.length - visibleCount

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-[#f5f5f5] relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1300px] mx-auto px-6 mb-12"
      >
        <span className="font-mono text-xs uppercase tracking-widest font-semibold mb-2 block" style={{ color: 'oklch(0.55 0.129 83)' }}>
          Pico de Faturamento · Resultados
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tighter font-display" style={{ background: 'none', WebkitTextFillColor: 'unset', WebkitBackgroundClip: 'unset' }}>
          Um dia que muda o mês.
        </h2>
        <p className="text-neutral-500 mt-4 flex items-center gap-2">
          <Play size={14} style={{ color: 'oklch(0.55 0.129 83)' }} />
          Donos de clínica contam o resultado. Toque para ouvir.
        </p>
      </motion.div>

      {/* Carousel with arrows */}
      <div className="max-w-[1300px] mx-auto px-6 relative">
        {/* Nav arrows */}
        <button
          onClick={prev}
          disabled={offset === 0}
          className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white ring-1 ring-neutral-200 shadow-md flex items-center justify-center text-neutral-700 hover:bg-neutral-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          disabled={offset === maxOffset}
          className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white ring-1 ring-neutral-200 shadow-md flex items-center justify-center text-neutral-700 hover:bg-neutral-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} />
        </button>

        {/* Track */}
        <div className="overflow-hidden mx-8 md:mx-14">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${offset * (240 + 20)}px)` }}
          >
            {videos.map((video, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="shrink-0 w-[200px] md:w-[220px] rounded-2xl overflow-hidden group relative bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-lg transition-all"
              >
                {/* Video — 9:16 phone format */}
                <div className="aspect-[9/16] overflow-hidden bg-neutral-100 relative">
                  <video src={video.src} controls preload="metadata" playsInline className="w-full h-full object-cover" />
                </div>

                {/* Meta */}
                <div className="flex justify-between items-center px-4 py-3">
                  <div>
                    <span className="text-neutral-900 text-sm font-medium">{video.name}</span>
                    <span className="text-neutral-400 text-xs ml-1.5">{video.city}</span>
                  </div>
                  <span className="font-mono text-base font-bold" style={{ color: 'oklch(0.55 0.129 83)' }}>{video.value}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-8">
          {videos.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx >= offset && idx < offset + visibleCount
                  ? 'bg-white/80 scale-110'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
