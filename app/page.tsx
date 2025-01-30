import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IntroductionCardProps {
  imageUrl: string;
  heading: string;
  text: string;
  className?: string;
}

function IntroductionCard({ imageUrl, heading, text, className }: IntroductionCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden w-full mx-auto bg-[#F9F5E9] rounded-[40px] transition-all duration-700 ease-in-out",
        "h-[800px] max-w-4xl", // Fixed height and max-width
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
          <h2 className="text-4xl font-extrabold mb-4 font-cursive text-[#3D3833] leading-tight">{heading}</h2>
          <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-[#5D5545] font-cursive text-xl leading-relaxed pb-80 scroll-hidden">{text}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function HomePage() {
  const introductionData = {
    imageUrl: "/placeholder.svg?height=400&width=400&text=You+and+Me",
    heading: "A Little About Me",
    text: `Hello there, my love. I wanted to take a moment to share a little about myself and what’s been on my mind lately. I’m someone who believes in the magic of connections, the kind that feels like the stars aligned just for us. I’ve always been drawn to your kindness, your laughter, and the way you make the world feel brighter just by being in it.

    Lately, I’ve been thinking about how special it is to find someone who feels like home. Someone who makes every moment feel like an adventure, even in the simplest of times. You’ve been that person for me, and I can’t help but feel grateful for the way you’ve touched my life.

    There’s something I’ve been wanting to ask you, something that’s been on my heart for a while now. But before I do, I wanted to take this moment to remind you how much you mean to me. You’re not just a part of my life—you’re the part that makes everything else make sense.

    So, when the time feels right, I hope you’ll let me share something important with you. Until then, know that you’re always in my thoughts, and I’m looking forward to the moments we’ll create together.`,
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center scroll-hidden">
        <IntroductionCard
          imageUrl={introductionData.imageUrl}
          heading={introductionData.heading}
          text={introductionData.text}
        />
        {/* Link to the next page */}
        <div className="mt-8 text-center">
          <Link
            href="/main"
            className="inline-block font-bold px-8 py-3 bg-[#EEDEC5] text-[#3D3833] font-cursive text-xl rounded-[30px] shadow-lg hover:bg-[#D4C4A5] transition-all duration-300"
          >
            Continue the Journey
          </Link>
        </div>
      </div>
    </div>
  );
}