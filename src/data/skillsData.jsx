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
    label: 'Product & Project',
    icon: <Briefcase size={18} />,
    skills: [
      { name: "End-to-End Product Delivery", icon: <Target size={16} /> },
      { name: "Requirement Discovery", icon: <Search size={16} /> },
      { name: "PRD & BRD Writing", icon: <FileText size={16} /> },
      { name: "User Stories & Acceptance Criteria", icon: <CheckCircle size={16} /> },
      { name: "Backlog & Sprint Planning (Jira)", icon: <Layers size={16} /> },
      { name: "Feature Prioritization", icon: <TrendingUp size={16} /> },
      { name: "Scope & Risk Management", icon: <ShieldCheck size={16} /> },
      { name: "UAT & Production Launch", icon: <Activity size={16} /> },
      { name: "Client & Stakeholder Management", icon: <Users size={16} /> },
      { name: "Cross-functional Team Coordination", icon: <Users size={16} /> }
    ]
  },
  {
    id: 'ba',
    label: 'Consulting & Analysis',
    icon: <PieChart size={18} />,
    skills: [
      { name: "Business Process Analysis", icon: <Layers size={16} /> },
      { name: "Process Improvement & Automation", icon: <Zap size={16} /> },
      { name: "Solution Design", icon: <Target size={16} /> },
      { name: "Gap Analysis", icon: <Activity size={16} /> },
      { name: "Functional Specification Writing", icon: <FileText size={16} /> },
      { name: "Technical Feasibility & Trade-offs", icon: <Settings size={16} /> },
      { name: "KPI/SLA Framework Design", icon: <BarChart size={16} /> },
      { name: "Decision Support Design", icon: <PieChart size={16} /> }
    ]
  },
  {
    id: 'grc',
    label: 'IT GRC',
    icon: <ShieldCheck size={18} />,
    skills: [
      { name: "Regulatory Gap Analysis", icon: <Search size={16} /> },
      { name: "IT Policy Lifecycle Management", icon: <FileText size={16} /> },
      { name: "User Access Review", icon: <Fingerprint size={16} /> },
      { name: "IT Audit Support & Evidence Management", icon: <CheckCircle size={16} /> },
      { name: "IT Control Frameworks (COBIT, ISO)", icon: <ShieldCheck size={16} /> },
      { name: "Governance Review of BRDs & PRDs", icon: <FileText size={16} /> },
      { name: "IT Asset Management & Auditing", icon: <Box size={16} /> },
      { name: "Compliance Monitoring", icon: <Activity size={16} /> },
      { name: "Remediation Tracking", icon: <Target size={16} /> }
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
      { name: "Express", icon: <Server size={16} /> },
      { name: "FastAPI", icon: <Zap size={16} /> },
      { name: "PostgreSQL", icon: <Database size={16} /> },
      { name: "MongoDB", icon: <Database size={16} /> },
      { name: "Oracle DB", icon: <Database size={16} /> },
      { name: "Supabase", icon: <Cloud size={16} /> },
      { name: "RESTful API", icon: <Globe size={16} /> },
      { name: "JWT & Role-Based Access", icon: <ShieldCheck size={16} /> },
      { name: "Railway", icon: <Cloud size={16} /> },
      { name: "Vercel", icon: <Cloud size={16} /> },
      { name: "Zero Trust Architecture", icon: <ShieldCheck size={16} /> },
      { name: "Payment Gateway (Midtrans)", icon: <Globe size={16} /> }
    ]
  },
  {
    id: 'mlAi',
    label: 'AI & ML',
    icon: <BrainCircuit size={18} />,
    skills: [
      { name: "LLM Integration (Gemini, OpenAI)", icon: <BrainCircuit size={16} /> },
      { name: "AI Document Processing", icon: <FileText size={16} /> },
      { name: "AI Image Editing", icon: <Monitor size={16} /> },
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
      { name: "FP-Growth", icon: <Activity size={16} /> },
      { name: "Signal Processing", icon: <Activity size={16} /> }
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
      { name: "Jira", icon: <Layers size={16} /> },
      { name: "Jupyter Notebook", icon: <FileText size={16} /> },
      { name: "Postman", icon: <Globe size={16} /> },
      { name: "Excel", icon: <BarChart size={16} /> },
      { name: "Strategic Thinking", icon: <BrainCircuit size={16} /> },
      { name: "Problem Decomposition", icon: <Box size={16} /> },
      { name: "Conflict Resolution", icon: <Users size={16} /> },
      { name: "Leadership", icon: <Target size={16} /> },
      { name: "Data-Driven Decisions", icon: <BarChart size={16} /> },
      { name: "WhatsApp API", icon: <Globe size={16} /> }
    ]
  }
];