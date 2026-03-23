import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, BookOpen, Briefcase, GraduationCap, House } from "lucide-react";

export function About() {
  const skills = [
    {
      category: "Programming",
      items: ["JavaScript/TypeScript", "Go", "Python", "C", "Solidity", "R", "SQL"],
    },
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Prophet"],
    },
    {
      category: "Optimization",
      items: ["Gurobi", "OR-Tools", "CPLEX", "PuLP", "Genetic Algorithms"],
    },
    {
      category: "Data Engineering",
      items: ["Apache Spark", "Kafka", "Airflow", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Visualization",
      items: ["React", "D3.js", "Tableau", "Plotly", "Power BI"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
    },
  ];

  const experience = [
    {
      title: "Senior Data Scientist",
      company: "Global Logistics Corp",
      period: "2024 - Present",
      description:
        "Leading data science initiatives for supply chain optimization. Built ML models for demand forecasting and inventory management.",
    },
    {
      title: "Operations Research Analyst",
      company: "Supply Chain Solutions Inc",
      period: "2022 - 2024",
      description:
        "Developed optimization algorithms for warehouse layout and transportation routing. Improved operational efficiency by 30%.",
    },
    {
      title: "Data Engineer",
      company: "Tech Innovations Ltd",
      period: "2020 - 2022",
      description:
        "Built data pipelines and analytics infrastructure. Processed 10TB+ of supply chain data daily.",
    },
  ];

  const education = [
    {
      degree: "M.S. in Software Engineering",
      institution: "Campus Saint-Marc - ZONE01",
      year: "2026",
    },
    {
      degree: "M.S. in Industrial Engineering (Supply Chain Management)",
      institution: "L'Institut polytechnique de Grenoble - Grenoble INP",
      year: "2021",
    },
    {
      degree: "B.S. in Industrial Tech",
      institution: "University of Nigeria, Nsukka",
      year: "2014",
    },
  ];

  const bootcamps = [
    {
      degree: "Diploma. in Full Stack Development",
      institution: "ALX Africa, Holberton Schools",
      year: "2024",
    },
  ]

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional Data Engineer",
    "APICS CPIM (Certified in Production and Inventory Management)",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl mb-6 tracking-tight">
                Noble ELUWAH
              </h1>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  I'm a software engineer and data scientist specializing in
                  operations and supply chain decision systems. With a passion
                  for solving complex optimization problems, I bridge the gap
                  between data science and real-world logistics challenges.
                </p>
                <p>
                  My work focuses on building intelligent systems that leverage
                  machine learning, optimization algorithms, and advanced
                  analytics to drive operational excellence. From demand
                  forecasting to network design, I create solutions that deliver
                  measurable business impact.
                </p>
                <p>
                  I believe in the power of data-driven decision making and
                  enjoy working at the intersection of technology and operations
                  to transform how companies manage their supply chains.
                </p>
                <p>
                  I'm a software engineer and data scientist specializing in
                  operations and supply chain decision systems. With a passion
                  for solving complex optimization problems, I bridge the gap
                  between data science and real-world logistics challenges.
                </p>
                <p>
                  My work focuses on building intelligent systems that leverage
                  machine learning, optimization algorithms, and advanced
                  analytics to drive operational excellence. From demand
                  forecasting to network design, I create solutions that deliver
                  measurable business impact.
                </p>
                <p>
                  I believe in the power of data-driven decision making and
                  enjoy working at the intersection of technology and operations
                  to transform how companies manage their supply chains.
                </p>
                <p>
                  I'm a software engineer and data scientist specializing in
                  operations and supply chain decision systems. With a passion
                  for solving complex optimization problems, I bridge the gap
                  between data science and real-world logistics challenges.
                </p>
                <p>
                  My work focuses on building intelligent systems that leverage
                  machine learning, optimization algorithms, and advanced
                  analytics to drive operational excellence. From demand
                  forecasting to network design, I create solutions that deliver
                  measurable business impact.
                </p>
                <p>
                  I believe in the power of data-driven decision making and
                  enjoy working at the intersection of technology and operations
                  to transform how companies manage their supply chains.
                </p>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-2xl shadow-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610576660982-9eab5683cb42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW50aXN0JTIwd29ya2luZ3xlbnwxfHx8fDE3NzM3Mzg5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6" />
            <h2 className="text-3xl tracking-tight">Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 pb-8"
              >
                <h3 className="text-xl mb-1 tracking-tight">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <span className="text-neutral-600 dark:text-neutral-400">{exp.company}</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">{exp.period}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-3xl tracking-tight">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg mb-4 tracking-tight">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 w-full">
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6" />
                <h2 className="text-3xl tracking-tight">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-xl mb-1 tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{edu.institution}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6" />
                <h2 className="text-3xl tracking-tight">Certifications</h2>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-8">
                <House className="w-6 h-6" />
                <h2 className="text-3xl tracking-tight">Bootcamps</h2>
              </div>
              <div className="space-y-6">
                {bootcamps.map((boot, index) => (
                  <div key={index}>
                    <h3 className="text-xl mb-1 tracking-tight">
                      {boot.degree}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{boot.institution}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">{boot.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
