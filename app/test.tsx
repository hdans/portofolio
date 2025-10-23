"use client";
import React, { useState, useEffect, useRef, RefObject } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Users, Sparkles, Award } from 'lucide-react';

// --- TIPE DATA (Tambahan) ---
// Tipe untuk data experience
interface ExperienceItem {
  logo: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

// Tipe untuk data project
interface ProjectItem {
  title: string;
  role: string;
  description: string;
  images: string[];
  link: string;
  color: string;
  stack: string[];
}

// Tipe untuk props komponen
interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

interface HeroProps {
  openModal: () => void;
}

interface FloatingParticlesProps {
  mousePosition: { x: number; y: number };
}

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  currentImageIndex: number;
}
// --- AKHIR TIPE DATA ---


// Custom Hook (Dibuat Generic dan Diberi Return Type 'as const')
const useScrollAnimation = <T extends HTMLElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null); // Menggunakan T generic

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
      }
    );

    const currentRef = ref.current; // Simpan ref.current
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Hapus ref.current dari dependency array

  const animationClasses = `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`;

  // Menggunakan 'as const' agar TypeScript mengerti ini adalah TUPLE [RefObject<T>, string]
  // Ini memperbaiki error 'string | RefObject<null>'
  return [ref, animationClasses] as const;
};


// Custom Cursor Component (Event 'e' diberi tipe)
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const SMOOTHNESS = 0.15;
  const cursorPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
     const updateMousePosition = (e: MouseEvent) => { // Tipe 'e'
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => { // Tipe 'e'
      if (e.target && (e.target as Element).closest('a, button, .hoverable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    let animationFrameId : number;
    const animateCursor = () => {
      const dx = mousePosition.x - cursorPositionRef.current.x;
      const dy = mousePosition.y - cursorPositionRef.current.y;
      
      cursorPositionRef.current.x += dx * SMOOTHNESS;
      cursorPositionRef.current.y += dy * SMOOTHNESS;
      
      setCursorPosition({ ...cursorPositionRef.current });
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition.x, mousePosition.y]); 

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          width: isClicking ? '20px' : isHovering ? '50px' : '30px',
          height: isClicking ? '20px' : isHovering ? '50px' : '30px',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </>
  );
};

// FloatingParticles (Props diberi tipe)
const FloatingParticles: React.FC<FloatingParticlesProps> = ({ mousePosition }) => {
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 5, 
    delay: Math.random() * 5,
  }));

  const PARALLAX_STRENGTH_PARTICLES = 1; 

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        transform: `translate(${mousePosition.x * PARALLAX_STRENGTH_PARTICLES}px, ${mousePosition.y * PARALLAX_STRENGTH_PARTICLES}px)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-300/40" 
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// CVModal (Props diberi tipe)
const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, cvUrl }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 
                  transition-opacity duration-300 ease-out
                  ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose} 
    >
      <div
        className={`bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col p-4
                    transition-all duration-300 ease-out
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="hoverable self-end text-gray-600 hover:text-gray-900 font-bold text-2xl p-2 leading-none"
        >
          &times;
        </button>
        
        <div className="flex-1 w-full h-full mt-2">
          <iframe
            src={cvUrl}
            className="w-full h-full border-none"
            title="CV Viewer"
          />
        </div>
      </div>
    </div>
  );
};


// Hero Section (Props dan event 'e' diberi tipe)
const Hero: React.FC<HeroProps> = ({ openModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => { // Tipe 'e'
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) - 0.5, 
      y: ((e.clientY - rect.top) / rect.height) - 0.5,
    });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <FloatingParticles mousePosition={mousePosition} />
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-gradient-text">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Danish</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          "Combining creativity, logic, and data-driven thinking, I build intelligent solutions that not only analyze the world but also help shape its future through the power of AI."
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={openModal}
            className="hoverable px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group text-white"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">View CV</span>
          </button>
          <a 
            href="https://www.linkedin.com/in/danishrahadian" 
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable px-8 py-3 bg-white text-blue-950 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">LinkedIn</span>
          </a>
          <button 
            onClick={scrollToProjects}
            className="hoverable px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-950 rounded-lg font-medium transition-all duration-300 hover:scale-105 group"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">View Projects</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-50" />
      </div>
    </section>
  );
};

