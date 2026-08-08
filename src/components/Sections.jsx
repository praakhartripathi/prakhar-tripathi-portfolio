import { Github, Code2, Server, Layout, Database, Shield, Wrench, Coffee, Leaf, Bot, Box, Calendar, Mail, Linkedin, MapPin, FileText } from 'lucide-react';
import resumePDF from '/resume.pdf';

const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen pt-24 px-8 border-b border-gray-200 dark:border-white/5 last:border-0">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
      <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
      {title}
    </h2>
    <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </section>
);

const Sections = () => {
  return (
    <div className="md:ml-64 transition-all duration-300 bg-white dark:bg-black min-h-screen">
      <Section id="introduction" title="Introduction">
        <div className="flex flex-col justify-center min-h-[60vh]">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Prakhar Tripathi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
            Software Engineer | Java & Spring Boot Developer
          </h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
            I am a passionate developer with expertise in <strong>Java, Spring Boot, and React</strong>. 
            I build secure, scalable backend systems and responsive frontend applications. 
            From designing <strong>Microservices</strong> to creating <strong>AI-powered tools</strong>, 
            I am dedicated to writing clean, efficient code that solves real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={resumePDF} 
              download="Prakhar_Tripathi_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              <FileText size={20} /> Resume
            </a>
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors font-medium">
              Contact Me
            </a>
          </div>
        </div>
      </Section>
      
      <Section id="about" title="About Me">
        <div className="space-y-6 max-w-4xl">
          <p className="text-lg">
            I am a dedicated <strong>Software Engineer</strong> with a strong foundation in Computer Science, having graduated with a B.Tech in CSE from Dr. A.P.J. Abdul Kalam Technical University in 2024. My journey in tech is driven by a curiosity to understand how complex systems work and a passion for building efficient, scalable solutions.
          </p>
          <p className="text-lg">
            I specialize in <strong>Java and Spring Boot</strong> for backend development, while also possessing strong skills in frontend technologies like <strong>React and Flutter</strong>. I enjoy solving algorithmic challenges on platforms like LeetCode and HackerRank, which helps me sharpen my problem-solving skills.
          </p>
          <p className="text-lg">
            Currently, I am gaining practical industry experience as a <strong>Java Developer Intern</strong>, where I apply object-oriented principles to build production-grade applications. I am always eager to learn new technologies and contribute to impactful projects.
          </p>

          <div className="pt-4">
            <a 
              href={resumePDF} 
              download="Prakhar_Tripathi_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </Section>
      
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project: Patho Test */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Patho Test</h3>
              <a href="https://github.com/prakhartripath0001/Pathotest" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-stack web application designed to simplify pathology lab operations and improve patient experience. The platform allows users to explore available diagnostic tests, book appointments, and manage checkups efficiently, while providing an admin dashboard for lab staff.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Full Stack', 'Healthcare', 'Web App', 'Admin Dashboard'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: SkillSpring */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">SkillSpring</h3>
              <a href="https://github.com/prakhartripath0001/skillspring-learning-platform" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-stack Udemy-style learning platform built with Next.js, Supabase, and Tailwind CSS. Features role-based access (Admin, Instructor, Student), course builder, enrollment flow, lesson progress tracking, reviews & ratings, and admin moderation dashboard.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Supabase', 'Tailwind CSS', 'Full Stack'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Astro Playground */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Astro Playground</h3>
              <a href="https://github.com/prakhartripath0001/astro-playground" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A practice project for building a Vedic Astrology web app using modern full-stack development. Includes experimental features for horoscope logic, Kundli analysis, and astrology-based recommendations.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Full Stack', 'Vedic Astrology', 'Web App'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Codexia */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Codexia</h3>
              <a href="https://github.com/prakhartripath0001/codexia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              An AI-powered code editor inspired by Cursor. Currently under active development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'AI', 'Code Editor', 'Node.js'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: InterviewIQ */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">InterviewIQ</h3>
              <a href="https://github.com/prakhartripath0001/interviewIQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-stack SaaS application focused on resume optimization and interview preparation, helping users improve job-readiness with guided tooling.
            </p>
            <div className="flex flex-wrap gap-2">
              {['SaaS', 'Full Stack', 'Resume Optimization', 'Interview Prep'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Educational Puzzle Game */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Educational Puzzle Game</h3>
              <a href="https://github.com/prakhartripath0001/Educational-Puzzle-Game" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A grid-based math puzzle game where players swap adjacent cells with numbers, operators, and equals signs to form valid equations, clear objectives, and reveal hidden images.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Game Dev', 'Puzzle', 'Math Logic', 'Mobile'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Vehicle Tracking App */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Vehicle Tracking App</h3>
              <a href="https://github.com/prakhartripath0001/vehicle-tracking-app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A small full-stack tracking feature with a Node.js + Express API, PostgreSQL backend, and Flutter UI for vehicle list/details with active-inactive status toggling.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Node.js', 'Express', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Native Arabic PDF */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Native Arabic PDF</h3>
              <a href="https://github.com/prakhartripath0001/native-library-to-handle-Arabic-PDF-files" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A Flutter bridge for native PDF rendering with strong Arabic RTL support and full annotation round-trip between Flutter and native layers.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Native Bridge', 'PDF Rendering', 'RTL Support'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Music Video App */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Music Video App</h3>
              <a href="https://github.com/prakhartripath0001/music-video-app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A TikTok-inspired short music video application built in Flutter, featuring a points-based engagement and progression system.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Short Videos', 'Gamification', 'Mobile App'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: WalkTest */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">WalkTest</h3>
              <a href="https://github.com/prakhartripath0001/walktest" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A fitness tracking app inspired by Strava, focused on walking activity with route/session tracking and social-style workout insights.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Fitness Tech', 'Activity Tracking', 'Maps', 'Mobile App'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Link to Paper */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Link to Paper</h3>
              <a href="https://github.com/prakhartripath0001/link-to-paper" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-stack web app that scrapes webpage content, transforms it using AI workflows, and generates a formatted technical paper with automated PDF export.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Full Stack', 'Web Scraping', 'AI Processing', 'PDF Generation'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: ToolRent */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">ToolRent</h3>
              <a href="https://github.com/prakhartripath0001/tool-rent" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A cloud-based multi-tenant SaaS platform for tool and equipment rental businesses, providing tenant-specific storefronts and back-office operations management.
            </p>
            <div className="flex flex-wrap gap-2">
              {['SaaS', 'Multi-Tenant', 'Rental Platform', 'Business Ops'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 1: POS Pro */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">POS Pro System</h3>
              <a href="https://github.com/prakhartripath0001/Point_of_Sale_system" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-stack Point of Sale platform supporting inventory, billing, and multi-branch stores. Features secure JWT authentication and role-based access control.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'React', 'MySQL', 'Docker'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2: Password Manager */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">AI Password Manager</h3>
              <a href="https://github.com/prakhartripath0001/smart-password-manager" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Secure credential management system with AES encryption and BCrypt hashing. Integrated OpenAI API for AI-powered password suggestions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                <Coffee size={12} /> Java
              </span>
              <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                <Leaf size={12} /> Spring Boot
              </span>
              <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                <Bot size={12} /> OpenAI
              </span>
              <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                <Shield size={12} /> Security
              </span>
              <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                <Box size={12} /> Docker
              </span>
            </div>
          </div>

          {/* Project 3: College Connect */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">College Connect App</h3>
              <a href="https://github.com/prakhartripath0001" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Real-time mobile application for student communication and job postings. Handles document uploads and event-driven updates using Firebase.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Dart', 'Firebase', 'Mobile'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 4: Spring API Collection */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Spring API Collection</h3>
              <a href="https://github.com/prakhartripath0001/spring-api" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A comprehensive collection of Spring Boot backend projects including Blog Platform, Expense Tracker, URL Shortener, Task Tracker, and various utility microservices.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'REST API', 'Microservices', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 5: MeetOnline */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">MeetOnline</h3>
              <a href="https://github.com/prakhartripath0001/meetonline" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-stack web application designed for building and discovering online communities. Features JWT authentication, real-time notifications, and a custom theme system.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'PostgreSQL', 'Docker', 'JWT'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 6: Food Delivery App */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Food Delivery App</h3>
              <a href="https://github.com/prakhartripath0001/Food_delivery-" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-stack food delivery application with JWT authentication, role-based access, and management of food, categories, orders, and restaurants.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'React', 'Redux', 'JWT', 'Spring Security'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 7: LeetCode Daily WhatsApp Bot */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">LeetCode Daily WhatsApp Bot</h3>
              <a href="https://github.com/prakhartripath0001/Leetcode-dailey-whatsapp-bot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A fully automated bot that fetches the LeetCode Daily Challenge, generates a Hinglish explanation and Java solution using Google Gemini AI, and sends it directly to your WhatsApp via Twilio.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Google Gemini', 'Twilio', 'GitHub Actions'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 8: Khel Hisab */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Khel Hisab</h3>
              <a href="https://github.com/prakhartripath0001/khel_hisab" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A simple and easy Volleyball scorecard app designed for local matches. Allows users to track scores accurately without pen and paper with a single tap.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Mobile App', 'Volleyball', 'Scorecard'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Bytegit CLI */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Bytegit CLI</h3>
              <a href="https://github.com/prakhartripath0001/bytegit-cli" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A lightweight Java CLI tool that wraps Git commands to simplify local workflows and GitHub pushes.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'CLI', 'Git', 'Automation'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Banking System */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Banking System</h3>
              <a href="https://github.com/prakhartripath0001/Banking-system" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A microservices-based banking system with services for Account management, Transactions, Fraud Detection, and Notifications — all routed via an API Gateway. Implements the Saga Pattern for distributed data consistency across services.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Docker', 'MySQL', 'Redis', 'Saga Pattern'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Code102 */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Code102</h3>
                <p className="text-xs text-blue-500 dark:text-blue-400 font-medium mt-0.5">AI-Native Project Management</p>
              </div>
              <a href="https://github.com/prakhartripath0001/CODE102" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A full-featured, AI-native project management platform (inspired by Basecamp) built as a Turborepo monorepo. Features Kanban task management, real-time Socket.IO chat, S3 file sharing, calendar integration, global Cmd+K search, and AI-powered task extraction, semantic search, status reports, and smart notifications.
            </p>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO', 'OpenAI', 'Turborepo'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project: Shortify */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Shortify</h3>
                <p className="text-xs text-blue-500 dark:text-blue-400 font-medium mt-0.5">Production-Grade URL Shortener</p>
              </div>
              <a href="https://github.com/prakhartripath0001/Url-shortner" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A distributed, Bitly-like URL shortener built on 5 Spring Boot microservices — Auth, URL (Base62 hashing + QR), Analytics (Kafka click tracking), Notifications, and Payments (Razorpay). Features Redis caching, multilingual React dashboard (English/Hindi), and a one-command Docker Compose full-stack boot.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'React', 'Apache Kafka', 'Redis', 'MySQL', 'Docker', 'Razorpay', 'JWT', 'Flyway'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="skills" title="Skills & Tools">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "Languages",
              icon: <Code2 className="w-6 h-6 text-blue-500" />,
              skills: ["Java", "JavaScript", "Python", "SQL"]
            },
            {
              category: "Backend",
              icon: <Server className="w-6 h-6 text-green-500" />,
              skills: ["Spring Boot", "Spring Security", "Node.js", "Express", "REST APIs", "Microservices", "JPA/Hibernate"]
            },
            {
              category: "Frontend",
              icon: <Layout className="w-6 h-6 text-purple-500" />,
              skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"]
            },
            {
              category: "Databases",
              icon: <Database className="w-6 h-6 text-yellow-500" />,
              skills: ["MySQL", "PostgreSQL", "Redis", "Prisma"]
            },
            {
              category: "Cloud & DevOps",
              icon: <Shield className="w-6 h-6 text-red-500" />,
              skills: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD", "GitHub Actions", "JWT"]
            },
            {
              category: "Tools & Platforms",
              icon: <Wrench className="w-6 h-6 text-orange-500" />,
              skills: ["Git/GitHub", "Postman", "REST APIs", "Razorpay", "Antigravity", "Codex"]
            },
            {
              category: "AI Tools",
              icon: <Bot className="w-6 h-6 text-pink-500" />,
              skills: ["ChatGPT", "Google Gemini", "Claude", "GitHub Copilot", "CodeRabbit"]
            }
          ].map((group) => (
            <div key={group.category} className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                {group.icon}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section id="experience" title="Experience">
        <div className="space-y-6 max-w-4xl">

          {/* Mindfire Digital */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Open Source Contributor</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Mindfire Digital — TypeScript, Node.js, MCP, tiktoken (Remote)</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>July 2026</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Implemented dynamic GPT-4 token accounting using tiktoken, replacing hardcoded token estimates across engine and MCP modules.</li>
              <li>Improved token usage reporting with runtime calculation and session-level tracking.</li>
              <li>Added integration tests; feature merged into the project's development branch (PR #197).</li>
            </ul>
          </div>

          {/* CodeAlpha */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Java Developer Intern</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">CodeAlpha (Remote)</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>June 2026 – July 2026</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed backend applications using Java, Spring Boot, and REST APIs.</li>
              <li>Designed relational database schemas and implemented SQL-based data access.</li>
              <li>Applied OOP, layered architecture, and clean coding principles.</li>
            </ul>
          </div>

          {/* SyntecxHub */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Java Developer Intern</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Syntecxhub (Remote)</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>Jan 2026 – Feb 2026</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Designed normalized database schemas and optimized SQL queries.</li>
              <li>Applied multithreading, Java Collections, and dependency injection to build scalable backend components.</li>
            </ul>
          </div>

          {/* Xastag */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Freelance Web Developer</h3>
                <div className="flex items-center gap-2">
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Xastag Drinks & Beverages</p>
                  <a href="https://github.com/prakhartripath0001/xastag-landing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>Freelance Project</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Designed and developed a responsive branding landing page for Xastag Drinks and Beverages to enhance their online presence.
            </p>
          </div>
        </div>
      </Section>
      
      <Section id="education" title="Education">
        <div className="space-y-6 max-w-4xl">
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science & Engineering</h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>May 2024</span>
              </div>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Rajarshi Rananjay Singh Institute of Management & Technology</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Sultanpur, UP &nbsp;·&nbsp; GPA: 7.2 / 10</p>
            <p className="text-gray-600 dark:text-gray-300">
              Strong foundation in computer science principles, software engineering, and full-stack development.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Certifications</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Java Full Stack Development Program — <span className="text-blue-600 dark:text-blue-400 font-medium">Tap Academy</span> (2023)</li>
              <li>Programming with Python 3.x — <span className="text-blue-600 dark:text-blue-400 font-medium">Simplilearn</span></li>
            </ul>
          </div>
        </div>
      </Section>
      
      <Section id="contact" title="Contact Me">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4">
              <a href="mailto:Tripathi.prakhar@outlook.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>Tripathi.prakhar@outlook.com</span>
              </a>
              <a href="tel:+918052288647" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91-8052288647</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/-prakhartripathi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn</span>
              </a>
              <a href="https://github.com/prakhartripath0001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
                <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="stats" title="Stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 text-center hover:border-blue-500/50 transition-colors">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</h3>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 text-center hover:border-blue-500/50 transition-colors">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</h3>
            <p className="text-gray-600 dark:text-gray-300">Technologies Mastered</p>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 text-center hover:border-blue-500/50 transition-colors">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-300">DSA Problems Solved</p>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 text-center hover:border-blue-500/50 transition-colors">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1200+</h3>
            <p className="text-gray-600 dark:text-gray-300">Code Commits</p>
          </div>
        </div>
      </Section>

      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-white/10 mt-12">
        <p>&copy; 2026 Prakhar Tripathi</p>
      </footer>
    </div>
  );
};

export default Sections;
