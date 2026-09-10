import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AmarthaFin & AmarthaPartners Ecosystem",
    role: "Software Engineer",
    description:
      "Mission-critical nationwide microfinance mobile platforms. Architected resilient offline-first transactional architectures, multi-module Kotlin & Flutter codebase, custom dynamic widget rendering library, and Firebase Remote Config feature gating, maintaining a 99.81% crash-free rate across production releases.",
    tags: ["Flutter", "Kotlin", "Firebase", "Jetpack Compose", "Golang", "Next.js"],
    image: "/assets/amarthafin.jpg",
  },
  {
    id: 2,
    title: "POST – Point of Sale & Merchant Banking (Payfazz)",
    role: "Android Engineer",
    description:
      "Comprehensive merchant point-of-sale Android application featuring QRIS barcode payment gateway integration, subscription handling, shift management, Datadog observability, and automated CodeMagic CI/CD deployment to Google Play Store.",
    tags: ["Android SDK", "Kotlin", "QRIS Payments", "Datadog", "CodeMagic CI/CD"],
    image: "/assets/post.png",
  },
  {
    id: 3,
    title: "Koinworks",
    role: "Android Engineer (PT Sejahtera Lunaria Annua)",
    description:
      "Engineered automated investment workflows with the Robo Daily Tenure feature and integrated top Indonesian digital e-wallets (ShopeePay and OVO) alongside MVVM architectural refactoring for high-throughput financial transactions.",
    tags: ["Android", "MVVM", "ShopeePay", "OVO Gateway", "Fintech"],
    image: "/assets/koinworks.jpeg",
  },
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-4 space-y-3">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <div>
                <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>
                {project.role && (
                  <p className="text-zinc-400 font-medium text-xs lg:text-sm mt-1">
                    {project.role}
                  </p>
                )}
              </div>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>

              {project.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs text-zinc-300 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={project.link}
                className="text-white mt-4 inline-flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