// About Section (Hook diberi tipe Element)
const About = () => {
  const skills = ['Python','Tensorflow','Machine Learning', 'Git', 'Tailwind CSS', 'Next.js', 'MySQL', 'Unity'];
  const services = ['Data Science', 'AI Engineer', 'Data Analyst', 'Web Deveopment'];
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // Hook diberi tipe elemen spesifik
  const [titleRef, titleAnim] = useScrollAnimation<HTMLHeadingElement>();
  const [leftColRef, leftColAnim] = useScrollAnimation<HTMLDivElement>();
  const [rightColRef, rightColAnim] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-100 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 ref={titleRef} className={`text-4xl md:text-5xl font-bold text-slate-700 mb-16 text-center ${titleAnim}`}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Error 'string | RefObject' diperbaiki oleh 'as const' di hook */}
          <div ref={leftColRef} className={leftColAnim}>
            
            <h3 className="text-3xl font-bold text-slate-700 mb-6 text-center md:text-left"> I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-500">Danish Rahadian</span>
            </h3>

            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
                  <img 
                    src="/img/danish.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed text-center md:text-left">
              I specialize in Data Science, AI Engineering, and Data Analysis, utilizing advanced analytical and machine learning techniques to solve complex problems and enable smarter, data-driven decision-making.
            </p>
          </div>

          <div ref={rightColRef} className={rightColAnim}>
            
            <div className="mb-12">
              <h4 className="font-bold text-slate-900 mb-4 text-xl">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`hoverable px-3 py-1 rounded-full text-md font-medium transition-all duration-300 cursor-default ${
                      hoveredSkill === index
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white scale-110 shadow-lg'
                        : 'bg-blue-100 text-blue-700 border-blue-300 border'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-xl">What I Do</h4>
              <div className="grid grid-cols-1 gap-3 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="text-slate-600 text-md font-semibold flex items-center gap-2 group hoverable">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 justify-start mb-6">
              <a href="https://github.com/hdans" target="_blank" rel="noopener noreferrer" className="hoverable p-3 bg-slate-900 hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-900 text-white rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/danishrahadian" target="_blank" rel="noopener noreferrer" className="hoverable p-3 bg-blue-600 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:danishrme@gmail.com" className="hoverable p-3 bg-gradient-to-br from-gray-200 to-gray-300 hover:from-blue-100 hover:to-cyan-100 text-slate-900 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ExperienceCard (Props diberi tipe)
const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const [ref, anim] = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`hoverable bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 group hover:scale-[1.02] hover:-translate-y-1 ${anim} hover:bg-white/90`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        
        <img
          src={exp.logo}
          alt={`${exp.company} Logo`}
          className="
            w-14 h-14
            rounded-lg
            object-contain
            group-hover:scale-125 
            group-hover:rotate-12 
            transition-all 
            duration-300
          "
        />

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300">{exp.company}</h3>
          <p className="text-blue-600 font-medium mb-1">{exp.position}</p>
          <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{exp.description}</p>
        </div>
      </div>
    </div>
  );
};

// Experience Section (State 'activeTab' diberi tipe)
const Experience = () => {
  // Data experiences diberi Tipe
  const experiences: Record<string, ExperienceItem[]> = {
    career: [
      {
        logo: '/img/logo/unpad.png',
        company: 'Departemen PIPP Rektorat Unpad',
        position: 'AI Engineer Intern',
        period: 'August 2025 - Present',
        description: `Working as an AI Engineer at the Department of Innovation in Teaching and Learning (PIPP) Universitas Padjadjaran.
        - Part of a 6-member team developing Project Neuro AI, an initiative to detect learners' emotions in educational videos.
        - Built emotion recognition features using EEG signals with deep learning and signal processing methods. 
        - Integrated multi-modal data sources including facial expression, eye tracking, and EEG to enhance learning personalization.
        - Contributed to the development of adaptive technologies supporting innovative and student-centered learning.`,
      },
      // ... (data Anda yang lain)
    ],
    education: [
      // ... (data Anda yang lain)
    ],
    organization: [
      // ... (data Anda yang lain)
    ],
    awards: [
      // ... (data Anda yang lain)
    ]
  };
  
  // Ambil Tipe Kunci (keys) dari 'experiences'
  type ExperienceCategory = keyof typeof experiences;

  // Beri Tipe pada State
  const [activeTab, setActiveTab] = useState<ExperienceCategory>('career');

  const [titleRef, titleAnim] = useScrollAnimation<HTMLHeadingElement>();
  const [tabsRef, tabsAnim] = useScrollAnimation<HTMLDivElement>();

  const tabs = [
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'organization', label: 'Organization', icon: Users },
    { id: 'awards', label: 'Awards', icon: Award }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-300 to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 ref={titleRef} className={`text-4xl md:text-5xl font-bold text-slate-50 mb-12 text-center ${titleAnim}`}>Experience</h2>
        
        <div ref={tabsRef} className={`flex justify-center mb-12 ${tabsAnim}`}>
          <div className="flex flex-wrap justify-center gap-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-1 border border-gray-200/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ExperienceCategory)} // Casting tipe di sini
                  className={`hoverable px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105' 
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50' 
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Error 'indexing' teratasi karena 'activeTab' sudah punya Tipe yang benar */}
          {experiences[activeTab].map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ProjectCard (Props diberi tipe)
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, currentImageIndex }) => {
  const [ref, anim] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`hoverable bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group hover:scale-105 hover:-rotate-1 ${anim}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color}`}>
        {project.images.map((img, imgIndex) => (
          <img
            key={imgIndex}
            src={img}
            alt={`${project.title} ${imgIndex + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-110 ${
              currentImageIndex === imgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        
        <div> 
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300">{project.title}</h3>
          <p className="text-blue-600 text-sm font-medium mb-3">{project.role}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
          
          {project.stack && ( 
            <div className="flex flex-wrap gap-2 my-4">
              {project.stack.map((tool, i) => (
                <span 
                  key={i}
                  className="
                    px-2.5 py-0.5
                    rounded-full 
                    text-xs font-medium 
                    transition-all duration-300
                    
                    bg-blue-100 text-blue-800
                    border border-blue-300/50

                    group-hover:bg-gradient-to-r from-blue-600 to-blue-500
                    group-hover:text-white
                    group-hover:border-transparent
                    group-hover:scale-105
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-4"> 
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group/link"
          >
            View Project
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};


// Projects Section (Data diberi Tipe)
const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [titleRef, titleAnim] = useScrollAnimation<HTMLHeadingElement>();
  const [buttonRef, buttonAnim] = useScrollAnimation<HTMLDivElement>();

  const projects: ProjectItem[] = [ // Data diberi Tipe
    {
      title: 'Sobat Warung',
      role: 'AI Engineer',
      description: 'Sobat Warung is a digital platform that helps small shop owners manage inventory, connect with suppliers, and run their businesses more efficiently.',
      images: [
        '/img/sobat warung.jpg',
        '/img/sobat warung 2.png',
      ],
      link: 'http://wa.me/+14155238886?text=join%20do-tea',
      color: 'from-slate-700 to-cyan-600' ,
      stack: ['Forecast', 'FP-Growth', 'FastAPI']
    },
    // ... (sisa data project Anda)
  ];

  useEffect(() => {
    const intervals = projects.map((_, index) => {
      return setInterval(() => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [index]: ((prev[index] || 0) + 1) % 2
        }));
      }, 3000);
    });

    return () => intervals.forEach(clearInterval);
  }, [projects.length]);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 ref={titleRef} className={`text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center ${titleAnim}`}>Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              currentImageIndex={currentImageIndex[index] || 0}
            />
          ))}
        </div>
        <div ref={buttonRef} className={`mt-16 text-center ${buttonAnim}`}>
          <a
            href="https://github.com/hdans"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hoverable 
              inline-flex items-center gap-3 
              px-8 py-3 
              border-2 border-blue-600 
              text-blue-600 
              rounded-lg 
              font-medium 
              transition-all duration-300 
              hover:bg-blue-600 
              hover:text-white 
              hover:scale-105 
              hover:shadow-lg hover:shadow-blue-600/30
              group
            "
          >
            <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="group-hover:tracking-wider transition-all duration-300">
              Show More on GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const [footerRef, footerAnim] = useScrollAnimation<HTMLElement>(); 

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-blue-500  to-slate-900 text-white py-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className={`max-w-6xl mx-auto px-6 relative z-10 ${footerAnim}`}>
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a href="https://www.linkedin.com/in/danishrahadian" target="_blank" rel="noopener noreferrer" className="hoverable hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-rotate-12">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/hdans" target="_blank" rel="noopener noreferrer" className="hoverable hover:text-blue-300 transition-all duration-300 hover:scale-125 hover:rotate-12">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:danishrme@gmail.com" className="hoverable hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:-rotate-12">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2025 Danish Rahadian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// App (Sisa file Anda)
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRendered, setIsModalRendered] = useState(false);

  const openModal = () => {
    setIsModalRendered(true); 
    setTimeout(() => {
      setIsModalOpen(true); 
    }, 50);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setTimeout(() => {
      setIsModalRendered(false);
    }, 300);
  };

  
  return (
    <div className="font-sans">
      <style jsx global>{`
        /* ... (CSS Anda tetap sama) ... */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
          cursor: none;
        }
        
        a, button, .hoverable {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease;
          mix-blend-mode: difference;
        }
        
        .custom-cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-tilt { animation: tilt 3s ease-in-out infinite; }
        .animate-gradient-text { background-size: 200% 200%; animation: gradient-text 5s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        
        html { scroll-behavior: smooth; }
        
        .scroll-container {
          height: 100vh; 
          overflow-y: scroll;
          scroll-snap-type: y mandatory; 
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        section, footer {
          scroll-snap-align: start;
        }
        
        @media (max-width: 768px) {
          .custom-cursor,
          .custom-cursor-dot {
            display: none;
          }
          * {
            cursor: auto !important;
          }
        }
      `}</style>
      
      <CustomCursor />
      {isModalRendered && (
        <CVModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          cvUrl="/Curriculum Vitae Danish Rahadian.pdf"
        />
      )}
      
      <main className="scroll-container">
        <Hero openModal={openModal} />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}