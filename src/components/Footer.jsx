import React from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiArrowUp, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative pt-20 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white">
                UEW
              </div>
              <div>
                <p className="font-display font-bold text-white">UNITED ENGINEERING WORKS</p>
                <p className="text-xs text-primary tracking-widest">IT SERVICES DIVISION</p>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-md mb-4">
              We help small and medium businesses grow online by building websites, software, and
              running digital marketing. Registered business with GST and current account.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <FiMapPin className="text-primary" />
              Ratan Lal Nagar, Kanpur, UP, India
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {[
                'Website Development',
                'E-commerce',
                'Business Promotion',
                'Social Media',
                'SEO',
                'Software',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {['Home', 'Services', 'Projects', 'Process', 'Pricing', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} United Engineering Works. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+917355440407"
              className="text-white/50 hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <FiPhone />
              +91 7355440407
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30"
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs mt-6 flex items-center justify-center gap-1">
          Made with <FiHeart className="text-red-500" /> in Kanpur, India
        </p>
      </div>
    </footer>
  )
}

export default Footer