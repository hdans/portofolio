import eegImage from '../assets/img/EEG.png';
import robotImage from '../assets/img/robot.png';
import produkImage from '../assets/img/produk.png';
import dataniagaImage from '../assets/img/dataNiaga.png';
import fmcgImage from '../assets/img/fmcg.png';

export const projectsData = [
  {
    id: 1,
    title: "DataNiaga - Retail Decision Support System",
    category: "AI/Machine Learning",
    description: "Retail Decision Support System utilizing LightGBM to handle multi-regional demand volatility and FP-Growth for automated product bundling recommendations.",
    longDescription: `Developed DataNiaga, a Retail Decision Support System utilizing LightGBM with Segregated Modeling to handle multi-regional demand volatility (5-30% MAPE Score) and FP-Growth for automated product bundling recommendations. The system features a FastAPI and Next.js architecture that transforms raw transaction data into actionable insights for inventory planning and dead stock mitigation.`,
    techStack: ["Python", "LightGBM", "FP-Growth", "FastAPI", "Next.js", "Pandas", "NumPy"],
    image: dataniagaImage,
    github: "https://github.com/hdans/DataNiaga.git",
    year: "2025"
  },
  {
    id: 2,
    title: "EEG Emotion Classification",
    category: "AI/Machine Learning",
    description: "A project on EEG-based emotion classification using various ML and DL techniques.",
    longDescription: `This project focuses on EEG-based emotion classification using brain signal data collected during controlled stimuli sessions. The workflow covers end-to-end processing, including signal preprocessing, feature extraction, exploratory data analysis (EDA), and model development. Multiple machine learning and deep learning approaches were implemented and evaluated, such as Artificial Neural Networks (ANN), Autoencoders, and classical models including XGBoost, SVM, Random Forest, and LightGBM. The project aims to analyze emotional patterns from EEG signals and assess the effectiveness of different modeling pipelines for emotion recognition tasks.`,
    techStack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: eegImage,
    github: "https://colab.research.google.com/drive/1VXMjrR0eoJP42pU-a3-bkpNlH_qbcKBC?usp=sharing",
    year: "2025"
  },
  {
    id: 3,
    title: "Wheel Chair Robot with Gesture Recognition",
    category: "AI/Machine Learning",
    description: "A robot wheelchair system controlled using computer vision–based facial and head gesture recognition.",
    longDescription: `A robot wheelchair system controlled using computer vision–based facial and head gesture recognition. The system utilizes real-time face landmark detection to interpret eye blinks, head pose, and mouth movements as control signals, which are then sent to an Arduino microcontroller for motor actuation. This project integrates Python, OpenCV, MediaPipe, and embedded control to enable hands-free wheelchair navigation.`,
    techStack: ["Python", "OpenCV", "MediaPipe", "Arduino", "C++"],
    image: robotImage,
    github: "https://github.com/hdans/wheel-chair-robot.git",
    year: "2025"
  },
  {
    id: 4,
    title: "Sentiment Analysis on Advan and Xiaomi",
    category: "AI/Machine Learning",
    description: "Analyzed public sentiment towards Advan and Xiaomi using Selenium-based scraping, Negation Merging, and Semi-Supervised Annotation (ChatGPT-4).",
    longDescription: `Analyzed public sentiment towards Advan and Xiaomi using Selenium-based scraping, Negation Merging, and Semi-Supervised Annotation (ChatGPT-4). The project achieved 90.85% accuracy using SVM with TF-IDF, while LDA topic modeling was deployed to uncover latent quality issues like 'Dead on Arrival' units.`,
    techStack: ["Python", "Selenium", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: produkImage,
    github: "https://drive.google.com/file/d/18LwoJjsfukBC4tHGJ0m3h1GF4XEsm1a8/view?usp=sharing",
    year: "2025"
  },
  {
    id: 5,
    title: "FMCG Sales Forecasting and Analysis",
    category: "AI/Machine Learning",
    description: "Innovation Radar, Forecasting Trend, and Product Canibalization Detection on FMCG Transaction Data using Time-Series Reconstruction Algorithm and Vectorized Feature Engineering.",
    longDescription: `Developed a sophisticated Data Engineering pipeline to process high-dimensional FMCG transaction data (~1M rows). The core innovation was a custom Time-Series Reconstruction Algorithm designed to handle data sparsity. Unlike standard forward-filling, this algorithm iteratively groups data by (Region, Channel, Product), generates complete date ranges, and utilizes efficient Set Operations to inject zero-value records for missing timesteps, ensuring temporal continuity for forecasting models.
The feature engineering module applied Vectorized Logic to map overlapping Marketing Campaign intervals onto daily sales data, calculating dynamic metrics like 'Days Since Campaign Start' without using slow loops. Furthermore, I implemented a Sentiment Aggregation Strategy that merges disparate customer review ratings into a unified daily 'Product Score', effectively transforming unstructured feedback into a structured quantitative feature using Group-By Aggregations.`,
    techStack: ["Python", "Selenium", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: fmcgImage,
    github: "https://github.com/hdans",
    year: "2025"
  },
];
