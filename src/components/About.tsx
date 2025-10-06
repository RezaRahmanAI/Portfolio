import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Code,
  Users,
  Award,
  Calendar,
  MapPin,
  Briefcase,
  Brain,
} from "lucide-react";

const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Animation variants
  const fadeIn = (direction: string, delay: number) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    },
  });

  const textVariant = (delay: number) => ({
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    },
  });

  const stats = [
    { number: "13+", label: "Projects Completed", icon: Code },
    { number: "30+", label: "Developers Trained", icon: Users },
    { number: "2", label: "Years Experience", icon: Calendar },
    { number: "80%", label: "Performance Boost", icon: Award },
  ];

  const experiences = [
    {
      title: "Software Engineer & Technical Trainer",
      company: "Object Canvas Technology",
      period: "Jan 2024 - Present",
      location: "Full-time",
      description:
        "Developed 3 solo full-stack projects and contributed to 10+ company projects using .NET Core API and Angular. Optimized large-scale database queries improving performance by 80%. Mentored and trained 30+ junior developers in .NET technologies, improving team productivity by 40%.",
      color: "from-primary to-primary-light",
      icon: Briefcase,
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Head Blocks",
      period: "Aug 2023 - Dec 2023",
      location: "Internship",
      description:
        "Developed an OCR application for number plate recognition using Python and computer vision libraries, achieving high accuracy on real-world data. Processed 7,000+ images with NumPy, Pandas, and scikit-learn for data preprocessing and feature extraction.",
      color: "from-accent to-secondary",
      icon: Brain,
    },
    {
      title: ".NET Developer Intern",
      company: "Object Canvas Technology",
      period: "May 2023 - Aug 2023",
      location: "Internship",
      description:
        "Developed web applications and collaborated on client projects using .NET Framework and ASP.NET MVC. Gained hands-on experience in enterprise development patterns with comprehensive database integration solutions.",
      color: "from-secondary to-accent",
      icon: Code,
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-3xl md:text-4xl font-bold mb-4 pb-4 text-gray-900"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Passionate full-stack developer specializing in .NET Core and
            Angular with expertise in microservices architecture and a proven
            track record of optimizing enterprise applications
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile & Description */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src="about.jpg"
                        alt="Rizve Rahman Reza"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Rizve Rahman Reza
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Software Engineer & Technical Trainer
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Currently working as a Software Engineer & Technical Trainer
                  at Object Canvas Technology, where I specialize in building
                  scalable full-stack applications using .NET Core, Angular, and
                  microservices architecture. I have successfully delivered 3
                  solo projects and contributed to 10+ enterprise applications
                  while optimizing database queries to achieve 80% performance
                  improvements.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Beyond development, I'm passionate about mentoring and have
                  trained 30+ junior developers in .NET technologies, improving
                  team productivity by 40% and establishing comprehensive coding
                  standards. My experience spans from enterprise e-commerce
                  platforms to real-time collaborative systems.
                </p>
              </div>

              {/* Download Resume Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
              >
                <a
                  href="/cv/Rizve_Rahman_Reza_CV.pdf"
                  download="Rizve_Rahman_Reza_CV.pdf"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all overflow-hidden shadow-lg hover:shadow-xl"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Download size={18} className="relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn("up", 0.5 + index * 0.1)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 group hover:border-blue-200 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 mb-3 group-hover:from-blue-100 group-hover:to-purple-100 transition-all">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </h4>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                Professional Journey
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500"></div>

                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", 0.6 + index * 0.2)}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="relative flex gap-6 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(to bottom right, #3b82f6, #60a5fa)"
                            : index === 1
                            ? "linear-gradient(to bottom right, #8b5cf6, #a78bfa)"
                            : "linear-gradient(to bottom right, #6366f1, #818cf8)",
                      }}
                    >
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition-all group">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors text-gray-900">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                          {exp.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-medium text-blue-600">
                          {exp.company}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
