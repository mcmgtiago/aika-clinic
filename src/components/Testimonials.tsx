import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

const testimonials = [
  { quote: 'Em 30 dias saímos de R$ 85k para R$ 140k. O Pico pagou o investimento no primeiro dia.', author: 'Dr. Vitor', clinic: 'Vanity Face · Vitória, ES', metric: '+65%' },
  { quote: 'A AIKA entende a rotina de uma clínica. Não preciso explicar o básico, eles já sabem.', author: 'Marina', clinic: 'Botopremium · Patos, PB', metric: '+71%' },
  { quote: 'Pela primeira vez sei quanto vou faturar mês que vem. Isso muda a forma de tocar o negócio.', author: 'Dra. Fátima', clinic: 'Clínica Fátima Costa', metric: 'R$32k→R$78k' },
  { quote: 'O Pico gerou R$ 53k em um único dia. Sem gastar um real em anúncio.', author: 'Jhunny', clinic: 'Botoclinic · Ipatinga, MG', metric: 'R$53k/dia' },
  { quote: 'A equipe da AIKA entregou em 24h o que minha agência anterior levava semanas.', author: 'Kamila', clinic: 'KZ Clinic · Gravataí, RS', metric: '+R$17k' },
  { quote: 'Fechamos R$ 134k em um dia. A base que já era nossa fez isso acontecer.', author: 'Rubia', clinic: 'Royal Face · Cascavel, PR', metric: 'R$134k/dia' },
]

// Duplicate for infinite scroll
const allTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 py-32 border-t border-white/5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="inline-flex items-center gap-2 uppercase text-xs font-medium text-white/60 tracking-widest font-mono mb-4">
          <span className="w-1.5 h-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(180,130,50,0.8)]" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
          Depoimentos
        </p>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[1.1] font-display">
          O que dizem <span className="text-[#94a3b8]">nossos clientes.</span>
        </h2>
      </motion.div>

      {/* Infinite carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-[marquee-ltr_60s_linear_infinite] w-max hover:[animation-play-state:paused]">
          {allTestimonials.map((item, index) => (
            <article
              key={index}
              className="shrink-0 w-[360px] md:w-[420px] flex flex-col rounded-2xl p-6 bg-[#0c0c0c] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={28} className="mb-4 opacity-40" style={{ color: 'oklch(0.735 0.129 83)' }} />

              {/* Quote text */}
              <p className="text-white/90 text-[15px] leading-relaxed flex-1 mb-6 font-body">
                "{item.quote}"
              </p>

              {/* Bottom: author + metric */}
              <div className="pt-5 border-t border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: 'rgba(180,130,50,0.15)', color: 'oklch(0.735 0.129 83)' }}>
                    {item.author[0]}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block font-display">{item.author}</span>
                    <span className="text-xs text-[#64748b] font-body">{item.clinic}</span>
                  </div>
                </div>
                <div className="font-mono text-xl font-bold" style={{ color: 'oklch(0.735 0.129 83)' }}>
                  {item.metric}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
