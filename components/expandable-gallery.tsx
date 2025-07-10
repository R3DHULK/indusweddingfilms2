"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery/wedding-1.jpg", // Your actual image path
    title: "ROYAL GUJARATI WEDDING",
    subtitle: "Beautiful Traditional Ceremony - Mumbai",
    aspect: "portrait",
    size: "large",
  },
  {
    src: "/images/gallery/couple-shoot-1.jpg",
    title: "PRE-WEDDING SHOOT",
    subtitle: "Romantic Moments - Goa Beach",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/gallery/bride-portrait-1.jpg",
    title: "BRIDAL PORTRAIT",
    subtitle: "Elegant Beauty - Kolkata Studio",
    aspect: "portrait-tall",
    size: "large",
  },
  {
    src: "/images/gallery/wedding-2.jpg",
    title: "TRADITIONAL CEREMONY",
    subtitle: "Bengali Wedding - Kolkata",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/gallery/couple-shoot-2.jpg",
    title: "MEHENDI CELEBRATION",
    subtitle: "Colorful Moments - Rajasthan",
    aspect: "landscape-wide",
    size: "large",
  },
  {
    src: "/images/gallery/bride-portrait-2.jpg",
    title: "RECEPTION SHOOT",
    subtitle: "Grand Celebration - Hyderabad",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/gallery/wedding-3.jpg",
    title: "HALDI CEREMONY",
    subtitle: "Joyful Moments - Pune",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/gallery/couple-shoot-3.jpg",
    title: "COUPLE DANCE",
    subtitle: "Sangam Night - Delhi",
    aspect: "portrait",
    size: "large",
  },
  // Additional images for expansion
  {
    src: "/images/gallery/bride-portrait-3.jpg",
    title: "BRIDAL SHOOT",
    subtitle: "Elegant Bride - Mumbai",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/gallery/wedding-4.jpg",
    title: "ROYAL WEDDING",
    subtitle: "Grand Celebration - Jaipur",
    aspect: "landscape-wide",
    size: "large",
  },
  {
    src: "/images/gallery/couple-shoot-4.jpg",
    title: "PRE-WEDDING",
    subtitle: "Romantic Couple - Goa",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/gallery/bride-portrait-4.jpg",
    title: "BRIDAL GLOW",
    subtitle: "Radiant Bride - Delhi",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/gallery/wedding-5.jpg",
    title: "TRADITIONAL RITUALS",
    subtitle: "Sacred Ceremony - Varanasi",
    aspect: "portrait-tall",
    size: "large",
  },
  {
    src: "/images/gallery/couple-shoot-5.jpg",
    title: "LOVE IN THE AIR",
    subtitle: "Romantic Getaway - Kerala",
    aspect: "landscape",
    size: "medium",
  },
  {
    src: "/images/gallery/bride-portrait-5.jpg",
    title: "ENCHANTING BRIDE",
    subtitle: "Magical Moment - Udaipur",
    aspect: "portrait",
    size: "medium",
  },
  {
    src: "/images/gallery/wedding-6.jpg",
    title: "JOYFUL CELEBRATION",
    subtitle: "Festive Occasion - Punjab",
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
