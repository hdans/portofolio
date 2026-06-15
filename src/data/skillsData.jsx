import {
  Briefcase,
  PieChart,
  Layout,
  Server,
  BrainCircuit,
  Database,
  Code,
  Wrench,
  CheckCircle,
  FileText,
  Users,
  Target,
  Monitor,
  Smartphone,
  Cpu,
  Cloud,
  TerminalSquare,
  Globe,
  Settings,
  ShieldCheck,
  TrendingUp,
  BarChart,
  Search,
  Zap,
  Activity,
  Layers,
  Code2,
  Box,
  Fingerprint
} from 'lucide-react';

export const skillsCategories = [
  {
    id: 'pm',
    label: 'PM & Audit',
    icon: <Briefcase size={18} />,
    skills: [
      { name: "End-to-End Project Delivery", icon: <Target size={16} /> },
      { name: "Scope & Risk Management", icon: <ShieldCheck size={16} /> },
      { name: "Roadmap Planning", icon: <TrendingUp size={16} /> },
      { name: "Program Lifecycle Management", icon: <Activity size={16} /> },
      { name: "Cross-functional Team Coordination", icon: <Users size={16} /> },
      { name: "IT Asset Management & Auditing", icon: <Box size={16} /> },
      { name: "Compliance Monitoring", icon: <Search size={16} /> },
      { name: "Audit Trail Design", icon: <FileText size={16} /> },
      { name: "IT Control Framework (COBIT, ISO)", icon: <ShieldCheck size={16} /> }
    ]
  },
  {
    id: 'ba',
    label: 'Business Analysis',
    icon: <PieChart size={18} />,
    skills: [
      { name: "Requirements Elicitation", icon: <Search size={16} /> },
      { name: "Business Process Mapping", icon: <Layers size={16} /> },
      { name: "Gap Analysis", icon: <Activity size={16} /> },
      { name: "Functional Specification Writing", icon: <FileText size={16} /> },
      { name: "KPI/SLA Framework Design", icon: <BarChart size={16} /> },
      { name: "Decision Support Design", icon: <PieChart size={16} /> },
      { name: "Stakeholder Management", icon: <Users size={16} /> }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend & Web3',
    icon: <Layout size={18} />,
    skills: [
      { name: "Next.js", icon: <Globe size={16} /> },
      { name: "React", icon: <Monitor size={16} /> },
      { name: "TypeScript", icon: <Code2 size={16} /> },
      { name: "Tailwind CSS", icon: <Layout size={16} /> },
      { name: "Solidity", icon: <Fingerprint size={16} /> },
      { name: "Base Network", icon: <Cloud size={16} /> },
      { name: "Web3.js", icon: <Globe size={16} /> },
      { name: "Account Abstraction", icon: <Fingerprint size={16} /> },
      { name: "Smart Contract Architecture", icon: <Box size={16} /> }
    ]
  },
  {
    id: 'backend',
    label: 'Backend & Infra',
    icon: <Server size={18} />,
    skills: [
      { name: "Node.js", icon: <TerminalSquare size={16} /> },
      { name: "FastAPI", icon: <Zap size={16} /> },
      { name: "PostgreSQL", icon: <Database size={16} /> },
      { name: "Oracle DB", icon: <Database size={16} /> },
      { name: "Supabase", icon: <Cloud size={16} /> },
      { name: "RESTful API", icon: <Globe size={16} /> },
      { name: "JWT Authentication", icon: <ShieldCheck size={16} /> },
      { name: "Railway", icon: <Cloud size={16} /> },
      { name: "Vercel", icon: <Cloud size={16} /> }
    ]
  },
  {
    id: 'mlAi',
    label: 'AI & ML',
    icon: <BrainCircuit size={18} />,
    skills: [
      { name: "LLM Integration (Gemini)", icon: <BrainCircuit size={16} /> },
      { name: "RAG Architecture", icon: <Layers size={16} /> },
      { name: "LightGBM", icon: <Cpu size={16} /> },
      { name: "XGBoost", icon: <Cpu size={16} /> },
      { name: "Random Forest", icon: <Box size={16} /> },
      { name: "SVM", icon: <Target size={16} /> },
      { name: "ANN", icon: <BrainCircuit size={16} /> },
      { name: "TensorFlow", icon: <Cpu size={16} /> },
      { name: "Keras", icon: <Cpu size={16} /> },
      { name: "Scikit-learn", icon: <Settings size={16} /> },
      { name: "MediaPipe", icon: <Monitor size={16} /> },
      { name: "OpenCV", icon: <Monitor size={16} /> },
      { name: "Time Series (Darts)", icon: <TrendingUp size={16} /> },
      { name: "FP-Growth", icon: <Activity size={16} /> }
    ]
  },
  {
    id: 'data',
    label: 'Data & BI',
    icon: <Database size={18} />,
    skills: [
      { name: "Pandas", icon: <FileText size={16} /> },
      { name: "NumPy", icon: <Box size={16} /> },
      { name: "Power BI (DAX)", icon: <BarChart size={16} /> },
      { name: "SQL", icon: <Database size={16} /> },
      { name: "Data Wrangling", icon: <Settings size={16} /> },
      { name: "EDA", icon: <Search size={16} /> },
      { name: "Anomaly Detection", icon: <Activity size={16} /> },
      { name: "Dashboarding", icon: <Layout size={16} /> },
      { name: "Forecasting", icon: <TrendingUp size={16} /> }
    ]
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: <Code size={18} />,
    skills: [
      { name: "Python", icon: <Code2 size={16} /> },
      { name: "JavaScript", icon: <Code2 size={16} /> },
      { name: "TypeScript", icon: <Code2 size={16} /> },
      { name: "SQL", icon: <Database size={16} /> },
      { name: "R", icon: <BarChart size={16} /> },
      { name: "Java", icon: <Code2 size={16} /> },
      { name: "C++", icon: <Code2 size={16} /> }
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Soft Skills',
    icon: <Wrench size={18} />,
    skills: [
      { name: "Git", icon: <TerminalSquare size={16} /> },
      { name: "Jupyter Notebook", icon: <FileText size={16} /> },
      { name: "Postman", icon: <Globe size={16} /> },
      { name: "Excel", icon: <BarChart size={16} /> },
      { name: "Strategic Thinking", icon: <BrainCircuit size={16} /> },
      { name: "Problem Decomposition", icon: <Box size={16} /> },
      { name: "Conflict Resolution", icon: <Users size={16} /> },
      { name: "Leadership", icon: <Target size={16} /> },
      { name: "Data-Driven Decisions", icon: <BarChart size={16} /> }
    ]
  }
];