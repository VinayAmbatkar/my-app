'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Calendar, MapPin, Briefcase, X, Download, FileText } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Experience {
  year: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  image?: string;
}

const EXPERIENCES: Experience[] = [
  {
    year: 'May 2025 - Present',
    role: 'Full Stack Developer',
    company: 'NNIIT (EnTech Platform)',
    location: 'Hyderabad, Telangana (On-site)',
    description: 'Led end-to-end development of a large-scale EnTech platform using React.js, Node.js, and MongoDB.',
    achievements: [
      'Integrated LLM-based systems to deliver smart insights and enhance platform intelligence',
      'Built a real-time Smart Meter Data Gateway handling data from 100K+ devices with high throughput and reliability',
      'Developed a secure Role-Based Access Control (RBAC) system to manage user permissions and ensure data security',
      'Ensured high performance, reliability, and security across the platform through optimization and best practices',
      'Collaborated with cross-functional teams including product managers, designers, and QA to deliver features on schedule',
      'Participated in code reviews, architecture discussions, and sprint planning to maintain code quality and team alignment',
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'LLM', 'RBAC', 'IoT Gateway', 'REST API'],
    logo: '/download.png',
    image: '/2024-nniit.png?v=2',
  },
  {
    year: 'Jan 2025 - May 2025',
    role: 'Software Developer',
    company: 'TalentTrise Technokrate',
    location: 'Nagpur, Maharashtra',
    description: 'Developed and maintained cross-platform mobile applications using React Native for live client projects.',
    achievements: [
      'Worked simultaneously on various live React Native and React.js projects, maintaining high code quality',
      'Led and mentored interns by assigning tasks, reviewing code, and providing technical guidance',
      'Managed client communications on the technical side, gathering requirements and providing updates',
      'Collaborated closely with the Figma design team to enhance and implement intuitive UI/UX',
      'Successfully optimized performance of ongoing projects, achieving up to 80% improvement in load time',
      'Practiced agile methodologies, participated in standups, sprint planning, and code reviews',
    ],
    technologies: ['React Native', 'React.js', 'Figma', 'Agile', 'Mobile Development'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    year: 'Jan 2024 - Dec 2024',
    role: 'Frontend Developer',
    company: 'Avalanche Hi-Tech Enterprise',
    location: 'Nagpur, Maharashtra',
    description: 'Built reusable UI components in React.js, aligned with design systems and accessibility best practices.',
    achievements: [
      'Worked directly with UX designers and backend engineers to ensure functional delivery',
      'Used agile methods (Scrum, sprints) to deliver features on schedule and meet team goals',
      'Implemented REST API integrations and optimized for performance and scalability',
      'Wrote clean, well-documented code and maintained version control workflows',
      'Contributed to team discussions and retrospectives to continuously improve project quality',
      'Actively learned new tools and frameworks to support growing team requirements',
    ],
    technologies: ['React.js', 'REST API', 'Scrum', 'Git', 'UI Components'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    year: '2023',
    role: 'Admin Member',
    company: 'TFL (Technical Forum)',
    location: 'College',
    description: 'Organized technical workshops, events, and managed student coordination.',
    achievements: [
      'Organized 15+ technical workshops and coding events',
      'Managed coordination for 200+ student participants',
      'Promoted tech activities and skill development programs',
      'Led team of technical coordinators',
    ],
    technologies: ['Leadership', 'Event Management', 'Communication'],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
  },
  {
    year: '2022',
    role: 'Web Development Journey',
    company: 'Self-Learning & Projects',
    description: 'Started my journey in web development, building foundational skills and projects.',
    achievements: [
      'Learned HTML, CSS, JavaScript fundamentals',
      'Built first portfolio projects and personal website',
      'Explored React.js and modern web technologies',
      'Runner-up at BDCE Hackathon 2K22',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showResume, setShowResume] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openResumeModal = () => {
    setShowResume(true);
    document.body.style.overflow = 'hidden';
  };

  const closeResumeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setShowResume(false);
          document.body.style.overflow = 'auto';
        },
      });
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger && cards.includes(trigger.vars.trigger as HTMLDivElement)) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Animate modal entrance
  useEffect(() => {
    if (showResume && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
      );
    }
  }, [showResume]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative py-20 bg-black"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-gray-400 text-sm mb-3">
            MY JOURNEY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A chronicle of my professional growth and technical achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.year}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20">
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.year}
                    </div>

                    {/* Company Logo */}
                    {exp.logo && (
                      <div className="mb-4">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={80}
                          height={32}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    )}

                    {/* Role & Company */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-xs text-gray-300 hover:border-cyan-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 border-4 border-black shadow-lg shadow-cyan-500/50" />
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-cyan-400 animate-ping opacity-20" />
                  </div>
                </div>

                {/* Image Card */}
                <div className="w-full md:w-5/12">
                  {exp.image && (
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                      <div className="relative h-64 md:h-80">
                        <Image
                          src={exp.image}
                          alt={exp.role}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white font-semibold text-lg">
                            {exp.company}
                          </p>
                          <p className="text-gray-300 text-sm">{exp.year}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={openResumeModal}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
          >
            <FileText className="w-5 h-5" />
            <span>View Full Resume</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeResumeModal}
          />

          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative w-full max-w-5xl h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-cyan-500/30 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-gray-900 to-transparent p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Resume</h3>
                  <p className="text-sm text-gray-400">Vinay Ambatkar - Full Stack Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a
                  href="/Vinay-SDE.pdf"
                  download="Vinay_Ambatkar_Resume.pdf"
                  className="p-3 bg-gray-800 hover:bg-cyan-600 rounded-xl transition-all duration-300 group"
                  title="Download Resume"
                >
                  <Download className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>

                {/* Close Button */}
                <button
                  onClick={closeResumeModal}
                  className="p-3 bg-gray-800 hover:bg-red-600 rounded-xl transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-full pt-20">
              <iframe
                src="/Vinay-SDE.pdf"
                className="w-full h-full border-0"
                title="Resume PDF Viewer"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ExperienceSection;
