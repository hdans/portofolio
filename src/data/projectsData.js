import eegImage from '../assets/img/EEG.png';
import robotImage from '../assets/img/robot.png';
import produkImage from '../assets/img/Produk.png';
import dataniagaImage from '../assets/img/dataNiaga.png';
import deqryptImage from '../assets/img/deqrypt.png';
import langkahLegalImage from '../assets/img/LangkahLegal.png';
import sobatwarungImage from '../assets/img/sobatwarung.png';
import fmcgImage from '../assets/img/fmcg.png';

export const projectsData = [
  {
    id: 1,
    featured: true,
    title: "LangkahLegal: Integrated Legal Assistance Platform",
    category: "Product",
    description: "A legal service management platform that digitizes access to justice through AI triage and strict credential verification",
    longDescription: `LangkahLegal is designed to remove barriers to justice by connecting clients and legal consultants in a secure, efficient, and transparent way. From a governance and business analysis perspective, the project focuses on system flow design that aligns with data privacy standards and operational risk mitigation.

Key business and architecture features include:
- Credential Verification & Tiered Authorization (Access Control): Implements a legal document validation flow, such as advocate credentials or pro bono client letters, handled by the Administrator. The authorization model uses a Zero-Trust approach with JSON Web Tokens (JWT) to enforce strict role separation between Client, Consultant, and Admin.
- AI Risk Management (AI Grounding & Compliance): The legal education module is powered by a Retrieval-Augmented Generation (RAG) architecture. To reduce misinformation risk and AI hallucinations, the model is constrained to retrieve context only from a Vector Database populated with official Indonesian legal documents such as the Penal Code, Civil Code, and domestic violence law.
- Privacy Protection & Data Security (Data Privacy): The public case marketplace is designed to anonymize client identities using hashing algorithms to protect Personally Identifiable Information (PII). In addition, supporting case evidence is stored in an Encrypted Vault to prevent data leakage.
- Transaction Governance (Transaction Auditability): Payment flows are automated through Midtrans integration, producing real-time invoice and webhook status records so every transaction leaves an auditable financial trail.

Tech stack includes RESTful API, JWT authentication, Supabase for transactional and vector data, Gemini API, Midtrans, Zoom API, Python backend logic, Railway cloud hosting, and Vercel frontend deployment.`,
    techStack: ["RESTful API", "JWT Authentication", "Supabase", "Gemini API", "Midtrans", "Python", "Vercel"],
    image: langkahLegalImage,
    year: "2026"
  },
  {
    id: 2,
    featured: true,
    title: "DeQRypt: AI-Powered DeFi Payment & Portfolio System",
    category: "Product",
    description: "AI-powered DeFi payment prototype with QR-based transactions and LLM-driven portfolio management on Base network (hackathon project).",
    longDescription: `This system was built to bridge the gap between the intuitive interface of conventional financial applications and decentralized financial infrastructure, while maintaining strict transaction governance standards. The project focused on reducing user friction and mitigating systemic risk through a structured architectural approach.

  Business Problem Solving & Risk Mitigation:
  - Eliminating Authentication Input Risk (Error Reduction): Replaced manual identity-address input, which is highly error-prone, with standardized QR-code scanning. This reduced fund-loss risk caused by human error and simplified the payment flow for non-technical users.
  - Data-Driven Asset Optimization (Decision Support): Provided an automated analytics assistant that acts as a financial copilot. The system analyzes market returns in real time to guide asset allocation decisions and prevent idle funds from depreciating due to inflation.

  Governance Actions & System Problem Resolution:
  - Segregation of Duties in Custodial Flow: Identified and removed fund-control ambiguity by restructuring the payment flow. The router contract is designated as the sole transaction executor, while the treasury wallet is isolated as a passive recipient to prevent unauthorized access or third-party fund manipulation.
  - Data Integrity & Transaction Auditability (Handling Silent Failures): Detected a critical anomaly where the backend API recorded a "Success" status before network-level finality. To prevent ledger inconsistency, the system was redesigned with strict backend transaction-receipt validation. Database writes now occur only after 100% confirmed block validation, ensuring audit-grade data accuracy.
  - Functional Specification Standardization (Requirement Translation): Resolved integration friction by creating detailed specification guidelines for the frontend team. This documentation bridged backend logic with interface implementation, ensuring approval and validation flows aligned with the intended system architecture.
  - Scalable Multi-Asset Architecture: Refactored contract logic from a single-asset storage model into a dynamic Multi-Asset Pool architecture. This backend upgrade enabled management of multiple asset types through one contract interface, improving scalability without compromising security.`,
    techStack: ["Solidity", "Base Network", "Account Abstraction", "FastAPI", "Next.js", "LLM", "Web3.js"],
    image: deqryptImage,
    year: "2026"
  },
  {
    id: 3,
    featured: true,
    title: "Sobat Warung: AI-Powered Digital Record System for Urban Micro-Retail Economy",
    category: "Product & Data Systems",
    description: "WhatsApp Bot solution for micro-retail digitization through stock intelligence, collective buying, inventory management, and trust scoring.",
    longDescription: `Warung dominates Indonesia's retail landscape with 3.94 million establishments (98.78% of total retail) and contributes 61% to national GDP. Yet the sector faces multilayered crises: fragmented supply chains (up to 5 intermediary layers cutting margins by 20-25%), gut-driven inventory management, and financial exclusion where only 20% of SMEs have access to formal bank credit.

Sobat Warung was built to solve this data and operational crisis with a zero-learning-curve approach. Instead of forcing users to download new apps, the system fully integrates with WhatsApp—leveraging over 112 million users across Indonesia. Through conversational interface (chatbot), users can systematically submit daily sales data.

Four core functional pillars:
- Stock Intelligence: Implements Lag-Based Ensemble Model to forecast next-day demand, preventing dead stock and optimizing inventory turnover.
- Inventory Management & Bundling Strategy: Maps transaction patterns using algorithms to recommend bundling strategies for slow-moving products.
- Collective Buying: Aggregates demand from multiple warung in one area to make bulk purchases from trusted distributors, reducing cost of goods sold (COGS) burden.
- Credit/Trust Score Generator: Converts daily sales recording into objective financial record data, processed into credit eligibility metrics (loans up to Rp 10,000,000) for formal financial institutions.

The system not only improves warung owners' profit margins but also generates accurate micro-economic data to support Smart City initiatives and government fiscal governance.`,
    techStack: ["WhatsApp API", "Lag-Based Ensemble Model", "LightGBM", "Darts", "FP-Growth", "Python", "FastAPI"],
    image: sobatwarungImage,
    year: "2025"
  },
  {
    id: 4,
    featured: true,
    title: "DataNiaga - Retail Decision Support System",
    category: "AI/Machine Learning",
    description: "Retail Decision Support System utilizing LightGBM to handle multi-regional demand volatility and FP-Growth for automated product bundling.",
    longDescription: `Inventory distortion—both stockout revenue loss and overstock working capital burden—represents a primary operational risk in retail. DataNiaga was engineered as a data-driven decision-making system to replace intuition-based inventory estimates with historical inference, functioning not merely as a reporting instrument but as an automated Business Action Recommendation Engine that proactively identifies risks and delivers strategic solutions.

Business Problem Solving & Risk Mitigation:
- Segregated Regional Risk Modeling: Recognizing that consumption patterns and purchasing volatility vary significantly across Indonesian geography (e.g., payday effects differ materially between Sumatra and Kalimantan), the system employs segregated forecasting models per region. This analytical governance structure prevents estimation bias that would occur with a single global model applied uniformly across all branches, ensuring regional demand variance is captured with 5-30% MAPE accuracy (LightGBM).
- Early Inventory Risk Detection (Stockout Alert System): Implements three-layer risk monitoring (Declining Trend, Below Average, Negative Growth indicators). The system automatically triggers alerts when product forecast trends decline significantly, providing management with critical lead time to intervene with procurement decisions before inventory physically exhausts at point-of-sale.
- Dead Stock Clearance Strategy & Automated Bundling: For declining-trend products, the system extracts association rules (purchase correlation patterns via FP-Growth algorithm). It then recommends targeted bundling promotions—coupling slow-moving inventory with high-velocity "anchor" products (stable sales, high Lift ratio)—to accelerate inventory turnover without excessive promotional cost burn.
- Cross-Selling Optimization & Merchandising Governance: Converts basket analysis into physical store layout recommendations. Products with statistically high co-purchase probability are flagged for adjacent placement to trigger impulse-buying behavior and increase Average Transaction Value per store visit.

The system integrates 30+ category-specific analytics dashboards feeding real-time data through FastAPI backend and Next.js frontend, transforming raw transaction data into auditable business actions that protect revenue and optimize working capital deployment.`,
    techStack: ["Python", "LightGBM", "FP-Growth", "FastAPI", "Next.js", "Pandas", "NumPy"],
    image: dataniagaImage,
    year: "2025"
  },
  {
    id: 5,
    featured: false,
    title: "EEG Emotion Classification",
    category: "AI/Machine Learning",
    description: "A project on EEG-based emotion classification using various ML and DL techniques.",
    longDescription: `This project focuses on EEG-based emotion classification using brain signal data collected during controlled stimuli sessions. The workflow covers end-to-end processing, including signal preprocessing, feature extraction, exploratory data analysis (EDA), and model development. Multiple machine learning and deep learning approaches were implemented and evaluated, such as Artificial Neural Networks (ANN), Autoencoders, and classical models including XGBoost, SVM, Random Forest, and LightGBM. The project aims to analyze emotional patterns from EEG signals and assess the effectiveness of different modeling pipelines for emotion recognition tasks.`,
    techStack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: eegImage,
    year: "2025"
  },
  {
    id: 6,
    featured: false,
    title: "Wheel Chair Robot with Gesture Recognition",
    category: "AI/Machine Learning",
    description: "A robot wheelchair system controlled using computer vision–based facial and head gesture recognition.",
    longDescription: `A robot wheelchair system controlled using computer vision–based facial and head gesture recognition. The system utilizes real-time face landmark detection to interpret eye blinks, head pose, and mouth movements as control signals, which are then sent to an Arduino microcontroller for motor actuation. This project integrates Python, OpenCV, MediaPipe, and embedded control to enable hands-free wheelchair navigation.`,
    techStack: ["Python", "OpenCV", "MediaPipe", "Arduino", "C++"],
    image: robotImage,
    year: "2025"
  },
  {
    id: 7,
    featured: false,
    title: "Sentiment Analysis on Advan and Xiaomi",
    category: "AI/Machine Learning",
    description: "Analyzed public sentiment towards Advan and Xiaomi using Selenium-based scraping, Negation Merging, and Semi-Supervised Annotation (ChatGPT-4).",
    longDescription: `Analyzed public sentiment towards Advan and Xiaomi using Selenium-based scraping, Negation Merging, and Semi-Supervised Annotation (ChatGPT-4). The project achieved 90.85% accuracy using SVM with TF-IDF, while LDA topic modeling was deployed to uncover latent quality issues like 'Dead on Arrival' units.`,
    techStack: ["Python", "Selenium", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    year: "2025"
  },
  {
    id: 8,
    featured: false,
    title: "FMCG Sales Forecasting and Analysis",
    category: "AI/Machine Learning",
    description: "Innovation Radar, Forecasting Trend, and Product Canibalization Detection on FMCG Transaction Data using Time-Series Reconstruction Algorithm and Vectorized Feature Engineering.",
    longDescription: `Developed a sophisticated Data Engineering pipeline to process high-dimensional FMCG transaction data (~1M rows). The core innovation was a custom Time-Series Reconstruction Algorithm designed to handle data sparsity. Unlike standard forward-filling, this algorithm iteratively groups data by (Region, Channel, Product), generates complete date ranges, and utilizes efficient Set Operations to inject zero-value records for missing timesteps, ensuring temporal continuity for forecasting models.
The feature engineering module applied Vectorized Logic to map overlapping Marketing Campaign intervals onto daily sales data, calculating dynamic metrics like 'Days Since Campaign Start' without using slow loops. Furthermore, I implemented a Sentiment Aggregation Strategy that merges disparate customer review ratings into a unified daily 'Product Score', effectively transforming unstructured feedback into a structured quantitative feature using Group-By Aggregations.`,
    techStack: ["Python", "Selenium", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: fmcgImage,
    year: "2025"
  },
];
