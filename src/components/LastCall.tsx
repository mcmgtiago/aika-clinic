import { motion } from 'motion/react'
import { Send } from 'lucide-react'

export function LastCall({ onCtaClick }: { onCtaClick?: () => void }) {
  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-30 blur-[120px]" style={{ background: 'radial-gradient(circle, oklch(0.735 0.129 83 / 0.3), transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter font-display mb-6">
            Enquanto você lê isso, sua base continua parada.
          </h2>
          <p className="text-base md:text-lg text-[#94a3b8] mb-8 max-w-xl mx-auto leading-relaxed">
            Você não precisa de mais um anúncio. Precisa ativar o que já construiu. Agende sua call, descubra quanto sua base pode faturar em um único dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto group transition-all duration-300 overflow-hidden font-semibold bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-4 px-8 relative shadow-[0_15px_33px_-12px_rgba(255,162,42,0.9),inset_0_4px_6.3px_rgb(252,220,134),inset_0_-5px_6.3px_rgb(255,162,38)] text-amber-900 hover:shadow-[0_20px_40px_-10px_rgba(255,162,42,1)] hover:scale-[1.02] active:scale-95"
            >
              <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full" />
              <span className="relative flex items-center justify-center gap-2 font-semibold">
                Agendar diagnóstico gratuito <Send size={15} />
              </span>
            </button>
          </div>

          <p className="text-[11px] text-white/30 font-mono mt-4">
            Diagnóstico gratuito · Sem compromisso · Você só paga sobre o resultado
          </p>
        </motion.div>
      </div>
    </section>
  )
}
