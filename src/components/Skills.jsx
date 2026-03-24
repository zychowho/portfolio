import { motion } from 'framer-motion'
import { skills } from '../utils/data'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: { y: -10, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' },
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 bg-dark-bg border border-neon-blue/30 rounded-xl hover:border-neon-blue/60 transition-all duration-300 flex flex-col h-full min-h-[320px]"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-neon-blue mb-4 group-hover:text-neon-pink transition-colors">
                {category}
              </h3>

              {/* Skills List */}
              <div className="space-y-3 flex-1">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                    <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Progress bar animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-auto h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-60"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
