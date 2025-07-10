"use client"

import { useState, useEffect } from "react"
import { Camera } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isShutterOpen, setIsShutterOpen] = useState(false)
  const [showFlash, setShowFlash] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsShutterOpen(true)
    }, 1000)

    const timer2 = setTimeout(() => {
      setShowFlash(true)
    }, 1500)

    const timer3 = setTimeout(() => {
      onLoadingComplete()
    }, 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Flash Effect */}
      {showFlash && <div className="absolute inset-0 bg-white animate-pulse opacity-80 duration-200"></div>}

      {/* Camera Animation */}
      <div className="relative">
        {/* Camera Body */}
        <div className="relative w-32 h-24 bg-gray-800 rounded-lg shadow-2xl">
          {/* Camera Lens */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-900 rounded-full border-4 border-gray-700">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-900 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Camera Flash */}
          <div className="absolute top-2 right-4 w-4 h-3 bg-gray-600 rounded-sm"></div>

          {/* Camera Brand */}
          <div className="absolute bottom-2 left-4 text-white text-xs font-bold">INDUS</div>
        </div>

        {/* Shutter Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isShutterOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {/* Shutter Blades */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                }}
              >
                <div className="w-full h-1 bg-gray-400 origin-center transform translate-y-7"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Camera Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Camera className="w-8 h-8 text-amber-500 animate-bounce" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white text-xl font-bold mb-2 tracking-wider">INDUS WEDDING FILMS</div>
        <div className="text-amber-500 text-sm tracking-widest animate-pulse">CAPTURING MOMENTS...</div>
      </div>
    </div>
  )
}
