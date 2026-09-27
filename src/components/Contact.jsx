import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiPhone,
  FiMapPin,
  FiSend,
  FiCreditCard,
  FiHash,
  FiMail,
  FiClock,
  FiUser,
  FiCheckCircle,
  FiMessageSquare,
} from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 4000)
  }

  const contactInfo = [
    {
      icon: FiMapPin,
      label: 'Address',
      value: 'Ratan Lal Nagar, Kanpur, UP, India',
      color: '#00d4ff',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 7355440407',
      color: '#7c3aed',
      href: 'tel:+917355440407',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'info@unitedengineeringworks.com',
      color: '#ec4899',
      href: 'mailto:info@unitedengineeringworks.com',
    },
    {
      icon: FiHash,
      label: 'GST Number',
      value: '09NIBPS0557L2ZI',
      color: '#f59e0b',
    },
    {
      icon: FiClock,
      label: 'Support Hours',
      value: 'Daily: 11:00 AM – 8:00 PM',
      color: '#10b981',
    },
  ]

  const services = [
    'Website Development',
    'E-commerce Website',
    'Business Promotion',
    'Social Media Marketing',
    'SEO Optimization',
    'Software Development',
    'Teacher Application',
    'Restaurant POS Software',
  ]

  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display text-sm tracking-[0.3em] mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Ready to take your business online? Reach out and we'll get back to you within 24
            hours. Whether it's a website, software, or marketing — we've got you covered.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ================= LEFT COLUMN — Contact Info ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const CardWrapper = info.href ? motion.a : motion.div
              return (
                <CardWrapper
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 8, scale: 1.01 }}
                  className="glass rounded-2xl p-5 flex items-start gap-4 group cursor-pointer transition-colors hover:bg-white/[0.08] block"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative"
                    style={{
                      background: `${info.color}20`,
                      border: `1px solid ${info.color}40`,
                    }}
                  >
                    <Icon className="text-xl" style={{ color: info.color }} />
                    <div
                      className="absolute inset-0 rounded-xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity"
                      style={{ background: info.color }}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                      {info.label}
                    </p>
                    <p className="text-white font-medium text-sm break-words">{info.value}</p>
                  </div>
                </CardWrapper>
              )
            })}

            {/* Bank Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <FiCreditCard className="text-accent" />
                  </div>
                  <p className="text-sm font-display font-bold text-white">Bank Details</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-white/40 flex-shrink-0">Account Holder</span>
                    <span className="text-white text-right">M/S United Engineering Works</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white/40">Bank Name</span>
                    <span className="text-white">Axis Bank</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white/40">Account No.</span>
                    <span className="text-white font-mono text-xs sm:text-sm">
                      921020039394572
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white/40">IFSC Code</span>
                    <span className="text-white font-mono">UTIB0002520</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40 leading-relaxed">
                    For payments, please use the above bank details. Share the transaction
                    screenshot on WhatsApp after payment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Quick Contact */}
            <motion.a
              href="https://wa.me/917355440407?text=Hi%20United%20Engineering%20Works%2C%20I%20want%20to%20know%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-center justify-between glass rounded-2xl p-5 group cursor-pointer hover:bg-green-500/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                  <FiMessageSquare className="text-green-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Chat on WhatsApp</p>
                  <p className="text-xs text-white/50">Quick reply within minutes</p>
                </div>
              </div>
              <span className="text-green-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.a>
          </motion.div>

          {/* ================= RIGHT COLUMN — Contact Form ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-white/50">
                  Fill the form below and our team will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField
                    label="Your Name"
                    icon={FiUser}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                    isFocused={focusedField === 'name'}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <InputField
                    label="Phone Number"
                    icon={FiPhone}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    isFocused={focusedField === 'phone'}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Email */}
                <InputField
                  label="Email Address"
                  icon={FiMail}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  isFocused={focusedField === 'email'}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />

                {/* Service Select */}
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">
                    Service Needed
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-darker">
                        Select a service
                      </option>
                      {services.map((s, i) => (
                        <option key={i} value={s.toLowerCase()} className="bg-darker">
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                      ▾
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors resize-none ${
                      focusedField === 'message'
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-white/10'
                    }`}
                    placeholder="Tell us about your project — what do you need, budget, timeline..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/60 transition-all disabled:opacity-80"
                >
                  {submitted ? (
                    <>
                      <FiCheckCircle className="text-xl" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-white/40 text-center">
                  We usually reply within 24 hours. For urgent enquiries, call us directly at{' '}
                  <a
                    href="tel:+917355440407"
                    className="text-primary hover:underline"
                  >
                    +91 7355440407
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ================= Bottom CTA Strip ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              Need a Quick Quote?
            </h3>
            <p className="text-white/60 max-w-xl mx-auto mb-6">
              Skip the form — call us directly or send a WhatsApp message and get an instant
              response from our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:+917355440407"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/30"
              >
                <FiPhone />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/917355440407"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full glass text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <FiMessageSquare className="text-green-400" />
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ================= Reusable Input Field ================= */
const InputField = ({
  label,
  icon: Icon,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  isFocused,
  onFocus,
  onBlur,
}) => {
  return (
    <div>
      <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
              isFocused ? 'text-primary' : 'text-white/30'
            }`}
          />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          className={`w-full bg-white/5 border rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors ${
            isFocused ? 'border-primary shadow-lg shadow-primary/20' : 'border-white/10'
          }`}
        />
      </div>
    </div>
  )
}

export default Contact