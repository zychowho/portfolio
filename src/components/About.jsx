import { motion } from 'framer-motion'

export default function About() {
  const techBadges = ['Angular', 'React.js', 'Flutter', 'C++', 'Node.js', 'TypeScript']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Computer Science student and software developer with a strong focus
              on building scalable, modern applications. With experience in full-stack development
              and systems design, I love tackling complex problems and creating intuitive solutions.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech has equipped me with expertise across multiple domains—from
              mobile development with Flutter to backend systems with Node.js. I'm driven by
              curiosity and a desire to continuously learn emerging technologies and best practices.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-neon-blue">Key Strengths:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Problem-solving with algorithmic thinking</li>
                <li>✓ Full-stack development expertise</li>
                <li>✓ System design and architecture</li>
                <li>✓ Collaborative team player</li>
                <li>✓ Quick learner and adaptable</li>
              </ul>
            </div>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techBadges.map((tech, index) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                    className="p-4 bg-dark-secondary border border-neon-blue/30 rounded-lg text-center text-neon-blue font-semibold hover:border-neon-blue/60 transition-all duration-300"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
