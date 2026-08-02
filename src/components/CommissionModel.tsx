import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  'Sem mensalidade fixa',
  'Sem custo de mídia',
  'A AIKA ganha quando você ganha',
  'Resultado em 24h antes de qualquer compromisso',
  'Zero risco para começar',
]

export function CommissionModel() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="inline-flex items-center gap-2 uppercase text-xs font-medium text-white/60 tracking-widest font-mono mb-4">
            <span className="w-1.5 h-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(180,130,50,0.8)]" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
            Modelo de negócio
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[1.05] mb-6 font-display">
            Você investe{' '}
            <span className="text-[#64748b]">conforme o resultado.</span>
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-lg">
            A AIKA é comissionada sobre as vendas que gerar para sua clínica. Não existe mensalidade, não existe custo de anúncio. Se você ganha, nós também ganhamos.
          </p>
          <p className="text-base text-[#94a3b8] leading-relaxed">
            Esse modelo elimina o risco da sua decisão. Você só investe depois de ver resultado — e o primeiro resultado vem em 24 horas com o Pico de Faturamento.
          </p>
        </motion.div>

        {/* Right — Benefits card */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)]"
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

          {/* Header */}
          <div className="mb-8 pb-6 border-b border-white/8">
            <div className="text-sm text-[#64748b] font-mono uppercase tracking-wider mb-2">O que está incluso</div>
            <div className="text-3xl font-bold text-white font-display">Modelo comissionado</div>
          </div>

          {/* Benefits list */}
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={18} style={{ color: 'oklch(0.735 0.129 83)' }} />
                <span className="text-white text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 pt-6 border-t border-white/8">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold font-mono" style={{ color: 'oklch(0.735 0.129 83)' }}>R$0</div>
              <div>
                <div className="text-white text-sm font-medium">para começar</div>
                <div className="text-[#64748b] text-xs">A AIKA só ganha quando você ganha</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
