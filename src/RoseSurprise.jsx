
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

export default function RoseSurprise() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="experience-section min-h-screen flex flex-col items-center justify-center px-5 text-center overflow-hidden">

      <p className="text-pink-300 tracking-[0.4em] text-sm mb-5">
        A GIFT FROM MY HEART
      </p>

      <h2 className="text-4xl md:text-6xl text-pink-100 italic mb-12">
        A Thousand Roses For You
      </h2>

      <motion.button
        onClick={() => setRevealed(!revealed)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="text-8xl md:text-9xl drop-shadow-[0_0_30px_rgba(255,80,120,0.5)]"
      >
        🌹
      </motion.button>

      <p className="text-pink-200 mt-8">
        Tap the rose to reveal your gift
      </p>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="mt-12 max-w-xl"
          >
            <div className="flex justify-center gap-3 text-4xl mb-6">
              {['🌹', '🌹', '🌹', '🌹', '🌹'].map((rose, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  {rose}
                </motion.span>
              ))}
            </div>

            <Heart
              fill="#fb7185"
              color="#fb7185"
              size={35}
              className="mx-auto mb-5"
            />

            <h3 className="text-3xl text-pink-100 italic">
              You Deserve All The Roses
            </h3>

            <p className="text-pink-200/80 mt-5 leading-8">
              If every rose represented a reason why I love you,
              the whole world would become a beautiful garden.
              You are my most precious flower. ❤️
            </p>

            <Sparkles className="mx-auto mt-6 text-pink-300" />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
