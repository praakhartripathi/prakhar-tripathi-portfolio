import { Github, Code2, Server, Layout, Database, Shield, Wrench, Coffee, Leaf, Bot, Box, Calendar, Mail, Linkedin, MapPin, FileText } from 'lucide-react';
import resumePDF from '/Prakhar_Tripathi_Software_Engineer.pdf';

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
          {/* Project: Codexia */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Codexia</h3>
              <a href="https://github.com/praakhartripathi/codexia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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

          {/* Project 1: POS Pro */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">POS Pro System</h3>
              <a href="https://github.com/praakhartripathi/Point_of_Sale_system" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
              <a href="https://github.com/praakhartripathi/smart-password-manager" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
              <a href="https://github.com/praakhartripathi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
              <a href="https://github.com/praakhartripathi/spring-api" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
              <a href="https://github.com/praakhartripathi/meetonline" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
              <a href="https://github.com/praakhartripathi/Food_delivery-" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
              <a href="https://github.com/praakhartripathi/Leetcode-dailey-whatsapp-bot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
              <a href="https://github.com/praakhartripathi/khel_hisab" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
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
        </div>
      </Section>
      
      <Section id="skills" title="Skills & Tools">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "Languages",
              icon: <Code2 className="w-6 h-6 text-blue-500" />,
              skills: ["Java", "JavaScript", "Dart", "SQL"]
            },
            {
              category: "Backend",
              icon: <Server className="w-6 h-6 text-green-500" />,
              skills: ["Spring Boot", "REST APIs", "Microservices", "JPA/Hibernate"]
            },
            {
              category: "Frontend",
              icon: <Layout className="w-6 h-6 text-purple-500" />,
              skills: ["React", "Next.js", "Flutter", "HTML/CSS", "Tailwind CSS"]
            },
            {
              category: "Databases",
              icon: <Database className="w-6 h-6 text-yellow-500" />,
              skills: ["MySQL", "PostgreSQL", "MongoDB"]
            },
            {
              category: "DevOps & Security",
              icon: <Shield className="w-6 h-6 text-red-500" />,
              skills: ["Docker", "CI/CD", "JWT", "BCrypt/AES"]
            },
            {
              category: "Tools & Platforms",
              icon: <Wrench className="w-6 h-6 text-orange-500" />,
              skills: ["Git/GitHub", "Postman", "IntelliJ IDEA", "JUnit", "Ubuntu", "WSL"]
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
          {/* SyntecxHub */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Java Developer Intern</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">SyntecxHub (Remote)</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>Jan 2026 – Feb 2026</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Implemented backend features using Core Java and Spring Boot with focus on clean, modular design.</li>
              <li>Worked extensively with OOP, collections, and exception handling in production-style projects.</li>
              <li>Collaborated remotely via code reviews to improve implementation quality and design decisions.</li>
            </ul>
          </div>

          {/* MeetOnline */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Freelance Full Stack Developer</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">MeetOnline</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>Freelance Project</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Developed a full-stack web application for building and discovering online communities.
            </p>
          </div>

          {/* Xastag */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Freelance Web Developer</h3>
                <div className="flex items-center gap-2">
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Xastag Drinks & Beverages</p>
                  <a href="https://github.com/praakhartripathi/xastag-landing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science</h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>2024</span>
              </div>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Dr. A.P.J. Abdul Kalam Technical University</p>
            <p className="text-gray-600 dark:text-gray-300">
              Graduated with a strong foundation in computer science principles, software engineering, and full-stack development.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Intermediate (Class XII)</h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} />
                <span>2019</span>
              </div>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">C.P.M Inter College, Pratapgarh, UP</p>
            <p className="text-gray-600 dark:text-gray-300">
              Completed with 72%.
            </p>
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
              <a href="mailto:gurawliprakhar@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>gurawliprakhar@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>India</span>
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
              <a href="https://github.com/praakhartripathi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group">
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