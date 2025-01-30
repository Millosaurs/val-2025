import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CustomCardProps {
  imageUrl: string
  heading: string
  text: string
  icon: React.ReactNode
  className?: string
}

export default function CustomCard({ imageUrl, heading, text, icon, className }: CustomCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="md:w-1/2 h-48 md:h-auto relative">
          <img src={imageUrl || "/placeholder.svg"} alt={heading} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-6 bg-white relative">
          <div className="absolute -top-8 left-6 bg-white rounded-full p-4 shadow-lg">{icon}</div>
          <h2 className="text-2xl font-bold mt-8 mb-4">{heading}</h2>
          <p className="text-gray-600">{text}</p>
        </div>
      </div>
    </Card>
  )
}

