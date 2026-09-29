import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const auraRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    const cursor = cursorRef.current
    const dot = dotRef.current
    const aura = auraRef.current
    if (!cursor || !dot || !aura) return

    let targetX = -100
    let targetY = -100
    let auraX = targetX
    let auraY = targetY
    let animationFrame = 0

    const move = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`
      cursor.classList.add('is-enabled')
    }
    const animate = () => {
      auraX += (targetX - auraX) * 0.2
      auraY += (targetY - auraY) * 0.2
      aura.style.transform = `translate(${auraX}px, ${auraY}px) translate(-50%, -50%)`
      animationFrame = window.requestAnimationFrame(animate)
    }
    const hover = (event: PointerEvent) => {
      const target = event.target
      cursor.classList.toggle('is-hovering', target instanceof Element && Boolean(target.closest('a, button, input, textarea, [role="button"]')))
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', hover, { passive: true })
    animationFrame = window.requestAnimationFrame(animate)
    document.documentElement.classList.add('has-custom-cursor')
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', hover)
      window.cancelAnimationFrame(animationFrame)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span ref={dotRef} className="cursor-dot" /><span ref={auraRef} className="cursor-aura" /></div>
}