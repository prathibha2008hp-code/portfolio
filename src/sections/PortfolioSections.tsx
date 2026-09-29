import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, ExternalLink, GitBranch, Link, Mail, Send, Sparkles } from 'lucide-react'
import { learningPath, profileLinks, projects, skills } from '../data/portfolio'
import { Reveal } from '../components/Reveal'

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>
}

export function About() {
  return (
    <section className="section about-section" id="about"><div className="page-shell">
      <SectionHeading eyebrow="A little about me" title={<>Curiosity, meet <span className="accent-text">craft.</span></>} description="The best projects start with a useful question and a willingness to keep learning." />
      <div className="about-layout">
        <Reveal className="about-lead"><p className="about-quote">I&apos;m a Computer Science Engineering student drawn to the moment an idea becomes something people can actually use.</p><p className="about-body">I&apos;m exploring Python, Java, AI, software engineering, and full-stack development through practical projects. I enjoy moving between the details of implementation and the bigger question of who a product helps.</p><a className="text-link" href="#contact">A bit more about how I work <ArrowRight size={15} /></a></Reveal>
        <Reveal className="about-aside" delay={100}><div className="about-note-icon"><Code2 size={19} /></div><span className="about-note-label">CURRENTLY EXPLORING</span><h3>Useful AI, thoughtful interfaces, and software that holds up.</h3><p>Always open to collaborating, contributing, and learning from people who build with care.</p><a href="#projects" aria-label="Explore selected projects"><ArrowDownRight size={19} /></a></Reveal>
      </div>
    </div></section>
  )
}

export function Skills() {
  return (
    <section className="section skills-section" id="skills"><div className="page-shell">
      <SectionHeading eyebrow="Tools & curiosities" title={<>A growing <span className="accent-text">toolkit.</span></>} description="A mix of foundations I use and new areas I am actively exploring." />
      <div className="skills-grid">{skills.map((skill, index) => <Reveal key={skill.name} delay={(index % 4) * 55}><article className="skill-card"><span className="skill-mark" aria-hidden="true">{skill.mark}</span><span className="skill-name">{skill.name}</span><span className="skill-group">{skill.group}</span><ArrowUpRight className="skill-arrow" size={15} aria-hidden="true" /></article></Reveal>)}</div>
    </div></section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <Reveal delay={index * 75}><article className={`project-card project-${project.accent}`}>
      <div className="project-topline"><span>{project.number} / 04</span><span className="project-category">{project.category}</span></div>
      <div className="project-art" aria-hidden="true"><div className="project-art-grid" /><div className="project-art-core"><Code2 size={30} strokeWidth={1.4} /></div><div className="project-art-orbit orbit-a" /><div className="project-art-orbit orbit-b" /><span className="project-art-index">0{index + 1}</span></div>
      <div className="project-content"><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-details">{project.details}</p><div className="technology-list" aria-label="Technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <div className="project-actions">{project.github ? <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub <GitBranch size={14} /></a> : <button className="project-link is-unavailable" type="button" disabled aria-label={`${project.title} GitHub link to be added`}>GitHub <GitBranch size={14} /></button>}{project.demo && <a className="project-link project-live" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}</div>
      </div>
    </article></Reveal>
  )
}

export function Projects() {
  return (
    <section className="section projects-section" id="projects"><div className="page-shell">
      <SectionHeading eyebrow="Selected explorations" title={<>Ideas, made <span className="accent-text">tangible.</span></>} description="A few directions I am building in. Project links can be connected as the work is published." />
      <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
      <div className="projects-endnote"><span className="endnote-line" />More experiments are always in the works<span className="endnote-star">✳</span></div>
    </div></section>
  )
}

