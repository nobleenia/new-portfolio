import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8 tracking-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                Whether you have a question about my work, want to discuss a
                potential project, or just want to connect, feel free to reach
                out. I'm always open to exploring new opportunities and
                challenges in tech.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">Email</h3>
                    <a
                      href="mailto:hello@datachain.com"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      neluwah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/nobleeluwah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      linkedin.com/in/nobleeluwah
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">GitHub</h3>
                    <a
                      href="https://github.com/nobleenia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      github.com/nobleenia
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">Location</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Rouen, Normandie, France.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg mb-2 tracking-tight">
                  Available for Consulting
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  I'm currently available for consulting projects in software engineering, data science, supply
                  chain optimization, and ML system design.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
                I typically respond within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-2 tracking-tight">
                What types of projects do you work on?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I specialize in supply chain optimization, demand forecasting,
                inventory management, and building data-driven decision systems.
                I work on both consulting projects and full-time opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2 tracking-tight">
                What is your typical engagement model?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I work on both project-based and retainer arrangements,
                depending on the scope and timeline. I'm flexible and can adapt
                to your team's needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2 tracking-tight">
                Do you offer training or workshops?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Yes, I conduct workshops and training sessions on data science,
                machine learning, and optimization for supply chain teams.
                Contact me to discuss your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
