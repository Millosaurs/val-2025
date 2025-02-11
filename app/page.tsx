"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Loader from "../components/Loader";

interface IntroductionCardProps {
  imageUrl: string;
  heading: string;
  text: string;
  className?: string;
}

function IntroductionCard({ imageUrl, heading, text, className }: IntroductionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "overflow-hidden w-full mx-auto bg-[#F9F5E9] rounded-[40px] transition-all duration-700 ease-in-out",
          "h-[800px] max-w-4xl",
          className,
        )}
      >
        <div className="flex flex-col md:flex-row h-full relative">
          {/* Image Section */}
          <div className="md:w-1/2 h-72 md:h-full relative z-10 p-4">
            <img
              src={imageUrl || "/placeholder.svg?height=400&width=400"}
              alt={heading}
              className="w-full h-full object-cover rounded-[30px] shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 bg-[#EEDEC5] rounded-[40px] flex flex-col h-full p-6">
            <h2 className="text-4xl font-extrabold mb-4 font-quick text-[#3D3833] leading-tight">{heading}</h2>
            <div className="flex-grow overflow-y-auto pr-4 scrollbar-hide">
              <p className="text-[#5D5545] font-quick text-xl leading-relaxed pb-80 ">{text}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const introductionData = {
    imageUrl: "https://media1.tenor.com/m/1jI7RJDmGvwAAAAC/peach-and-goma-love-peach-cat-cute.gif",
    heading: "A Little About Me",
    text: `Me ? A avg dude who intrsted in nothin, well may be a little computers and tech cuz they are cool and hard to figure out. Ain't no topper but still like to be in leaderboard. Dont want much attention but when I do I want it full. That's it I have to say for myself 😊. I am making this only if the plan was cancled and something like exam stuff came... This will be sent automaticaly on 12:00AM, 14-02-2025.`,
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="m-6 min-h-screen bg-[#D6C4A5] flex flex-col items-center justify-center"
      >
        <motion.div
          className="border-8 border-[#EEDEC5] rounded-full bg-[#f7e4c7]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Loader />
        </motion.div>
        <motion.p
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-2xl font-quick font-bold text-[#3D3833] border-4 border-[#b4a996] rounded-full p-3 bg-[#f7e4c7]"
        >
          Loading ya baka ona💕
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#D6C4A5]">
      <div className="max-w-4xl mx-auto text-center scroll-hidden">
        <IntroductionCard
          imageUrl={introductionData.imageUrl}
          heading={introductionData.heading}
          text={introductionData.text}
        />
        {/* Link to the next page */}
        <motion.div className="mt-8 text-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/main"
              className="inline-block font-bold px-8 py-3 bg-[#EEDEC5] text-[#3D3833] font-quick text-xl rounded-[30px] shadow-lg hover:bg-[#D4C4A5] transition-all duration-300"
            >
              Continue the Journey
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}