'use client'

import { useRef } from 'react'
import { Github, ExternalLink, Boxes } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Full-stack E-commerce Platform',
    description: 'A scalable, feature-rich e-commerce platform built with modern technologies. Includes an admin panel for product and user management, dynamic cart, secure payment integration, product filters, zoom functionality, authentication, and reviews. Features optimized MongoDB queries for enhanced performance.',
    image: 'https://i.postimg.cc/rsGFd5LK/Dark-Laptop-Review-Youtube-Thumbnail.png',
    tags: [
      'React.js',
      'JavaScript',
      'Material UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux',
      'Authentication',
      'Payment Gateway',
      'API Integration',
      'Responsive Design',
      'Performance Optimization',
      'Product Filters',
      'Cloudinary'
    ],
    link: 'https://vshops-fullstack-ecom.netlify.app/',
    github: 'https://github.com/VinayAmbatkar/FULL_Stack_Ecommerce_VShop-main',
    color: '#3B82F6'
  },
  {
    title: 'React Resume Builder',
    description: 'Created a Resume Builder web application with React and JavaScript, allowing users to easily create, edit, and export resumes. The tool features secure local storage and responsive design, and has been effectively used by over 50+ students.',
    image: 'https://i.postimg.cc/667HbwNL/Dark-Laptop-Review-Youtube-Thumbnail-1.png',
    tags: ['React', 'JavaScript', 'Responsive Design', 'Modular Architecture', 'Vercel', 'Frontend Development', 'Local Storage', 'User-Friendly'],
    link: 'https://react-resume-builder-s4fu0or74-vinay-ambatkars-projects.vercel.app/',
    github: 'https://github.com/VinayAmbatkar/React-Resume-Builder',
    color: '#2563EB'
  },
  {
    title: 'Heat Wave Prediction Model',
    description: 'Developed an AI-powered model using Support Vector Machine (SVM) and TensorFlow to predict heat waves. Integrated Google Colab for experimentation and utilized HTML, CSS, and JavaScript for visualization and user interaction.',
    image: 'https://i.postimg.cc/W1bjktQw/Screenshot-2024-12-27-191735.png',
    tags: ['Python', 'TensorFlow', 'SVM', 'Google Colab', 'HTML', 'CSS', 'JavaScript', 'Data Science', 'Predictive Analytics'],
    link: 'https://colab.research.google.com/drive/1HBo-5nzgCra4PZZdNdCVTZwRb2BIjtfs',
    github: 'https://colab.research.google.com/drive/1HBo-5nzgCra4PZZdNdCVTZwRb2BIjtfs',
    color: '#F59E0B'
  },
  {
    title: 'Museum Booking System',
    description: 'A comprehensive booking system for museums featuring ticket booking and unbooking, ticket generation and printing, and slot booking. Includes a responsive and optimized UI with a robust backend. Integrated a suggestion system and secure payment handling with Razorpay.',
    image: 'https://i.postimg.cc/NGnQZRP9/Screenshot-2024-12-27-192621.png',
    tags: [
      'React',
      'MongoDB',
      'Express.js',
      'Razorpay',
      'Slot Booking',
      'Ticket Booking',
      'Suggestion System',
      'Algorithm',
      'Responsive Design',
      'Backend Optimization',
      'UI/UX Design'
    ],
    link: '#',
    github: 'https://github.com/yourusername/museum-booking-system',
    color: '#4ADE80'
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <div className="relative grid md:grid-cols-5 gap-8 p-6 md:p-8 rounded-2xl border border-primary/10 bg-black/20 backdrop-blur-sm hover:border-primary/20 transition-colors">
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Boxes className="w-5 h-5 text-primary" style={{ color: project.color }} />
              <h3 className="text-2xl font-bold" style={{ color: project.color }}>
                {project.title}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
                style={{ borderColor: `${project.color}20` }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Button
              asChild
              variant="outline"
              className="group/btn relative overflow-hidden border-primary/20"
              style={{ borderColor: `${project.color}30` }}
            >
              <a href={project.link} className="flex items-center gap-2">
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 transition-opacity" 
                  style={{ backgroundColor: project.color }} 
                />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="group/btn"
            >
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                <span>Source</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="md:col-span-3 relative">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
            <div 
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{ backgroundColor: project.color }}
            />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"
            />
          </div>
          <div 
            className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ 
              background: `linear-gradient(45deg, ${project.color}20, transparent 40%)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="relative py-20 overflow-hidden"
    >
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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Explore some of my recent work and technical achievements
          </motion.p>
        </div>
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
