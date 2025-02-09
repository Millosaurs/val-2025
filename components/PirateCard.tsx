import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PirateCardProps {
  imageUrl: string;
  heading: string;
  text: string;
  className?: string;
}

export default function PirateCard({ imageUrl, heading, text, className }: PirateCardProps) {
  const [key, setKey] = useState(0);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
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
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 h-72 md:h-full relative z-10 p-4"
            >
              <img
                src={imageUrl || "/placeholder.svg?height=400&width=400"}
                alt={heading}
                className="w-full h-full object-cover rounded-[30px] shadow-lg"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="md:w-1/2 bg-[#EEDEC5] rounded-[40px] flex flex-col h-full p-6"
            >
              <h2 className="text-3xl font-bold mb-4 font-quick text-[#3D3833] leading-tight text-center">{heading}</h2>
              <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar scroll-hidden">
                <p className="text-[#5D5545] font-quick text-xl leading-relaxed pb-80 text-center scroll-hidden">{text}</p>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
