import { useState } from "react";
import { motion } from "framer-motion";
import { FaJava, FaAward, FaBuilding } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import {
  SiKotlin,
  SiFlutter,
  SiAndroid,
  SiFirebase,
  SiDart,
  SiJetpackcompose,
  SiGo,
  SiDocker,
} from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Kotlin", icon: <SiKotlin size={46} /> },
    { id: 2, name: "Flutter", icon: <SiFlutter size={46} /> },
    { id: 3, name: "Android SDK", icon: <SiAndroid size={46} /> },
    { id: 4, name: "Jetpack Compose", icon: <SiJetpackcompose size={46} /> },
    { id: 5, name: "Dart", icon: <SiDart size={46} /> },
    { id: 6, name: "Firebase", icon: <SiFirebase size={46} /> },
    { id: 7, name: "Docker", icon: <SiDocker size={46} /> },
    { id: 8, name: "CI/CD & Git", icon: <FaGitAlt size={46} /> },
    { id: 9, name: "Java", icon: <FaJava size={46} /> },
    { id: 10, name: "Next.js", icon: <RiNextjsFill size={46} /> },
    { id: 11, name: "Golang", icon: <SiGo size={46} /> },
    { id: 12, name: "Figma", icon: <CgFigma size={46} /> },
  ]);

  const [competencies] = useState([
    {
      category: "FinTech & Systems",
      items: [
        "Offline-First Transaction Sync",
        "Daily Closing Reconciliation",
        "Cash Handling Revamp",
        "Digital Payment Gateways (QRIS, ShopeePay, OVO, VA, Poket)",
        "Digital Loan Book (DLB)",
      ],
    },
    {
      category: "Architecture & DevOps",
      items: [
        "Clean Architecture & MVVM",
        "Multi-Module Architecture",
        "Firebase Remote Config & A/B Testing",
        "Bitbucket & CodeMagic CI/CD",
        "Datadog, Grafana & Crashlytics",
        "Unit Testing (JUnit, MockK, Mockito)",
      ],
    },
    {
      category: "Leadership & Governance",
      items: [
        "Technical Review Documents (TRD)",
        "Request For Comments (RFC)",
        "Release PIC & Gatekeeper",
        "99.81% Crash-Free Session Rate",
        "Agile/Scrum Sprint Planning",
      ],
    },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "PT Amartha Mikro Fintech",
      role: "Software Engineer",
      period: "12/2022 - Present",
      bullets: [
        "Managed deployment lifecycle by uploading iOS builds to TestFlight and APK releases to Google Play Store, ensuring smooth, compliant release cycles.",
        "Migrated extensive features from AmarthaFin Kotlin codebase to Flutter, significantly improving development efficiency, performance, and long-term maintainability.",
        "Developed custom dynamic widget library, enabling flexible UI rendering, reusable components, and modular interface customization.",
        "Spearheaded runtime configuration management via Firebase Remote Config, enabling automated force updates, maintenance routing, and zero-downtime rollouts.",
        "Refactored complex XML View hierarchies into lightweight, decoupled Jetpack Compose components, eliminating view-binding technical debt.",
        "Designed an AI-assisted Bitbucket CI/CD review pipeline to automate pull request validation and streamline engineering workflows.",
        "Integrated Firebase Crashlytics & real-time notifications, sustaining a 99.81% crash-free session rate across production releases.",
        "Authored Technical Review Documents (TRD) and facilitated RFC documents to align engineering teams on major architectural initiatives.",
      ],
      tags: ["Flutter", "Kotlin", "Jetpack Compose", "Firebase", "CI/CD", "Bitbucket", "Docker", "Golang", "Next.js"],
    },
    {
      id: 2,
      company: "PT Sejahtera Lunaria Annua",
      role: "Android Engineer",
      period: "05/2022 - 11/2022",
      bullets: [
        "Successfully integrated digital payment solutions including ShopeePay and OVO, enhancing transaction efficiency and user convenience.",
        "Designed and implemented the Robo Daily Tenure automated investment feature, optimizing operational workflows.",
        "Refactored application architecture to MVVM design pattern, significantly boosting scalability and maintainability.",
        "Implemented comprehensive general error handling and maintained unit test suites to reduce regression issues.",
        "Monitored and maintained app health using Firebase Crashlytics.",
      ],
      tags: ["Android SDK", "Kotlin", "MVVM", "ShopeePay", "OVO", "Firebase Crashlytics", "Unit Testing"],
    },
    {
      id: 3,
      company: "PT Payfazz Teknologi Nusantara",
      role: "Android Engineer",
      period: "08/2019 - 04/2022",
      bullets: [
        "Integrated QRIS payment capabilities using a barcode-based interface, enabling seamless and instant transactions.",
        "Implemented advanced notification systems utilizing Firebase and Netcore for reliable, real-time message delivery.",
        "Developed and enhanced core application modules: Subscription, Shift Management, Order History, and Tokofi features.",
        "Integrated Datadog for monitoring, performance analytics, and real-time observability to strengthen system reliability.",
        "Implemented Firebase Remote Config and A/B Testing for dynamic feature management and data-driven feature optimization.",
        "Established automated build and deployment pipelines using CodeMagic, optimizing CI/CD processes and release efficiency.",
        "Managed complete release lifecycle of the POST application, including QA and deployment to the Google Play Store.",
      ],
      tags: ["Android", "Kotlin", "QRIS", "Datadog", "CodeMagic CI/CD", "Firebase", "Deeplinks"],
    },
  ]);

  const [certifications] = useState([
    "Event-Driven Architecture: Maintaining Data Consistency Across Services",
    "Introduction to Observability & Monitoring: Building Reliable Systems",
    "Indonesia Android Kejar",
    "Flutter Development Bootcamp with Dart (Udemy)",
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical <span className="font-extrabold">Competencies</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 text-sm lg:text-base font-bold mt-7 lg:mt-12 w-full place-items-center gap-y-6 lg:gap-y-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-32 w-32 lg:h-36 lg:w-36 flex flex-col items-center justify-center gap-3 text-center shadow-sm"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (skill.id % 6) * 0.08 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="leading-tight">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Competencies Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:mt-14">
          {competencies.map((comp, idx) => (
            <motion.div
              key={idx}
              className="border-2 border-black rounded-lg p-5 bg-zinc-50 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="font-extrabold text-base lg:text-lg mb-3 border-b-2 border-black pb-2">
                {comp.category}
              </h3>
              <ul className="space-y-2 text-xs lg:text-sm text-zinc-700">
                {comp.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-black font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Work <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-14 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-6 lg:p-8 border border-[#3F3F46] rounded-xl hover:border-white transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white border border-white/20">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg lg:text-xl">
                      {exp.role}
                    </h3>
                    <p className="text-zinc-400 font-medium text-sm lg:text-base">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="text-zinc-400 font-semibold text-xs lg:text-sm bg-zinc-800/80 px-3 py-1 rounded-full border border-zinc-700">
                  {exp.period}
                </span>
              </div>

              <ul className="text-[#D4D4D8] mt-6 space-y-2 text-sm lg:text-[15px] font-light">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-white font-bold mt-1">›</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-zinc-800">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] lg:text-xs text-zinc-300 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="px-5 lg:px-28 mt-12">
          <motion.h3
            className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaAward className="text-yellow-400" /> Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                className="p-4 border border-zinc-800 rounded-lg bg-zinc-950/60 flex items-center gap-3 text-zinc-300 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: cIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 rounded-full bg-white flex-shrink-0"></span>
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
