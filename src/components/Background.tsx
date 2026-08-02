import { useEffect } from 'react'

// Two separate UnicornStudio effects:
// 1. Mouse tracking — full page, fixed, very subtle
// 2. Cross/light effect — hero only (handled in Hero.tsx)

const MOUSE_PROJECT_ID = 'JFcrJ0fXx2aDVxrwGSwH' // Mouse interaction effect

export function Background() {
  useEffect(() => {
    // Re-init Unicorn after DOM is ready
    const timer = setTimeout(() => {
      const win = window as any
      if (win.UnicornStudio?.init) {
        win.UnicornStudio.init()
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* UnicornStudio mouse tracking — full page, very subtle */}
      <div
        data-us-project={MOUSE_PROJECT_ID}
        data-us-scale="1"
        data-us-dpi="1"
        data-us-lazyload="false"
        data-us-fixed="true"
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }}
      />
    </div>
  )
}
