'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Building2, Calendar, MapPin, ArrowRight, Briefcase } from 'lucide-react'
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
      'Developed distributed storage solutions',
    ],
    skills: ['React.js', 'TypeScript', 'HTML5/CSS3', 'API Integration'],
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
      'Runner-up in BDCE Hackathon 2K22',
    ],
    skills: ['Event Management', 'Leadership', 'Technical Workshop', 'Team Coordination'],
  },
]

function ExperienceCard({ experience }: { experience: typeof experiences[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r transition-all duration-300"
        style={{
          background: `linear-gradient(45deg, ${experience.color}10, transparent)`,
          opacity: isHovered ? 1 : 0,
          transform: `scale(${isHovered ? 1.02 : 1})`,
        }}
      />

      <div className="relative grid md:grid-cols-[1fr_250px] gap-8 p-8 rounded-2xl border border-primary/10 bg-black/20 backdrop-blur-sm hover:border-primary/20 transition-colors">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">{experience.title}</h3>
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
                  <ArrowRight className="w-4 h-4 mt-1 text-primary" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {skill}
                </span>
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
              opacity: isHovered ? 0.3 : 0.1,
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

        {/* Decorative Elements */}
        <div
          className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(45deg, transparent, ${experience.color}20, transparent)` }}
        />
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 70%)',
          scale: scrollYProgress,
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
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

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}
