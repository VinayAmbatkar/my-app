'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, Medal, Award, Star } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    title: 'Runner-up in BDCE Hackathon 2K22',
    description: 'Led a team of 4 to develop an innovative solution for sustainable development, competing against 50+ teams.',
    icon: Trophy,
    image: 'https://i.postimg.cc/wv26tryT/Screenshot-2024-12-27-195814.png',
    color: '#FFD700'
  },
  {
    title: ' Weelspin codechef Programing Challege ',
    description: 'Recived  Ruunnerup the College level programing challege of DSA',
    icon: Medal,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DDDhEAOdY3I7WiYvcLbCMKBk-PNzN1w838hYiCMVbnM01hdQbCl-ijdLrW2UeyN6iN0&usqp=CAU',
    color: '#C0C0C0'
  },
 
]

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group"
    >
      <Card className="overflow-hidden border-primary/10 bg-black/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-video">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div 
              className="absolute bottom-4 left-4 p-2 rounded-full"
              style={{ backgroundColor: `${achievement.color}20` }}
            >
              <achievement.icon 
                className="w-6 h-6"
                style={{ color: achievement.color }}
              />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-muted-foreground">{achievement.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section 
      ref={containerRef}
      id="achievements" 
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
            <span className="text-sm font-medium">Recognition & Awards</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Notable Achievements
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Highlighting key milestones and recognition in my professional journey
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

