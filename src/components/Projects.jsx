import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiTrendingUp, FiShoppingBag, FiCoffee, FiGlobe } from 'react-icons/fi'

const projects = [
  {
    title: 'Bharat-Bidding',
    category: 'Auction Platform',
    desc: 'A full-featured auction platform for JCB machines across India. Real-time bidding, seller dashboards, and secure payment integration.',
    icon: FiTrendingUp,
    color: '#00d4ff',
    tags: ['React', 'Node.js', 'Real-time Bidding', 'Payment Gateway'],
  },
  {
    title: 'EatOPae',
    category: 'Food Ordering & POS',
    desc: 'Complete food ordering software for restaurants — similar to KFC POS systems. Dine-in orders, online ordering, kitchen display & billing.',
    icon: FiCoffee,
    color: '#f59e0b',
    tags: ['POS', 'Order Management', 'Billing', 'Kitchen Display'],
  },
  {
    title: 'Jewels Passion',
    category: 'E-commerce Website',
    desc: 'Premium e-commerce platform for selling jewellery online. Product catalog, cart, secure checkout, and order tracking.',
    icon: FiShoppingBag,
    color: '#ec4899',
    tags: ['E-commerce', 'Payment', 'Inventory', 'Order Tracking'],
  },
  {
    title: 'Business Websites',
    category: 'Multiple Projects',
    desc: 'We have built many professional business websites for local businesses in Kanpur and across India — helping them establish a strong online presence.',
    icon: FiGlobe,
    color: '#10b981',
    tags: ['Website', 'SEO', 'Responsive', 'Custom Design'],
  },
]

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="glass rounded-3xl p-8 group cursor-pointer relative overflow-hidden"
    >
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-3xl"
        style={{ background: project.color }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
          >
            <Icon className="text-3xl" style={{ color: project.color }} />
          </div>
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <FiExternalLink className="text-white/60 group-hover:text-white transition-colors" />
          </div>
        </div>

        <span
          className="text-xs font-display tracking-widest mb-2 block"
          style={{ color: project.color }}
        >
          {project.category.toUpperCase()}
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-white/50 leading-relaxed mb-6">{project.desc}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs glass text-white/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display text-sm tracking-[0.3em] mb-4 block">
            OUR WORK
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4">
            Projects That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Real work, real results. Here's a glimpse of what we've built for businesses like
            yours — and we customize everything to your exact needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-display font-bold text-white mb-3">
              We Build What You Need
            </h3>
            <p className="text-white/50 mb-6">
              Every business is different. We don't force fixed packages — we customize everything
              based on your exact requirements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects