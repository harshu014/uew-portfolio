// import React, { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import {
//   FiPhone,
//   FiMessageCircle,
//   FiTrendingUp,
//   FiTarget,
//   FiImage,
//   FiMonitor,
//   FiDollarSign,
//   FiHeadphones,
// } from 'react-icons/fi'

// const steps = [
//   { icon: FiPhone, title: 'Lead Calling', desc: 'Our telecaller calls business owners and introduces our company and services.' },
//   { icon: FiMessageCircle, title: 'Understanding Need', desc: 'We ask if the business needs a website, software, or online promotion.' },
//   { icon: FiTrendingUp, title: 'Explaining Benefit', desc: 'We explain how going online helps get more customers and run smoothly.' },
//   { icon: FiTarget, title: 'Pitching Right Service', desc: 'Based on need, the relevant service is pitched with flexible pricing.' },
//   { icon: FiImage, title: 'Sharing Portfolio', desc: 'Past work/portfolio shared on WhatsApp so clients see real examples.' },
//   { icon: FiMonitor, title: 'Demo & Discussion', desc: 'We show a demo, discuss exact requirements, and prepare a quotation.' },
//   { icon: FiDollarSign, title: 'Payment', desc: 'Pay after delivery, or choose monthly subscription — whatever suits you.' },
//   { icon: FiHeadphones, title: 'Delivery & Support', desc: 'Daily support from 11 AM to 8 PM for any issues after delivery.' },
// ]

// const Process = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })

//   return (
//     <section id="process" className="relative py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="text-accent font-display text-sm tracking-[0.3em] mb-4 block">
//             HOW WE WORK
//           </span>
//           <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4">
//             Our Simple <span className="text-gradient">Process</span>
//           </h2>
//           <p className="text-white/50 max-w-2xl mx-auto">
//             From first call to final delivery — here's how we work with you.
//           </p>
//         </motion.div>

//         <div ref={ref} className="relative">
//           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

//           <div className="space-y-8 lg:space-y-0">
//             {steps.map((step, i) => {
//               const Icon = step.icon
//               const isLeft = i % 2 === 0
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className={`relative flex items-center lg:justify-between ${
//                     isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                   }`}
//                 >
//                   <div className="hidden lg:block w-5/12" />

//                   <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10 hidden lg:block" />

//                   <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
//                     <motion.div
//                       whileHover={{ scale: 1.02, y: -5 }}
//                       className="glass rounded-2xl p-6 group"
//                     >
//                       <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
//                         <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
//                           <Icon className="text-primary" />
//                         </div>
//                         <span className="text-xs font-display text-primary tracking-widest">
//                           STEP {String(i + 1).padStart(2, '0')}
//                         </span>
//                       </div>
//                       <h3 className="text-lg font-display font-bold text-white mb-2">
//                         {step.title}
//                       </h3>
//                       <p className="text-sm text-white/50">{step.desc}</p>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Process