export function Experience() {
  return (
    <section className="section journey-section" id="experience"><div className="page-shell">
      <SectionHeading eyebrow="Experience & learning" title={<>Progress is a <span className="accent-text">practice.</span></>} description="An evolving timeline of study, exploration, and the work ahead." />
      <div className="timeline">{learningPath.map((item, index) => <Reveal key={item.label} delay={index * 45}><article className="timeline-item"><div className={`timeline-node node-${item.tone}`}><span /></div><div className="timeline-copy"><span className="timeline-index">0{index + 1}</span><h3>{item.label}</h3><p>{item.note}</p></div><span className="timeline-period">{item.period}</span></article></Reveal>)}</div>
    </div></section>
  )
}

const contributionWeeks = Array.from({ length: 20 }, (_, week) => week)

export function OpenSource() {
  return (
    <section className="section opensource-section" id="opensource"><div className="page-shell">
      <SectionHeading eyebrow="Learning in public" title={<>Open source, <span className="accent-text">open mind.</span></>} description="A place to learn from other builders, contribute thoughtfully, and share useful work." />
      <Reveal><div className="opensource-panel"><div className="opensource-copy"><div className="opensource-icon"><GitBranch size={20} /></div><span className="opensource-label">GITHUB / CONTRIBUTIONS</span><h3>Small contributions.<br />Steady learning.</h3><p>I&apos;m building my open-source journey one useful issue, thoughtful pull request, and shared project at a time.</p><a className="text-link" href={profileLinks.github} target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={15} /></a></div>
        <div className="contribution-wrap"><div className="contribution-head"><span>CONTRIBUTION ACTIVITY</span><span className="contribution-placeholder"><span /> Not connected</span></div><div className="contribution-grid" role="img" aria-label="Placeholder for verified GitHub contribution activity">{contributionWeeks.map((week) => <div className="contribution-week" key={week}>{Array.from({ length: 7 }, (_, day) => <i key={day} />)}</div>)}</div><p className="contribution-note">Verified contribution data will appear here when a profile is connected.</p></div>
      </div></Reveal>
    </div></section>
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(String(formData.get('subject') || 'Portfolio hello'))
    const body = encodeURIComponent(`From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`)
    window.location.href = `mailto:${profileLinks.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="section contact-section" id="contact"><div className="page-shell">
      <SectionHeading eyebrow="Start a conversation" title={<>Let&apos;s build something <span className="accent-text">together.</span></>} description="Have an interesting problem, a project idea, or a good resource to share? I would love to hear from you." />
      <div className="contact-layout"><Reveal className="contact-aside"><p className="contact-prompt">A kind hello can be the start of a really good collaboration.</p><a className="contact-email" href={`mailto:${profileLinks.email}`}><Mail size={17} />{profileLinks.email}<ArrowUpRight size={15} /></a><div className="social-links"><a href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GitBranch size={17} /> GitHub <ArrowUpRight size={13} /></a><a href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Link size={17} /> LinkedIn <ArrowUpRight size={13} /></a></div><div className="contact-aside-foot"><Sparkles size={14} /> Chennai, India <span>·</span> Open to opportunities</div></Reveal>
        <Reveal className="contact-form-wrap" delay={100}><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Your name<input name="name" type="text" placeholder="Ada Lovelace" autoComplete="name" required /></label><label>Email address<input name="email" type="email" placeholder="ada@example.com" autoComplete="email" required /></label></div><label>Subject<input name="subject" type="text" placeholder="A project, an idea, a hello..." required /></label><label>Your message<textarea name="message" rows={4} placeholder="Tell me a little about it" required /></label><div className="form-bottom"><p>This opens your email app with a ready-to-send message.</p><button className="button button-primary form-submit" type="submit">{submitted ? 'Email draft ready' : 'Send a note'} {submitted ? <Check size={15} /> : <Send size={15} />}</button></div></form></Reveal>
      </div>
    </div></section>
  )
}

export function Footer() {
  return <footer className="site-footer"><div className="page-shell footer-inner"><a className="footer-brand" href="#home">P<span>.</span></a><p>© 2026 Prathibha. Built with React, TypeScript &amp; Three.js.</p><a className="back-to-top" href="#home">Back to top <ArrowDownRight size={15} /></a></div></footer>
}