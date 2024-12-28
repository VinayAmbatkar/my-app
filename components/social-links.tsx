'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/vinay-ambatkar-a55308206/',
    color: '#0A66C2',
    delay: 0
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/VinayAmbatkar',
    color: '#333',
    delay: 0.1
  },
  {
    name: 'Gmail',
    icon: Mail,
    href: 'mailto:vinayambatkar57@gmail.com',
    color: '#EA4335',
    delay: 0.2
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#', 
    color: '#E4405F',
    delay: 0.3
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com/vinayambatkar57/',
    color: '#FFA116',
    delay: 0.4
  },
]

export function SocialLinks() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center gap-2 sm:gap-3"
    >
      {socialLinks.map((social) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: social.delay
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.3 }
          }}
          className="relative group"
        >
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="relative bg-black/20 border border-primary/10 hover:bg-transparent"
          >
            <a 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <social.icon className="w-5 h-5 transition-colors" style={{ color: social.color }} />
              <span className="sr-only">{social.name}</span>

              {/* Hover Effects */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: social.color }}
              />
              <div 
                className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                style={{ backgroundColor: `${social.color}40` }}
              />
            </a>
          </Button>

          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {social.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
