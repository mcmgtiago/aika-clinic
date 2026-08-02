import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// === Anti-copy & DevTools protection ===
if (typeof window !== 'undefined') {
  let toastTimeout: number | undefined
  function showProtectionToast() {
    let toast = document.getElementById('protection-toast')
    if (!toast) {
      toast = document.createElement('div')
      toast.id = 'protection-toast'
      toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(20px);opacity:0;z-index:9999;background:rgba(15,15,20,0.95);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(12px);padding:0.75rem 1.5rem;border-radius:9999px;color:#fff;font-size:0.8rem;font-weight:500;transition:all 0.3s ease;pointer-events:none;'
      document.body.appendChild(toast)
    }
    toast.textContent = '⚠️ Conteúdo protegido.'
    toast.style.opacity = '1'
    toast.style.transform = 'translateX(-50%) translateY(0)'
    clearTimeout(toastTimeout)
    toastTimeout = window.setTimeout(() => {
      toast!.style.opacity = '0'
      toast!.style.transform = 'translateX(-50%) translateY(20px)'
    }, 2500)
  }
  // Block right-click
  document.addEventListener('contextmenu', (e) => { e.preventDefault(); showProtectionToast() })
  // Block keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && ['c','v','x','u','s'].includes(e.key.toLowerCase())) {
      e.preventDefault(); showProtectionToast()
    }
    if (e.key === 'F12') { e.preventDefault(); showProtectionToast() }
    if (e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase())) {
      e.preventDefault(); showProtectionToast()
    }
  })
  // Block drag on images
  document.addEventListener('dragstart', (e) => {
    if ((e.target as HTMLElement)?.tagName === 'IMG') { e.preventDefault(); showProtectionToast() }
  })
  // Block text selection
  document.addEventListener('selectstart', (e) => e.preventDefault())
}
