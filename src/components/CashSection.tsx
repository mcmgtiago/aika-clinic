import { motion } from 'motion/react'
import { Send } from 'lucide-react'

export function CashSection() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-32">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)]"
        style={{ position: 'relative' }}
      >
        {/* Border gradient */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          padding: '1px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          borderRadius: '24px',
        }} />

        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px] bg-[rgba(180,130,50,0.08)]" />

        {/* Large 24H watermark */}
        <div className="absolute right-[-20px] bottom-[-60px] text-white/[0.02] font-mono text-[200px] md:text-[300px] leading-[0.8] pointer-events-none select-none">24H</div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 uppercase text-xs font-medium text-white/60 tracking-widest font-mono mb-4">
              <span className="w-1.5 h-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(180,130,50,0.8)]" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
              Diferencial
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter leading-[1.1] font-display mb-6">
              Começamos gerando <span className="gradient-text">caixa,</span>{' '}
              <span className="text-[#64748b]">não cobrando promessa.</span>
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-8 max-w-lg">
              Assim que a parceria começa, executamos o Pico de Faturamento — vendas reais em um dia. Depois, construímos a base para repetir o resultado todo mês.
            </p>
            <a
              href="#contato"
              className="group inline-flex transition-all duration-300 overflow-hidden font-medium bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full py-3.5 px-7 relative shadow-[0_12px_28px_-8px_rgba(255,162,42,0.7),inset_0_2px_4px_rgb(252,220,134),inset_0_-3px_4px_rgb(255,162,38)] text-amber-900 hover:shadow-[0_15px_33px_-8px_rgba(255,162,42,0.9)] hover:scale-[1.02] text-sm items-center gap-2"
            >
              <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full" />
              <span className="relative font-semibold flex items-center gap-2">Quero previsibilidade <Send size={14} /></span>
            </a>
          </div>

          {/* Right — Big metric */}
          <div className="lg:pl-12 lg:border-l lg:border-white/10">
            <small className="text-[#64748b] text-xs font-mono uppercase tracking-widest">
              Resultados já gerados em um único dia
            </small>
            <strong className="block my-4 font-mono text-6xl md:text-8xl leading-[0.85] tracking-tighter" style={{ color: 'oklch(0.735 0.129 83)' }}>
              R$12k
              <br />
              —134k
            </strong>
            <span className="font-display text-2xl md:text-3xl italic text-white/80">
              em 24 horas
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
