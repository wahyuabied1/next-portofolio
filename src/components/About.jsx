import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I&apos;m an accomplished <strong className="text-black font-semibold">Software Engineer</strong> with over 6 years of specialized experience architecting mission-critical, large-scale mobile financial systems. My core expertise spans <strong className="text-black font-semibold">Kotlin &amp; Flutter</strong>, engineering resilient offline-first transactional architectures for nationwide microfinance operations.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Throughout my career at fintech leaders like <strong className="text-black font-semibold">Amartha</strong>, <strong className="text-black font-semibold">PT Sejahtera Lunaria Annua (KoinWorks)</strong>, and <strong className="text-black font-semibold">Payfazz</strong>, I have maintained a <strong className="text-black font-semibold">99.81% crash-free rate</strong> across production releases. I specialize in Clean Architecture, MVVM, dynamic Firebase Remote Config feature gating, CI/CD automation, and leading staged release governance as Release PIC and Gatekeeper.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I graduated with a <strong className="text-black font-semibold">Bachelor&apos;s Degree (D4) in Engineering</strong> from <strong className="text-black font-semibold">Politeknik Elektronika Negeri Surabaya (PENS)</strong>, where I conducted AI algorithm research and published peer-reviewed research in Image Processing.
        </p>
      </motion.div>
    </div>
  );
}
