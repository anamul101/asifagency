import Button from '@/utility/button'
import React from 'react'

export default function AboutPage() {
  return (
    <section className="bg-black text-white">
      <div className="ρd__all ρd__div ρxJbok container w-[1280px] mx-auto">
        <div className="ρd__all ρd__div ρftBx7 flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="mb-4 lg:mb-6">
              <a
                href="/"
                className="text-sm md:text-base font-medium text-purple-300 hover:text-purple-200 transition-colors"
              >
                Scale Data Engine
              </a>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="font-aeonik text-4xl md:text-5xl lg:text-5xl [text-wrap:balance] text-gray-70">
                About Our Company
              </h1>
              
              <h2 className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl">
                Powering the Next Frontier of AI.
              </h2>
            </div>

            <div className="mt-6 md:mt-8 w-full flex justify-center lg:justify-start">
              <Button />
            </div>
          </div>

          {/* Right Video */}
          <div className="ρd__all ρd__div ρ_7Q9I3 flex-1 relative min-h-[400px] md:min-h-[500px] lg:min-h-[400px]">
            <div className="relative ρi ρezkw6 h-full">
              <video 
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute object-cover w-full h-full rounded-xl"
              >
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Data%20Engine/Data%20Engine-4k-mp4.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Data%20Engine/Data%20Engine-4k-webm.webm"
                  type="video/webm"
                />
              </video>
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute h-full w-full block opacity-0"
                srcSet="/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=320&q=75 320w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=768&q=75 768w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=992&q=75 992w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=1920&q=75 1920w"
                src="/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=1920&q=75"
                style={{ 
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: 0,
                  objectFit: 'cover',
                  color: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}