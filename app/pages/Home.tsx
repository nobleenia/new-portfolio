import { Link } from "react-router";
import { ArrowRight, BarChart3, Network, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Demand Forecasting System",
      description: "ML-powered demand prediction for retail supply chains",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc3MzY2NTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      id: 2,
      title: "Warehouse Optimization",
      description: "AI-driven layout and routing optimization",
      image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MzcyNDc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Optimization", "Python", "Simulation"],
    },
    {
      id: 3,
      title: "Supply Chain Network Design",
      description: "Strategic network optimization for global distribution",
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG5ldHdvcmslMjBtYXB8ZW58MXx8fHwxNzczNjU2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Network Analysis", "Optimization", "GIS"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-28 md:py-40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
              <span className="text-xs tracking-wide text-neutral-700 dark:text-neutral-300">
                Software Engineer · Data Science
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              Building Intelligent
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">Supply Chain Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-2xl">
              Specializing in data-driven decision systems for operations and
              supply chain optimization. Transforming complex logistics
              challenges into elegant, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors group"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-12 tracking-tight">
            Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3 tracking-tight">
                Predictive Analytics
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Machine learning models for demand forecasting, inventory
                optimization, and risk prediction in complex supply chains.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3 tracking-tight">
                Network Optimization
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Strategic design and optimization of distribution networks,
                warehouse locations, and transportation routes.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3 tracking-tight">
                Decision Systems
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Real-time dashboards and decision support tools that turn data
                into actionable insights for operations teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Featured Projects
            </h2>
            <Link
              to="/projects"
              className="text-sm tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hidden md:flex items-center gap-2 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-600 transition-colors block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 dark:bg-neutral-950 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-neutral-400 dark:text-neutral-500 mb-8 max-w-2xl mx-auto">
            Have a complex supply chain challenge? Let's discuss how data
            science can drive your operational excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-neutral-100 text-neutral-900 dark:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-colors"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}