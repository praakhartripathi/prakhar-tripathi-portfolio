import { Github } from 'lucide-react';

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
          <div className="flex gap-4">
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
        </div>
      </Section>
      
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <a href="https://github.com/praakhartripathi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Secure credential management system with AES encryption and BCrypt hashing. Integrated OpenAI API for AI-powered password suggestions.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'OpenAI', 'Security', 'Docker'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {tech}
                </span>
              ))}
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
        </div>
      </Section>
      
      <Section id="skills" title="Skills & Tools">
        <p>A list of technologies and tools I work with.</p>
      </Section>
      
      <Section id="experience" title="Experience">
        <p>My professional journey and work history.</p>
      </Section>
      
      <Section id="education" title="Education">
        <p>My academic qualifications and certifications.</p>
      </Section>
      
      <Section id="contact" title="Contact">
        <p>Get in touch with me.</p>
      </Section>
      
      <Section id="stats" title="Stats">
        <p>Some interesting statistics about my coding journey.</p>
      </Section>
    </div>
  );
};

export default Sections;