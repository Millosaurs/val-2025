"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function FinalPage() {
  const [response, setResponse] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  

  // List of positive responses
  const positiveResponses = ["ok", "sari", "aythu", "nodana", "mmmm", "yes", "yo", "ya ya", "sure"];

  // List of negative responses
  const negativeResponses = ["no", "nope", "never", "no ya", "rejected", "get lost", "better you die", "illa", "beda", "bekagila", "not needed"];

  const handleConfirm = () => {
    if (inputValue.trim()) {
      setResponse(inputValue);
      // Check if the input includes any positive response
      const isPositive = positiveResponses.some((word) =>
        inputValue.toLowerCase().includes(word)
      );
      // Check if the input includes any negative response
      const isNegative = negativeResponses.some((word) =>
        inputValue.toLowerCase().includes(word)
      );

      if (isPositive) {
        triggerConfetti();
      } else if (isNegative) {
        // Do nothing (negative response handling is in the UI)
      } else {
        // Handle other responses with a romantic message
      }
    }
  };

  const triggerConfetti = () => {
    const emojis = ["💖", "🥰", "💕", "😍", "💘", "💝", "💓", "💞", "💌", "🌹"];
    const duration = 1 * 1000; // 5 seconds
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 6, // Fewer particles for emojis
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        shapes: ["text"],
        scalar: 2,
        text: {
          value: emojis[Math.floor(Math.random() * emojis.length)], // Random romantic emoji
        },
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        shapes: ["text"],
        scalar: 2,
        text: {
          value: emojis[Math.floor(Math.random() * emojis.length)],
        },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  return (
    <div className="min-h-screen bg-[#D6C4A5] flex items-center justify-center font-quick p-8">
      {response === null ? (
        <div className="flex flex-col md:flex-row h-full relative">
        {/* Image Section */}
        <div className="md:w-1/2 h-72w md:h-full relative z-10 py-4 ">
          <img
            src="https://media1.tenor.com/m/lOS4yqbU8-oAAAAC/peach-and-goma-goma.gif"
            alt="meow"
            className="w-full h-full object-cover rounded-[30px] shadow-lg"
          />
        </div>
        <div className="text-center bg-[#F9F5E9] p-8 rounded-3xl shadow-2xl max-w-md w-full">
          <h1 className="text-4xl font-bold text-[#3D3833] mb-4">Will You Be My Valentine?</h1>
          <p className="text-[#5D5545] mb-8">
            You mean the world to me, and I can't imagine spending this special day with anyone else. Will you make me the happiest person and be my Valentine?
          </p>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your response here..."
            className="w-full p-4 mb-4 bg-[#EEDEC5] rounded-2xl text-[#3D3833] placeholder-[#5D5545] focus:outline-none focus:ring-2 focus:ring-[#8B7E66]"
            rows={4}
          />
          <button
            onClick={handleConfirm}
            disabled={!inputValue.trim()}
            className="bg-[#8B7E66] text-[#F9F5E9] hover:bg-[#5D5545] rounded-full px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3D3833] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm
          </button>
        </div>
      </div>
      ) : (
        <div className="text-center bg-[#F9F5E9] p-8 rounded-3xl shadow-2xl max-w-md w-full">
          <h1 className="text-4xl font-bold text-[#3D3833] mb-4">Darling...</h1>
          <div className="bg-[#EEDEC5] p-6 rounded-2xl text-[#3D3833] mb-8">
            <p className="text-xl font-semibold mb-2">Mai kya bola?</p>
            <p className="text-[#5D5545] mb-4">Banogi meri valantine mere har janam mai ?</p>
            <p className="text-xl font-semibold mb-2">Tu Kya boli?</p>
            <p className="text-[#5D5545]">{response}</p>
          </div>
          {positiveResponses.some((word) => response.toLowerCase().includes(word)) ? (
            <p className="text-2xl font-bold text-[#3D3833]">LESSS GOO HEHEHEHE 😁</p>
          ) : negativeResponses.some((word) => response.toLowerCase().includes(word)) ? (
            <p className="text-2xl font-bold text-[#3D3833]">Ok sed.</p>
          ) : (
            <p className="text-2xl font-bold text-[#3D3833]">Mmmm... I see.</p>
          )}
        </div>
      )}
    </div>
  );
}