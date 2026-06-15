import eegImage from '../assets/img/EEG.png';
import robotImage from '../assets/img/robot.png';
import produkImage from '../assets/img/Produk.png';
import dataniagaImage from '../assets/img/dataNiaga.png';
import deqryptImage from '../assets/img/deqrypt.png';
import langkahLegalImage from '../assets/img/LangkahLegal.png';
import sobatwarungImage from '../assets/img/sobatwarung.png';
import fmcgImage from '../assets/img/fmcg.png';
import foodpriceImage from '../assets/img/foodprice.png';
import machineImage from '../assets/img/machine.jpg';
import sosmedImage from '../assets/img/sosmed.jpg';
import childrenImage from '../assets/img/children.png';
import beacukaiImage from '../assets/img/beacukai.jpg';
import malnutritionImage from '../assets/img/malnutrition.png';
import tarisundaImage from '../assets/img/tarisunda.png';
import insuranceImage from '../assets/img/insurance.png';

export const projectsData = [
  {
    id: 16,
    featured: true,
    title: "LangkahLegal: Integrated Legal Assistance Platform",
    category: "Product",
    description: "A legal service management platform that digitizes access to justice through AI triage, role-separated authorization, and strict credential verification.",
    businessDescription: `As the project lead, I designed the end-to-end system flow and governance architecture for a legal assistance platform — covering credential verification, tiered access control, and transaction governance while aligning all architecture decisions with data privacy standards and operational risk requirements.

Key Business & Governance Contributions:

• Credential Verification & Tiered Authorization: Designed a legal document validation flow (advocate credentials, pro bono client letters) handled by the Administrator, with a Zero-Trust authorization model enforcing strict role separation between Client, Consultant, and Admin.

• AI Risk Management & Compliance: Defined business requirements for the AI risk management module — scoped RAG constraints to prevent hallucination by grounding responses only to official Indonesian legal documents (Penal Code, Civil Code, DV Law). Mapped PII protection controls and specified encrypted storage requirements for case evidence.

• Transaction Governance & Audit Trail: Structured payment governance flow with automated Midtrans invoice and webhook audit trails, ensuring every transaction produces a traceable financial record for compliance purposes.

• Data Privacy & Security Architecture: Designed PII anonymization using hashing algorithms for the public case marketplace and specified an Encrypted Vault for case evidence to prevent data leakage — aligning the system with data privacy standards.`,
    technicalDescription: `Built a full-stack legal platform from scratch to production, handling complex authorization, AI integration, payment processing, and automated deployment.

Technical Implementation:

• Role-Separated Authorization: Implemented JWT-based Zero Trust access control at the API layer, enforcing strict role separation (Client / Consultant / Admin) with route-level middleware guards in FastAPI.

• RAG Architecture: Integrated Supabase pgvector for vector storage + Gemini API for LLM inference, grounded to official Indonesian legal documents. Built the embedding pipeline, similarity search, and context injection to eliminate hallucination risk in AI-generated legal responses.

• Payment Integration: Shipped end-to-end Midtrans payment flows with webhook handlers for real-time transaction status updates, automated invoice generation, and payment verification middleware.

• PII Anonymization & Encrypted Vault: Implemented hashing-based anonymization for the case marketplace and encrypted evidence storage for sensitive legal documents.

• Consultation Scheduling: Integrated Zoom API for real-time consultation booking between clients and legal consultants.

• Deployment & CI/CD: Deployed with automated CI pipeline on Railway (FastAPI backend) and Vercel SSR (Next.js frontend) — zero downtime from staging to production.

Tech Stack: Next.js, FastAPI, Python, Supabase, Gemini API, Midtrans, Railway, Vercel`,
    techStack: ["Next.js", "FastAPI", "Python", "Supabase", "Gemini API", "Midtrans", "Railway", "Vercel"],
    image: langkahLegalImage,
    year: "2026"
  },
  {
    id: 15,
    featured: true,
    title: "DeQRypt: AI-Powered DeFi Payment & Portfolio System",
    category: "Product",
    description: "AI-powered DeFi payment prototype with QR-based transactions, LLM-driven portfolio management, and strict transaction governance on Base network.",
    businessDescription: `Led the functional specification and governance design for a DeFi payment system built during a hackathon — focusing on bridging backend logic with frontend implementation and eliminating critical architecture risks.

Key Business & Governance Contributions:

• Functional Specification & Requirement Translation: Produced detailed functional specification documentation to bridge backend logic and frontend implementation, resolving integration ambiguity and aligning the team on approval and validation flows.

• Critical Architecture Risk Identification: Identified and resolved a critical system architecture risk — segregated custodial roles where the router contract serves as the sole transaction executor and the treasury wallet as a passive recipient, eliminating fund-control ambiguity.

• Data Integrity & Transaction Auditability: Detected a data integrity gap where the API returned success status before block finality. Redesigned the transaction validation flow to ensure database writes only occur post-confirmation, achieving audit-grade accuracy.

• User Friction Reduction: Replaced manual identity-address input (highly error-prone) with standardized QR-code scanning, reducing fund-loss risk caused by human error and simplifying the payment flow for non-technical users.

• Decision Support Design: Designed an automated analytics assistant acting as a financial copilot — analyzing market returns in real time to guide asset allocation decisions and prevent idle funds from depreciating due to inflation.`,
    technicalDescription: `Built a DeFi payment prototype on Base Network from scratch, handling smart contract architecture, account abstraction, and real-time LLM integration.

Technical Implementation:

• DeFi Payment Flow: Built QR-based transaction flow on Base Network with account abstraction for simplified onboarding — users don't need to manage private keys or gas fees directly.

• Critical Bug Resolution: Resolved a critical data integrity bug where the backend recorded "Success" before network finality. Redesigned the validation flow to only write to DB after 100% confirmed block receipt, preventing ledger inconsistency.

• Multi-Asset Pool Smart Contract: Architected a Multi-Asset Pool smart contract (Solidity) enabling dynamic multi-token management through a single contract interface — improving scalability without compromising security.

• LLM Portfolio Assistant: Integrated LLM-based portfolio management that analyzes real-time market data and provides asset allocation recommendations through a conversational interface.

• Account Abstraction: Implemented ERC-4337 account abstraction to abstract away wallet complexity, enabling one-click onboarding for non-crypto-native users.

Tech Stack: Next.js, FastAPI, Solidity, Base Network, Account Abstraction, Web3.js, LLM`,
    techStack: ["Next.js", "FastAPI", "Solidity", "Base Network", "Account Abstraction", "Web3.js", "LLM"],
    image: deqryptImage,
    year: "2026"
  },
  {
    id: 14,
    featured: true,
    title: "Sobat Warung: AI-Powered Micro-Retail Digitization System",
    category: "Product & Data Systems",
    description: "WhatsApp-based solution for micro-retail digitization through stock intelligence, collective buying, inventory management, and credit scoring.",
    businessDescription: `Analyzed the structural crisis facing Indonesia's 3.94 million warungs and translated complex pain points into a zero-learning-curve product architecture — defining the business logic for credit scoring, inventory intelligence, and supply chain optimization.

Key Business & Analysis Contributions:

• Market Problem Analysis: Analyzed a 3.94M warung market problem — fragmented supply chains (up to 5 intermediary layers cutting margins by 20-25%), gut-driven inventory management, and financial exclusion where only 20% of SMEs have access to formal bank credit.

• Zero-Learning-Curve Architecture Decision: Made the strategic product decision to build entirely on WhatsApp (112M+ users in Indonesia) instead of a standalone app, removing the adoption barrier for non-tech-savvy warung owners.

• Credit Scoring Business Logic: Defined credit scoring business logic that converts daily sales behavior into trust score metrics for formal financing eligibility (up to Rp 10,000,000), bridging micro-retail data with financial institution requirements.

• Bundling & Merchandising Strategy: Translated basket analysis findings into merchandising governance recommendations — identified co-purchase patterns and specified product placement and bundling strategies to optimize inventory turnover for slow-moving products.

• Collective Buying Model: Designed demand aggregation logic from multiple warungs in one area for bulk purchasing from trusted distributors, reducing cost of goods sold (COGS) burden.`,
    technicalDescription: `Built a WhatsApp chatbot system for micro-retail digitization with ML-powered demand forecasting, basket analysis, and credit scoring — all accessible through a conversational interface.

Technical Implementation:

• WhatsApp Chatbot Engine: Built a conversational interface using WhatsApp API + FastAPI backend, letting warung owners log daily sales through natural chat interactions with zero learning curve.

• Demand Forecasting Model: Developed a Lag-Based Ensemble forecasting model combining LightGBM + Darts for next-day inventory demand prediction, using historical sales patterns and temporal features.

• Basket Analysis Pipeline: Implemented FP-Growth association mining algorithm to discover co-purchase patterns across product categories, generating automated bundling recommendations for slow-moving inventory.

• Credit Score Engine: Built a scoring engine that converts daily sales history into structured financial metrics (transaction frequency, revenue stability, growth trends) for formal credit institution eligibility assessment (loans up to Rp 10,000,000).

• Stock Intelligence Alerts: Automated inventory monitoring with threshold-based alerts for stockout risk and overstock detection, triggered directly through WhatsApp notifications.

Tech Stack: WhatsApp API, FastAPI, Python, LightGBM, Darts, FP-Growth`,
    techStack: ["WhatsApp API", "FastAPI", "Python", "LightGBM", "Darts", "FP-Growth"],
    image: sobatwarungImage,
    year: "2025"
  },
  {
    id: 13,
    featured: true,
    title: "DataNiaga: Retail Decision Support System",
    category: "AI/Machine Learning",
    description: "Full-stack retail analytics platform with automated risk monitoring, demand forecasting, and merchandising recommendations across 30+ product categories.",
    businessDescription: `Defined the business problem scope and analytical requirements for a retail decision support system — mapping inventory distortion risks and translating them into actionable procurement decision triggers and merchandising governance recommendations.

Key Business & Analysis Contributions:

• Business Problem Scoping: Defined business problem scope and analytical requirements — mapped inventory distortion risks (stockout revenue loss vs. overstock working capital burden) and translated them into a multi-regional forecasting and alert system covering 30+ product categories.

• 3-Layer Risk Monitoring Framework: Designed a 3-layer risk monitoring framework (Declining Trend, Below Average, Negative Growth) as the core business logic for procurement decision triggers — the system automatically triggers alerts when product forecast trends decline significantly, providing management with critical lead time.

• Merchandising Governance: Translated basket analysis findings into merchandising governance recommendations — identified co-purchase patterns and specified product placement and bundling strategies to optimize Average Transaction Value per store visit.

• Regional Risk Segregation: Recognized that consumption patterns and purchasing volatility vary significantly across Indonesian geography (e.g., payday effects differ between Sumatra and Kalimantan), and defined the requirement for segregated forecasting models per region to prevent estimation bias.

• Dead Stock Clearance Strategy: For declining-trend products, designed the logic for targeted bundling promotions — coupling slow-moving inventory with high-velocity "anchor" products to accelerate inventory turnover without excessive promotional cost burn.`,
    technicalDescription: `Built a full-stack retail analytics platform from scratch with FastAPI backend and Next.js frontend, delivering 30+ interactive dashboards with automated alert engines and ML-powered forecasting.

Technical Implementation:

• Full-Stack Architecture: Built the complete platform with FastAPI (Python) backend serving REST APIs and Next.js frontend rendering 30+ interactive dashboards for demand, inventory, and category monitoring.

• ML Forecasting Pipeline: Implemented LightGBM-based demand forecasting with segregated regional models, achieving 5-30% MAPE accuracy. Built feature engineering pipelines with temporal, lag-based, and categorical features.

• Automated Alert Engine: Integrated a three-layer alert system (Declining Trend, Below Average, Negative Growth) that processes forecast outputs and surfaces actionable procurement recommendations directly in the dashboard UI.

• Association Mining: Implemented FP-Growth algorithm for basket analysis across product categories, generating co-purchase correlation patterns and automated bundling recommendations with Lift ratio scoring.

• Dashboard System: Built 30+ category-specific analytics dashboards with real-time data feeds, interactive filters, and drill-down capabilities for regional and temporal analysis.

Tech Stack: Next.js, FastAPI, Python, PostgreSQL, LightGBM, FP-Growth`,
    techStack: ["Next.js", "FastAPI", "Python", "PostgreSQL", "LightGBM", "FP-Growth"],
    image: dataniagaImage,
    year: "2025"
  },
  {
    id: 12,
    featured: false,
    title: "Predictive Insurance Claim Analytics using Gradient Boosting & Evolutionary Optimization",
    category: "Insurance Analytics",
    description: "Predicts health insurance claims to anticipate claim spikes and support financial stability through CatBoost and evolutionary optimization.",
    businessDescription: `Addressed a real problem in the insurance industry: a 25.5% claim surge in 2025 threatening financial stability and customer premiums. Designed a decision support system for risk prediction, financial planning, and pricing strategy.

Key Business Contributions:

• Business Problem Definition: Identified the 25.5% claim surge as a critical financial risk and defined the analytical requirements for a predictive system that supports proactive risk management rather than reactive responses.

• Risk Prediction & Financial Planning: Built a production-grade predictive system for insurance risk management — not just an experimental model. Outputs directly support reserve allocation, pricing strategy, and operational planning decisions.

• Early Warning System: Designed an early warning capability for claim surges using time-series forecasting, enabling the organization to shift from reactive to proactive risk management.

• Key Findings Translation: Translated technical findings into business insight — claims are influenced by external factors (rainfall, seasonality), not just historical patterns, informing more sophisticated underwriting and risk assessment strategies.`,
    technicalDescription: `Built a time-series forecasting pipeline using frequency-severity decomposition with advanced feature engineering and evolutionary hyperparameter optimization.

Technical Implementation:

• Forecasting Approach: Implemented time-series forecasting based on frequency-severity decomposition with temporal features, lag-based historical features, and weather-based exogenous features (rainfall data scraped via Selenium).

• Model Benchmarking: Benchmarked CatBoost, XGBoost, and LightGBM — CatBoost achieved best performance with 1.06% MAPE (public score) and 3.05% CV score, demonstrating strong generalization.

• Evolutionary Optimization: Applied evolutionary computation (100 populations × 20 generations) for feature selection and hyperparameter tuning via Genetic Algorithm.

• Data Preprocessing: Implemented outlier capping at 97th percentile, missing value imputation, and advanced feature engineering across 4,096 policy records and 5,781 claim records.

Tech Stack: Python, CatBoost, XGBoost, LightGBM, Genetic Algorithm, Selenium, Pandas, NumPy`,
    techStack: ["Python", "CatBoost", "XGBoost", "LightGBM", "Evolutionary Computation", "Genetic Algorithm", "Time Series Forecasting", "Pandas & NumPy", "Selenium & BeautifulSoup"],
    image: insuranceImage,
    year: "2026"
  },
  {
    id: 11,
    featured: false,
    title: "FMCG Personal Care Analytics: Data-Driven Innovation & Product Strategy Optimization",
    category: "Data Analytics & Business Intelligence",
    description: "Analytics on 1M+ FMCG personal care transactions for forecasting, innovation, and cannibalization detection.",
    businessDescription: `Leveraged data-driven innovation to solve real-world challenges in the competitive FMCG personal care industry. Analyzed 1M+ transaction records to identify growth drivers, emerging trends, and hidden inefficiencies.

Key Business Contributions:

• Growth Driver Identification: Analyzed sales, marketing performance, and customer feedback across 1M+ transactions to identify key growth drivers and emerging product trends.

• Cannibalization Detection: Early detection of product cannibalization patterns — reducing revenue leakage by identifying when new products erode existing product sales rather than expanding market share.

• Portfolio Strategy Optimization: Produced actionable insights for marketing and product teams to optimize portfolio strategies, campaign timing, and inventory planning.

• Data Governance Demonstration: Integrated multiple datasets (sales, products, marketing, reviews) demonstrating real-world data governance challenges including data consistency, integration, and reliability.`,
    technicalDescription: `Built a comprehensive analytics pipeline processing 1M+ transaction records with forecasting models, cannibalization detection, and multi-dataset integration.

Technical Implementation:

• Large-Scale Data Processing: Efficiently handled 1M+ rows with optimized Pandas preprocessing pipelines — merging sales, products, marketing, and reviews datasets while maintaining data integrity.

• Demand Forecasting: Applied time series forecasting models to predict demand patterns for campaign timing and inventory planning optimization.

• Cannibalization Analysis: Implemented statistical analysis to detect product cannibalization patterns across categories, measuring cross-elasticity and revenue displacement effects.

• Visualization & Reporting: Built comprehensive visualization dashboards using Matplotlib and Seaborn for stakeholder communication and insight presentation.

Tech Stack: Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Time Series Forecasting`,
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Time Series Forecasting"],
    image: fmcgImage,
    year: "2025"
  },
  {
    id: 10,
    featured: false,
    title: "Neuro AI: Multimodal Student Engagement Analytics System",
    category: "AI/ML & EdTech",
    description: "Real-time multimodal biometric system integrating EEG, eye-tracking, and face recognition for objective engagement measurement in online education.",
    businessDescription: `Addressed the "Black Box Problem" in online learning — the inability to objectively measure student engagement. Designed the system as a decision-support tool for EdTech platforms and educational institutions.

Key Business Contributions:

• Business Problem Framing: Identified the "Black Box Problem" as a critical operational and quality assurance gap — without objective engagement data, educators cannot identify confusion points, perform content A/B testing, or verify authentic participation.

• Cost Disruption Analysis: Demonstrated that consumer-grade hardware ($250-400 headband + webcam) can replace $3,000-5,000 professional lab-grade equipment, making neuroscience-based education research accessible to any institution.

• ROI Validation Framework: Designed the system to provide ROI validation for EdTech investments by linking video quality metrics to measurable learning outcomes and engagement data.

• Scalability Assessment: Evaluated deployment scalability — web-based architecture (Next.js + Flask) enables deployment across multiple campuses and LMS integrations without infrastructure changes.

• Data Privacy by Design: Implemented face encoding anonymization — no raw biometric imagery retained, ensuring compliance with privacy requirements.`,
    technicalDescription: `Built a full-stack multimodal engagement analytics system integrating three real-time data streams (EEG, eye tracking, face recognition) on a single consumer laptop.

Technical Implementation:

• EEG Pipeline: Built end-to-end EEG pipeline from raw signal acquisition (Muse S Headband via Lab Streaming Layer) through preprocessing (Notch Filter 50Hz, Bandpass 0.5-45Hz, ICA artifact removal) to Power Spectral Density feature extraction. Benchmarked 7 ML models (SimpleEEGNet, Autoencoder, XGBoost, SVM, Random Forest) achieving 48-51% accuracy on LOSO cross-validation across 8 subjects.

• Eye Tracking System: Implemented browser-based MediaPipe Face Mesh detecting 474 facial landmarks at 30 FPS for real-time gaze classification (Center/Left/Right/Up/Down) using geometric estimation — no specialized hardware required.

• Face Recognition: Built identity verification using OpenCV + face_recognition library with 128-dimensional embeddings and Euclidean distance matching (< 0.6 threshold) for presence validation.

• Multi-Modal Synchronization: Achieved precise time-locking between EEG acquisition (external device), video stimulus (web frontend), visual processing (browser), and face detection (webcam) — a non-trivial orchestration challenge.

• Full-Stack Deployment: Next.js frontend + Flask backend with real-time data streaming via WebSocket and CSV-based temporal data export.

Tech Stack: Next.js, Flask, Muse S Headband, MediaPipe, OpenCV, face_recognition, PyTorch, XGBoost, LSL`,
    techStack: ["Next.js", "Flask", "Muse S Headband", "MediaPipe", "OpenCV", "face_recognition", "PyTorch", "XGBoost", "Lab Streaming Layer"],
    image: eegImage,
    year: "2025"
  },
  {
    id: 9,
    featured: false,
    title: "COPPA Risk Detection System: ML for Children's Data Privacy Compliance",
    category: "Data Privacy & Compliance",
    description: "Machine learning system for identifying mobile apps at risk of violating children's data privacy regulations (COPPA).",
    businessDescription: `Addressed the growing risk of children's data privacy violations in mobile apps. Designed a risk assessment framework that translates regulation into measurable analytical metrics.

Key Business Contributions:

• Regulatory Translation: Translated COPPA regulation requirements into measurable analytical metrics — combining app characteristics, user scale proxies, privacy signals, and developer metadata for multi-factor risk assessment.

• Automated Compliance Screening: Designed a system that helps app marketplaces and regulators automatically screen risky applications, reducing legal risk and compliance failure potential.

• Risk Prioritization Framework: Built a data-driven risk assessment framework that supports risk prioritization and mitigation strategy — popular apps are not automatically safe, demonstrating the importance of systematic classification.

• Data Privacy Governance: Supported a data privacy governance framework in digital ecosystems by providing an early warning system for apps that may violate regulations.`,
    technicalDescription: `Built a binary classification system predicting COPPA non-compliance risk using multi-dimensional feature engineering across app metadata, privacy signals, and developer characteristics.

Technical Implementation:

• Feature Engineering: Combined multiple risk indicators — app genre/category, download ranges (audience proxy), privacy policy features, and developer metadata — for comprehensive risk signal capture.

• Classification Pipeline: Built binary classification (coppaRisk: true/false) with data preprocessing, feature engineering, model training, and evaluation pipeline.

• Multi-Factor Analysis: Implemented cross-dimensional analysis combining behavioral, metadata, and policy signals rather than single-dimension text-only analysis.

• Model Evaluation: Comprehensive evaluation using Accuracy, Precision, Recall, and F1 Score to ensure robust and reliable predictions.

Tech Stack: Python, Pandas, NumPy, Scikit-learn, Feature Engineering, EDA`,
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Feature Engineering", "EDA"],
    image: childrenImage,
    year: "2025"
  },
  {
    id: 8,
    featured: false,
    title: "Competitive Market Intelligence: Consumer Sentiment & Topic Modeling (Advan vs. Xiaomi)",
    category: "Business Analytics",
    description: "Converts consumer reviews into actionable quality control and after-sales governance insights through NLP and topic modeling.",
    businessDescription: `Diagnosed root causes of competitive disadvantage for local brand Advan against import giant Xiaomi through structured analysis of consumer sentiment data.

Key Business Contributions:

• Competitive Intelligence: Quantified competitive realities — Xiaomi reports ~85.9% positive vs ~5.1% negative, while Advan records ~83% positive vs ~6% negative, providing data-backed competitive positioning analysis.

• Failure Mode Identification: Exposed five critical failure modes driving negative sentiment: Dead on Arrival (DOA) products, delivery damage, substandard multimedia quality, poor camera performance, and weak return/after-sales service.

• Governance Recommendations: Provided empirically grounded signals for senior management indicating weaknesses in Supply Chain Management and Quality Assurance governance, plus SLA gaps in incident handling and after-sales support.

• Strategic Audit Input: Analytics enable precise internal audits and targeted governance interventions to recover market share from global competitors.`,
    technicalDescription: `Built an end-to-end NLP pipeline from web scraping to sentiment classification and topic modeling for competitive intelligence analysis.

Technical Implementation:

• Web Scraping: Extracted customer reviews from Tokopedia using Selenium and BeautifulSoup for automated data collection.

• NLP Pipeline: Implemented comprehensive text preprocessing — cleaning, normalization, negation handling, stemming, and merging — to transform raw review text into structured features.

• Sentiment Classification: Built supervised learning models combined with semi-supervised annotation, achieving >90% classification accuracy.

• Topic Modeling: Applied Latent Dirichlet Allocation (LDA) to discover five critical failure mode clusters from negative sentiment data.

Tech Stack: Python, Selenium, BeautifulSoup, Scikit-learn, LDA, TF-IDF, Pandas`,
    techStack: ["Python", "Selenium", "BeautifulSoup", "Scikit-learn", "LDA", "TF-IDF", "Pandas"],
    image: produkImage,
    year: "2025"
  },
  {
    id: 7,
    featured: false,
    title: "Food Price Forecasting System for Indonesia",
    category: "Data Analytics & Policy Support",
    description: "Forecasting system predicting food commodity prices across 34 Indonesian provinces using multivariate analysis and time series models.",
    businessDescription: `Addressed food price volatility and its impact on economic stability, inflation, and public welfare. Designed a decision support system for policy-driven price monitoring across 13 commodities and 34 provinces.

Key Business Contributions:

• Policy Decision Support: Built a forecasting system that supports proactive policy and supply chain decisions by enabling early detection of price fluctuations across 13 key food commodities.

• Holistic Risk Assessment: Integrated external covariates (exchange rates, global commodity prices, import-export data) for a comprehensive forecasting approach aligned with real-world policy and business environments.

• Data Governance Standards: Applied data standardization, consistency across all commodities, reproducibility of analytical processes, and scalability for enterprise-level implementation.

• Misleading Assumption Prevention: Revealed that Google Trends has low correlation with food prices, preventing misleading assumptions in policy analysis.`,
    technicalDescription: `Built an end-to-end multivariate time series forecasting pipeline predicting prices for 13 commodities across 34 provinces with external covariates.

Technical Implementation:

• Multi-Model Benchmarking: Benchmarked Linear Regression, LSTM, ARIMA, and XGBoost — XGBoost delivered superior performance with MAPE ~5.5% (testing), strong for volatile food price data.

• Multivariate Feature Engineering: Integrated exchange rates, global commodity prices, import-export data, and Google Trends as external covariates for comprehensive feature sets.

• Multi-Region Pipeline: Built scalable pipeline handling multi-dimensional, multi-region time series data across 34 provinces with data interpolation and standardization.

• Preprocessing Pipeline: Implemented interpolation for missing values, standardization across commodities, and sequence generation for LSTM input preparation.

Tech Stack: Python, XGBoost, LSTM, ARIMA, Pandas, NumPy, Matplotlib, Seaborn`,
    techStack: ["Python", "XGBoost", "LSTM", "ARIMA", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    image: foodpriceImage,
    year: "2025"
  },
  {
    id: 6,
    featured: false,
    title: "Predictive Maintenance System: Machine Breakdown Detection",
    category: "Data Analytics & Industrial IoT",
    description: "Predictive maintenance system detecting machine anomalies from 13M+ sensor records using deep learning and anomaly detection.",
    businessDescription: `Addressed unplanned machine downtime and operational inefficiency — a critical industrial challenge where predictive maintenance can reduce costs by 20%, increase productivity by 25%, and reduce breakdowns by 30%.

Key Business Contributions:

• Operational Impact Quantification: Positioned the system against industry benchmarks — 20% maintenance cost reduction, 25% productivity increase, and 30% fewer breakdown incidents.

• Data Quality Governance: Resolved real-world data governance challenges — deduplicated 13M→16.5M record inflation, corrected ~942K mislabeled records using business logic, and implemented robust preprocessing to ensure data integrity.

• Risk Zone Identification: Identified high-risk machines (Chinese-manufactured) and geographic risk areas (Jogja & Banten regions), enabling targeted maintenance resource allocation.

• Decision Support System: Produced actionable maintenance decision outputs — early anomaly detection providing lead time for preventive intervention before breakdown occurs.`,
    technicalDescription: `Built an anomaly detection system processing 13M+ industrial sensor records using deep learning autoencoders and dimensionality reduction.

Technical Implementation:

• Large-Scale Data Processing: Processed 13M+ records from multiple sources (main data, machine data, area data) with deduplication, mislabel correction, and Robust Scaler outlier handling.

• Autoencoder Anomaly Detection: Implemented deep learning Autoencoder for detecting abnormal sensor patterns (temperature, vibration, operational parameters).

• Dimensionality Reduction: Applied PCA for computational efficiency on high-dimensional sensor feature space.

• Threshold Optimization: Built threshold optimization pipeline balancing false positives vs false negatives for production-ready alert generation.

Tech Stack: Python, Scikit-learn, Autoencoder, PCA, Pandas, NumPy, Matplotlib`,
    techStack: ["Python", "Scikit-learn", "Autoencoder", "PCA", "Robust Scaler", "Pandas", "NumPy", "Matplotlib"],
    image: machineImage,
    year: "2025"
  },
  {
    id: 5,
    featured: false,
    title: "Benteng Informasi Merah Putih: Digital Propaganda Detection & Social Network Intelligence",
    category: "Cyber Intelligence & Governance",
    description: "End-to-end data mining system for detecting coordinated social-media propaganda using anomaly detection, social network analysis, and topic modeling.",
    businessDescription: `Addressed information warfare and coordinated propaganda on social media — contributing to national digital sovereignty and providing a decision-support framework for government analysts.

Key Business Contributions:

• Digital Sovereignty Support: Designed an intelligence system that directly supports early detection of disinformation campaigns and reduces public-opinion manipulation risk.

• Multi-Layered Narrative Analysis: Discovered that propaganda operates with a multi-layered narrative strategy (political intervention, legal processes, justice debates) — not a single-message pattern — informing more sophisticated counter-disinformation strategies.

• Behavioral Pattern Detection: Demonstrated that propaganda often appears in behavioral coordination patterns, not only in wording — justifying the hybrid feature-engineering approach combining text and behavioral signals.

• Governance-Aligned Framework: Built a reproducible and scalable analytical framework aligned with risk management and strategic national objectives.`,
    technicalDescription: `Built a hybrid NLP + social network analysis pipeline for computational detection and deconstruction of disinformation propagation patterns on X (Twitter).

Technical Implementation:

• Hybrid Feature Engineering: Combined text-based features (TF-IDF) with behavioral features (account activity, follower patterns, engagement metrics) for more comprehensive propaganda detection than text-only approaches.

• Anomaly Detection: Applied Isolation Forest to detect anomalous, non-organic accounts based on behavioral patterns and account metadata across ~4,600 tweets.

• Social Network Analysis: Used NetworkX for degree centrality analysis to uncover coordinated account clusters, revealing that narrative spread is structured and actor-centered.

• Topic Modeling: Implemented LDA to identify three core propaganda narratives — high-level political intervention, legal/judicial processes, and justice debates.

Tech Stack: Python, Scikit-learn, Isolation Forest, TF-IDF, NetworkX, LDA, Pandas`,
    techStack: ["Python", "Scikit-learn", "Isolation Forest", "TF-IDF", "NetworkX", "LDA", "Pandas"],
    image: sosmedImage,
    year: "2025"
  },
  {
    id: 3,
    featured: false,
    title: "Data-Driven Policy Analysis for Tackling Triple Burden of Malnutrition (TBM)",
    category: "Public Policy Analytics",
    description: "Comparative policy analysis of Indonesia's nutrition performance against global and ASEAN benchmarks to identify governance gaps.",
    businessDescription: `Conducted data-driven policy analysis addressing Indonesia's Triple Burden of Malnutrition — combining stunting, obesity, and micronutrient deficiency impacting human capital quality.

Key Business Contributions:

• Gap Analysis: Benchmarked Indonesia's nutrition performance against best-performing nations, revealing clear governance gaps — stunting decreased by only -9.40% (2000-2022) while obesity increased by +7.50%.

• Root Cause Identification: Identified that the main issue is not policy availability, but weak cross-sector integration, limited data-driven targeting, and inefficient field implementation.

• Strategic Policy Recommendations: Produced evidence-based recommendations from global benchmarking against countries like Bangladesh, Tajikistan, and Cambodia.

• KPI-Driven Governance: Emphasized indicator-based monitoring and KPI-driven governance for nutrition policy effectiveness assessment.`,
    technicalDescription: `Built a comparative analytics pipeline using global SDGs and nutrition datasets for trend analysis across 2000-2022 with geographic benchmarking.

Technical Implementation:

• Trend Analysis: Implemented time-series trend analysis across 2000-2022 and 2012-2022 periods for stunting and overweight/obesity metrics.

• Distribution Visualization: Built distribution and time-series visualizations benchmarking Indonesia against ASEAN countries and best-performing nations.

• Geographic Comparison: Automated multi-country comparison pipeline with standardized metrics for fair cross-national benchmarking.

• Statistical Analysis: Applied statistical trend and distribution analysis on SDGs open data to identify significant patterns and outliers.

Tech Stack: Python, Pandas, Matplotlib, Seaborn, SDGs Open Data`,
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistical Analysis", "SDGs Open Data"],
    image: malnutritionImage,
    year: "2024"
  },
  {
    id: 2,
    featured: false,
    title: "Sundahub: Digital Marketplace for Sundanese Cultural Services",
    category: "Digital Marketplace & Strategy",
    description: "Website-based marketplace connecting Sundanese artists with commercial demand using data-driven targeting and digital marketing.",
    businessDescription: `Built a marketplace to solve a clear market gap: high supply of Sundanese artists but low access to commercial demand and monetization opportunities.

Key Business Contributions:

• Market Sizing: Conducted TAM, SAM, SOM market sizing analysis to validate the business opportunity in the cultural creative industry.

• Competitor Gap Analysis: Identified that keywords like "jasa tari sunda bandung" have low website-based competition, creating strong SEO opportunity in a low-competition niche.

• Business Model Design: Designed a scalable marketplace model with 15-25% commission per transaction without needing to own the supply side.

• Demand Validation: Validated demand from behavior data and event-based opportunities, confirming problem-solution fit.

• Digital Funnel Strategy: Designed cross-channel digital marketing funnel across website, ads, and social media for customer acquisition.`,
    technicalDescription: `Built and deployed the marketplace website with SEO optimization, digital marketing integration, and user behavior analytics.

Technical Implementation:

• Website Development: Built the marketplace frontend and backend from design to deployment, implementing responsive layouts and content management.

• SEO Strategy: Implemented keyword-optimized pages targeting low-competition cultural service keywords, achieving organic visibility.

• Google Ads Integration: Set up and managed Google Ads campaigns for targeted customer acquisition and lead generation.

• Analytics Setup: Implemented user behavior tracking, keyword signal monitoring, and traffic analysis for continuous improvement.

Tech Stack: Web Development, SEO, Google Ads, Social Media Marketing, Analytics`,
    techStack: ["Web Development", "SEO", "Google Ads", "Social Media Marketing", "User Behavior Analysis"],
    image: tarisundaImage,
    year: "2024"
  },
  {
    id: 1,
    featured: false,
    title: "Instagram Public Sentiment Intelligence for Customs Governance",
    category: "Public Sector Analytics",
    description: "Analyzes 15,000+ Instagram comments about customs issues using K-Means clustering to identify sentiment patterns and public opinion dynamics.",
    businessDescription: `Analyzed public discourse on Instagram to understand how citizens respond to viral customs service issues — providing institutional intelligence for reputation management and service improvement.

Key Business Contributions:

• Digital Reputation Monitoring: Built a system for monitoring institutional digital reputation based on public social media discourse rather than internal surveys.

• Issue Escalation Pattern Analysis: Identified that public narratives suggest issues only receive institutional attention after going viral, highlighting gaps in proactive issue management.

• Reputational Risk Assessment: Mapped clusters discussing operational negligence, accountability, and institutional reputation — providing specific areas for governance intervention.

• Structured Public Perception: Demonstrated that public perception is structured rather than random — consistent opinion patterns across different posts indicate underlying systematic concerns.`,
    technicalDescription: `Built a text mining pipeline processing 15,000+ Instagram comments through NLP preprocessing and unsupervised clustering for opinion pattern discovery.

Technical Implementation:

• Web Scraping: Collected ~15,000 public comments from Instagram media accounts using Selenium, covering nationally discussed customs issues across 6 posts.

• NLP Preprocessing: Implemented text preprocessing pipeline — case folding, tokenizing, filtering, and stemming for Indonesian language text.

• TF-IDF + K-Means Clustering: Applied TF-IDF feature extraction and K-Means clustering to discover hidden discussion patterns, achieving Silhouette Scores of 0.5518 and 0.5613.

• Cluster Analysis: Interpreted cluster compositions to extract meaningful public opinion groups with sufficient quality for policy analysis.

Tech Stack: Python, Selenium, Scikit-learn, TF-IDF, K-Means, Matplotlib, WordCloud`,
    techStack: ["Python", "Selenium", "Scikit-learn", "TF-IDF", "K-Means", "Matplotlib", "WordCloud"],
    image: beacukaiImage,
    year: "2024"
  },
  {
    id: 4,
    featured: false,
    title: "Smart Mobility: Contactless Wheelchair Navigation via Head Pose Estimation",
    category: "Smart Mobility",
    description: "Hands-free wheelchair navigation using head-pose estimation and Arduino microcontroller integration.",
    businessDescription: `Addressed an accessibility barrier for users with severe motor disabilities — replacing physical joystick dependence with a low-cost, hands-free navigation system.

Key Business Contributions:

• Accessibility Impact: Solved a real accessibility problem for quadriplegia patients by eliminating the physical joystick requirement, expanding wheelchair access to users who cannot operate conventional controls.

• Cost Efficiency: Achieved the solution using only a standard webcam and open-source AI processing — significantly lower cost than specialized commercial assistive technology solutions.

• Safety Governance: Defined operational controls for reliability and user safety — dynamic calibration (20° threshold), latency governance through multithreading, and smooth braking protocols to prevent sudden stops.

• Intuitive Command Mapping: Designed the user interaction model — head pitch for forward/backward, yaw for turning, and mouth-open ratio for reverse — ensuring zero learning curve for end users.`,
    technicalDescription: `Built a real-time computer vision system translating 3D head pose and facial cues into mechanical wheelchair motion commands via Arduino integration.

Technical Implementation:

• Head Pose Estimation: Implemented MediaPipe Face Mesh (468 landmarks) with PnP Solver and Euler angle transforms for real-time 3D head pose detection — pitch for forward/backward, yaw for turning.

• Dynamic Calibration: Built 'C'-key calibration system allowing users to set personal neutral points, compensating for seating differences with 20° movement thresholds.

• Multithreaded Architecture: Isolated vision processing (Thread A: camera + CV pipeline) and serial communication (Thread B: Arduino) into separate threads for deterministic response times.

• Arduino Motor Control: Built C++ Arduino controller with L298N motor driver integration, implementing smooth braking algorithm that gradually reduces PWM signals to prevent abrupt stops.

• Reverse Command: Implemented mouth-open ratio detection as a discrete reverse command — a creative solution for hands-free backward navigation.

Tech Stack: Python, MediaPipe, OpenCV, NumPy, Arduino (C++), L298N Motor Driver, Serial Communication`,
    techStack: ["Python", "MediaPipe", "OpenCV", "NumPy", "Arduino (C++)", "L298N Motor Driver", "Serial Communication"],
    image: robotImage,
    year: "2025"
  },
];