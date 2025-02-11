"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PirateCard from "../../components/PirateCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const romanticData = [
  {
    imageUrl: "https://media1.tenor.com/m/KWj2k18vGHMAAAAd/peach-and-goma.gif",
    heading: "Darling...",
    text: "So,.. As to begin I liked you the momnet i saw you, liked you more as i talked with you, as liking you more as i spend time with you. I dont know how i should explain but i am sure that your are the missing piece in me. I want to show you this when we meet but dont know what will happen that day.",
  },
  {
    imageUrl: "https://media1.tenor.com/m/qwwnV8nTXi8AAAAC/goma-peach.gif",
    heading: "So.. Jaannu",
    text: "I want to never stop torchering, pampering you. The amount of satisfaction I get by seeing your face while u mad is so NOICE. You look so cute full red kan full chiku chiku ``bekagila hog nin sorry 😒``. Heng heli maja tako beku adre end ali nan mele rvg takolodu adru i will take risk forever.",
  },
  {
    imageUrl: "https://media.tenor.com/ebxdmZtOvTwAAAAi/peach-goma.gif",
    heading: "Just starting ya 😏",
    text: "Mugili clg firstu aga kododu kata aga irodu maja. Sigo munche yella full plan hage hige antha bandu 2hrs ali 1&1/2 hrs just sit and talk end 1/2hr ali nidyodu romance torcher yella amle feel nange chi agle ila nan torcher madake bre romance madko kuthko bite antha. Pu mugid mele full plan hako bartini no wasting time.",
  },
  {
    imageUrl: "https://media.tenor.com/zH6uMb7IYCYAAAAi/peachandgoma.gif",
    heading: "Back to main topic...",
    text: "Me want you to be my valantine this year, next year, and till idk lost count. So I have you myself and only me, me and me only no sharing stuff avela agala. My dear Kusumitha tell me are you willing to be my valantine so I turn that (valantine -> wife) in future ?",
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
