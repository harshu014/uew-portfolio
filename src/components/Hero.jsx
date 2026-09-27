import React, { useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#00d4ff"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  )
}

const ParticleField = () => {
  const points = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  const pointsRef = useRef()
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={2000} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#7c3aed" transparent opacity={0.6} />
    </points>
  )
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <ParticleField />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker/50 via-transparent to-darker z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/80">Available for New Projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight mb-6"
        >
          <span className="text-white">We Build</span>
          <br />
          <span className="text-gradient">Digital Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body"
        >
          United Engineering Works — Your trusted IT partner in Kanpur. We craft websites,
          software, and digital marketing solutions that grow your business online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
          >
            Explore Services
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            <FiPlay className="text-primary" />
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-16"
        >
          {[
            { value: '50+', label: 'Projects Done' },
            { value: '30+', label: 'Happy Clients' },
            { value: '8', label: 'Services' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-4xl font-display font-bold text-gradient-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero