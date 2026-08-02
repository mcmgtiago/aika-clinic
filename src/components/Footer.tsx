export function Footer() {
  return (
    <footer className="overflow-hidden z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent)] border-t border-white/5 mt-20 pt-32 pb-12 relative">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] blur-[120px] rounded-full pointer-events-none -z-10 bg-[rgba(180,130,50,0.03)]" />

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-32">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6 font-display">
          Pronto para crescer com previsibilidade?
        </h2>
        <p className="text-lg text-[#94a3b8] mb-10 max-w-xl mx-auto leading-relaxed">
          Junte-se às +200 clínicas de estética que já transformaram seus resultados com a AIKA.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contato" className="h-14 px-8 rounded-full bg-gradient-to-b from-white to-neutral-300 text-neutral-900 text-base font-medium inline-flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:opacity-90 transition">
            Quero previsibilidade
          </a>
          <a href="#cases" className="h-14 px-6 rounded-full text-base font-medium text-white bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition inline-flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            Ver resultados
          </a>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-12 max-w-[1300px] mx-auto px-6 gap-x-8 gap-y-12 mb-20">
        {/* Logo Column */}
        <div className="col-span-2 md:col-span-4 pr-8">
          <img src="/assets/aika-logo.png" alt="AIKA Clinic" className="h-10 w-auto mb-6" />
          <p className="text-sm text-[#64748b] mb-8 leading-relaxed max-w-xs">
            A AIKA é uma agência de growth exclusiva para clínicas de estética. Geramos caixa imediato e construímos previsibilidade mês a mês.
          </p>
        </div>

        {/* Links */}
        <div className="col-span-1 md:col-span-2 md:col-start-7">
          <h4 className="font-medium text-white mb-4 text-sm">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#sobre" className="text-[#64748b] hover:text-white transition-colors">A AIKA</a></li>
            <li><a href="#cases" className="text-[#64748b] hover:text-white transition-colors">Resultados</a></li>
            <li><a href="#servicos" className="text-[#64748b] hover:text-white transition-colors">Como atuamos</a></li>
            <li><a href="#contato" className="text-[#64748b] hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Location */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-medium text-white mb-4 text-sm">Localização</h4>
          <ul className="space-y-3 text-sm text-[#64748b]">
            <li>Cascavel, PR</li>
            <li>Brasil</li>
            <li>Atendemos todo o país</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-medium text-white mb-4 text-sm">Legal</h4>
          <ul className="space-y-3 text-sm text-[#64748b]">
            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1300px] mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-xs text-[#475569]">
          © 2026 AIKA Clinic. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: 'oklch(0.735 0.129 83)' }} />
          </div>
          <span className="text-xs font-medium text-[#94a3b8] font-mono">Aceitando novos clientes</span>
        </div>
      </div>
    </footer>
  )
}
