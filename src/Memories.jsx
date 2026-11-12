
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

const memories = [
  {
    image: 'https://nashvillemoms.com/wp-content/uploads/2020/02/d5.-A-Step-by-Step-Guide-to-Planning-the-Perfect-Valentine_s-Day-Date.jpg',
    title: 'Our Beautiful Moments',
    date: 'A memory to treasure',
  },
  {
    image: 'https://static.toiimg.com/thumb/msid-80894750,imgsize-1539677,width-400,resizemode-4/80894750.jpg',
    title: 'Together Forever',
    date: 'Every moment matters',
  },
  {
    image: 'https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/02/download-88-1-2.jpg',
    title: 'My Favourite Person',
    date: 'My favourite place is with you',
  },
]

export default function Memories() {
  return (
    <section className="experience-section min-h-screen px-6 py-24 text-center">
      <Sparkles className="mx-auto text-pink-300 mb-5" />

      <p className="text-pink-300 tracking-[0.4em] text-xs mb-5">
        OUR LOVE STORY
      </p>

      <h2 className="text-4xl md:text-6xl text-pink-100 italic mb-5">
        Our Beautiful Memories
      </h2>

      <p className="text-pink-200/70 mb-16">
        Every picture tells a story of us.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="memory-card bg-[#390a1b] p-3 rounded-2xl border border-pink-900/50 shadow-xl"
          >
            <img
              src={memory.image}
              alt={memory.title}
              loading="lazy"
              decoding="async"
              className="w-full h-72 object-cover rounded-xl"
            />

            <h3 className="text-2xl text-pink-100 italic mt-6">
              {memory.title}
            </h3>

            <p className="text-pink-300/70 text-sm mt-3 mb-5">
              {memory.date}
            </p>

            <Heart
              fill="#fb7185"
              color="#fb7185"
              size={20}
              className="mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
