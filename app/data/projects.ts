export const projects = [
  {
    id: 1,
    title: "Inventory Optimizer",
    description:
      "Built an end-to-end inventory optimization tool in Go combining lightweight statistical demand forecasting (SMA, SES) with a Monte Carlo simulation engine and classical inventory models (EOQ, reorder points, safety stock). \
      Processes CSV inputs, quantifies stockout risk and total cost under uncertainty, and produces actionable reorder recommendations with downloadable CSV/PDF reports. Includes optional PostgreSQL-backed persistence and JWT-based auth for saved reports.",
    image:
      "/images/inventory-optimizer/inventory_optimizer.png",
    tags: ["Go", "PostgreSQL", "Monte Carlo", "CSV", "HTML Templates"],
    year: "2026",
    category: "Optimization",
    content: "Inventory Optimizer is a production-ready Go application that converts historical sales and SKU parameter data into robust reorder recommendations and cost/service-level tradeoffs. \
    Forecasting uses Simple Moving Average and Single Exponential Smoothing with linear trend detection and coefficient-of-variation variability classification to handle sparse, noisy series (20–104 weeks). \
    A parallelized Monte Carlo simulation engine models demand uncertainty and lead times to estimate stockout probability, average inventory, and holding/ordering costs. Inventory logic implements EOQ and reorder-point checks; reports can be saved to PostgreSQL and exported as CSV or PDF. \
    The web UI is server-rendered using html/template with embedded static assets for a lightweight frontend. The codebase emphasizes correctness (unit tests), configurability of simulation parameters, and fast concurrent execution with Go routines.",
    additionalMedia: [
      "/images/inventory-optimizer/photo2.png",
      "/images/inventory-optimizer/photo3.png",
      "/images/inventory-optimizer/photo4.png",
    ],
    code: "https://github.com/nobleenia/inventory-optimizer.git",
    demo: "",
  },
  {
    id: 2,
    title: "Lyre & Muses NGO Website",
    description:
      "Designed and maintained a modern, responsive website for a non-profit organization, focusing on clear communication, accessibility, and user engagement. Delivered a professional online presence to support outreach, donations, and community visibility.",
    image:
      "/images/lyre-muses/main_photo.png",
    tags: ["WordPress", "JavaScript", "Bootstrap", "SEO", "Web Administration"],
    year: "2025",
    category: "Web Development",
    content:
      "Lyre & Muses is the official website of a non-profit organization, developed and maintained to enhance its digital presence and community outreach. The project involved structuring content for clarity, designing intuitive navigation, and ensuring a responsive layout across desktop and mobile devices. \
      As webmaster, responsibilities included updating content, optimizing performance, and ensuring reliability and accessibility of the platform. The site was built with a focus on user experience, enabling visitors to easily learn about the organization’s mission, activities, and ways to contribute. \
      This project highlights practical experience in real-world client work, website maintenance, UX-focused design, and delivering value for a social-impact organization.",
    additionalMedia: [
      "/images/lyre-muses/photo1.png",
      "/images/lyre-muses/photo2.png",
    ],
    code: "",
    demo: "https://www.lyre-muses.fr/",
  },
  {
    id: 3,
    title: "QuizApp",
    description:
      "Engineered a full-stack quiz platform with secure authentication, persistent quiz state, and performance-focused APIs. Built a social learning experience with community, friend discovery, and notifications to boost engagement and retention.",
    image:
      "/images/quizapp/main_photo.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "JWT"],
    year: "2024",
    category: "Full-Stack Web Application",
    content: "QuizApp is an end-to-end web application designed for interactive learning and community-driven competition. The frontend, built with React, delivers a responsive user experience across quiz flows, profile management, and social features. \
    The backend uses Node.js and Express with modular routes and middleware for authentication, quiz logic, and user data management. Data models handle quiz sessions, results, and user progress, while Redis is integrated for fast data access and improved backend responsiveness. \
    The project demonstrates full-stack architecture, API design, secure auth flows, and scalable feature organization suitable for production-style applications.",
    additionalMedia: [
      "/images/quizapp/photo1.png",
      "/images/quizapp/photo2.png",
    ],
    code: "https://github.com/nobleenia/QuizApp.git",
    demo: "",
  },
  {
    id: 4,
    title: "ChainTrack — Decentralized Supply Chain Provenance",
    description:
      "Built a full‑stack decentralized supply chain provenance platform combining Solidity smart contracts with an off‑chain Flask backend and a React frontend. Implements on‑chain product and shipment registries plus a tokenized incentive model; off‑chain services index events, persist metadata, \
      and expose REST APIs for verification and audits. Enables tamper‑evident tracking, cryptographic verification, and streamlined recall management to improve transparency and trust across supply chains.",
    image:
      "/images/chaintrack/main_photo.png",
    tags: ["Solidity", "Hardhat", "React", "Flask", "PostgreSQL"],
    year: "2025",
    category: "Blockchain",
    content: "Contracts are developed and tested with Hardhat to record product lifecycle events and manage an ERC‑20 incentive token. A Flask backend indexes on‑chain events, stores enriched metadata in PostgreSQL (Alembic migrations), and provides authenticated REST endpoints for verification, admin workflows, and analytics. \
    The frontend is a Vite + React app (Tailwind) that supports product registration, QR/verification flows, provenance timelines, and admin dashboards. The project is containerized with Docker, includes deployment and demo scripts for local and testnet environments, and contains unit/integration tests for smart contracts and end‑to‑end flows. \
    Architecture emphasizes auditability, gas efficiency, and security best practices.",
    additionalMedia: [
      "/images/chaintrack/photo1.png",
      "/images/chaintrack/photo2.png",
    ],
    code: "https://github.com/nobleenia/ChainTrack.git",
    demo: "",
  },
  {
    id: 5,
    title: "SupplyChain OR — Real-time Simulation Engine",
    description:
      "End-to-end supply chain simulation and optimization platform that combines probabilistic demand forecasting, Monte Carlo scenario simulation, and OR-based routing/inventory optimization. The Go backend (REST + JWT) persists scenarios to PostgreSQL and exposes solver endpoints; \
      the React + TypeScript frontend provides interactive scenario comparison, parameter tuning, and route/ inventory visualizations. The solver stack implements ALNS, A*, LP/MIP solvers (with OR-Tools integration) to produce replenishment policies and optimized vehicle routes, enabling data-driven reductions in stockouts and operational costs.",
    image:
      "/images/supply-sim/main_photo.png",
    tags: ["Go", "TypeScript", "React", "OR-Tools", "PostgreSQL", "Monte Carlo"],
    year: "2025",
    category: "Operations Research",
    content: "Detailed documentation goes here. Streams of data from IoT sensors feed into Kafka topics, where they are consumed by our system. Real-time visualization was powered by highly optimized D3.js components.",
    additionalMedia: [
      "/images/supply-sim/main_photo1.png",
      "/images/supply-sim/photo2.png",
      "/images/supply-sim/photo3.png",
      "/images/supply-sim/photo4.png",
    ],
    code: "https://github.com/nobleenia/supply-sim.git",
    demo: "",
  },
  {
    id: 6,
    title: "EmployeeHub — Employee Management Portal",
    description:
      "Developed a full-stack human resources platform to digitize employee lifecycles and streamline inter-departmental workflows. Features robust role-based access control, leave request processing, and automated onboarding checklists.",
    image:
      "/images/employee-hub/main_photo.png",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "JavaScript"],
    year: "2024",
    category: "Full Stack Development",
    content: "Built a comprehensive HR solution designed to centralize staff administration. Implemented secure authentication and middleware for role management (Admin vs. Employee). The backend utilizes Node.js and Express with a MongoDB database to handle complex relational workflows like document tracking, department organization, and leave requests. \
    The application is containerized with Docker for seamless deployment and features a responsive, vanilla JavaScript and HTML/CSS frontend for a lightweight, interactive user experience.",
    additionalMedia: [
      "/images/employee-hub/photo1.png",
      "/images/employee-hub/photo2.png",
    ],
    code: "https://github.com/nobleenia/employee-management.git",
    demo: "",
  },
  {
    id: 7,
    title: "MarketLens: Price Intelligence Platform",
    description:
      "Engineered an open-source market price intelligence platform empowering smallholder farmers in emerging markets. Architected a robust data pipeline and dual-interface system (USSD & Web) to deliver real-time, validated crop pricing and trend analysis.",
    image:
      "/images/marketlens/main_photo.png",
    tags: ["Go", "React", "PostgreSQL", "Redis", "Docker"],
    year: "2026",
    category: "Full-Stack Software Engineering",
    content: "MarketLens is a comprehensive market price intelligence platform designed to eliminate the information asymmetry faced by smallholder farmers in emerging markets. \
    I architected and engineered the end-to-end system, featuring a highly concurrent Go REST API backend, PostgreSQL for structured data storage, and Redis for rapid stateful USSD session management.\n\nThe core of the platform is a resilient data ingestion and processing pipeline that seamlessly aggregates pricing data from market enumerators and external APIs. \
    This pipeline evaluates incoming data using a custom confidence scoring algorithm to validate real-time crop prices, detect statistical outliers, and track daily price trends. To maximize impact and accessibility, the system distributes this intelligence through two distinct channels: a lightweight USSD gateway engineered specifically for basic feature phones used by farmers, and a comprehensive web dashboard.\
    \n\nThe frontend admin dashboard, built with React and Tailwind CSS, provides NGOs, aggregators, and system administrators with powerful tools for market trend visualization, anomaly detection, manual data overrides, and dataset exportation. By containerizing the entire infrastructure with Docker and establishing automated CI/CD workflows via GitHub Actions, the system achieves high reliability and scalable deployment cycles. \
    MarketLens ultimately empowers farmers to negotiate better rates, identify optimal selling locations, and significantly reduce post-harvest losses and reliance on middlemen.",
    additionalMedia: [
      "/images/marketlens/photo1.png",
      "/images/marketlens/photo2.png",
    ],
    code: "https://github.com/nobleenia/marketlens.git",
    demo: ""
  },
];
