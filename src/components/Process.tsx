import { motion } from 'motion/react'

const steps = [
  { number: '01', title: 'Diagnóstico', description: 'Entendemos sua clínica, público e gargalos. Sem promessa genérica.', tags: ['ANÁLISE', 'MERCADO'], phase: 'DIA 1', phaseLabel: 'FASE INICIAL' },
  { number: '02', title: 'Pico de Faturamento', description: 'Caixa em 24–48h. Prova de conceito imediata com sua base de clientes.', tags: ['VENDAS', 'BASE'], phase: 'SEMANA 1', phaseLabel: 'RESULTADO RÁPIDO' },
  { number: '03', title: 'Assessoria & Escala', description: 'Estratégia, tráfego, design e conteúdo integrados. Repetir todo mês.', tags: ['GROWTH', 'RECORRÊNCIA'], phase: 'MÊS 2+', phaseLabel: 'CRESCIMENTO' },
]

export function Process() {
  return (
    <section id="metodologia" className="py-12 md:py-20 lg:py-32 bg-[#050505] relative overflow-hidden border-y border-white/5 z-10">
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-widest mb-2 block font-semibold" style={{ color: 'oklch(0.735 0.129 83)' }}>
              Nossa metodologia
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter font-display">
              Sua jornada com a AIKA
            </h2>
          </motion.div>
          <p className="text-[#94a3b8] max-w-sm mt-4 md:mt-0 text-sm">
            Da estratégia ao resultado, cada etapa é planejada para gerar caixa.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(180,130,50,0.3)] to-transparent" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-10 md:mb-16 lg:mb-24 last:mb-0 relative group`}
            >
              {/* Card */}
              <div className={`md:w-1/2 flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className="relative w-full max-w-md p-6 md:p-10 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent)] hover:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent)] transition-all duration-500 shadow-lg shadow-black/50"
                  style={{ position: 'relative' }}
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

                  {/* Number badge — solid gold bg, black text */}
                  <span className={`absolute -top-4 ${idx % 2 === 0 ? '-right-4' : '-left-4'} w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-lg`}
                    style={{ background: 'linear-gradient(135deg, #FFEBB1, #FFC438)', color: '#000', boxShadow: '0 6px 16px rgba(255,162,42,0.3)' }}
                  >
                    {step.number}
                  </span>

                  <h4 className="text-white font-semibold mb-2 text-lg font-display">{step.title}</h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{step.description}</p>
                  <div className="mt-6 flex gap-2">
                    {step.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-white/70 font-mono font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dot on timeline */}
              <div className="w-4 h-4 rounded-full bg-[#050505] border-[3px] z-10 shadow-[0_0_0_4px_rgba(180,130,50,0.2)] hidden md:block" style={{ borderColor: 'oklch(0.735 0.129 83)' }} />

              {/* Phase label */}
              <div className={`md:w-1/2 text-sm text-[#64748b] font-mono ${idx % 2 === 0 ? 'pl-8' : 'pr-8 text-right'} font-medium`}>
                {step.phase}{' '}
                <span className="text-white">{step.phaseLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
