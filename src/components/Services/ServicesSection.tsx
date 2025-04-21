"use client";
import { useEffect, useState } from "react";
import Button from "../../utility/button";
import datacuration from "@/assets/images/datacuration.webp"
import donovan from "@/assets/images/donovan.webp"

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mediaItems = [
    {
      type: "video",
      src: "https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Public%20Selector%2FPublic-Selector.webm",
    },
    {
      type: "image",
      src: donovan,
    },
    {
      type: "image",
      src: datacuration,
    },
    // Add more media items as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-black text-white">
    
      <div className="container w-[1280px] flex flex-col md:flex-row  py-20 md:px-0 mx-auto">
          {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 [text-wrap:balance]">
             We are Provide <br/> Services
            </h1>
            <h2 className="text-lg md:text-xl text-gray-300 mb-8 [text-wrap:balance]">
              Powering AI for Defense, Intelligence, <br/>and Civilian Agencies.
            </h2>
            <Button />
          </div>
        </div>

        {/* Right Carousel */}
        <div
          className="flex-1 mt-12 md:mt-0 relative border border-white/15 rounded-2xl overflow-hidden"
          style={{ aspectRatio: "674 / 432" }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={typeof item.src === "string" ? item.src : item.src.src} type="video/webm" />
                  </video>
                ) : (
                  <img
                    src={typeof item.src === "string" ? item.src : item.src.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
