import { motion } from 'motion/react'

const painPoints = [
  'Você fatura bem, mas no fim do mês não sobra quase nada — e ninguém te explica pra onde foi.',
  'Você depende tanto do tráfego pago que, no dia que o anúncio para, o caixa para junto.',
  'Você olha sua base de clientes e sente que tem ouro ali parado, mas não sabe como ativar.',
  'Você quer crescer, mas a única resposta que te dão é sempre a mesma: "invista mais".',
  'Você vê concorrente lotado e fica se perguntando o que eles fazem de diferente.',
  'Você tenta fazer ofertas pelo WhatsApp e ninguém responde — ou parece liquidação.',
]

export function Identification() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-32 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-10 md:mb-16"
      >
        <p className="inline-flex items-center gap-2 uppercase text-xs font-medium text-white/60 tracking-widest font-mono mb-4">
          <span className="w-1.5 h-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(180,130,50,0.8)]" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
          Identificação
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white leading-[1.1] font-display">
          Se sua clínica tem mais de um ano, você provavelmente já sentiu isso.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {painPoints.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="flex gap-4 p-5 md:p-6 rounded-2xl bg-white/[0.03] ring-1 ring-white/8 hover:ring-white/15 transition-all"
          >
            <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono" style={{ background: 'linear-gradient(135deg, #FFEBB1, #FFC438)', color: '#000' }}>
              {String(idx + 1).padStart(2, '0')}
            </span>
            <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-16 text-center"
      >
        <p className="text-lg md:text-xl text-white font-display font-semibold mb-2">
          Você não tem um problema de atração.
        </p>
        <p className="text-lg md:text-xl font-display font-semibold" style={{ color: 'oklch(0.735 0.129 83)' }}>
          Você tem um problema de ativação.
        </p>
      </motion.div>
    </section>
  )
}
