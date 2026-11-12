
import { useEffect, useRef } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.4

    const startMusic = async () => {
      try {
        await audio.play()
      } catch (error) {
        console.log('Autoplay blocked. Waiting for user interaction.')
      }
    }

    startMusic()

    const handleFirstInteraction = async () => {
      if (audio.paused) {
        try {
          await audio.play()
        } catch (error) {
          console.log('Music could not start:', error)
        }
      }
    }

    window.addEventListener('click', handleFirstInteraction, { once: true })

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
    }
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/romantic.mp3"
        loop
      />
    </>
  )
}
