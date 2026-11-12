
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, Stars } from 'lucide-react'

export default function FinalMessage() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="experience-section relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">

      {/* Background decorations */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/40 pointer-events-none"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [-20, -200],
            x: [0, Math.sin(i) * 50],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: `${(i * 17) % 100}%`,
            bottom: '-30px',
          }}
        >
          ♥
        </motion.div>
      ))}

      <Stars className="text-pink-300 mb-6" size={35} />

      <p className="text-pink-300 tracking-[0.4em] text-xs mb-6">
        ONE LAST THING...
      </p>

      <h2 className="text-4xl md:text-6xl text-pink-100 italic leading-tight mb-10">
        My Forever Valentine
      </h2>

      {!revealed && (
        <motion.button
          onClick={() => setRevealed(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="rose-button rounded-full px-10 py-5 text-lg"
        >
          <span className="flex items-center gap-3">
            <Heart fill="white" size={22} />
            One Last Surprise
            <Sparkles size={22} />
          </span>
        </motion.button>
      )}

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="rose-reveal-card max-w-2xl mt-8 rounded-3xl p-8 md:p-12 backdrop-blur-lg"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart
                fill="#fb7185"
                color="#fb7185"
                size={55}
                className="mx-auto mb-8"
              />
            </motion.div>

            <h3 className="text-3xl md:text-5xl text-pink-100 italic mb-8">
              You Are My Always ❤️
            </h3>

            <p className="text-pink-100/90 text-base md:text-lg leading-9">
              If I could choose one person to share every sunrise,
              every sunset, every smile and every dream with,
              I would choose you.
              <br /><br />
              Thank you for being my happiness, my peace
              and my favourite part of every day.
              <br /><br />
              No matter where life takes us,
              I hope our story continues forever.
            </p>

            <div className="flex justify-center gap-4 text-3xl mt-10">
              <span>🌹</span>
              <span>❤️</span>
              <span>🌹</span>
            </div>

            <p className="text-pink-300 italic text-xl mt-8">
              Forever & Always...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-pink-300/50 text-xs tracking-widest mt-16">
        MADE WITH LOVE ❤️
      </p>
    </section>
  )
}
