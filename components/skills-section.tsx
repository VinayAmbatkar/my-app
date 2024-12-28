'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Database, Wrench, Brain, MessageSquare, Binary, Boxes, GitBranch, Terminal, Server, Languages, FileCode, Table2, Workflow, Users, Lightbulb, Timer, Puzzle, HandshakeIcon, Rocket, Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Languages,
    skills: [
      { name: 'React.js', level: 95, icon: Code2, color: '#61DAFB' },
      { name: 'TypeScript', level: 90, icon: FileCode, color: '#3178C6' },
      { name: 'Node.js', level: 85, icon: Server, color: '#339933' },
      { name: 'Python', level: 80, icon: FileCode, color: '#3776AB' },
      { name: 'C++', level: 75, icon: Binary, color: '#00599C' },
    ]
  },
  {
    title: 'Backend & Database',
    icon: Database,
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
    skills: [
      { name: 'Git & GitHub', level: 95, icon: GitBranch, color: '#F05032' },
      { name: 'Docker', level: 85, icon: Boxes, color: '#2496ED' },
      { name: 'AWS', level: 80, icon: Terminal, color: '#FF9900' },
      { name: 'CI/CD', level: 75, icon: Workflow, color: '#4CAF50' },
    ]
  }
]

const SkillCard = ({ skill }: { skill: typeof skillCategories[0]['skills'][0] }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)

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
      className="relative p-4 rounded-xl border border-primary/10 bg-black/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
        <h4 className="font-medium">{skill.name}</h4>
      </div>
      <div className="relative">
        <Progress value={progress} className="h-2" />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-8 right-0 px-2 py-1 text-xs rounded-md bg-black/90 text-white"
          >
            {skill.level}%
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

const CategorySection = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
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
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <category.icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
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
            <SkillCard skill={skill} />
          </motion.div>
        ))}
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary mb-4"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
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
          {skillCategories.map((category, index) => (
            <CategorySection key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

