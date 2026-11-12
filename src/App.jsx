import './App.css'
import { motion } from 'framer-motion'
import { ArrowDown, Heart, Sparkles, Gift } from 'lucide-react'
import LoveLetter from './LoveLetter'
import RoseSurprise from './RoseSurprise'
import Memories from './Memories'
import MysteryGift from './MysteryGift'
import BackgroundMusic from './BackgroundMusic'
import FinalMessage from './FinalMessage'

const hearts = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: 7 + Math.random() * 7,
  delay: Math.random() * 5,
  size: 12 + Math.random() * 16,
}))

const heroPhoto =
  'https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/02/download-88-1-2.jpg'

export default function App() {
  const scrollToLetter = () => {
    document.getElementById('love-letter')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className="site-shell relative min-h-screen overflow-hidden">
      <div className="floating-hearts" aria-hidden="true">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="floating-heart"
            style={{ left: heart.left, fontSize: heart.size }}
            animate={{
              y: [0, -1200],
              opacity: [0, 0.65, 0],
              rotate: [0, 18, -18, 0],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: 'linear',
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <motion.section
        className="hero-section relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="eyebrow">
              <Sparkles size={15} />
              A little love, made just for you
            </div>

            <h1 className="hero-title">
              Happy Valentine&apos;s
              <span>My Love</span>
            </h1>

            <p className="hero-description">
              Every heartbeat tells a story. And my favourite story begins with
              you.
            </p>

            <motion.button
              onClick={scrollToLetter}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="surprise-button"
            >
              <Gift size={19} />
              Open my surprise
              <Sparkles size={17} />
            </motion.button>

            <div className="hero-note">
              <Heart size={15} fill="currentColor" />
              A little reminder that you are loved
            </div>
          </motion.div>

          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <div className="hero-photo-frame">
              <img
                src={heroPhoto}
                alt="A couple sharing a tender, happy moment together"
                className="hero-photo"
                fetchPriority="high"
              />
              <div className="photo-caption">
                <span className="caption-heart">
                  <Heart size={18} fill="currentColor" />
                </span>
                <span>
                  <strong>My favourite place</strong>
                  <small>is right next to you</small>
                </span>
              </div>
            </div>
            <motion.div
              className="photo-sparkle sparkle-one"
              animate={{ y: [0, -9, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦
            </motion.div>
            <motion.div
              className="photo-sparkle sparkle-two"
              animate={{ y: [0, 8, 0], rotate: [0, -12, 0] }}
              transition={{ duration: 3.8, repeat: Infinity }}
            >
              ♥
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          className="scroll-cue"
          onClick={scrollToLetter}
          whileHover={{ y: 4 }}
          aria-label="Scroll to your love letter"
        >
          <span>Scroll to feel the love</span>
          <ArrowDown size={16} />
        </motion.button>
      </motion.section>

      <div className="relative z-10">
        <LoveLetter />
        <RoseSurprise />
        <Memories />
        <MysteryGift />
        <FinalMessage />
      </div>

      <BackgroundMusic />
    </main>
  )
}
