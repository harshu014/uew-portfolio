import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiGlobe,
  FiShoppingCart,
  FiTrendingUp,
  FiShare2,
  FiSearch,
  FiCode,
  FiBookOpen,
  FiCoffee,
} from 'react-icons/fi'

const services = [
  {
    icon: FiGlobe,
    title: 'Website Development',
    desc: 'Professional business websites with Home, About, Services & Contact pages.',
    color: '#00d4ff',
    price: '₹4,999',
  },
  {
    icon: FiShoppingCart,
    title: 'E-commerce Websites',
    desc: 'Sell products online with product listing, cart, and secure checkout.',
    color: '#7c3aed',
    price: '₹9,999',
  },
  {
    icon: FiTrendingUp,
    title: 'Business Promotion',
    desc: 'Get more visibility and enquiries through online listings, ads & outreach.',
    color: '#f59e0b',
    price: 'Custom',
  },
  {
    icon: FiShare2,
    title: 'Social Media Marketing',
    desc: 'Manage Instagram/Facebook pages, post content & run promotions.',
    color: '#ec4899',
    price: 'Custom',
  },
  {
    icon: FiSearch,
    title: 'SEO Optimization',
    desc: 'Make your website rank higher on Google when people search for you.',
    color: '#10b981',
    price: 'Custom',
  },
  {
    icon: FiCode,
    title: 'Software Development',
    desc: 'Custom software for billing, inventory, or any specific business need.',
    color: '#8b5cf6',
    price: 'Custom',
  },
  {
    icon: FiBookOpen,
    title: 'Teacher Applications',
    desc: 'Apps for managing students, classes, fees, attendance & study material.',
    color: '#06b6d4',
    price: 'Custom',
  },
  {
    icon: FiCoffee,
    title: 'Restaurant POS Software',
    desc: 'Food ordering & POS system for restaurants — dine-in, online & billing.',
    color: '#f43f5e',
    price: 'Custom',
  },
]

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass rounded-2xl p-6 group cursor-pointer relative overflow-hidden card-3d"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative"
          style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
        >
          <Icon className="text-2xl" style={{ color: service.color }} />
          <div
            className="absolute inset-0 rounded-xl blur-xl opacity-50"
            style={{ background: service.color }}
          />
        </div>

        <h3 className="text-lg font-display font-bold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{service.desc}</p>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-white/40">Starting from</span>
          <span className="font-display font-bold text-sm" style={{ color: service.color }}>
            {service.price}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We work only in a fixed set of 8 services — keeping it focused helps us deliver top
            quality at affordable prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services