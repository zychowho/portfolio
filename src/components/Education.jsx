import { motion } from 'framer-motion'
import { education } from '../utils/data'

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {/* Education Timeline */}
          {education.timeline.map((item, index) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              {/* Timeline Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-4 bg-neon-blue/10 rounded-lg text-neon-blue text-2xl flex-shrink-0 mt-2"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex-1 p-6 bg-dark-bg border border-neon-blue/30 rounded-xl hover:border-neon-blue/60 transition-all duration-300"
              >
                <p className="text-sm text-neon-blue font-semibold mb-1">{item.level}</p>
                <h4 className="text-xl font-bold text-gray-100 mb-2">{item.school}</h4>
                <p className="text-gray-400 font-medium">{item.year}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
