import digital_twin from "../blog_contents/digital_twin.md?raw";
import reinforcement from "../blog_contents/reinforcement.md?raw"

export const blogPosts = [
  {
    id: 1,
    title: "Implementing LSTM Networks for Demand Forecasting",
    excerpt:
      "A deep dive into building robust demand forecasting models using Long Short-Term Memory networks and how they outperform traditional time series methods.",
    image:
      "/images/blog/lstm.png",
    date: "March 10, 2026",
    readTime: "3 min read",
    tags: ["Machine Learning", "Python", "Supply Chain"],
    externalLink: "https://medium.com/@neluwah/implementing-lstm-networks-for-demand-forecasting-b0a78269b3dc"
  },
  {
    id: 2,
    title: "Optimization Algorithms for Vehicle Routing Problems",
    excerpt:
      "Exploring metaheuristic approaches to solve complex vehicle routing problems with time windows and capacity constraints.",
    image:
      "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG5ldHdvcmslMjBtYXB8ZW58MXx8fHwxNzczNjU2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "March 1, 2026",
    readTime: "12 min read",
    tags: ["Optimization", "Operations Research"],
    externalLink: "https://medium.com/@noble/optimization-algorithms",
  },
  {
    id: 3,
    title: "Building Real-time Analytics with Apache Kafka",
    excerpt:
      "How to design and implement streaming data pipelines for real-time supply chain monitoring and alerting.",
    image:
      "/images/blog/real_time_analytics.png",
    date: "February 20, 2026",
    readTime: "15 min read",
    tags: ["Data Engineering", "Kafka", "Real-time"],
    content: "Here we discuss real-time consumer and producer setups using Kafka..."
  },
  {
    id: 4,
    title: "The Role of Digital Twins in Supply Chain Optimization",
    excerpt:
      "Supply-chain managers have long combined planning models, dashboards, and simulation studies to support decisions. Digital twins promise to connect these activities more tightly by linking a live or regularly refreshed representation of a supply chain to operational data, scenario analysis, prediction, and decision support. \
      The term, however, is often used loosely. This article offers a focused review of foundational and recent literature to clarify what a supply-chain digital twin is, what it is not, where it creates decision value, and why many initiatives stop short of a fully functional twin. \
      The discussion shows that the strongest business case is not visualisation alone, but the ability to test options before acting in the physical system. The article also argues that many current implementations are better described as digital shadows or partial twins because they lack strong feedback loops, robust integration across organisational boundaries, or decision logic that meaningfully changes operations. \
      For researchers, the paper identifies a need for clearer maturity models, stronger evaluation designs, and more evidence on when digital twins improve cost, service, and resilience together. For practitioners, it outlines a staged path from fragmented data and static models toward operationally useful twins that support planning, disruption response, and optimisation.",
    image:
      "/images/blog/digital_twin.jpg",
    date: "February 10, 2026",
    readTime: "40 min read",
    tags: ["Digital Twins", "Simulation", "Innovation"],
    content: digital_twin,
  },
  {
    id: 5,
    title: "Reinforcement Learning for Inventory Management",
    excerpt:
      "Applying deep reinforcement learning to dynamic inventory control problems and achieving superior performance.",
    image:
      "https://images.unsplash.com/photo-1715635795252-38b8f66026d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc3MzcyNjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "January 28, 2026",
    readTime: "11 min read",
    tags: ["Reinforcement Learning", "AI", "Inventory"],
    content: reinforcement,
  },
  {
    id: 6,
    title: "Designing Scalable Data Pipelines for Supply Chain Analytics",
    excerpt:
      "Best practices for building robust, scalable data pipelines that power enterprise supply chain analytics platforms.",
    image:
      "/images/blog/data_pipelines.png",
    date: "January 15, 2026",
    readTime: "9 min read",
    tags: ["Data Engineering", "Architecture", "Best Practices"],
    content: "Discussing orchestration tools like Airflow and Prefect for large-scale data workflows...",
  },
];
