
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Mail, X } from 'lucide-react'

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="love-letter" className="experience-section min-h-screen flex flex-col items-center justify-center px-5 text-center">

      <h2 className="text-4xl md:text-5xl text-pink-100 italic mb-12">
        A Letter For You
      </h2>

      {!isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rose-envelope w-72 h-48 rounded-xl shadow-2xl flex flex-col items-center justify-center relative"
          >
            <Mail size={65} color="white" />
            <p className="text-white mt-4 tracking-widest">
              OPEN MY LETTER
            </p>

            <div className="absolute -top-5">
              <Heart fill="#ffb6c9" color="#ffb6c9" size={40} />
            </div>
          </motion.div>

          <p className="text-pink-200 mt-8">
            Tap the envelope to open ❤️
          </p>
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
            className="rose-letter relative max-w-lg w-full rounded-2xl p-8 md:p-12"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="rose-letter-close absolute right-5 top-5"
            >
              <X size={24} />
            </button>

            <Heart
              fill="#e11d48"
              color="#e11d48"
              size={35}
              className="mx-auto mb-6"
            />

            <p className="text-sm tracking-[0.3em] uppercase mb-5">
              My Dearest Love
            </p>

            <h3 className="text-3xl italic mb-6">
              You Are My Favourite Person
            </h3>

            <div className="text-base leading-8 text-left">
              <p>My Love,</p>

              <p className="mt-4">
                Every moment with you is a beautiful memory.
                Your smile makes my world brighter, and your
                presence makes every day special.
              </p>

              <p className="mt-4">
                I may not have the perfect words to explain
                my feelings, but I want you to know how
                special you are to me.
              </p>

              <p className="mt-5">
                Forever yours,
              </p>
            </div>

            <p className="text-2xl italic mt-6">
              With All My Love ❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
