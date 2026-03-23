import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Demand Forecasting System",
      description:
        "Built an end-to-end ML pipeline for demand forecasting using LSTM networks and ensemble methods. Reduced forecast error by 35% and improved inventory turnover by 22%.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc3MzY2NTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
      year: "2026",
      category: "Machine Learning",
    },
    {
      id: 2,
      title: "Warehouse Optimization Platform",
      description:
        "Developed AI-driven warehouse layout optimization using genetic algorithms and discrete event simulation. Increased picking efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MzcyNDc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Optimization", "SimPy", "Vue.js"],
      year: "2025",
      category: "Operations Research",
    },
    {
      id: 3,
      title: "Supply Chain Network Design",
      description:
        "Strategic network optimization for global distribution using mixed-integer programming. Optimized facility locations and transportation modes.",
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG5ldHdvcmslMjBtYXB8ZW58MXx8fHwxNzczNjU2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Gurobi", "Network Analysis", "GIS"],
      year: "2025",
      category: "Optimization",
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for supply chain KPIs with real-time data processing and anomaly detection. Used by 500+ operations managers daily.",
      image: "https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzczODk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "D3.js", "Apache Kafka", "MongoDB"],
      year: "2025",
      category: "Data Visualization",
    },
    {
      id: 5,
      title: "Inventory Management System",
      description:
        "Smart inventory optimization using reinforcement learning. Dynamically adjusts safety stock levels based on demand patterns and lead time variability.",
      image: "https://images.unsplash.com/photo-1715635795252-38b8f66026d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc3MzcyNjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "PyTorch", "FastAPI", "Redis"],
      year: "2024",
      category: "Machine Learning",
    },
    {
      id: 6,
      title: "Route Optimization Engine",
      description:
        "Vehicle routing optimization for last-mile delivery using constraint programming and metaheuristics. Reduced delivery costs by 28%.",
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG5ldHdvcmslMjBtYXB8ZW58MXx8fHwxNzczNjU2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "OR-Tools", "Google Maps API"],
      year: "2024",
      category: "Optimization",
    },
  ];

  return (
    <div className="w-full">
      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-600 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
                      {project.year}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
