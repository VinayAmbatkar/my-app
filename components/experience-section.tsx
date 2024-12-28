'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Building2, Calendar, MapPin, ArrowRight, Briefcase, CircleDot } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Avalanche Hi-Tech Enterprise',
    period: 'Dec 2023 - Nov 2024',
    location: 'Nagpur, Maharashtra',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQF4prZXztTIwg/company-logo_200_200/company-logo_200_200/0/1704958446251/avalanche_high_tech_enterprise_logo?e=1743638400&v=beta&t=1MUixbmcJZY6-uodYn4Dn6fC1KJz-UQscqLFQWaKXek',
    color: '#3B82F6',
    achievements: [
      'Built responsive UIs with React.js & Modern CSS',
      'Optimized front-end performance & scalability',
      'Led API integration & user-centered design',
      'Developed distributed storage solutions'
    ],
    skills: ['React.js', 'TypeScript', 'HTML5/CSS3', 'API Integration']
  },
  {
    title: 'Admin Member',
    company: 'TFL (THE FIRST LAB)',
    period: 'Mar 2023 - May 2024',
    location: 'Science and Technology',
    logo: 'https://media.licdn.com/dms/image/v2/C4E03AQH8uXtk57Ir-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1610612330748?e=1740614400&v=beta&t=qkYa8Re1Gwza3F2QCf2TXUVbzaSFY9rYbpSrqU7VcIE',
    color: '#10B981',
    achievements: [
      'Organized technical workshops & events',
      'Managed student coordination',
      'Promoted tech activities college-wide',
      'Runner-up in BDCE Hackathon 2K22'
    ],
    skills: ['Event Management', 'Leadership', 'Technical Workshop', 'Team Coordination']
  }
]

const TimelineConnector = () => (
  <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent">
    <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
  </div>
)

const TimelineDot = ({ color }: { color: string }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="relative"
  >
    <div 
      className="absolute -inset-2 rounded-full opacity-20 blur-md"
      style={{ backgroundColor: color }}
    />
    <CircleDot 
      className="w-6 h-6 relative z-10"
      style={{ color: color }}
    />
  </motion.div>
)

function ExperienceCard({ experience, index }: { experience: typeof experiences[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="relative pl-16"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 top-8 -translate-x-1/2">
        <TimelineDot color={experience.color} />
      </div>

      <motion.div
        initial={{ rotateX: 0 }}
        whileHover={{ 
          rotateX: 5,
          rotateY: 3,
          translateY: -5,
          transition: { duration: 0.2 }
        }}
        className="relative group"
      >
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${experience.color}10, transparent 40%)`,
          }}
        />
        
        <div className="relative grid md:grid-cols-[1fr_250px] gap-8 p-8 rounded-2xl border border-primary/10 bg-black/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5" style={{ color: experience.color }} />
                <h3 className="text-xl font-semibold" style={{ color: experience.color }}>
                  {experience.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>{experience.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <ArrowRight className="w-4 h-4 mt-1" style={{ color: experience.color }} />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 py-1 text-xs rounded-full"
                    style={{ 
                      backgroundColor: `${experience.color}20`,
                      color: experience.color,
                      border: `1px solid ${experience.color}40`
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-xl opacity-20 blur-2xl transition-opacity duration-300"
              style={{ 
                background: experience.color,
                opacity: isHovered ? 0.3 : 0.1
              }} 
            />
            <div className="relative h-full flex items-center justify-center rounded-xl border border-primary/10 bg-black/40 backdrop-blur-sm overflow-hidden group-hover:border-primary/20 transition-colors">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={200}
                height={200}
                className="w-32 h-32 object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-primary/30 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.2
        }}
        animate={{
          y: ["-10%", "110%"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 10
        }}
      />
    ))}
  </div>
)

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Mouse move effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.group')
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="relative py-20 overflow-hidden"
    >
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 70%)",
          scale: scrollYProgress
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary mb-4 border border-primary/20 backdrop-blur-sm"
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Career Timeline</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-foreground to-primary"
          >
            Professional Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            A timeline of my professional growth and achievements
          </motion.p>
        </div>

        <div className="relative space-y-12">
          <TimelineConnector />
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

