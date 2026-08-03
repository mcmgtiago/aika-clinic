import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

const testimonials = [
  { quote: 'Em 30 dias saímos de R$ 85k para R$ 140k. O Pico pagou o investimento no primeiro dia.', author: 'Dr. Vitor', clinic: 'Vanity Face · Vitória, ES', metric: '+65%' },
  { quote: 'A AIKA entende a rotina de uma clínica. Não preciso explicar o básico, eles já sabem.', author: 'Marina', clinic: 'Botopremium · Patos, PB', metric: '+71%' },
  { quote: 'Pela primeira vez sei quanto vou faturar mês que vem. Isso muda a forma de tocar o negócio.', author: 'Dra. Fátima', clinic: 'Clínica Fátima Costa', metric: 'R$32k→R$78k' },
]

export function Testimonials() {
  return (
    <section className="relative z-10 py-12 md:py-20 lg:py-32 bg-[#f5f5f5]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <p className="inline-flex items-center gap-2 uppercase text-xs font-medium text-neutral-500 tracking-widest font-mono mb-4">
            <span className="w-1.5 h-1.5 animate-pulse rounded-full" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-900 leading-[1.1] font-display" style={{ background: 'none', WebkitTextFillColor: 'unset', WebkitBackgroundClip: 'unset' }}>
            O que dizem <span className="text-neutral-400">nossos clientes.</span>
          </h2>
        </motion.div>

        {/* Grid 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="relative flex flex-col p-5 md:p-7 rounded-2xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={24} className="mb-3 opacity-60" style={{ color: 'oklch(0.735 0.129 83)' }} />

              {/* Quote text */}
              <p className="text-neutral-700 text-[14px] sm:text-[15px] leading-relaxed flex-1 mb-5">
                "{item.quote}"
              </p>

              {/* Bottom: author + metric */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: 'rgba(180,130,50,0.12)', color: 'oklch(0.55 0.129 83)' }}>
                    {item.author[0]}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-900 block">{item.author}</span>
                    <span className="text-xs text-neutral-500">{item.clinic}</span>
                  </div>
                </div>
                <div className="font-mono text-lg md:text-xl font-bold" style={{ color: 'oklch(0.55 0.129 83)' }}>
                  {item.metric}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
