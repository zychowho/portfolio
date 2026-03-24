import { motion } from 'framer-motion'
import { FiDownload, FiGithub } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Hi, I'm Paul Vincent G. Bua</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-3xl lg:text-4xl text-neon-blue mb-6 font-semibold"
        >
          Computer Science Student | Software Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable applications and intelligent systems with modern technologies.
          Passionate about full-stack development, systems design, and creating impactful solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-blue text-dark-bg font-bold rounded-lg hover:shadow-glow-blue transition-all duration-300"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
          >
            <FiDownload className="inline mr-2" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-neon-blue"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="text-2xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
