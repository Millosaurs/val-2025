"use client"

import { useState, useEffect } from "react"
import confetti from "canvas-confetti"

export default function FinalPage() {
  const [response, setResponse] = useState(null)

  const handleYes = () => {
    setResponse("yes")
    triggerConfetti()
  }

  const handleNo = () => {
    setResponse("no")
  }

  const triggerConfetti = () => {
    const emojis = ["💖", "🥰", "💕", "😍", "💘", "💝", "💓", "💞", "💌", "🌹"]
    const duration = 5 * 1000 // 5 seconds
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 2, // Fewer particles for emojis
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        shapes: ["text"],
        scalar: 2,
        text: {
          value: emojis[Math.floor(Math.random() * emojis.length)], // Random romantic emoji
        },
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        shapes: ["text"],
        scalar: 2,
        text: {
          value: emojis[Math.floor(Math.random() * emojis.length)],
        },
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }

  return (
    <div className="min-h-screen bg-[#D6C4A5] flex items-center justify-center font-cursive p-8">
      <div className="text-center bg-[#F9F5E9] p-8 rounded-3xl shadow-2xl max-w-md w-full py-56">
        <h1 className="text-4xl font-bold text-[#3D3833] mb-4">Will You Be My Valentine?</h1>
        <p className="text-[#5D5545] mb-8">
          You mean the world to me, and I can't imagine spending this special day with anyone else. Will you make me the happiest person and be my Valentine?
        </p>
        {response === null ? (
          <div className="flex justify-center gap-4">
            <button
              onClick={handleYes}
              className="bg-[#8B7E66] text-[#F9F5E9] hover:bg-[#5D5545] rounded-full px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3D3833] focus:ring-offset-2"
            >
              Yes! 💖
            </button>
            <button
              onClick={handleNo}
              className="bg-[#8B7E66] text-[#F9F5E9] hover:bg-[#5D5545] rounded-full px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3D3833] focus:ring-offset-2"
            >
              No 😢
            </button>
          </div>
        ) : response === "yes" ? (
          <div className="text-[#3D3833]">
            <p className="text-2xl font-bold mb-4">Yay! You've Made Me the Happiest Person! 🎉</p>
            <p className="text-[#5D5545]">I can't wait to celebrate this special day with you. 💖</p>
          </div>
        ) : (
          <div className="text-[#3D3833]">
            <p className="text-2xl font-bold mb-4">Aww, I'm Sad to Hear That 😢</p>
            <p className="text-[#5D5545]">But I hope we can still share many wonderful moments together. 💕</p>
          </div>
        )}
      </div>
    </div>
  )
}