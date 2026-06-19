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
    title: "CityBuzz Transport & Traffic Module",
    description:
      "Developed the transport and traffic feature of CityBuzz, a Rouen-focused local platform, using GTFS-based public transport data to display mobility information through an interactive, responsive and user-friendly interface. The module helps users explore nearby transport options, route information, stops, service context and city movement data in a practical urban mobility experience.",
    image: 
      "/images/citybuzz/main_photo.png",
    tags: [
      "GTFS",
      "JavaScript",
      "React",
      "Next.js",
      "API Integration",
      "Transport Data",
      "Geolocation",
      "Responsive UI",
      "Data Parsing",
    ],
    year: "2026",
    category: "Web Application",
    content:
      "CityBuzz is a local digital platform designed around everyday life in Rouen, bringing together city updates, community content, local discovery and mobility information. I contributed to the project by building the transport and traffic module, which focuses on helping users understand and access public transport information from inside the CityBuzz application. \
      \
      The feature was built around GTFS-based transport data. GTFS, the General Transit Feed Specification, is a standard format used to describe public transport networks through structured files such as routes, stops, trips and stop times. In this module, GTFS data was used to organise transport information in a way that could be rendered clearly in the user interface and connected to real user journeys. \
      \
      My work involved transforming raw transport data into a usable frontend experience. This included handling transport entities such as stops, lines, route metadata and timetable-related information, then presenting them through a clean and responsive interface. The goal was not only to display data, but to make it understandable for users who need quick mobility information while moving around the city. \
      \
      From a technical perspective, the transport module required data parsing, API integration, conditional rendering, map-based interaction and responsive layout design. The feature was structured to support transport discovery, location-aware usage, and clear visual organisation of mobility information. It also required careful handling of loading states, missing data, empty results and user interactions so that the interface remained stable and practical even when transport data was incomplete or unavailable. \
      \
      The mapping aspect of the feature was particularly important. Interactive maps are useful for transport applications because users need spatial context: where a stop is, how close it is, and how it relates to the surrounding city. The module was therefore designed with map-friendly transport data, location-based thinking and mobile-first usability in mind. \
      \
      This project demonstrates my ability to work with real-world civic and transport data, convert structured datasets into user-facing product features, and build practical interfaces for urban mobility. It also shows experience with GTFS concepts, frontend architecture, data-driven UI, geolocation-aware design, interactive mapping, and the integration of city services into a broader web application.",
    additionalMedia: [
      "/images/citybuzz/photo1.png",
      "/images/citybuzz/photo2.png",
      "/images/citybuzz/photo3.png",
      "/images/citybuzz/photo4.png",
    ],
    code: "",
    demo: "https://citybuzzapp.com/traffic",
  },
  {
    id: 3,
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
    id: 4,
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
    demo: "https://quizapp-dh2v.onrender.com",
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    demo: "https://employee-management-eijh.onrender.com",
  },
  {
    id: 8,
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
  {
    id: 9,
    title: "GraphQL Profile Dashboard",
    description: "Built a responsive Zone01 profile analytics dashboard that authenticates users, retrieves learning data through the Zone01 GraphQL API, and visualises XP progression, audit ratio, project results, skills, and pass/fail statistics through a clean client-side interface.",
    image: "/images/graphql-dashboard/photo2.png",
    tags: ["HTML5", "CSS3", "JavaScript", "GraphQL", "JWT"],
    year: "2026",
    category: "Front-End Software Engineering",
    content: "GraphQL Profile Dashboard is a responsive client-side web application built to interact with the Zone01 GraphQL platform. The application allows a Zone01 user to sign in with their email or username and password, retrieves a JWT token through Basic Auth, stores the token in localStorage, and uses it to send authenticated GraphQL requests directly from the browser.\
    \n\nThe dashboard transforms raw GraphQL data into useful learning analytics, including user identification details, audit ratio, total XP, XP transaction count, latest XP, skills count, passed and failed projects, pass rate, and recent progress records. I implemented multiple GraphQL queries covering user information, XP transactions, skill transactions, and nested result records with related object data.\
    \n\nA key part of the project is the custom data-processing layer. The application calculates total XP from transaction records, builds a cumulative XP timeline, counts unique skills, evaluates project results, and derives pass/fail statistics before rendering the final dashboard. This demonstrates practical handling of authenticated API data, client-side transformation, and structured UI presentation.\
    \n\nThe visual analytics were implemented manually using SVG rather than an external charting library. The dashboard includes a cumulative XP line chart and a pass/fail ratio bar chart, showing both technical understanding of SVG rendering and the ability to create lightweight visual components without additional dependencies.\n\nThe interface was built with plain HTML, CSS, and modern JavaScript modules, with no frontend framework, bundler, or build step. \
    The layout is fully responsive, adapting from a desktop sidebar dashboard to tablet and mobile-friendly stacked sections. The project also includes practical deployment guidance for Netlify and security notes covering token storage, logout behaviour, and production-grade improvements such as backend proxies, HTTP-only cookies, and stronger session handling.",
    additionalMedia: [ 
      "/images/graphql-dashboard/photo1.png", 
      "/images/graphql-dashboard/photo2.png",
      "/images/graphql-dashboard/photo3.png",
    ],
    code: "https://zone01normandie.org/git/neluwah/graphql.git",
    demo: "https://graphql-dashboard.netlify.app/",
  },
];