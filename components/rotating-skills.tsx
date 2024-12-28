'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTensorflow } from 'react-icons/si'
import { Code2 } from 'lucide-react'

const skills = [
  { icon: FaReact, label: 'React', color: '#61DAFB' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiExpress, label: 'Express', color: '#FFFFFF' },
  { icon: SiTensorflow, label: 'AI/ML', color: '#FF6F00' },
  { icon: FaNodeJs, label: 'Node.js', color: '#339933' },
 // { icon: Binary, label: 'C++', color: '#00599C' },
  { icon: Code2, label: 'DSA', color: '#FF4B4B' }
]

export default function RotatingSkills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] flex items-center justify-center">
 {/* Profile Image */}
<div className="relative z-20 w-32 sm:w-48 h-32 sm:h-48 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/10 group">
  <Image
    src="https://i.postimg.cc/TPWDX84v/Me-removebg-preview.png"
    alt="Profile"
    fill
    className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-xl"
    priority
  />
</div>


      {/* Rotating Skills */}
      <div
        className={`absolute inset-0 z-10 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ animation: 'spin 20s linear infinite' }}
      >
        {skills.map((Skill, index) => {
          const angle = (index * 360) / skills.length
          const radius = typeof window !== 'undefined' ? 
            (window.innerWidth < 640 ? Math.min(120, window.innerWidth * 0.3) : 160) : 160
          const x = radius * Math.cos((angle * Math.PI) / 180)
          const y = radius * Math.sin((angle * Math.PI) / 180)

          return (
            <div
              key={Skill.label}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-black/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 group"
              >
                <Skill.icon className="w-6 sm:w-8 h-6 sm:h-8 transition-transform group-hover:scale-110" style={{ color: Skill.color }} />
                <span className="text-[10px] sm:text-xs font-medium text-white whitespace-nowrap">{Skill.label}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Rotating Circles */}
      <div
        className={`absolute inset-0 border border-primary/10 rounded-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          animation: 'spin 20s linear infinite'
        }}
      />
      <div
        className={`absolute inset-[-20px] border border-primary/5 rounded-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          animation: 'spin 25s linear infinite reverse'
        }}
      />
    </div>
  )
}

