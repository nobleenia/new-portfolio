import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Implementing LSTM Networks for Demand Forecasting",
      excerpt:
        "A deep dive into building robust demand forecasting models using Long Short-Term Memory networks and how they outperform traditional time series methods.",
      image: "https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzczODk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 10, 2026",
      readTime: "8 min read",
      tags: ["Machine Learning", "Python", "Supply Chain"],
    },
    {
      id: 2,
      title: "Optimization Algorithms for Vehicle Routing Problems",
      excerpt:
        "Exploring metaheuristic approaches to solve complex vehicle routing problems with time windows and capacity constraints.",
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG5ldHdvcmslMjBtYXB8ZW58MXx8fHwxNzczNjU2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 1, 2026",
      readTime: "12 min read",
      tags: ["Optimization", "Operations Research"],
    },
    {
      id: 3,
      title: "Building Real-time Analytics with Apache Kafka",
      excerpt:
        "How to design and implement streaming data pipelines for real-time supply chain monitoring and alerting.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc3MzY2NTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 20, 2026",
      readTime: "10 min read",
      tags: ["Data Engineering", "Kafka", "Real-time"],
    },
    {
      id: 4,
      title: "The Role of Digital Twins in Supply Chain Optimization",
      excerpt:
        "Understanding how digital twin technology can revolutionize supply chain planning and decision-making processes.",
      image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MzcyNDc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 10, 2026",
      readTime: "7 min read",
      tags: ["Digital Twins", "Simulation", "Innovation"],
    },
    {
      id: 5,
      title: "Reinforcement Learning for Inventory Management",
      excerpt:
        "Applying deep reinforcement learning to dynamic inventory control problems and achieving superior performance.",
      image: "https://images.unsplash.com/photo-1715635795252-38b8f66026d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc3MzcyNjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "January 28, 2026",
      readTime: "11 min read",
      tags: ["Reinforcement Learning", "AI", "Inventory"],
    },
    {
      id: 6,
      title: "Designing Scalable Data Pipelines for Supply Chain Analytics",
      excerpt:
        "Best practices for building robust, scalable data pipelines that power enterprise supply chain analytics platforms.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc3MzY2NTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "January 15, 2026",
      readTime: "9 min read",
      tags: ["Data Engineering", "Architecture", "Best Practices"],
    },
  ];

  return (
    <div className="w-full">
      {/* Featured Post */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400 mb-6">
            FEATURED POST
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 lg:p-12">
            <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <ImageWithFallback
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {blogPosts[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl mb-4 tracking-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <button className="inline-flex items-center gap-2 text-sm tracking-wide text-neutral-900 dark:text-neutral-100 hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl mb-12 tracking-tight">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-600 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl mb-3 tracking-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-neutral-900 dark:bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">
            Stay Updated
          </h2>
          <p className="text-lg text-neutral-400 dark:text-neutral-500 mb-8">
            Get the latest articles on data science and supply chain
            optimization delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 outline-none"
            />
            <button className="px-6 py-3 bg-white dark:bg-neutral-100 text-neutral-900 dark:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
