import { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Search, Music, Code, Mail, Book, Terminal, Sun, Moon } from 'lucide-react';

// A small component for the live clock to keep the main component clean
const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <span className="text-sm font-mono bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white px-2 py-1 rounded transition-colors">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMusic = () => {
    const iframe = document.getElementById('music-iframe');
    if (isPlaying) {
      iframe?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      iframe?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="fixed top-0 inset-x-0 bg-white/75 dark:bg-black/65 backdrop-blur-md border-b border-gray-200 dark:border-white/10 z-50 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left - Logo/Name */}
        <a href="/" className="text-gray-900 dark:text-white font-bold text-lg tracking-wider transition-colors">
          Prakhar Tripathi
        </a>

        {/* Center - Navigation Links (Hidden on medium screens and below) */}
        <ul className="hidden lg:flex items-center gap-x-6 text-gray-600 dark:text-white/80 text-sm font-medium">
          <li><a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a></li>
          <li>
            <a href="mailto:gurawliprakhar@gmail.com" className="flex items-center gap-x-2 hover:text-black dark:hover:text-white transition-colors">
              <Mail size={16} /> Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/-prakhartripathi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:text-black dark:hover:text-white transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/praakhartripathi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:text-black dark:hover:text-white transition-colors">
              <Github size={16} /> GitHub
            </a>
          </li>
          <li>
            <a href="https://medium.com/@gurawliprakhar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:text-black dark:hover:text-white transition-colors">
              <Book size={16} /> Medium
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/praakhartripathi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:text-black dark:hover:text-white transition-colors">
              <Code size={16} /> LeetCode
            </a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/profile/gurawliprakhar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:text-black dark:hover:text-white transition-colors">
              <Terminal size={16} /> HackerRank
            </a>
          </li>
          <li>
            <a href="/Prakhar_Tripathi_Software_Engineer.pdf" download="Prakhar_Tripathi_Resume.pdf" className="flex items-center gap-x-2 hover:text-black dark:hover:text-white transition-colors">
              Resume <FileText size={16} />
            </a>
          </li>
        </ul>

        {/* Right - Search, Time, Music */}
        <div className="flex items-center gap-x-2 sm:gap-x-4">
          {/* Search Section */}
          <div className="relative hidden sm:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/50 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search..."
              className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-md pl-10 pr-3 py-1.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-black/10 dark:focus:ring-white/50 focus:outline-none transition-all w-32 md:w-40"
            />
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Live Time */}
          <LiveClock />

          {/* Music Button */}
          <button 
            onClick={toggleMusic}
            aria-label="Music" 
            className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white ${isPlaying ? 'text-green-600 dark:text-green-400' : ''}`}
          >
            <Music size={20} className={isPlaying ? "animate-pulse" : ""} />
          </button>
        </div>

        {/* Hidden YouTube Player */}
        <iframe
          id="music-iframe"
          className="hidden"
          src="https://www.youtube.com/embed/pDih88sfn9M?enablejsapi=1&loop=1&playlist=pDih88sfn9M&playsinline=1"
          allow="autoplay"
          title="Background Music"
        />
      </div>
    </nav>
  );
};

export default Navbar;