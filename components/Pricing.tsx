'use client'

import { useEffect, useRef } from 'react'
import { Check, ArrowRight, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    tagline: 'For small businesses ready to automate their first workflow.',
    features: [
      '1 AI workflow automation',
      '2 custom AI agents',
      'Integration with up to 3 tools',
      'Monthly performance report',
      'Email support',
      '30-day post-launch monitoring',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$7,500',
    period: '/month',
    tagline: 'For scaling businesses that want AI embedded across operations.',
    features: [
      'Unlimited workflow automations',
      'Unlimited AI agents',
      'Full-stack system integration',
      'Dedicated AI engineer',
      'Weekly reporting & optimisation',
      'Priority Slack support',
      'Quarterly AI strategy review',
    ],
    cta: 'Most Popular — Book a Call',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For organisations seeking a full AI transformation.',
    features: [
      'Everything in Growth',
      'Multi-department rollout',
      'Custom model fine-tuning',
      'Team training & onboarding',
      'SLA with guaranteed uptime',
      'Dedicated account manager',
      'Executive reporting dashboard',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('[data-plan]')
            cards?.forEach((card, i) => {
              const el = card as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
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
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 md:py-32 relative bg-surface"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-dm font-semibold tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-ink leading-tight mb-6">
            Straightforward pricing.<br />No surprises.
          </h2>
          <p className="text-muted font-dm text-lg leading-relaxed">
            All plans include a free discovery call so we can confirm whether we&apos;re the right
            fit before you commit to anything.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-plan
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              className={`relative flex flex-col gap-8 p-8 rounded-2xl border ${
                plan.highlight
                  ? 'bg-raised border-accent/40 glow-blue'
                  : 'bg-surface border-border'
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-white text-xs font-dm font-semibold">
                    <Zap size={11} />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div>
                <p className="font-syne font-semibold text-muted text-sm uppercase tracking-widest mb-3">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-syne font-extrabold text-4xl text-ink">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="font-dm text-muted text-base">{plan.period}</span>
                  )}
                </div>
                <p className="font-dm text-muted text-sm mt-3 leading-relaxed">
                  {plan.tagline}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="font-dm text-[15px] text-muted leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-dm font-semibold text-sm transition-colors duration-150 ${
                  plan.highlight
                    ? 'bg-accent text-white hover:bg-blue-500 glow-blue-sm'
                    : 'bg-raised border border-border text-ink hover:border-border-active'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-sm font-dm text-dim mt-8">
          All plans start with a free, no-obligation discovery call. Cancel or adjust anytime.
        </p>
      </div>
    </section>
  )
}
