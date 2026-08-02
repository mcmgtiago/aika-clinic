import { motion } from 'motion/react'

const facts = [
  { strong: '2022', text: 'início da operação em Cascavel, PR' },
  { strong: '1 mercado', text: 'especialização exclusiva em estética' },
  { strong: '6 frentes', text: 'estratégia e execução integradas' },
  { strong: '1 objetivo', text: 'crescimento previsível' },
]

export function Manifesto() {
  return (
    <section id="sobre" className="relative z-10 max-w-[1300px] mx-auto px-6 py-32">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-semibold text-white tracking-tighter max-w-2xl leading-[1.1] font-display"
        >
          Não fazemos marketing{' '}
          <span className="text-[#64748b]">genérico.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-md lg:pt-4"
        >
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
            A AIKA nasceu em 2022, em Cascavel, para entender profundamente um único negócio: clínicas de estética. Enquanto muita agência entrega postagem, a gente conecta campanha, atendimento e vendas.
          </p>
          <a href="#servicos" className="group inline-flex items-center text-base font-medium text-white transition-colors hover:text-accent">
            Veja como atuamos
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>

      {/* Facts as bento cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facts.map((fact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-6 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)] group hover:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent)] transition-all duration-500"
          >
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
              padding: '1px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              borderRadius: '16px',
            }} />
            <strong className="font-mono text-2xl text-white block mb-2">{fact.strong}</strong>
            <span className="text-[#94a3b8] text-sm">{fact.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
