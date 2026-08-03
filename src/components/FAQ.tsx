import { ChevronDown } from 'lucide-react'
import * as Accordion from '@radix-ui/react-accordion'
import { motion } from 'motion/react'

const faqItems = [
  { id: 'item-1', question: 'Quanto custa trabalhar com a AIKA?', answer: 'Não existe taxa fixa. O investimento começa pelo Pico de Faturamento (resultado em 24h) e evolui para assessoria mensal. Conversamos sobre seu caso no diagnóstico.' },
  { id: 'item-2', question: 'Em quanto tempo vejo resultado?', answer: 'Caixa em 24–48 horas com o Pico. Crescimento consistente a partir do segundo mês.' },
  { id: 'item-3', question: 'Funciona para minha clínica?', answer: 'Se sua clínica fatura a partir de R$ 15k/mês e quer escalar com previsibilidade, funciona. Conversamos no diagnóstico.' },
  { id: 'item-4', question: 'Como é o acompanhamento?', answer: 'Reuniões semanais + WhatsApp contínuo. Você acompanha campanhas, leads e conversões em tempo real.' },
  { id: 'item-5', question: 'Qual a diferença da AIKA para outras agências?', answer: 'Trabalhamos exclusivamente com estética. Começamos provando resultado no primeiro dia, não depois de 3 meses.' },
]

export function FAQ() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-32 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1] font-display">
          Perguntas que{' '}
          <span className="text-[#64748b]">sempre ouvimos.</span>
        </h2>
      </motion.div>

      <Accordion.Root type="single" collapsible className="max-w-3xl">
        {faqItems.map((item) => (
          <Accordion.Item key={item.id} value={item.id} className="border-b border-white/8">
            <Accordion.Trigger className="flex w-full justify-between items-center py-7 text-left text-white text-lg font-medium hover:text-[oklch(0.735_0.129_83)] transition-colors cursor-pointer group">
              <span>{item.question}</span>
              <ChevronDown className="w-5 h-5 text-[#64748b] shrink-0 ml-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="overflow-hidden text-[#94a3b8] text-base leading-relaxed data-[state=open]:animate-[accordion-down_300ms_ease-out] data-[state=closed]:animate-[accordion-up_300ms_ease-out]">
              <div className="pb-7 pr-12">{item.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}
