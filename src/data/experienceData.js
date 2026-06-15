import logoUnpad from '../assets/img/logo unpad.jpg';
import logoTI from '../assets/img/logo TI.jpg';
import logoSundahub from '../assets/img/Logo Sundahub.jpg';
import logoFIF from '../assets/img/FIF.png';

export const experienceData = [
  {
    id: 1,
    institution: "PT Federal International Finance (FIFGROUP – Astra Group), South Jakarta",
    role: "IT Planning & Governance Analyst Intern",
    duration: "Feb 2026 – Present",
    logo: logoFIF,
    description: `• Mapped and analyzed IT asset management processes across 400+ branches, identified 10+ unrecorded assets and material cost discrepancies (hundreds of millions IDR); produced structured findings reports and coordinated remediation actions with 7+ IT teams.
• Designed Power BI governance dashboards integrating 1M+ service ticket records for real-time SLA/KPI monitoring, adopted by 200+ IT staff as the primary decision-support tool for IT leadership.
• Delivered monthly asset analytics reports aligning IT operational findings with finance and governance requirements, enabling cost reconciliation and compliance monitoring across business units.`
  },
  {
    id: 2,
    institution: "Center for Innovation in Teaching and Learning, Padjadjaran University, Sumedang",
    role: "Software Engineer Intern",
    duration: "Aug 2025 – Dec 2025",
    logo: logoUnpad,
    description: `• Built a full-stack multimodal engagement analytics system (Next.js frontend + Flask backend) integrating three real-time data streams — EEG, eye tracking, and face recognition — running simultaneously on a single consumer laptop.
• Designed the end-to-end EEG pipeline from raw signal acquisition (Muse Headband via LSL) through preprocessing (Notch/Bandpass filter, ICA artifact removal) to ML classification across 7 models, achieving the strongest result in the study.
• Replaced $3,000–5,000 lab-grade hardware with a consumer webcam + $250–400 headband without sacrificing real-time processing capability — validated on 8 subjects in-lab.`
  },
  {
    id: 3,
    institution: "Informatics Engineering, Padjadjaran University, Sumedang",
    role: "Teaching Assistant",
    duration: "Jan 2025 – Dec 2025",
    logo: logoTI,
    description: `• Coordinated structured learning delivery for 90+ students per semester across Database Systems and Data Structures; assessed outputs against defined quality and correctness standards.
• Evaluated database designs and enforced strict data integrity standards and best practices in relational database systems.
• Guided hands-on implementation sessions to strengthen students' problem-solving, coding discipline, and system-thinking capability.`
  },
  {
    id: 4,
    institution: "Sundahub, Sumedang, West Java",
    role: "Product & Technology Lead",
    duration: "Feb 2024 – Dec 2024",
    logo: logoSundahub,
    description: `• Owned end-to-end product delivery for a government-backed startup (Unpadpreneur & P2MW 2024): led requirement gathering, defined technical scope, and managed a 5-person cross-functional team from concept to launch.
• Translated stakeholder business goals into a scalable web architecture and a prioritized delivery roadmap with clear scope boundaries and risk controls.
• Built and shipped the main web product using Tailwind CSS, from initial layout to live deployment. Shipped product on schedule; generated 2–5 qualified inbound leads per month with structured performance monitoring in place post-launch.`
  },
];
