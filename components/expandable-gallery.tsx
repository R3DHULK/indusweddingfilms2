"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

const galleryImages = [
  {
    src: "/images/landscape1.jpg", // Your actual image path
    title: "WEDDING",
    subtitle: "Beautiful Traditional Ceremony",
    aspect: "portrait",
    size: "large",
  },
  {
    src: "/images/propose.jpg",
    title: "PROPOSAL",
    subtitle: "Pre-wedding Photoshoot",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/rajasthani.jpg",
    title: "BRIDAL PORTRAIT",
    subtitle: "Elegant Beauty",
    aspect: "portrait-tall",
    size: "large",
  },
  {
    src: "/images/kolkata.jpg",
    title: "TRADITIONAL CEREMONY",
    subtitle: "Bengali Wedding",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/mehendi.jpg",
    title: "MEHENDI CELEBRATION",
    subtitle: "Colorful Moments",
    aspect: "landscape-wide",
    size: "large",
  },
  {
    src: "/images/reception.jpg",
    title: "RECEPTION NIGHT",
    subtitle: "Grand Celebration",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/haldi.jpg",
    title: "HALDI CEREMONY",
    subtitle: "Yellow Moments",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/coupledance.jpg",
    title: "COUPLE DANCE",
    subtitle: "Sangam Night",
    aspect: "portrait",
    size: "large",
  },
  // Additional images for expansion
  {
    src: "/images/bridal.jpg",
    title: "BRIDAL SHOOT",
    subtitle: "Elegant Bride",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/royalwedding.jpg",
    title: "ROYAL WEDDING",
    subtitle: "Grand Celebration",
    aspect: "landscape-wide",
    size: "large",
  },
  {
    src: "/images/prewed.jpg",
    title: "PRE-WEDDING",
    subtitle: "Casual Bride Look",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/bridalglow.jpg",
    title: "BRIDAL GLOW",
    subtitle: "Radiant Bride",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/traditional.jpg",
    title: "TRADITIONAL RITUALS",
    subtitle: "Sacred Ceremony",
    aspect: "portrait-tall",
    size: "large",
  },
  {
    src: "/images/loveintheair.jpg",
    title: "LOVE IN THE AIR",
    subtitle: "Romantic Getaway",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/enchanting.jpg",
    title: "ENCHANTING BRIDE",
    subtitle: "Magical Moment",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/joyful.jpg",
    title: "JOYFUL CELEBRATION",
    subtitle: "Festive Occasion",
    aspect: "landscape-wide",
    size: "large",
  },
]

export function ExpandableGallery() {
  const [showMore, setShowMore] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const initialImages = galleryImages.slice(0, 8)
  const moreImages = galleryImages.slice(8, 12)
  const allImages = galleryImages.slice(12)

  const getGridClasses = (image: any, index: number) => {
    const baseClasses =
      "relative overflow-hidden rounded-lg group cursor-pointer hover:scale-105 transition-all duration-300"

    switch (image.aspect) {
      case "portrait-tall":
        return `${baseClasses} row-span-2`
      case "landscape-wide":
        return `${baseClasses} col-span-2`
      case "landscape":
        return `${baseClasses} ${image.size === "large" ? "col-span-2" : ""}`
      default:
        return baseClasses
    }
  }

  const renderImageGrid = (images: any[], startIndex = 0) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
      {images.map((image, index) => (
        <div key={startIndex + index} className={getGridClasses(image, index)}>
          <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-bold text-sm mb-1 text-amber-400">{image.title}</h3>
            <p className="text-xs opacity-90">{image.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Initial Gallery */}
      {renderImageGrid(initialImages)}

      {/* More Images (First Expansion) */}
      {showMore && (
        <div className="space-y-8 animate-in slide-in-from-top-4 duration-500">{renderImageGrid(moreImages, 8)}</div>
      )}

      {/* All Images (Second Expansion) */}
      {showAll && (
        <div className="space-y-8 animate-in slide-in-from-top-4 duration-500">{renderImageGrid(allImages, 12)}</div>
      )}

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        {!showMore && (
          <Button
            onClick={() => setShowMore(true)}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full"
          >
            View More Photos
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        )}

        {showMore && !showAll && (
          <div className="space-x-4">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full"
            >
              View More Photos
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => setShowMore(false)} variant="outline" size="lg" className="px-8 py-3 rounded-full">
              See Less
              <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {showAll && (
          <Button
            onClick={() => {
              setShowAll(false)
              setShowMore(false)
            }}
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full"
          >
            See Less
            <ChevronUp className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
