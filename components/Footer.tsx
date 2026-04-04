'use client'

import Logo from './Logo'

const footerLinks = {
  Services: [
    { label: 'AI Workflow Automation', href: '#services' },
    { label: 'Custom AI Solutions', href: '#services' },
    { label: 'AI Strategy', href: '#services' },
    { label: 'System Integration', href: '#services' },
    { label: 'AI Agents', href: '#services' },
  ],
  Company: [
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#results' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Contact: [
    { label: 'Book a Call', href: '#contact' },
  ],
}

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Logo size="md" />
            <p className="font-dm text-muted text-sm leading-relaxed max-w-xs">
              Custom AI automation systems and intelligent workflows that deliver measurable
              results — not just promises.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <p className="font-syne font-semibold text-sm text-ink uppercase tracking-widest">
                {section}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="font-dm text-sm text-muted hover:text-ink transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-dim text-sm">
            © {new Date().getFullYear()} ZyvosAI. All rights reserved.
          </p>
          <p className="font-dm text-dim text-sm">
            Built to deliver results, not excuses.
          </p>
        </div>
      </div>
    </footer>
  )
}
