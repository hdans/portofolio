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
import { image } from 'framer-motion/client';

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
- Transaction Governance (Transaction Auditability): Payment flows are a  utomated through Midtrans integration, producing real-time invoice and webhook status records so every transaction leaves an auditable financial trail.

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
    title: "DataNiaga: Retail Decision Support System",
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
    title: "Predictive Insurance Claim Analytics using Gradient Boosting & Evolutionary Optimization",
    category: "Insurance Analytics",
    description: "Predicts health insurance claims to anticipate claim spikes and support financial stability through CatBoost and evolutionary optimization.",
    longDescription: `This project was developed in response to a real problem in the insurance industry: a 25.5% claim surge in 2025 that could threaten financial stability and increase premiums for customers.

The main goal was to identify the factors driving claims, build an accurate and robust prediction model, and deliver a data-driven decision support system.

Data and analytical approach:
- 4,096 policy records
- 5,781 claim records
- Period: January 2024 to July 2025

The analysis used a time-series forecasting approach based on frequency-severity decomposition, supported by advanced feature engineering:
- Temporal and seasonal features
- Lag-based historical features
- Weather-based exogenous features (rainfall)

Advanced preprocessing was used to improve model quality:
- Outlier capping at the 97th percentile
- Missing value imputation
- Feature selection using evolutionary computation with 100 populations and 20 generations

Key performance results:
- Best model: CatBoost
- Public Score (MAPE): 1.06%
- CV Score: 3.05%
- Outperformed XGBoost (3.24%) and LightGBM (2.47%)

This indicates very high predictive accuracy and stable generalization between validation and leaderboard results.

Key findings:
- Claims are influenced not only by history, but also by external factors
- Claim frequency is driven by lagged total claims and working days
- Severity is influenced by extreme rainfall and seasonal patterns
- Weather features show non-linear relevance that traditional analysis could miss
- Outlier handling improved robustness by reducing variance
- The model captured seasonality well without unstable drift

From a business impact perspective, this project is valuable for:
- Risk prediction
- Financial planning
- Operational strategy
- Pricing strategy and reserve allocation

From an IT Governance perspective, the project:
- Supports data-driven decision making
- Provides an early warning system for claim surges
- Strengthens risk governance and financial control
- Shows how predictive analytics can shift an organization from reactive to proactive risk management

Overall, this is a production-grade predictive system for insurance risk management, not just an experimental model.`,
    techStack: ["Python", "CatBoost", "XGBoost", "LightGBM", "Evolutionary Computation", "Genetic Algorithm (Hyperparameter Tuning)", "Time Series Forecasting (Recursive Forecast)", "Pandas & NumPy", "Matplotlib / Visualization", "Selenium & BeautifulSoup (Web Scraping Weather Data)"],
    image: insuranceImage,
    year: "2026"
  },
  {
    id: 6,
    featured: false,
    title: "Smart Mobility: Contactless Wheelchair Navigation via Head Pose Estimation & Microcontroller Integration",
    category: "Smart Mobility",
    description: "Hands-free wheelchair navigation using head-pose estimation and Arduino integration.",
    longDescription: `Dependence on physical joysticks creates an accessibility barrier for users with severe motor disabilities (e.g., quadriplegia). This project presents a low-cost, hands-free navigation system that uses only a standard webcam and AI processing to translate 3D head pose and facial cues into mechanical motion commands.

As a Business Analyst / Systems Architect I defined IT governance and operational controls to ensure reliability and user safety:
- Precision Calibration (Dynamic Calibration): A quick 'C' calibration allows users to set a personal neutral point, compensating for seating differences or minor disturbances and preventing small involuntary movements from triggering commands (20° threshold).
- Latency Governance (Multithreading): Vision processing and serial communication are isolated into separate threads—Thread A handles camera and CV pipeline, Thread B secures the Serial channel to the Arduino—ensuring deterministic response times (baudrate 9600) between user input and motor actuation.
- Safety Protocol (Smooth Braking): The Arduino implements a Smooth Braking algorithm that gradually reduces PWM signals when the user's face returns to neutral, preventing abrupt stops that could endanger the user.
- Intuitive Command Mapping: PnP and Euler-angle transforms map head movements to navigation: pitch down/up (Pitch < -15°) = forward, yaw left/right (Yaw > 20° / < -20°) = turn/pivot, and mouth-open ratio used as a discrete command for reverse.

The project demonstrates how ML and CV algorithms can be translated into a robust IoT hardware solution—secure, safe, and impactful for enhancing mobility independence.`,
    techStack: ["Python", "MediaPipe (Face Mesh, 468 landmarks)", "OpenCV", "NumPy", "PnP Solver / Euler Angles", "C++ (Arduino)", "Arduino Uno", "L298N Motor Driver", "DC Motors", "Multithreading", "Serial Communication (USB)"],
    image: robotImage,
    year: "2025"
  },
  {
    id: 7,
    featured: false,
    title: "Competitive Market Intelligence: Consumer Sentiment Analysis & Topic Modeling (Advan vs. Xiaomi)",
    category: "Business Analytics",
    description: "Converts consumer reviews into actionable QC and after-sales governance insights.",
    longDescription: `Indonesia's consumer technology market is dominated by imports (e.g., Xiaomi), creating structural challenges for local brands such as Advan. This project objectively diagnoses those root causes by extracting and analyzing customer reviews from Tokopedia using Selenium and BeautifulSoup.

The system implements a comprehensive NLP pipeline—cleaning, normalization, negation handling, stemming, and merging—to transform raw review text into structured features. Using supervised learning combined with semi-supervised annotation, models classify sentiment with accuracy >90% and quantify competitive realities: Xiaomi reports ~85.9% positive and ~5.1% negative reviews, while Advan records ~83% positive and ~6% negative.

The strategic impact is realized through Latent Dirichlet Allocation (LDA) topic modeling, which exposes five critical failure modes driving negative sentiment for Advan: Dead on Arrival (DOA) products; product damage on delivery; substandard multimedia and physical quality; poor camera performance and general performance issues; and weaknesses in return & after-sales service.

These findings provide empirically grounded signals for senior management, indicating weaknesses in Supply Chain Management and Quality Assurance governance, and revealing Service Level Agreement (SLA) gaps in incident handling and after-sales support. The analytics enable precise internal audits and targeted governance interventions to recover market share from global competitors.`,
    techStack: ["Selenium", "BeautifulSoup", "Python", "Scikit-learn", "Semi-Supervised Annotation", "LDA", "Pandas", "NumPy", "Market Research Analytics"],
    image: produkImage,
    year: "2025"
  },
  {
    id: 8,
    featured: false,
    title: "FMCG Personal Care Analytics: Data-Driven Innovation, Forecasting & Product Strategy Optimization",
    category: "Data Analytics & Business Intelligence",
    description: "Analytics on 1M+ FMCG personal care transactions for forecasting, innovation, and cannibalization detection.",
    longDescription: `This project focuses on leveraging data-driven innovation (DDI) to solve real-world challenges in the highly competitive FMCG personal care industry. Using a large-scale synthetic dataset (2020–2025) consisting of over 1,000,000 transaction records, I conducted comprehensive analysis across sales, marketing performance, and customer feedback.

From a business analytics perspective, the project successfully identifies key growth drivers, emerging product trends, and hidden inefficiencies such as product cannibalization, enabling more optimized portfolio strategies. Forecasting models were applied to predict demand patterns, allowing for better inventory planning and campaign timing, directly impacting operational efficiency.

From an IT Governance standpoint, this project demonstrates how structured data pipelines and analytical frameworks can support evidence-based decision making, aligning IT capabilities with business objectives. The integration of multiple datasets (sales, products, marketing, and reviews) reflects real-world data governance challenges, including data consistency, integration, and reliability.

Key impact delivered:
- Improved decision accuracy through data-backed insights on product performance and market trends
- Enhanced business strategy alignment via actionable insights for marketing and product teams
- Early detection of product cannibalization, reducing revenue leakage
- Forecasting-driven planning, increasing efficiency in supply chain and campaign execution
- Demonstrated scalability in handling high-volume data (1M+ rows) with efficient processing

Performance-wise, the project excels in:
- Handling large datasets with efficient preprocessing and analysis
- Generating high-signal insights rather than just descriptive outputs
- Producing outputs that are directly translatable into business decisions and governance frameworks

This project showcases the role of a data-driven approach in bridging technical execution (data processing, modeling) with strategic business value (decision support, governance alignment).`,
    techStack: ["Python (Pandas, NumPy, Scikit-learn)", "Data Visualization (Matplotlib, Seaborn)", "Time Series Forecasting", "Data Preprocessing & Feature Engineering", "Business Analytics & Insight Generation"],
    image: fmcgImage,
    year: "2025"
  },
  {
    id: 9,
    featured: false,
    title: "Food Price Forecasting System for Indonesia: Multivariate Analytics & Time Series Modeling for Policy-Driven Insights",
    category: "Data Analytics & Policy Support",
    description: "Forecasting system predicting food commodity prices across 34 Indonesian provinces using multivariate analysis and time series models.",
    longDescription: `This project addresses a critical national issue: food price volatility and its impact on economic stability, inflation, and public welfare. By leveraging multivariate analysis and time series forecasting, I built an end-to-end analytical pipeline predicting prices for 13 key food commodities across 34 provinces in Indonesia.

From a business and governance perspective, the project delivers strong decision-support capabilities. Integration of external covariates—exchange rates, global commodity prices, import-export data, and Google Trends—enables a holistic forecasting approach aligned with real-world policy and business environments.

Key IT Governance principles embedded:
- Data standardization and consistency across all commodities
- Reproducibility of analytical processes
- Scalability for enterprise-level implementation

Multiple models were benchmarked (Linear Regression, LSTM, ARIMA, XGBoost), with XGBoost delivering superior performance: MAPE ~0.1996 (validation), MAPE ~0.05465 (testing)—strong predictive accuracy for volatile food price data.

Key insights and impact:
- Identified highly influential external factors (global prices, exchange rates) affecting domestic food prices
- Revealed that Google Trends has low correlation, preventing misleading assumptions
- Highlighted critical role of preprocessing in model performance
- Enabled early detection of price fluctuations for proactive policy and supply chain decisions

From a performance standpoint, the project excels in:
- Handling multi-dimensional, multi-region time series data
- Producing actionable insights beyond predictions
- Achieving low error rates (MAPE ~5%), strong for real-world economic forecasting
- Demonstrating robust pipeline architecture, scalable into production systems

From IT Governance / Business Analysis perspective:
- Aligns data systems with business objectives (policy, economic stability)
- Demonstrates analytics as a decision support system (DSS)
- Strong emphasis on data quality, integration, and governance
- Translates technical outputs into strategic stakeholder insights

This project bridges technical ML implementation with real-world strategic impact, highly relevant for IT Consulting, IT Audit, and Business Analysis roles.`,
    techStack: ["Python (Pandas, NumPy, Scikit-learn)", "XGBoost", "LSTM", "ARIMA", "Data Preprocessing (Interpolation, Standardization, Sequencing)", "Exploratory Data Analysis", "Data Pipeline Engineering", "Visualization (Matplotlib, Seaborn)"],
    image: foodpriceImage,
    year: "2025"
    },
    {
      id: 10,
      featured: false,
      title: "Predictive Maintenance System: Machine Breakdown Detection using Anomaly Detection & Deep Learning",
      category: "Data Analytics & Industrial IoT",
      description: "Predictive maintenance system detecting machine anomalies and predicting breakdown status using deep learning and anomaly detection.",
      longDescription: `This project addresses a critical industrial challenge: unplanned machine downtime and operational inefficiency. By leveraging machine learning on sensor data—temperature, vibration, and operational parameters—the system identifies potential failures before they occur.

  From a business impact perspective, predictive maintenance delivers significant value. Industry studies show it can:
  - Reduce maintenance costs by up to 20%
  - Increase productivity by up to 25%
  - Reduce breakdown incidents by up to 30%

  The project processes large-scale data (~13M records) from multiple sources (main data, machine data, area data). Key challenges included:
  - Data duplication from merging (13M → 16.5M)
  - Mislabeling in ~942k records that could degrade model performance
  - High outliers across numerical features

  All issues resolved through a robust preprocessing pipeline:
  - Data deduplication & cleaning
  - Mislabel correction based on business logic
  - Robust Scaler for outlier handling
  - Feature selection & engineering to improve signal-to-noise ratio

  Key analytical insights uncovered:
  - Imbalanced machine status distribution (Normal 61%, Warning 20%, Breakdown 19%), impacting modeling strategy
  - No significant correlation between features (except temperature variables), requiring the model to capture complex non-linear patterns
  - High-risk machines and areas identified (e.g., Chinese-manufactured machines, regions like Jogja & Banten)

  Modeling approach combines:
  - Anomaly Detection (Autoencoder) for detecting abnormal patterns
  - Dimensionality reduction (PCA) for computational efficiency
  - Threshold optimization balancing false positives vs false negatives

  From a performance standpoint, the project excels at:
  - Processing high-volume industrial data (13M+ rows) efficiently
  - Handling real-world data challenges (noise, imbalance, mislabeling)
  - Early anomaly detection before breakdown occurs
  - Producing actionable insights for maintenance decision-making

  From IT Governance & Business Analysis perspective:
  - Applies data governance principles (quality, consistency, integrity) in practice
  - Supports decision support systems (DSS) for operational maintenance
  - Links data analytics with business impact (cost reduction & efficiency)
  - Demonstrates IT-business alignment for continuity & risk management

  This project showcases end-to-end problem solving: from data chaos to insight to decision-ready system.`,
      techStack: ["Python (Pandas, NumPy)", "Scikit-learn", "Deep Learning (Autoencoder)", "PCA (Dimensionality Reduction)", "Robust Scaler", "Matplotlib (EDA & Visualization)", "Data Preprocessing & Feature Engineering"],
      image: machineImage,
      year: "2025"
  },
  {
    id: 11,
    featured: false,
    title: "Benteng Informasi Merah Putih: Digital Propaganda Detection & Social Network Intelligence System",
    category: "Cyber Intelligence & Governance",
    description: "End-to-end data mining system for detecting coordinated social-media propaganda using anomaly detection, social network analysis, and topic modeling.",
    longDescription: `This project addresses one of the most critical digital-era challenges: information warfare and coordinated propaganda on social media. Using public discourse on X (Twitter) as a case study, the system was designed to computationally detect, analyze, and deconstruct disinformation propagation patterns.

From an impact perspective, this project contributes directly to:
- Strengthening national digital sovereignty
- Early detection of disinformation campaigns
- Providing a decision-support framework for stakeholders (government, analysts, etc.)
- Reducing public-opinion manipulation risk

The dataset contains approximately 4,600 tweets (cleaned to ~4,396) with combined features:
- Text content (full_text)
- Account metadata (followers, following, account age)
- Engagement metrics (retweet, reply, quote)

One major strength is its hybrid feature-engineering approach:
- Text-based features (TF-IDF)
- Behavioral features (account activity and interaction patterns)

This approach is more powerful than text-only analysis because propaganda often appears in behavioral coordination patterns, not only in wording.

High-value insights generated:
- Detected anomalous, non-organic accounts using Isolation Forest
- Uncovered coordinated account clusters through Social Network Analysis (degree centrality)
- Showed that narrative spread is structured and actor-centered, not random

Through LDA topic modeling, the system identified three core narratives:
- High-level political intervention
- Legal and judicial processes
- Justice debates (legal resolution vs political resolution)

This indicates propaganda operates with a multi-layered narrative strategy, not a single-message pattern.

From an IT Governance / Business Analyst lens, the project is highly relevant because it:
- Applies data governance principles (cleaning, consistency, feature integrity)
- Builds a reproducible and scalable analytical framework
- Supports risk management through disinformation-risk detection
- Aligns IT systems with strategic national objectives (digital sovereignty)
- Translates complex data into actionable decision intelligence

Overall, the output is not just a model, but strategic intelligence ready to support real decision-making.`,
    techStack: ["Python (Pandas, NumPy)", "Scikit-learn (Isolation Forest, TF-IDF)", "NLP (Tokenizing, Stemming, Filtering)", "NetworkX (Social Network Analysis)", "LDA (Topic Modeling)", "Iterative Imputer (Missing Value Handling)", "Data Preprocessing & Feature Engineering"],
    image: sosmedImage,
    year: "2025"
  },
  {
    id: 12,
    featured: false,
    title: "COPPA Risk Detection System: Machine Learning for Children's Data Privacy Compliance in Mobile Apps",
    category: "Data Privacy & Compliance",
    description: "Machine learning system for identifying mobile apps at risk of violating children's data privacy regulations (COPPA).",
    longDescription: `This project addresses a real digital-era problem: the growing use of mobile apps by children is often not matched by adequate data protection. Regulations such as COPPA require app developers to protect children's privacy, but in practice many apps may violate these rules without systematic detection.

To solve this, I built a binary classification system that predicts whether an app is at risk of COPPA non-compliance (coppaRisk: true/false).

From a business and governance perspective, the solution is highly relevant because it:
- Helps app marketplaces and regulators screen risky applications automatically
- Reduces legal risk and compliance failure potential
- Supports a data privacy governance framework in digital ecosystems
- Provides an early warning system for apps that may violate regulations

Analytical approach and data strategy:
- App characteristics: genre and category
- User scale proxy: download ranges as an indicator of target audience
- Privacy-related signals: privacy policy features
- Developer metadata

This reflects how a Business Analyst or IT Auditor works: not by looking at one dimension only, but by combining multiple indicators for risk assessment.

Main workflow:
- Data preprocessing and cleaning
- Feature engineering to capture risk signals
- Model training for binary classification (true/false risk)
- Evaluation to ensure the model is robust and reliable

High-value findings:
- Apps targeting children, based on download behavior and category, tend to have higher risk when privacy signals are weak
- Developer and metadata features are important indicators of non-compliance risk
- Popular apps are not automatically safe, showing the importance of risk-based classification rather than assumptions

This makes the output valuable for compliance teams, IT governance, product teams, and risk management.

From an IT Governance perspective, the project:
- Supports regulatory compliance with COPPA and data privacy laws
- Implements a data-driven risk assessment framework
- Aligns IT systems with compliance requirements
- Improves data protection governance and audit readiness

From a Business Analyst perspective, the project:
- Translates regulation into measurable analytical metrics
- Produces data-backed insights for decision-making
- Applies multi-factor analysis across behavior, metadata, and policy signals
- Supports risk prioritization and mitigation strategy

Overall, this is not just a model, but a decision support system for compliance and risk management.`,
    techStack: ["Python (Pandas, NumPy)", "Scikit-learn (Classification Models)", "Data Preprocessing & Feature Engineering", "Exploratory Data Analysis (EDA)", "Model Evaluation (Accuracy, Precision, Recall, F1 Score)"],
    image: childrenImage,
    year: "2025"
  },
  {
    id: 13,
    featured: false,
    title: "Instagram Public Sentiment Intelligence for Customs Governance using K-Means Clustering",
    category: "Public Sector Analytics",
    description: "Analyzes 15,000+ Instagram comments about customs issues to identify sentiment patterns and public opinion dynamics using K-Means clustering.",
    longDescription: `This project was developed to understand how the public responds to viral issues related to customs services. Using public discourse on Instagram as a case study, the system was designed to detect, analyze, and uncover hidden opinion patterns in a computational way.

From an impact perspective, this project contributes directly to:
- Digital reputation monitoring for public institutions
- Early warning detection for public service issues
- Data-driven evaluation for operational and communication improvement
- Evidence-based public insight for institutional review

The dataset was collected through web scraping of Instagram comments from several high-traffic media accounts, covering two nationally discussed issues. In total, around 15,000 public comments were gathered from six different posts. The data then went through a text preprocessing pipeline including case folding, tokenizing, filtering, and stemming, followed by TF-IDF feature extraction and K-Means clustering to uncover hidden discussion patterns.

In terms of performance, the model produced solid and actionable results:
- SLB-A Pembina Nasional topic: average Silhouette Score of 0.5518
- Medy Renaldy package unloading topic: average Silhouette Score of 0.5613

These values fall into a reasonable clustering range, meaning the model can separate public opinion groups with sufficient quality for policy analysis and institutional evaluation.

The most valuable output of the project is not just clustering, but the business and governance insight derived from the data. Key patterns identified include:
- Public narratives suggesting issues only receive attention after going viral
- Many comments highlighting trust in the institution
- Clusters explicitly discussing operational negligence, accountability, and institutional reputation
- Consistent opinion patterns across different posts, showing that public perception is structured rather than random

From a Business Analyst perspective, this project helps answer questions such as:
- What are the main public pain points regarding a public service?
- How do issue escalation patterns form on social media?
- Which areas pose the highest reputational risk for an organization?

From an IT Governance perspective, the results can be used for:
- Institutional digital reputation monitoring
- Early warning systems for public service issues
- Data-driven evaluation for operational and communication improvement

Overall, this project shows how unstructured social media data can be transformed into strategic governance insight for decision-making.`,
    techStack: ["Python", "Selenium (web scraping Instagram comments)", "Pandas", "Scikit-learn", "TF-IDF Vectorization", "K-Means Clustering", "Elbow Method", "Silhouette Score", "Matplotlib", "WordCloud", "CSV-based data pipeline"],
    image: beacukaiImage,
    year: "2024"
  },
  {
    id: 14,
    featured: false,
    title: "Data-Driven Policy Analysis for Tackling Triple Burden of Malnutrition (TBM) using Global Comparative Insights",
    category: "Public Policy Analytics",
    description: "Comparative policy analysis of Indonesia's nutrition performance against global and ASEAN benchmarks to identify gaps in tackling Triple Burden of Malnutrition.",
    longDescription: `This project addresses a major public-health challenge: Indonesia's Triple Burden of Malnutrition (TBM), which combines stunting, obesity, and micronutrient deficiency and has a direct impact on human capital quality and long-term productivity.

The approach is not merely descriptive, but a data-driven policy analysis comparing Indonesia's nutrition performance with countries that have been successful in reducing TBM.

Data and analytical approach:
- Uses global SDGs and nutrition datasets
- Performs trend analysis across 2000–2022 and 2012–2022
- Visualizes distribution and time-series trends for stunting and overweight/obesity
- Benchmarks performance against ASEAN countries and best-performing nations

Key findings:
- Indonesia is still lagging in stunting reduction
- Stunting decreased by only -9.40% (2000–2022) and -3.60% in the last 10 years
- Indonesia remains above the global median, indicating the issue is still serious
- Obesity increased by +7.50% (2000–2022), showing that policy is not adaptive enough to lifestyle change
- Benchmarking reveals clear governance gaps compared with countries such as Bangladesh, Tajikistan, and Cambodia

The project also highlights that the main issue is not only policy availability, but:
- Weak cross-sector integration
- Limited data-driven targeting
- Inefficient field implementation

Why this project is impactful:
- Transforms global data into concrete policy insight
- Supports policy evaluation and strategic planning
- Identifies real gaps between Indonesia and best-performing countries
- Provides actionable recommendations based on evidence

From a Business Analyst perspective, this project:
- Identifies root causes based on data
- Conducts gap analysis between current and ideal state
- Produces strategic recommendations from global benchmarking

From an IT Governance / Data Governance perspective, this project:
- Shows the importance of data quality and accessibility
- Supports data-driven policy making
- Emphasizes indicator-based monitoring and KPI-driven governance

Overall, the project demonstrates that major malnutrition challenges are not just about lack of policy, but lack of integrated insight and governance supported by data.`,
    techStack: ["Python (Data Analysis & Visualization)", "Pandas", "Matplotlib / Seaborn", "Statistical Analysis (Trend & Distribution)", "Comparative Policy Analysis", "SDGs Open Data", "Data Visualization (Time Series & Distribution)"],
    image: malnutritionImage,
    year: "2025"
  },
  {
    id: 15,
    featured: false,
    title: "Sundahub: Digital Marketplace for Scaling Sundanese Cultural Services through Data-Driven Marketing & Platform Strategy",
    category: "Digital Marketplace & Strategy",
    description: "Website-based marketplace connecting Sundanese artists and cultural performers with commercial demand using data-driven targeting and digital marketing.",
    longDescription: `Sundahub was built to solve a clear market gap: high supply of Sundanese artists and cultural practitioners, but low access to commercial demand and monetization opportunities.

The project focuses on market gap exploitation, digital channel optimization, and building a scalable business ecosystem for culture-based creative industries.

Business and data approach:
- Market segmentation and targeting
- Keyword-based demand analysis using SEO thinking
- Competitor gap analysis in a low-competition niche
- Digital funnel strategy across website, ads, and social media

Key market insight:
- Keywords such as "jasa tari sunda bandung" still have low website-based competition, creating strong SEO opportunity

Key impact and findings:
- Clear market gap with low direct competition
- Monetization model through 15–25% commission per transaction
- Scalable marketplace model without needing to own the supply side
- Demand validation from behavior data and event-based opportunities
- Cultural value creation through better access, monetization, and preservation

From a Business Analyst perspective, the project demonstrates:
- Market sizing using TAM, SAM, and SOM
- Competitor gap analysis
- Problem-solution fit validation
- Translation of market needs into a concrete business model

From an IT Governance / Digital Strategy perspective, the project highlights:
- Platform as a core business enabler
- Data-driven marketing strategy
- Importance of digital presence as a strategic asset
- Tracking user behavior, keyword signals, and traffic for continuous improvement

Overall, Sundahub shows that the main issue in creative cultural industries is not lack of talent or demand, but lack of system, platform, and data-driven strategy.`,
    techStack: ["Website Development (Frontend & Backend)", "SEO (Search Engine Optimization)", "Google Ads", "Social Media Marketing", "Market Analysis (TAM, SAM, SOM)", "User Behavior Analysis", "Digital Funnel Strategy"],
    image: tarisundaImage,
    year: "2025"
  },
];
