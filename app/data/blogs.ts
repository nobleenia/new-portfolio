import digital_twin from "../blog_contents/digital_twin.md?raw";
import reinforcement from "../blog_contents/reinforcement.md?raw"
import when_supply from "../blog_contents/when_supply_chains_turn_political.md?raw"
import scalable from "../blog_contents/designing_scalable_data_pipelines_supply_chain_medium.md?raw"

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
    date: "September 28, 2025",
    readTime: "11 min read",
    tags: ["Reinforcement Learning", "AI", "Inventory"],
    content: reinforcement,
  },
  {
    id: 6,
    title: "Designing Scalable Data Pipelines for Supply Chain Analytics",
    excerpt:
      "Why the best supply chain decisions often depend on the quiet systems nobody notices until they fail.",
    image:
      "/images/blog/data_pipelines.png",
    date: "November 15, 2025",
    readTime: "15 min read",
    tags: ["Data Engineering", "Architecture", "Supply Chain"],
    content: scalable,
    externalLink: "",
  },
  {
    id: 7,
    title: "When Supply Chains Turn Political, Logistics Becomes a Software Problem",
    excerpt:
      "Why geopolitics, trade disruption, and modern logistics are pushing software engineering and operations research closer together.",
    image:
      "/images/blog/Global-Supply-Chain-Risk-Management.jpg",
    date: "June 27, 2025",
    readTime: "9 min read",
    tags: ["Supply Chains", "POlitics", "Logistics"],
    content: when_supply,
  },
  {
    id: 8,
    title: "Git: Hacks to Overcome Common Setbacks and Errors",
    excerpt:
      "This isn’t a cheatsheet if you desire to view a Git cheatsheet, kindly take a look here: https://education.github.com/git-cheat-sheet-education.pdf",
    image:
      "/images/blog/git.png",
    date: "February 9, 2024",
    readTime: "4 min read",
    tags: ["Git", "Guide", "Best Practices"],
    externalLink: "https://medium.com/@neluwah/git-hacks-to-overcome-common-setbacks-and-errors-d60771e11c44",
  },
  {
    id: 9,
    title: "A Child’s Errand: An Illustrative Journey to Understanding the Web (Unraveling the layers)",
    excerpt:
      "Summary of the web request journey as a complex process involving specific components like DNS resolution and database interactions. This understanding is valuable for aspiring software engineers, enabling them to navigate web development complexities and contribute to building robust applications.",
    image:
      "/images/blog/web.png",
    date: "January 21, 2024",
    readTime: "6 min read",
    tags: ["Software Engineering", "Architecture", "Best Practices"],
    externalLink: "https://medium.com/@neluwah/a-childs-errand-an-illustrative-journey-to-understanding-the-web-unraveling-the-layers-cf30652f655b",
  },
];
