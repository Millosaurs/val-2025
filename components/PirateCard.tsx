import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PirateCardProps {
  imageUrl: string
  heading: string
  text: string
  className?: string
}

export default function PirateCard({ imageUrl, heading, text, className }: PirateCardProps) {
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
          <h2 className="text-3xl font-bold mb-4 font-cursive text-[#3D3833] leading-tight text-center">{heading}</h2>
          <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-[#5D5545] font-cursive text-xl leading-relaxed pb-80 text-center">{text}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}