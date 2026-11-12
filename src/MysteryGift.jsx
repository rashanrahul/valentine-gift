
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Heart, Sparkles } from 'lucide-react'

export default function MysteryGift() {
  const [opened, setOpened] = useState(false)

  return (
    <section className="experience-section min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      <p className="text-pink-300 tracking-[0.4em] text-xs mb-5">
        A LITTLE SURPRISE
      </p>

      <h2 className="text-4xl md:text-6xl text-pink-100 italic mb-12">
        Something Special For You
      </h2>

      <motion.button
        onClick={() => setOpened(!opened)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={opened ? { rotate: [0, -8, 8, 0] } : { y: [0, -12, 0] }}
        transition={{ duration: 2, repeat: opened ? 0 : Infinity }}
        className="relative"
      >
        <div className="rose-gift-box p-10 rounded-3xl">
          <Gift size={100} color="white" strokeWidth={1.2} />
        </div>
        <div className="absolute -top-5 -right-5 text-4xl">✨</div>
        <div className="absolute -bottom-4 -left-5 text-4xl">❤️</div>
      </motion.button>

      <p className="text-pink-200 mt-10">
        {opened ? 'Your surprise is here!' : 'Tap the gift box to open your surprise'}
      </p>

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="rose-reveal-card mt-12 max-w-xl rounded-3xl p-8 backdrop-blur-md"
          >
            <Sparkles className="mx-auto text-pink-300 mb-5" size={35} />

            <h3 className="text-3xl md:text-4xl text-pink-100 italic">
              You Are My Greatest Gift
            </h3>

            <p className="text-pink-100/80 leading-8 mt-6">
              I don't need a thousand gifts or a million wishes.
              Having you in my life is the most beautiful gift
              I could ever ask for. Every day with you is special.
              I love you more than words can express. ❤️
            </p>

            <Heart
              fill="#fb7185"
              color="#fb7185"
              size={35}
              className="mx-auto mt-7"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
