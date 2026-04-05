'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '50+', label: 'Workflows Deployed' },
  { value: '5+', label: 'Industries Served' },
  { value: '48hr', label: 'Average Response Time' },
  { value: '100%', label: 'Project Delivery Rate' },
]

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })
    canvas.addEventListener('mouseleave', () => {
      mouse.x = -9999
      mouse.y = -9999
    })

    const COUNT = 80
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Mouse repel
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          p.x += (dx / dist) * 1.5
          p.y += (dy / dist) * 1.5
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(78,150,255,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(78,150,255,0.6)'
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.6 }}
    />
  )
}

export default function Hero() {
  const handleScrollDown = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-bg">
      {/* Particle network background */}
      <ParticleCanvas />

      {/* Blue orb — top right */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(78,150,255,0.10) 0%, rgba(78,150,255,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Cyan orb — bottom left */}
      <div
        className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(56,217,255,0.06) 0%, rgba(56,217,255,0.02) 40%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 py-8 pt-24">
        {/* child 2 */}
        <h1 className="hero-fade-up font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-ink">
          AI that thinks.
          <br />
          <span className="gradient-text">Automation that delivers.</span>
          <br />
          Results you can measure.
        </h1>

        {/* child 3 */}
        <p className="hero-fade-up max-w-2xl text-lg md:text-xl font-dm text-muted leading-relaxed">
          ZyvosAI designs and deploys custom AI systems that integrate into your business,
          eliminate manual work, and generate measurable results from day one.
        </p>

        {/* child 4 */}
        <div className="hero-fade-up flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-accent text-white font-dm font-semibold text-base hover:bg-blue-500 transition-colors glow-blue"
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
          <a
            href="#results"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-border text-ink font-dm font-medium text-base hover:border-border-active transition-colors"
          >
            See Our Work
          </a>
        </div>

        {/* child 5 */}
        <div className="hero-fade-up w-full pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-syne font-bold text-3xl md:text-4xl gradient-text">
                {stat.value}
              </span>
              <span className="text-sm font-dm text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dim hover:text-muted transition-colors animate-float"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
