import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import { projects } from '../utils/data'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['all', 'React', 'Flutter', 'Angular', 'C++']

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) =>
          p.technologies.some((tech) => tech.includes(filter))
        )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-neon-blue text-dark-bg shadow-glow-blue'
                  : 'bg-dark-secondary text-gray-300 border border-neon-blue/30 hover:border-neon-blue/60'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                exit="exit"
                layout
                className="group relative bg-dark-secondary border border-neon-blue/30 rounded-xl overflow-hidden hover:border-neon-blue/60 transition-all duration-300 h-full flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image / Emoji */}
                <div className="h-48 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center text-6xl overflow-hidden relative">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="group-hover:text-neon-blue transition-colors"
                  >
                    {project.image}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-neon-blue mb-2 group-hover:text-neon-pink transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 flex-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-neon-purple/10 text-neon-purple rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-neon-blue/20 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-neon-blue/10 text-neon-blue rounded-lg hover:bg-neon-blue/20 transition-all duration-300"
                    >
                      <FiGithub /> GitHub
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-neon-purple/10 text-neon-purple rounded-lg hover:bg-neon-purple/20 transition-all duration-300"
                      >
                        <FiExternalLink /> Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div 
                  onClick={(e) => e.stopPropagation()}
                  className="bg-dark-secondary border border-neon-blue/30 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                >
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 p-2 bg-neon-blue/10 rounded-lg text-neon-blue hover:bg-neon-blue/20 transition-all"
                  >
                    <FiX size={24} />
                  </motion.button>

                  {/* Project Image */}
                  <div className="h-64 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center text-9xl rounded-lg mb-6">
                    {selectedProject.image}
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-neon-blue mb-4">
                    {selectedProject.title}
                  </h2>

                  {/* Full Description */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* All Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-lg border border-neon-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-neon-blue text-dark-bg rounded-lg font-bold hover:shadow-glow-blue transition-all duration-300"
                    >
                      <FiGithub /> View on GitHub
                    </motion.a>
                    {selectedProject.demo && (
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-neon-purple text-dark-bg rounded-lg font-bold hover:shadow-glow-purple transition-all duration-300"
                      >
                        <FiExternalLink /> View Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
