import { useParams, Link, Navigate } from "react-router";
import { blogPosts } from "../data/blogs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import mermaid from "mermaid";

const Mermaid = ({ chart }: { chart: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && chart) {
      mermaid.render(`mermaid-${Math.random().toString(36).substring(2, 9)}`, chart)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch(e => console.error("Mermaid error", e));
    }
  }, [chart]);

  return <div ref={containerRef} className="my-6 overflow-x-auto flex justify-center" />;
};

export function BlogDetail() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top when loading a new blog post
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) return <Navigate to="/blog" replace />;

  const postIndex = blogPosts.findIndex((p) => p.id === parseInt(id));
  const post = blogPosts[postIndex];

  if (!post) return <Navigate to="/blog" replace />;

  // If this post is strictly external, we shouldn't really be on this internal page. 
  // However, just in case user ends up here, we show a redirect fallback or link.
  if (post.externalLink) {
    // Optionally automatically redirect or show an interstitial page
    window.location.href = post.externalLink;
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center">
        <p>Redirecting to external publication...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-neutral-950 min-h-screen">
      {/* Blog Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Image */}
      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="w-full bg-neutral-100 dark:bg-neutral-900 aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {post.content ? (
              <ReactMarkdown
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    if (match && match[1] === "mermaid") {
                      return <Mermaid chart={String(children).replace(/\n$/, "")} />;
                    }
                    return (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Navigation matching prototype */}
      <section className="py-20 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            <Link
              to="/blog"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              ALL ARTICLES
            </Link>

            {blogPosts.map((p) => {
              const isActive = p.id === post.id;
              if (p.externalLink) {
                return (
                  <div key={p.id} className="flex items-center gap-4">
                    <span>/</span>
                    <a
                      href={p.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {p.title.split(" ")[0]} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                );
              }
              return (
                <div key={p.id} className="flex items-center gap-4">
                  <span>/</span>
                  <Link
                    to={`/blog/${p.id}`}
                    className={`hover:text-neutral-900 dark:hover:text-white transition-colors ${
                      isActive ? "text-neutral-900 dark:text-white font-bold" : ""
                    }`}
                  >
                    {/* Showing a shorter version of titles on bottom nav to prevent massive wrapping on blogs */}
                    {p.title.split(" ").slice(0, 3).join(" ")}...
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
