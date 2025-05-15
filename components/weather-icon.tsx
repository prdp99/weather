import Image from "next/image"
import { cn } from "@/lib/utils"

interface WeatherIconProps {
    condition: string
    className?: string
}

export default function WeatherIcon({ condition, className }: WeatherIconProps) {

    if (!condition) return
    const getIconPath = () => {
        const conditionLower = condition.toLowerCase()

        if (conditionLower.includes("light rain") || conditionLower.includes("light rain shower")) {
            return "/icons/light-rain.png"
        }
        if (conditionLower.includes("patchy rain")) {
            return "/icons/patchy-rain.png"
        }
        if (conditionLower.includes("mist")) {
            return "/icons/mist.png"
        }
        if (conditionLower.includes("snow")) {
            return "/icons/patchy-snow.png"
        }
        if (conditionLower.includes("clear")) {
            return "/icons/clear.png"
        }
        if (conditionLower.includes("moderate rain")) {
            return "/icons/moderate-rain.png"
        }
        if (conditionLower.includes("thunder")) {
            return "/icons/mod-rain-heavy-thunder.png"
        }
        if (conditionLower.includes("fog")) {
            return "/icons/fog.png"
        }
        if (conditionLower === "cloudy") {
            return "/icons/cloudy.png"
        }
        if (conditionLower.includes("partly cloudy")) {
            return "/icons/partly-cloudy-2.png"
        }
        if (conditionLower.includes("sunny")) {
            return "/icons/sunny.png"
        }

        // Default icon
        return "/icons/partly-cloudy-2.png"
    }

    return (
        <div className={cn("relative", className)}>
            <Image
                src={getIconPath() || "/placeholder.svg"}
                alt={condition}
                width={128}
                height={128}
                className="object-contain w-full h-full"
            />
        </div>
    )
}
