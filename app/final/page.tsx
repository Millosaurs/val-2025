"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function FinalPage() {
  const [response, setResponse] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // List of positive responses
  const positiveResponses = ["ok", "sari", "aythu", "nodana", "mmmm", "yes", "yo", "ya ya", "sure"];

  // List of negative responses
  const negativeResponses = ["no", "nope", "never", "no ya", "rejected", "get lost", "better you die", "illa", "beda", "bekagila", "not needed"];

  // Get window dimensions
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        setShowConfetti(true); // Show confetti
        setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
      } else if (isNegative) {
        // Do nothing (negative response handling is in the UI)
      } else {
        // Handle other responses with a romantic message
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#D6C4A5] flex items-center justify-center font-quick p-8">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />} {/* Confetti component */}
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