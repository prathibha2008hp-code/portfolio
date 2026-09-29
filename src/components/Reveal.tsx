import { useEffect, useRef, useState, type PropsWithChildren } from 'react'

type RevealProps = PropsWithChildren<{ className?: string; delay?: number }>

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window))

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={elementRef} className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}