import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Send, ArrowRight } from 'lucide-react'

// Unicorn project — cruz/glow (hero only)
const UNICORN_HERO_ID = '4OF29NF3HVBYQsrwPvVq'
// Unicorn project — mouse interactive (full page)
// Use same ID or a different one if you have a mouse-only effect
const UNICORN_MOUSE_ID = '4OF29NF3HVBYQsrwPvVq'

const bgVideos = ['/assets/bg-video-1.mp4', '/assets/bg-video-2.mp4', '/assets/bg-video-3.mp4']

export function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0)

  // Rotate videos every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((v) => (v + 1) % bgVideos.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Re-init UnicornStudio after React renders
  useEffect(() => {
    const timer = setTimeout(() => {
      const win = window as any
      if (win.UnicornStudio?.init) {
        win.UnicornStudio.init()
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* UnicornStudio — Mouse interactive effect (FULL PAGE FIXED) */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none">
        <div
          data-us-project={UNICORN_MOUSE_ID}
          data-us-scale="1"
          data-us-dpi="1"
          data-us-lazyload="false"
          data-us-fixed="true"
          className="absolute w-full h-full left-0 top-0 pointer-events-auto"
        />
      </div>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-24 overflow-hidden">
        {/* Background videos (alternating, blurred, low opacity) */}
        <div className="absolute inset-0 -z-5">
          {bgVideos.map((src, idx) => (
            <video
              key={src}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover blur-[2px] transition-opacity duration-[2000ms] ${
                idx === currentVideo ? 'opacity-[0.12]' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dark overlay on videos */}
          <div className="absolute inset-0 bg-[#050505]/70" />
          <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* UnicornStudio — Cruz/glow effect (HERO ONLY) */}
        <div
          className="absolute top-0 left-0 w-full h-[1100px] -z-5"
          style={{
            maskImage: 'linear-gradient(180deg, transparent 0%, black 5%, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 5%, black 75%, transparent 100%)',
          }}
        >
          <div
            data-us-project={UNICORN_HERO_ID}
            data-us-scale="1"
            data-us-dpi="1.5"
            data-us-lazyload="false"
            className="absolute w-full h-full left-0 top-0"
          />
          <div className="absolute inset-0 bg-[#050505]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:pt-16 md:pb-28 pt-10 pb-10">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-6 flex w-full items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
              <span className="text-sm font-normal text-neutral-200">Growth exclusivo para clínicas de estética</span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="max-w-4xl text-center mx-auto space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl lg:text-8xl leading-[0.95] font-light text-white tracking-tight font-display"
            >
              Previsibilidade não é <span className="gradient-text">acidente.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-neutral-400 mt-5 max-w-2xl mx-auto"
            >
              Geramos caixa agora e construímos previsibilidade para o mês seguinte. +200 clínicas de estética já comprovaram.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center"
            >
              {/* Primary CTA — Gold premium */}
              <a
                href="#contato"
                className="group transition-all duration-300 overflow-hidden font-medium bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-4 px-8 relative shadow-[0_15px_33px_-12px_rgba(255,162,42,0.9),inset_0_4px_6.3px_rgb(252,220,134),inset_0_-5px_6.3px_rgb(255,162,38)] text-amber-900 hover:shadow-[0_20px_40px_-10px_rgba(255,162,42,1)] hover:scale-[1.02] active:scale-95"
              >
                <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full" />
                <span className="flex items-center gap-2 relative font-semibold">
                  Quero previsibilidade
                  <Send size={16} />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#cases"
                className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-full py-3 px-5 backdrop-blur-lg"
              >
                Ver resultados reais
                <ArrowRight size={16} className="text-neutral-400" />
              </a>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[11px] text-white/30 mt-4 font-mono"
            >
              Diagnóstico gratuito · Sem compromisso · Resultado em 24h
            </motion.p>
          </div>
        </div>
      </section>
    </>
  )
}
