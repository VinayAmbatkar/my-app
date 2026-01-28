'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Projects data
const PROJECTS = [
  {
    name: 'Full-stack E-commerce Platform',
    image: 'https://i.postimg.cc/rsGFd5LK/Dark-Laptop-Review-Youtube-Thumbnail.png',
    description: 'A scalable, feature-rich e-commerce platform with admin panel and payment integration.',
    gradient: ['#1F6582', '#1ABCFE'],
    url: 'https://vshops-fullstack-ecom.netlify.app/',
    github: 'https://github.com/VinayAmbatkar/FULL_Stack_Ecommerce_VShop-main',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
  },
  {
    name: 'React Resume Builder',
    image: 'https://i.postimg.cc/667HbwNL/Dark-Laptop-Review-Youtube-Thumbnail-1.png',
    description: 'Create, edit, and export resumes easily. Used by 50+ students.',
    gradient: ['#153BB9', '#0E2C8B'],
    url: 'https://react-resume-builder-s4fu0or74-vinay-ambatkars-projects.vercel.app/',
    github: 'https://github.com/VinayAmbatkar/Resume-Builder-master',
    tech: ['React', 'JavaScript', 'CSS'],
  },
  {
    name: 'Heat Wave Prediction Model',
    image: 'https://i.postimg.cc/W1bjktQw/Screenshot-2024-12-27-191735.png',
    description: 'AI-powered model using SVM and TensorFlow to predict heat waves.',
    gradient: ['#F59E0B', '#D97706'],
    url: 'https://colab.research.google.com/drive/1HBo-5nzgCra4PZZdNdCVTZwRb2BIjtfs',
    github: 'https://colab.research.google.com/drive/1HBo-5nzgCra4PZZdNdCVTZwRb2BIjtfs',
    tech: ['Python', 'TensorFlow', 'SVM'],
  },
  {
    name: 'Museum Booking System',
    image: 'https://i.postimg.cc/NGnQZRP9/Screenshot-2024-12-27-192621.png',
    description: 'Comprehensive booking system with ticket generation and Razorpay integration.',
    gradient: ['#245B57', '#004741'],
    url: 'https://muessum-tickit-booking-system-p149xyu88.vercel.app/',
    github: 'https://github.com/VinayAmbatkar/Muessum_booking_system_updated',
    tech: ['React', 'MongoDB', 'Node.js'],
  },
];

// Project Tile Component
const ProjectTile = ({
  project,
}: {
  project: typeof PROJECTS[0];
}) => {
  const projectCard = useRef<HTMLDivElement>(null);
  const {
    name,
    tech,
    image,
    description,
    url,
    github,
    gradient: [stop1, stop2],
  } = project;

  useEffect(() => {
    const loadVanillaTilt = async () => {
      if (projectCard.current && typeof window !== 'undefined') {
        try {
          const VanillaTilt = (await import('vanilla-tilt')).default;
          VanillaTilt.init(projectCard.current, {
            max: 5,
            speed: 400,
            glare: true,
            'max-glare': 0.2,
            gyroscope: false,
          });
        } catch {
          // Tilt not loaded
        }
      }
    };
    loadVanillaTilt();
  }, []);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="project-card flex-shrink-0 overflow-hidden rounded-3xl snap-start block"
      style={{
        width: 'min(38rem, 85vw)',
      }}
    >
      <div
        ref={projectCard}
        className="project-tile rounded-3xl relative p-6 flex-col flex justify-between w-full"
        style={{
          background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
          height: '22rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 rounded-3xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Project Image */}
        <div className="absolute top-4 right-4 w-48 md:w-64 h-auto z-10">
          <div
            className="relative rounded-xl shadow-2xl overflow-hidden"
            style={{ transform: 'rotate(-12deg)' }}
          >
            <Image
              src={image}
              alt={name}
              width={280}
              height={180}
              className="object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </div>
        </div>

        {/* Top Gradient */}
        <div
          className="absolute top-0 left-0 w-full h-20 rounded-t-3xl"
          style={{
            background: `linear-gradient(180deg, ${stop1} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />

        {/* Bottom Gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 rounded-b-3xl"
          style={{
            background: `linear-gradient(0deg, ${stop1} 10%, rgba(0,0,0,0) 100%)`,
          }}
        />

        {/* Project Name */}
        <h1 className="text-2xl sm:text-3xl z-10 pl-2 font-bold text-white max-w-[60%]">
          {name}
        </h1>

        {/* Tech Stack */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 z-10">
          {tech.slice(0, 3).map((t, i) => (
            <div
              key={t}
              className={`${i % 2 === 0 ? 'ml-8' : ''} px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm`}
            >
              <span className="text-xs font-medium text-white">{t}</span>
            </div>
          ))}
        </div>

        {/* Description & Actions */}
        <div className="z-10 flex items-end justify-between gap-4">
          <h2 className="text-base md:text-lg tracking-wide font-medium text-white/90 max-w-[55%]">
            {description}
          </h2>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

// Main Projects Section with Auto Horizontal Scroll
export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    // Wait for layout to stabilize
    const timer = setTimeout(() => {
      // Calculate scroll distance
      const scrollWidth = scrollContainer.scrollWidth;
      const viewportWidth = scrollContainer.offsetWidth;
      const scrollDistance = scrollWidth - viewportWidth;

      if (scrollDistance <= 0) return;

      // Create horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(scrollContainer, {
        x: -scrollDistance,
        ease: 'none',
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const trigger = triggerRef.current;
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === trigger) {
          st.kill();
        }
      });
    };
  }, [mounted]);

  // Mobile fallback - normal horizontal scroll
  if (!mounted) {
    return (
      <section className="w-full relative py-16 md:py-24 overflow-hidden" id="projects">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
        <div className="relative 2xl:container xl:px-20 md:px-12 px-4 mx-auto">
          <div className="flex flex-col mb-12">
            <p className="uppercase tracking-widest text-gray-400 text-sm">PROJECTS</p>
            <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent w-fit mt-2">
              My Works
            </h1>
          </div>
          <div className="flex gap-6 md:gap-10 overflow-x-auto">
            {PROJECTS.map((project) => (
              <ProjectTile project={project} key={project.name} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="w-full relative" id="projects">
      {/* Trigger wrapper for pinning */}
      <div ref={triggerRef} className="min-h-screen flex flex-col justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        <div className="relative py-16 md:py-24">
          <div className="2xl:container xl:px-20 md:px-12 px-4 mx-auto">
            {/* Section Title */}
            <div className="flex flex-col mb-12">
              <p className="uppercase tracking-[0.3em] text-gray-400 text-sm font-medium mb-3">
                PROJECTS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                My Works
              </h1>
              <h2 className="text-lg md:text-xl text-gray-300 max-w-3xl">
                I have contributed to various projects ranging from Frontend development, Full-stack applications, and AI/ML models
              </h2>
            </div>
          </div>

          {/* Projects Wrapper - Horizontal Scroll Container */}
          <div className="xl:px-20 md:px-12 px-4">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 md:gap-10 project-wrapper"
              style={{
                willChange: 'transform',
              }}
            >
              {PROJECTS.map((project) => (
                <ProjectTile project={project} key={project.name} />
              ))}

              {/* End spacer */}
              <div className="flex-shrink-0 w-20" />
            </div>
          </div>

          {/* Scroll hint */}
          <div className="2xl:container xl:px-20 md:px-12 px-4 mx-auto mt-8">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span className="hidden md:inline">↓ Scroll down to explore projects</span>
              <span className="md:hidden">← Swipe to explore →</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
