import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Send, ArrowRight } from 'lucide-react'
import { ContactModal } from './ContactModal'

const UNICORN_PROJECT_ID = '4OF29NF3HVBYQsrwPvVq'

const bgVideos = [
  '/assets/bg-video-1.webm',
  '/assets/bg-video-2.webm',
  '/assets/bg-video-3.webm',
]

const logos = [
  { icon: 'simple-icons:spacex', label: 'SpaceX' },
  { icon: 'simple-icons:uber', label: 'Uber' },
  { icon: 'simple-icons:visa', label: 'Visa' },
  { icon: 'simple-icons:grab', label: 'Grab' },
  { icon: 'simple-icons:bose', label: 'Bose' },
  { icon: 'simple-icons:discover', label: 'Discover' },
  { icon: 'simple-icons:dji', label: 'DJI' },
  { icon: 'simple-icons:nikon', label: 'Nikon' },
  { icon: 'simple-icons:sony', label: 'Sony' },
  { icon: 'simple-icons:nasa', label: 'NASA' },
]

export function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const win = window as any
      if (win.UnicornStudio?.init) win.UnicornStudio.init()
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((v) => (v + 1) % bgVideos.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section id="inicio" className="relative pt-24">
        {/* Layer 1: Background videos — low opacity, blurred */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          {bgVideos.map((src, idx) => (
            <video
              key={src}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover blur-sm transition-opacity duration-[2000ms] ${
                idx === currentVideo ? 'opacity-20' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Layer 2: UnicornStudio cross — hero only */}
        <div
          className="absolute top-0 left-0 w-full h-[1100px] -z-10"
          style={{
            maskImage: 'linear-gradient(180deg, transparent 0%, black 5%, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 5%, black 75%, transparent 100%)',
          }}
        >
          <div
            data-us-project={UNICORN_PROJECT_ID}
            data-us-scale="1"
            data-us-dpi="1.5"
            data-us-lazyload="false"
            className="absolute w-full h-full left-0 top-0"
          />
        </div>

        {/* Dark overlays */}
        <div className="absolute inset-0 -z-[5] bg-[#050505]/40" />
        <div className="absolute bottom-0 left-0 w-full h-72 -z-[5] bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-10 md:pt-20 md:pb-24 lg:pt-32 lg:pb-40">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-5 flex w-full items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
              <span className="text-xs sm:text-sm font-normal text-neutral-200">Growth exclusivo para clínicas de estética</span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="max-w-4xl text-center mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[82px] leading-[1.02] font-light text-white tracking-tight font-display mb-6"
            >
              Previsibilidade não é <span className="gradient-text">acidente.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-8"
            >
              Geramos caixa agora e construímos previsibilidade para o mês seguinte. +200 clínicas de estética já comprovaram.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-4"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto group transition-all duration-300 overflow-hidden font-semibold bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-3.5 sm:py-4 px-7 sm:px-8 relative shadow-[0_15px_33px_-12px_rgba(255,162,42,0.9),inset_0_4px_6.3px_rgb(252,220,134),inset_0_-5px_6.3px_rgb(255,162,38)] text-amber-900 hover:shadow-[0_20px_40px_-10px_rgba(255,162,42,1)] hover:scale-[1.02] active:scale-95"
              >
                <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full" />
                <span className="flex items-center justify-center gap-2 relative font-semibold text-sm sm:text-base">
                  Quero previsibilidade <Send size={15} />
                </span>
              </button>

              <a
                href="#cases"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-full py-3.5 px-5 backdrop-blur-lg"
              >
                Ver resultados reais <ArrowRight size={15} className="text-neutral-400" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[10px] text-white/30 font-mono"
            >
              Diagnóstico gratuito · Sem compromisso · Resultado em 24h
            </motion.p>
          </div>
        </div>

        {/* Logo Ticker — integrated in hero, no title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative pb-10 md:pb-16 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <div className="hero-ticker-track flex gap-10 sm:gap-14 items-center">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center text-white/30 hover:text-white/60 transition-colors duration-300"
                dangerouslySetInnerHTML={{
                  __html: `<iconify-icon icon="${logo.icon}" width="36" height="36" aria-label="${logo.label}"></iconify-icon>`
                }}
              />
            ))}
          </div>
          <style>{`
            @keyframes hero-ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .hero-ticker-track {
              animation: hero-ticker 40s linear infinite;
              width: max-content;
            }
            .hero-ticker-track:hover { animation-play-state: paused; }
          `}</style>
        </motion.div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
