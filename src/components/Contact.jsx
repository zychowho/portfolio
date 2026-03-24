import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send to Gmail via mailto with form data
    const subject = `New Message from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:bua.paulvincentbscs2022@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

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
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            I'd love to connect! Feel free to reach out for collaborations or just a friendly hello.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 mb-12 items-stretch"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4 flex flex-col mt-32">
            <h3 className="text-2xl font-bold text-neon-blue mb-2">Contact Information</h3>

            {[
              { icon: FiMail, label: 'Email', value: 'bua.paulvincentbscs2022@gmail.com', href: 'mailto:bua.paulvincentbscs2022@gmail.com' },
              { icon: FiPhone, label: 'Phone', value: '09150633990', href: 'tel:09150633990' },
              { icon: FiMapPin, label: 'Location', value: 'Phase 9, Package 3c2, Block 8, Lot 45 Bagong Silang Caloocan city', href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group hover:text-neon-blue transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-neon-blue text-xl flex-shrink-0 mt-1"
                >
                  <Icon />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase">{label}</p>
                  <p className="text-gray-100 text-sm font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="p-8 bg-dark-secondary border border-neon-blue/30 rounded-xl hover:border-neon-blue/60 transition-all duration-300 flex flex-col"
          >
            <div className="space-y-6 flex-1">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 resize-none transition-all duration-300 flex-1"
                  placeholder="Your message..."
                />
              </div>
            </div>

            {/* Submit Button and Success Message */}
            <div className="mt-6 space-y-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-neon-blue text-dark-bg font-bold rounded-lg hover:shadow-glow-blue transition-all duration-300"
              >
                {submitted ? '✓ Message Sent' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={submitted ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                className="text-center text-neon-blue font-semibold"
              >
                {submitted && 'Thanks for reaching out! I\'ll get back to you soon.'}
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
