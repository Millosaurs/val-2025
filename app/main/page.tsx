"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PirateCard from "../../components/PirateCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const romanticData = [
  {
    imageUrl: "https://media1.tenor.com/m/KWj2k18vGHMAAAAd/peach-and-goma.gif",
    heading: "The Map to My Heart",
    text: "Like an ancient treasure map, my heart leads to you. X marks the spot where love awaits, and I hope you'll join me on this adventure to uncover a lifetime of happiness together. Will you be my Valentine?",
  },
  {
    imageUrl: "https://media1.tenor.com/m/qwwnV8nTXi8AAAAC/goma-peach.gif",
    heading: "The Ship of Us",
    text: "Just like a ship sailing through the vast ocean, I want us to navigate life's waves together. With you by my side, every journey will feel like a dream. Let’s set sail on this beautiful voyage—will you be my Valentine?",
  },
  {
    imageUrl: "https://media.tenor.com/ebxdmZtOvTwAAAAi/peach-goma.gif",
    heading: "Our Love Story",
    text: "Every great story has a beginning, and ours starts with you. I want to fill the pages of our lives with laughter, love, and unforgettable moments. Let’s write this story together—will you be my Valentine?",
  },
  {
    imageUrl: "https://media.tenor.com/zH6uMb7IYCYAAAAi/peachandgoma.gif",
    heading: "My Forever Valentine",
    text: "You are the treasure I’ve been searching for all my life. Your smile is my compass, and your love is my guiding star. I can’t imagine a future without you. Will you make me the happiest person and be my Valentine?",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex === romanticData.length - 1) {
      router.push("/final");
    } else {
      setDirection(1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + romanticData.length) % romanticData.length);
  };

  return (
    <div className="min-h-screen bg-[#D6C4A5] p-8 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.5 }}
          >
            <PirateCard {...romanticData[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <motion.button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-[#8B7E66] text-[#F9F5E9] hover:bg-[#5D5545] rounded-full p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3D3833] focus:ring-offset-2"
          onClick={handlePrevious}
          aria-label="Previous card"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={32} />
        </motion.button>

        <motion.button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-[#8B7E66] text-[#F9F5E9] hover:bg-[#5D5545] rounded-full p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3D3833] focus:ring-offset-2"
          onClick={handleNext}
          aria-label="Next card"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={32} />
        </motion.button>
      </div>
    </div>
  );
}
