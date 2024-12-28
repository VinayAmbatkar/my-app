'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Code2, Database, Wrench, GitBranch, Terminal, Server, Languages, FileCode, Boxes, Workflow, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Languages,
    color: '#4F46E5',
    skills: [
      { name: 'React.js', level: 95, icon: Code2, color: '#61DAFB' },
      { name: 'TypeScript', level: 90, icon: FileCode, color: '#3178C6' },
      { name: 'Node.js', level: 85, icon: Server, color: '#339933' },
      { name: 'Python', level: 80, icon: FileCode, color: '#3776AB' },
      { name: 'C++', level: 75, icon: FileCode, color: '#00599C' },
    ]
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: '#059669',
    skills: [
      { name: 'MongoDB', level: 90, icon: Database, color: '#47A248' },
      { name: 'Express.js', level: 85, icon: Server, color: '#000000' },
      { name: 'PostgreSQL', level: 80, icon: Database, color: '#336791' },
      { name: 'Redis', level: 75, icon: Database, color: '#DC382D' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    color: '#DB2777',
    skills: [
      { name: 'Git & GitHub', level: 95, icon: GitBranch, color: '#F05032' },
      { name: 'Docker', level: 85, icon: Boxes, color: '#2496ED' },
      { name: 'AWS', level: 80, icon: Terminal, color: '#FF9900' },
      { name: 'CI/CD', level: 75, icon: Workflow, color: '#4CAF50' },
    ]
  }
]

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
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
}

const SkillCard = ({ skill, categoryColor }: { skill: typeof skillCategories[0]['skills'][0], categoryColor: string }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level)
    }, 500)
    return () => clearTimeout(timer)
  }, [skill.level])

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ rotateX: 0 }}
      whileHover={{
        rotateX: 10,
        rotateY: 5,
        translateY: -5,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 rounded-xl border border-primary/10 bg-black/40 backdrop-blur-md hover:border-primary/30 transition-all duration-300 transform preserve-3d">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#000000] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${categoryColor}20` }}
          >
            <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
          </div>
          <h4 className="font-medium">{skill.name}</h4>
        </div>

        <div className="relative">
          <div className="h-2 rounded-full bg-primary/5 overflow-hidden">
            <motion.div
              ref={progressRef}
              className="h-full rounded-full relative"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${categoryColor}40, ${categoryColor}90)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/95 border border-primary/20 backdrop-blur-md"
              >
                <div className="relative">
                  <div className="text-sm font-medium">{skill.level}%</div>
                  <div
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/95"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

const CategorySection = ({ category }: { category: typeof skillCategories[0] }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#000000] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <category.icon
              className="w-6 h-6"
              style={{ color: category.color }}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <p className="text-sm text-muted-foreground">
              {category.skills.length} Skills
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: skillIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard skill={skill} categoryColor={category.color} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-20 overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />

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
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-foreground to-primary"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
