export const projects = [
  {
    id: 1,
    title: "Demand Forecasting System",
    description:
      "Built an end-to-end ML pipeline for demand forecasting using LSTM networks and ensemble methods. Reduced forecast error by 35% and improved inventory turnover by 22%.",
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc3MzY2NTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
    year: "2026",
    category: "Machine Learning",
    content: "Detailed documentation goes here. We implemented a robust LSTM architecture with an attention mechanism to capture long-term dependencies in the supply chain data. The frontend is built with React allowing users to interact with forecasts and adjust parameters dynamically.",
  },
  {
    id: 2,
    title: "Warehouse Optimization Platform",
    description:
      "Developed AI-driven warehouse layout optimization using genetic algorithms and discrete event simulation. Increased picking efficiency by 40%.",
    image:
      "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MzcyNDc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Optimization", "SimPy", "Vue.js"],
    year: "2025",
    category: "Operations Research",
    content: "Detailed documentation goes here. Using a discrete event simulation model (SimPy), we were able to test various warehouse layouts before physical deployment.",
  },
  {
    id: 3,
    title: "Supply Chain Network Design",
    description:
      "Strategic network optimization for global distribution using mixed-integer programming. Optimized facility locations and transportation modes.",
    image:
      "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG5ldHdvcmslMjBtYXB8ZW58MXx8fHwxNzczNjU2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Gurobi", "Network Analysis", "GIS"],
    year: "2025",
    category: "Optimization",
    content: "Detailed documentation goes here. We formulated the network design problem as a Mixed-Integer Linear Program and solved it using Gurobi. Geospatial data was mapped directly using GIS tools.",
  },
  {
    id: 4,
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive dashboard for supply chain KPIs with real-time data processing and anomaly detection. Used by 500+ operations managers daily.",
    image:
      "https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzczODk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "D3.js", "Apache Kafka", "MongoDB"],
    year: "2025",
    category: "Data Visualization",
    content: "Detailed documentation goes here. Streams of data from IoT sensors feed into Kafka topics, where they are consumed by our system. Real-time visualization was powered by highly optimized D3.js components.",
  },
  {
    id: 5,
    title: "Inventory Management System",
    description:
      "Smart inventory optimization using reinforcement learning. Dynamically adjusts safety stock levels based on demand patterns and lead time variability.",
    image:
      "https://images.unsplash.com/photo-1715635795252-38b8f66026d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc3MzcyNjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "PyTorch", "FastAPI", "Redis"],
    year: "2024",
    category: "Machine Learning",
    content: "Detailed documentation goes here. Deployed via FastAPI, the RL agent dynamically re-routes orders and re-calculates safety stock parameters upon incoming order updates.",
  },
  {
    id: 6,
    title: "Route Optimization Engine",
    description:
      "Vehicle routing optimization for last-mile delivery using constraint programming and metaheuristics. Reduced delivery costs by 28%.",
    image:
      "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG5ldHdvcmslMjBtYXB8ZW58MXx8fHwxNzczNjU2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "OR-Tools", "Google Maps API"],
    year: "2024",
    category: "Optimization",
    content: "Detailed documentation goes here. Using Google OR-Tools, we implemented a highly efficient CVPR (Capacitated Vehicle Routing Problem) solver. It takes real-time traffic data from Google Maps API to refine its initial estimations.",
    additionalMedia: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3NzM3Mzg5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3N8ZW58MHx8fHwxNzczNzM4OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
];
