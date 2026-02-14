import { Home, User, Code, Cpu, Briefcase, GraduationCap, Mail, BarChart2, FileText } from 'lucide-react';
import resumePDF from '/Prakhar_Tripathi_Software_Engineer.pdf';

const Sidebar = () => {
  const menuItems = [
    { name: 'Introduction', icon: <Home size={20} />, href: '#introduction' },
    { name: 'About Me', icon: <User size={20} />, href: '#about' },
    { name: 'Projects', icon: <Code size={20} />, href: '#projects' },
    { name: 'Skills & Tools', icon: <Cpu size={20} />, href: '#skills' },
    { name: 'Experience', icon: <Briefcase size={20} />, href: '#experience' },
    { name: 'Education', icon: <GraduationCap size={20} />, href: '#education' },
    { name: 'Resume', icon: <FileText size={20} />, href: resumePDF, download: 'Prakhar_Tripathi_Resume.pdf' },
    { name: 'Contact Me', icon: <Mail size={20} />, href: '#contact' },
    { name: 'Stats', icon: <BarChart2 size={20} />, href: '#stats' },
  ];

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-50 dark:bg-gray-900 backdrop-blur-sm border-r border-gray-200 dark:border-white/10 hidden md:flex flex-col overflow-y-auto z-40 transition-colors duration-300">
      <div className="p-4 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            download={item.download}
            className="flex items-center gap-x-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;