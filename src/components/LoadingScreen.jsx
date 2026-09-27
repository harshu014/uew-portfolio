import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-darker flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 border-4 border-primary/30 rounded-full" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-primary rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-gradient">UEW</span>
            </div>
          </motion.div>
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-white/60 font-body text-sm tracking-widest">
            LOADING {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen