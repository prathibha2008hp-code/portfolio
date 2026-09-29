import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

const heroVideo = import.meta.glob<string>('../assets/my-animated-video.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
})['../assets/my-animated-video.mp4']

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const trackPointer = (event: PointerEvent) => {
      const x = ((event.clientX / window.innerWidth) * 2 - 1) * 5
      const y = ((event.clientY / window.innerHeight) * 2 - 1) * 3
      videoRef.current?.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0) scale(1.03)`)
    }

    window.addEventListener('pointermove', trackPointer, { passive: true })
    return () => window.removeEventListener('pointermove', trackPointer)
  }, [])

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-copy page-shell">
        <div className="hero-copy-inner">
          <p className="hero-kicker"><span className="availability-dot" /> Open to learning &amp; collaboration</p>
          <h1 id="hero-title">Hi, I&apos;m<br /><span>Prathibha</span><i>.</i></h1>
          <p className="hero-role">Computer Science Engineering Student</p>
          <p className="hero-description">I turn curiosity into useful things, exploring the space between thoughtful software and emerging AI.</p>
          <div className="hero-tags" aria-label="Areas of interest"><span>Python</span><b>·</b><span>Java</span><b>·</b><span>AI</span><b>·</b><span>Full Stack</span></div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my work <ArrowRight size={16} aria-hidden="true" /></a>
            <a className="button button-secondary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Code2 size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote"><Sparkles size={14} aria-hidden="true" /><span>Curious by nature. Building with intention.</span></div>
        </div>
      </div>
      <div className="hero-scene" aria-label="Animated hero video">
        {heroVideo && <video ref={videoRef} className="hero-video" src={heroVideo} autoPlay muted loop playsInline aria-hidden="true" />}
        <div className="scene-label scene-label-top" aria-hidden="true"><span className="label-line" /> creative problem solver</div>
        <div className="scene-label scene-label-bottom" aria-hidden="true">explore / build / repeat <span>✳</span></div>
        <div className="scene-coordinate" aria-hidden="true">13° 04&apos; 42.0&quot; N<br />80° 16&apos; 12.0&quot; E</div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><span className="scroll-cue-icon"><ArrowDown size={15} /></span></a>
      <a className="hero-email" href="mailto:hello@example.com"><span className="hero-email-line" /> hello@example.com <ArrowUpRight size={13} /></a>
    </section>
  )
}