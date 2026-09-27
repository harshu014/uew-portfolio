import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCheck, FiStar } from 'react-icons/fi'

const plans = [
  {
    name: 'Website Development',
    price: '₹4,999',
    period: 'starting',
    desc: 'Perfect for small businesses going online',
    features: [
      'Domain + Hosting Included',
      'Home, About, Services, Contact',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'WhatsApp Integration',
      '1 Month Support',
    ],
    popular: false,
    color: '#00d4ff',
  },
  {
    name: 'E-commerce Website',
    price: '₹9,999',
    period: 'onwards',
    desc: 'Sell products online with full setup',
    features: [
      'Domain + Hosting Included',
      'Product Listing & Categories',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Order Management',
      '3 Months Support',
    ],
    popular: true,
    color: '#7c3aed',
  },
  {
    name: 'Custom Projects',
    price: 'Custom',
    period: 'quote',
    desc: 'Software, Apps, Marketing & More',
    features: [
      'Software Development',
      'Teacher Applications',
      'Restaurant POS Software',
      'Business Promotion',
      'Social Media Marketing',
      'SEO Optimization',
    ],
    popular: false,
    color: '#f59e0b',
  },
]

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] mb-4 block">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4">
            Affordable <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Low, competitive prices so small businesses can afford digital services. Every
            solution is customized to your exact requirement.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-3xl p-8 glass ${
                plan.popular ? 'lg:scale-105 z-10' : ''
              }`}
              style={{
                border: plan.popular
                  ? `1px solid ${plan.color}60`
                  : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold flex items-center gap-1">
                  <FiStar className="text-xs" />
                  MOST POPULAR
                </div>
              )}

              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-3xl"
                style={{ background: plan.color }}
              />

              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-white/50 mb-6">{plan.desc}</p>

                <div className="mb-6">
                  <span
                    className="text-4xl sm:text-5xl font-display font-black"
                    style={{ color: plan.color }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-sm ml-2">/ {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.color}20` }}
                      >
                        <FiCheck className="text-xs" style={{ color: plan.color }} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`block text-center py-3.5 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                      : 'glass text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-lg font-display font-bold text-white mb-6 text-center">
            Payment Terms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-display font-bold text-primary">1</span>
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white font-semibold">Lower-cost projects:</span> Full
                payment in advance before work starts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-display font-bold text-secondary">2</span>
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white font-semibold">Average/higher-cost:</span> 50%
                advance, 50% after delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-display font-bold text-accent">3</span>
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white font-semibold">EMI Option:</span> For projects above
                ₹15,000 — pay in easy EMIs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing