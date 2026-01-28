'use client'
import { Navbar } from '@/components/navbar'
import RotatingSkills from '@/components/rotating-skills'
import { ProjectsSection } from '@/components/projects-section'
import { DynamicTitle } from '@/components/dynamic-title'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { SocialLinks } from '@/components/social-links'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ChatBot } from '@/components/chat-bot'
import { AchievementsSection } from '@/components/achievements-section'
import SplashCursor from '../src/blocks/Animations/SplashCursor/SplashCursor'

export default function Page() {
  return (
    <div className="min-h-screen w-full dark bg-black text-white overflow-hidden">
      <Navbar />


      {/* Hero Section */}
      <SplashCursor
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        PRESSURE_ITERATIONS={8}
        DENSITY_DISSIPATION={8}
        VELOCITY_DISSIPATION={5}
        SPLAT_RADIUS={0.06}
        SPLAT_FORCE={1000}
        CURL={1}
        SHADING={false}
        COLOR_UPDATE_SPEED={5}
      />
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
                WELCOME TO MY PORTFOLIO
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground leading-tight">
                Vinay Ambatkar
              </h1>
              <DynamicTitle />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I am a passionate web developer specializing in building exceptional digital experiences.
              With expertise in modern web technologies, I create responsive and performant applications
              that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1SoYrNsn7LBsT1gquhp7a8TTFqCZq8CzU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                My Resume
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-md border border-primary/10 bg-black/50 backdrop-blur-sm px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <div className="text-sm text-muted-foreground mb-3">Connect with me</div>
              <SocialLinks />
            </div>
          </div>

          {/* Right Content with Rotating Skills */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl rounded-full" />
            <RotatingSkills />
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="relative" style={{ zIndex: 30 }}>
        <ProjectsSection />
      </div>
      <div className="relative bg-black" style={{ zIndex: 50 }}>
        <SkillsSection />
      </div>
      <div className="relative bg-black mt-20" style={{ zIndex: 40 }}>
        <ExperienceSection />
      </div>
      <div className="relative bg-black" style={{ zIndex: 30 }}>
        <AchievementsSection />
      </div>
      <div className="relative bg-black" style={{ zIndex: 50 }}>
        <ContactSection />
      </div>
      <Footer />

      {/* Fixed Elements */}
      <ScrollToTop />
      <ChatBot />

      {/* Global Styles & Animations */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
