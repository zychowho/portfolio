import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-secondary border-t border-neon-blue/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          {/* Brand */}


          {/* Quick Links */}



        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded-lg hover:bg-neon-blue/20 hover:border-neon-blue/60 transition-all duration-300"
            title="Back to top"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
