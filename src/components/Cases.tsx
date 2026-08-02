import { useState } from 'react'
import { motion } from 'motion/react'

const cases = [
  {
    name: 'Vanity Face',
    img: '/assets/case-vanity.jpg',
    desc: 'de R$ 85k para R$ 140k/mês',
    value: '+65%',
    city: 'VITÓRIA · ES',
    back: {
      strategy: 'Pico de Faturamento + Assessoria de tráfego pago + Rebranding completo',
      timeline: '30 dias para primeiro resultado',
      result: 'Crescimento de 65% no faturamento mensal com ROI de 12x sobre o investimento.',
    },
  },
  {
    name: 'Botopremium',
    img: '/assets/case-botopremium.png',
    desc: 'de R$ 35k para R$ 60k/mês',
    value: '+71%',
    city: 'PATOS · PB',
    back: {
      strategy: 'Pico de Faturamento + Base de leads nurturing + Secretaria virtual',
      timeline: '21 dias até o pico, escala em 60 dias',
      result: 'Aumento de 71% com base 100% orgânica, sem investir em mídia paga.',
    },
  },
  {
    name: 'Illuminare',
    img: '/assets/case-illuminare.png',
    desc: 'de R$ 20k para R$ 38k no 1º mês',
    value: '+40%',
    city: 'CASCAVEL · PR',
    back: {
      strategy: 'Diagnóstico de base + Ativação WhatsApp + Campanha de reengajamento',
      timeline: 'Resultado no primeiro mês de parceria',
      result: 'R$18k extras gerados em 1 dia de Pico. Base de 2.400 contatos reativada.',
    },
  },
  {
    name: 'Dra. Fátima',
    img: '/assets/case-fatima.jpeg',
    desc: 'de R$ 32k para R$ 78k/mês',
    value: 'R$78k',
    city: 'BRASIL',
    back: {
      strategy: 'Assessoria completa + Tráfego pago qualificado + Branding premium',
      timeline: '45 dias para escala, 90 dias consolidação',
      result: 'Faturamento mensal mais que dobrou. Taxa de conversão de agendamentos subiu 3.2x.',
    },
  },
]

function FlipCard({ item, idx }: { item: typeof cases[0]; idx: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="h-[420px] cursor-pointer [perspective:1200px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0a0a0a]">
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] font-mono text-white/80 bg-white/10 backdrop-blur ring-1 ring-white/20 rounded-full px-3 py-1">
              {item.city}
            </span>
          </div>
          <img src={item.img} alt={item.name} className="w-full h-3/4 object-cover object-top grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg font-display">{item.name}</h3>
              <p className="text-[#94a3b8] text-sm mt-1">{item.desc}</p>
            </div>
            <span className="font-mono text-2xl font-bold" style={{ color: 'oklch(0.735 0.129 83)' }}>{item.value}</span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0c0c0c] p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold text-xl font-display">{item.name}</h3>
              <span className="font-mono text-xl font-bold" style={{ color: 'oklch(0.735 0.129 83)' }}>{item.value}</span>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">Estratégia</p>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{item.back.strategy}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">Timeline</p>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{item.back.timeline}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">Resultado</p>
                <p className="text-sm text-white leading-relaxed">{item.back.result}</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/30 text-center font-mono">Toque para voltar</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Cases() {
  return (
    <section id="cases" className="relative z-10 max-w-[1300px] mx-auto px-6 py-32 border-t border-white/5">
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
          Resultados reais
        </p>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[1.1] font-display">
          Antes e depois,{' '}
          <span className="text-[#64748b]">em reais.</span>
        </h2>
        <p className="text-[#94a3b8] mt-4 text-sm">Toque no card para ver detalhes da estratégia.</p>
      </motion.div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((item, idx) => (
          <FlipCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  )
}
