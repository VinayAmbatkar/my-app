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


export default function Page() {
  return (
    <div className="min-h-screen w-full dark bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-wider text-primary">Welcome to my portfolio</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                Vinay Ambatkar
              </h1>
              <DynamicTitle />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate web developer specializing in building exceptional digital experiences. 
              With expertise in modern web technologies, I create responsive and performant applications 
              that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/file/d/1z8OvScN-6agnIPAiyyUt_5aiueFFYKJA/view?usp=sharing" // Replace with your actual Google Drive file ID
                target="_blank"
                rel="My Resume"
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
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
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

