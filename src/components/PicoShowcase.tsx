import { useState } from 'react'
import { motion } from 'motion/react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

const videos = [
  { name: 'Rubia', src: '/assets/pico-rubia.mp4', value: 'R$134k', city: 'PR' },
  { name: 'Laila', src: '/assets/pico-laila.mp4', value: 'R$36k', city: 'ES' },
  { name: 'Kamila', src: '/assets/pico-kamila.mp4', value: 'R$17k', city: 'RS' },
  { name: 'Royal Face', src: '/assets/pico-royal-face.mp4', value: 'R$34k', city: 'PR' },
  { name: 'Botoclinic', src: '/assets/pico-botoclinic.mp4', value: 'R$53k', city: 'MG' },
  { name: 'Maykon', src: '/assets/pico-maykon.mp4', value: 'R$58k', city: 'PR' },
]

export function PicoShowcase() {
  const [offset, setOffset] = useState(0)
  const visibleCount = 3
  const maxOffset = videos.length - visibleCount

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <section className="py-32 border-t border-white/5 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1300px] mx-auto px-6 mb-12"
      >
        <span className="font-mono text-xs uppercase tracking-widest font-semibold mb-2 block" style={{ color: 'oklch(0.735 0.129 83)' }}>
          Pico de Faturamento · Resultados
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter font-display">
          Um dia que muda o mês.
        </h2>
        <p className="text-[#94a3b8] mt-4 flex items-center gap-2">
          <Play size={14} style={{ color: 'oklch(0.735 0.129 83)' }} />
          Donos de clínica contam o resultado. Toque para ouvir.
        </p>
      </motion.div>

      {/* Carousel with arrows */}
      <div className="max-w-[1300px] mx-auto px-6 relative">
        {/* Nav arrows */}
        <button
          onClick={prev}
          disabled={offset === 0}
          className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          disabled={offset === maxOffset}
          className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
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
                className="shrink-0 w-[220px] md:w-[240px] rounded-2xl overflow-hidden group relative bg-[#0a0a0a] ring-1 ring-white/10 hover:ring-white/20 transition-all"
              >
                {/* Video — 9:16 phone format */}
                <div className="aspect-[9/16] overflow-hidden bg-[#0a0a0a] relative">
                  <video src={video.src} controls preload="metadata" playsInline className="w-full h-full object-cover" />
                </div>

                {/* Meta */}
                <div className="flex justify-between items-center px-4 py-3">
                  <div>
                    <span className="text-white text-sm font-medium">{video.name}</span>
                    <span className="text-[#64748b] text-xs ml-1.5">{video.city}</span>
                  </div>
                  <span className="font-mono text-base font-bold" style={{ color: 'oklch(0.735 0.129 83)' }}>{video.value}</span>
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
