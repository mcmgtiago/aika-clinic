import { motion } from 'motion/react'
import { Target, TrendingUp, Users, Shield } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Conhecimento profundo do mercado',
    description: 'Sabemos quanto custa um lead, qual procedimento converte mais, e como funciona a sazonalidade da estética.',
  },
  {
    icon: TrendingUp,
    title: 'Estratégias testadas em +200 clínicas',
    description: 'Não reinventamos a roda com cada cliente. Aplicamos o que já provou funcionar — e adaptamos ao seu cenário.',
  },
  {
    icon: Users,
    title: 'Linguagem do seu paciente',
    description: 'Falamos com quem agenda botox, preenchimento e limpeza de pele. Não com quem compra SaaS ou e-commerce.',
  },
  {
    icon: Shield,
    title: 'Sem curva de aprendizado',
    description: 'Agências generalistas gastam seus primeiros meses aprendendo o mercado. A AIKA já chega sabendo.',
  },
]

export function WhyAesthetics() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-32 border-t border-white/5">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Header */}
      <div className="max-w-4xl mb-10 md:mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="inline-flex items-center gap-2 uppercase text-xs font-medium text-white/60 tracking-widest font-mono mb-4">
            <span className="w-1.5 h-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(180,130,50,0.8)]" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
            Por que estética
          </p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-6 font-display">
            Um mercado,{' '}
            <span className="text-[#64748b]">nenhuma distração.</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
            Enquanto outras agências dividem atenção entre 10 nichos diferentes, nós dedicamos 100% do time a entender clínicas de estética. Isso muda tudo.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent)] group hover:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent)] transition-all duration-500 hover:-translate-y-1"
            style={{ position: 'relative' }}
          >
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
              padding: '1px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              borderRadius: '16px',
            }} />

            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-sm"
              style={{ backgroundColor: 'rgba(180,130,50,0.1)', border: '1px solid rgba(180,130,50,0.2)' }}
            >
              <reason.icon size={20} style={{ color: 'oklch(0.735 0.129 83)' }} />
            </div>

            <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{reason.title}</h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
