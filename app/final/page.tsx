"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";
import { Separator } from "@/components/ui/separator"


export default function FinalPage() {
  const [response, setResponse] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const positiveResponses = ["ok", "sari", "aythu", "nodana", "mmmm", "yes", "yo", "ya ya", "sure"];
  const negativeResponses = ["no", "nope", "never", "no ya", "rejected", "get lost", "better you die", "illa", "beda", "bekagila", "not needed"];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleConfirm = () => {
    if (inputValue.trim()) {
      setResponse(inputValue);
      const isPositive = positiveResponses.some((word) => inputValue.toLowerCase().includes(word));
      const isNegative = negativeResponses.some((word) => inputValue.toLowerCase().includes(word));

      if (isPositive) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }
  };

  const handleDownloadResponse = () => {
    if (response) {
      const jsonResponse = JSON.stringify({ response }, null, 2);
      const blob = new Blob([jsonResponse], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "valentine_response.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const textSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="min-h-screen bg-[#D6C4A5] flex items-center justify-center font-quick p-8">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} recycle={false} />}
      {response === null ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row h-full relative"
        >
          <div className="md:w-1/2 h-72w md:h-full relative z-10 py-4">
            <motion.img
              src="https://media1.tenor.com/m/lOS4yqbU8-oAAAAC/peach-and-goma-goma.gif"
              alt="meow"
              className="w-full h-full object-cover rounded-[30px] shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <motion.div
            className="text-center bg-[#F9F5E9] p-8 rounded-3xl shadow-2xl max-w-md w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-[#3D3833] mb-4">Will You Be My Valentine dear Baka ona ?</h1>
            <p className="text-[#5D5545] mb-8">
              You know I have no intension of making you my girlfriend its just i cant say you are my wife although you are to me. Until i prove it will you be mine ????
            </p>
            <p>Tell me how you feel abt this proposal, and me I will be waiting for your responce 😊</p>
            <animated.textarea
              style={textSpring}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Start with your answer with        (yes or no...)"
              className="w-full p-4 mt-4 mb-4 bg-[#EEDEC5] rounded-2xl text-[#3D3833] placeholder-[#5D5545] focus:outline-none focus:ring-2 focus:ring-[#8B7E66] text-center"
              rows={4}
            />
            <motion.button
              onClick={handleConfirm}
              disabled={!inputValue.trim()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#8B7E66] text-[#F9F5E9] hover:bg-[#5D5545] rounded-full px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3D3833] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm
            </motion.button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="text-center bg-[#F9F5E9] p-8 rounded-3xl shadow-2xl max-w-md w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-[#3D3833] mb-4"></h1>
          <motion.div
            className="bg-[#EEDEC5] p-6 rounded-2xl text-[#3D3833] mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xl font-semibold mb-2">Banogi meri valantine mere har janam mai ?</p>
            <p className="text-xl font-semibold mb-2">{response}</p>
            <p className="text-[#5D5545]"></p>
          </motion.div>
          <motion.p
            className="text-2xl font-bold text-[#3D3833] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {positiveResponses.some((word) => response.toLowerCase().includes(word))
              ? "Darling 😁"
              : negativeResponses.some((word) => response.toLowerCase().includes(word))
              ? "Ok sed."
              : "I see, Isee"}
          </motion.p>
          <motion.button
            onClick={handleDownloadResponse}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#8B7E66] text-[#F9F5E9] hover:bg-[#5D5545] rounded-full px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3D3833] focus:ring-offset-2"
          >
            Press to download.
            Send it to me :)
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}