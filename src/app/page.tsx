"use client";

import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Download, ChevronRight, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* Navbar */}
      <nav style={{ background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent' }} className="navbar">
        <div className="container nav-content">
          <Link href="/" className="nav-brand">GU</Link>
          <div className="nav-links">
            <Link href="#projects" className="nav-link">Projects</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
            <a href="/Resume.pdf" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="glow-effect"></div>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '800px' }}>
            <motion.p variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
              FRONT-END DEVELOPER
            </motion.p>
            <motion.h1 variants={fadeInUp} className="heading-1" style={{ marginBottom: '1.5rem' }}>
              I craft <span className="gradient-primary">stunning web experiences</span> that perform.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lead" style={{ marginBottom: '2.5rem', maxWidth: '600px' }}>
              Passionate Front-end Developer dedicated to creating Single Page Applications (SPA) with Responsive Design. I specialize in React.js, Next.js, and Server-Side Rendering (SSR) to bring creative visions to life with pixel-perfect precision and Performance Optimization.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4">
              <Link href="#projects" className="btn btn-primary">
                View My Work <ChevronRight size={18} />
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="heading-2">Selected Works</motion.h2>
            <motion.p variants={fadeInUp} className="text-lead mb-8" style={{ maxWidth: '600px' }}>
              Here are a few highlights of the digital products I've crafted, demonstrating my focus on API Integration, Web Vitals, and front-end architecture.
            </motion.p>

            <div className="grid grid-cols-2">
              {[ {
                  title: 'Cahya Lombok Travel',
                  desc: 'A professional travel agency website, featuring optimized performance for showcasing tour packages and exploring the beauty of Lombok.',
                  live: 'https://cahyalomboktravel2.netlify.app/',
                  code: 'https://github.com/GustiCahya/cahyalomboktravel',
                  tags: ['Hugo']
                },
                {
                  title: 'Adalene Fashion Platform',
                  desc: 'A sleek e-commerce landing page and management system for resellers and retailers, focused on modern aesthetics and seamless user experience.',
                  live: 'https://adalene-e6ca8.web.app/',
                  code: 'https://github.com/GustiCahya/adalene-react',
                  tags: ['React', 'Node.js', 'SCSS']
                },
                {
                  title: 'Tradexa',
                  desc: 'Designed for committed traders, Tradexa is a high-end trading journal. Monitor results, evaluate psychological and performance errors, and refine competitive advantage.',
                  live: 'https://tradexa-ledger.vercel.app/',
                  code: 'https://github.com/GustiCahya/tradexa',
                  tags: ['Next.js', 'Tailwind CSS', 'Neon', 'Prisma', 'NextAuth.js', 'Recharts', 'Lucide React']
                },
                {
                  title: 'Snake Game',
                  desc: 'An interactive and fun web-based game featuring smooth logic and classic gameplay, built to demonstrate HTML5 Canvas programming and state management in JavaScript.',
                  live: 'https://ular.netlify.app/',
                  code: 'https://github.com/GustiCahya/SnakeGame',
                  tags: ['Javascript']
                }
              ].map((project, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="card">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{project.title}</h3>
                  <p className="text-muted mb-4" style={{ flexGrow: 1, color: 'var(--text-muted)', lineHeight: 1.6 }}>{project.desc}</p>
                  <div className="flex gap-2 mb-6" style={{ flexWrap: 'wrap' }}>
                    {project.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
                  </div>
                  <div className="flex gap-4 mt-auto pt-4 mt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 inline-block" 
                       style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 500 }}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 inline-block" 
                       style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      <Code2 size={16} /> Source Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-2">
            <div>
              <motion.h2 variants={fadeInUp} className="heading-2">My Journey</motion.h2>
              <motion.p variants={fadeInUp} className="text-lead mb-8">
                As an enthusiastic Front-end Developer, I am committed to building elegant, accessible, and fast web applications. My expertise lies firmly in the JavaScript (ES6+) ecosystem, specifically leveraging Next.js and TypeScript, paired with modern Test-Driven Development (TDD) to deliver engaging user experiences.
              </motion.p>
              
              <motion.h3 variants={fadeInUp} style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Background</motion.h3>
              <motion.div variants={fadeInUp} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Front-end Engineer</h4>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Freelance • 2026 - Present</p>
                  <p style={{ color: 'var(--text-muted)' }}>Translating design mockups into fully functional, responsive, and interactive front-end applications with RESTful APIs integration.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Front-end Developer</h4>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>BNI • 2022</p>
                  <p style={{ color: 'var(--text-muted)' }}>The projects include the development of a Debt Collector App, a Debt Approval System, and a Collateral Auction App to optimize financial workflows and user experience.</p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.h3 variants={fadeInUp} style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', marginTop: '4rem' }}>Skills & Technologies</motion.h3>
              <div className="flex flex-col gap-6">
                <motion.div variants={fadeInUp}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Languages</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'].map(skill => <span key={skill} className="badge">{skill}</span>)}
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Frameworks & State</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {['React.js', 'Next.js', 'Vue.js', 'Angular.js', 'Redux Toolkit', 'Jotai', 'Zustand', 'React Query', 'React Router', 'Ionic', 'Capacitor'].map(skill => <span key={skill} className="badge">{skill}</span>)}
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Styling & Others</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {['Tailwind CSS', 'Styled Components', 'shadcn/ui', 'SCSS', 'Framer Motion', 'RESTful APIs', 'GraphQL'].map(skill => <span key={skill} className="badge">{skill}</span>)}
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Tools & Methods</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {['Git', 'GitHub', 'Jira', 'Shortcut', 'Slack', 'Figma (Hand-off)', 'Agile / Scrum', 'CI/CD', 'TDD', 'Remote Collaboration'].map(skill => <span key={skill} className="badge">{skill}</span>)}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--secondary)', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <motion.h2 variants={fadeInUp} className="heading-2">Start a Conversation</motion.h2>
            <motion.p variants={fadeInUp} className="text-lead mb-8">
              Interested in collaborating on a front-end project or just want to say hello? I'm always open to discussing new opportunities and creative ideas. Drop me a message!
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-8">
              <a href="mailto:gusticahya.work@gmail.com" className="btn btn-primary">
                <Mail size={18} /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/gusti-bagus-cahya-utama/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Linkedin size={18} /> LinkedIn
              </a>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center gap-6" style={{ color: 'var(--text-muted)' }}>
              <a href="https://github.com/gusticahya" target="_blank" rel="noreferrer" className="nav-link"><Github size={24} /></a>
              <a href="https://www.youtube.com/@cahya7997" target="_blank" rel="noreferrer" className="nav-link"><Youtube size={24} /></a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <div className="container">
          <p>© 2026 Gusti Cahya. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>Designed and built with Next.js, React, SCSS, and Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}
