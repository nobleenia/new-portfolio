import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { blogPosts } from "../data/blogs";

export function Blog() {
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
              {blogPosts[0].externalLink ? (
                <a
                  href={blogPosts[0].externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-wide text-neutral-900 dark:text-neutral-100 hover:gap-3 transition-all"
                >
                  Read Article (External)
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 text-sm tracking-wide text-neutral-900 dark:text-neutral-100 hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl mb-12 tracking-tight">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => {
              const ContentWrapper = post.externalLink ? "a" : Link;
              const wrapperProps = post.externalLink
                ? { href: post.externalLink, target: "_blank", rel: "noopener noreferrer" }
                : { to: `/blog/${post.id}` };

              return (
                <ContentWrapper
                  key={post.id}
                  {...wrapperProps}
                  className="group cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-600 transition-colors block"
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
                      {post.externalLink && <ArrowRight className="inline ml-2 w-4 h-4" />}
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
                </ContentWrapper>
              );
            })}
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
