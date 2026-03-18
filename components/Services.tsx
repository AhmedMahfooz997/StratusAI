'use client'

import { useEffect, useRef } from 'react'
import { Zap, Cpu, Target, Link, Bot, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'AI Workflow Automation',
    description:
      'We identify and automate your most time-consuming workflows — from data entry and reporting to complex multi-step operations across your entire stack.',
  },
  {
    icon: Cpu,
    title: 'Custom AI Solutions',
    description:
      'Bespoke AI tools built for your exact requirements. No off-the-shelf compromises — just solutions that slot directly into your operations.',
  },
  {
    icon: Target,
    title: 'AI Strategy & Consulting',
    description:
      'Not sure where AI fits in your business? We audit your workflows, identify the top 5% of opportunities, and create a clear, prioritized roadmap.',
  },
  {
    icon: Link,
    title: 'System Integration',
    description:
      'We connect your AI solutions with your existing CRMs, ERPs, databases, and tools — ensuring seamless data flow with zero disruption.',
  },
  {
    icon: Bot,
    title: 'AI Agents & Assistants',
    description:
      'Intelligent agents that work around the clock — handling customer queries, qualifying leads, processing requests, and escalating when needed.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Adoption',
    description:
      'The best AI system fails without adoption. We train your team, document everything, and ensure your investment delivers lasting results.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('[data-card]')
            cards?.forEach((card, i) => {
              const el = card as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 80)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent text-sm font-dm font-semibold tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-ink leading-tight mb-6">
            End-to-end AI services,<br />built for real results
          </h2>
          <p className="text-muted font-dm text-lg leading-relaxed">
            From strategy through to deployment and adoption — we handle every stage of your
            AI transformation, so you don&apos;t have to piece it together yourself.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                data-card
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
                className="group relative p-7 rounded-2xl bg-surface border border-border card-hover cursor-default"
              >
                {/* Number */}
                <span className="absolute top-5 right-5 font-syne font-bold text-5xl text-dim/40 leading-none select-none">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent-dim border border-accent/20 mb-5">
                  <Icon size={20} className="text-accent" />
                </div>

                <h3 className="font-syne font-semibold text-xl text-ink mb-3">
                  {service.title}
                </h3>
                <p className="font-dm text-muted leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
