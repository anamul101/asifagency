"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import microsoft from "../assets/images/microsoft.webp";
import meta from "../assets/images/meta.webp";
import openai from "../assets/images/openai.webp";
import cohere from "../assets/images/cohere.webp";
import adept from "../assets/images/adept.webp";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

type LogoItem = {
  alt: string;
  width: number;
  height: number;
  src: string | StaticImageData;
  srcSet: string;
};

type LogoGroup = {
  title: string;
  active: boolean;
  logos: LogoItem[];
};

const LogoMarqueeSection = () => {
  const [activeGroup, setActiveGroup] = useState(2); // Enterprises is active by default
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const logoGroups: LogoGroup[] = [
    {
      title: "Generative AI Companies",
      active: activeGroup === 0,
      logos: [
        {
          alt: "microsoft",
          width: 100,
          height: 22,
          src: microsoft,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmicrosoft.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmicrosoft.png&w=256&q=100 2x",
        },
        {
          alt: "meta",
          width: 90,
          height: 20,
          src: meta,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&w=256&q=100 2x",
        },
        {
          alt: "openai",
          width: 90,
          height: 24,
          src: openai,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&w=256&q=100 2x",
        },
        {
          alt: "cohere",
          width: 140,
          height: 24,
          src: cohere,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&w=256&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&w=320&q=100 2x",
        },
        {
          alt: "adept",
          width: 75,
          height: 36,
          src: adept,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&w=256&q=100 2x",
        },
      ],
    },
    {
      title: "U.S. Government Agencies",
      active: activeGroup === 1,
      logos: [
        {
          alt: "usarmy",
          width: 40,
          height: 40,
          src: acmeLogo,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fusarmy.png&w=48&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fusarmy.png&w=96&q=100 2x",
        },
        {
          alt: "airforce",
          width: 65,
          height: 51,
          src: quantumLogo,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fairforce.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fairforce.png&w=256&q=100 2x",
        },
        {
          alt: "defense innovation unit",
          width: 120,
          height: 14,
          src: echoLogo,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fdefense-innovation-unit.png&w=128&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fdefense-innovation-unit.png&w=256&q=100 2x",
        },
        {
          alt: "cdao",
          width: 113,
          height: 30,
          src: celestialLogo,
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcdao.png&w=128&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcdao.png&w=256&q=100 2x",
        },
      ],
    },
    {
      title: "Enterprises",
      active: activeGroup === 2,
      logos: [
        {
          alt: "cisco",
          width: 80,
          height: 42,
          src: "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcisco.png&w=256&q=100",
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcisco.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcisco.png&w=256&q=100 2x",
        },
        {
          alt: "time",
          width: 90,
          height: 29,
          src: "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Ftime.png&w=256&q=100",
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Ftime.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Ftime.png&w=256&q=100 2x",
        },
        {
          alt: "dlapiper",
          width: 90,
          height: 52,
          src: "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fdlapiper.png&w=256&q=100",
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fdlapiper.png&w=96&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fdlapiper.png&w=256&q=100 2x",
        },
        {
          alt: "gafg",
          width: 208,
          height: 32,
          src: "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fgafg.png&w=768&q=100",
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fgafg.png&w=256&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fgafg.png&w=768&q=100 2x",
        },
        {
          alt: "howard-hughes",
          width: 180,
          height: 32,
          src: "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fhoward-hughes.png&w=384&q=100",
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fhoward-hughes.png&w=256&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fhoward-hughes.png&w=384&q=100 2x",
        },
        {
          alt: "cengage",
          width: 150,
          height: 34,
          src: "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcengage.png&w=320&q=100",
          srcSet:
            "/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcengage.png&w=256&q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcengage.png&w=320&q=100 2x",
        },
      ],
    },
  ];

  const mobileLogos = [
    ...logoGroups[0].logos,
    ...logoGroups[1].logos,
    ...logoGroups[2].logos,
  ];

  const handleGroupClick = (index: number) => {
    setActiveGroup(index);
  };

  return (
    <section
      style={{ backgroundColor: "black", color: "white" }}
      className=" py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 relative overflow-hidden"
    >
      <div className="relative w-[1024px] mx-auto">
        <div
          className="pt-6 pb-12 sm:pb-16 sm:pt-20 xl:pb-16 xl:pt-24"
          style={{ opacity: 1, visibility: "inherit" }}
        >
          {/* Desktop Title and Navigation */}
          <div className="hidden mb-12 text-sm leading-6 text-center text-neutral-400 lg:block">
            Scale works with{" "}
            {logoGroups.map((group, index) => (
              <React.Fragment key={index}>
                <button
                  className={`section-title inline-block relative cursor-pointer transition-colors duration-300 ${
                    group.active ? "text-white" : "hover:text-neutral-200"
                  }`}
                  type="button"
                  onClick={() => handleGroupClick(index)}
                >
                  {group.title}
                  <div
                    className={`transition-opacity duration-300 absolute bottom-0 h-[1px] w-full ${
                      group.active
                        ? "bg-white opacity-100"
                        : "bg-silver opacity-0"
                    }`}
                  ></div>
                </button>
                {index < logoGroups.length - 1 ? ", " : ""}
                {index === logoGroups.length - 2 ? " & " : ""}
              </React.Fragment>
            ))}
          </div>

          {/* Desktop Logo Grid */}
          <div className="relative hidden lg:block h-14">
            {logoGroups.map((group, index) => (
              <div
                key={index}
                className={`logos absolute w-full top-1/2 -translate-y-1/2 transition-opacity duration-700 ${
                  group.active ? "opacity-100 delay-300" : "opacity-0"
                }`}
              >
                <div className="relative grid text-white">
                  <ul className="flex items-center justify-between gap-12 gap-y-10 lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-4 grid-cols-4">
                    {group.logos.map((logo, logoIndex) => (
                      <li
                        key={logoIndex}
                        className="flex justify-center items-center"
                      >
                        <div className="relative">
                          <Image
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            src={logo.src}
                            // srcSet removed as it is not supported by next/image
                            className="logo-grid_full-white__9DeNP"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <p className="mb-10 text-sm leading-6  text-gray-400">
              Scale works with Generative AI Companies, U.S. Government Agencies
              & Enterprises
            </p>
            <div className="relative w-screen -translate-x-1/2 left-1/2 h-[47px]">
              <div
                className="rfm-marquee-container space-x-12"
                style={
                  {
                    "--pause-on-hover": "running",
                    "--pause-on-click": "running",
                    "--width": "100%",
                    "--transform": "none",
                  } as React.CSSProperties
                }
              >
                <div
                  className="rfm-marquee"
                  style={
                    {
                      "--play": "running",
                      "--direction": "normal",
                      "--duration": "0s",
                      "--delay": "0s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                    } as React.CSSProperties
                  }
                >
                  <div className="rfm-initial-child-container">
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" } as React.CSSProperties}
                    >
                      <div className="relative grid text-white">
                        <ul className="flex items-center justify-between gap-12 gap-y-10 lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-4 grid-cols-4">
                          {mobileLogos.map((logo, index) => (
                            <li
                              key={index}
                              className="flex justify-center items-center"
                            >
                              <div className="relative">
                                <Image
                                  alt={logo.alt}
                                  width={logo.width}
                                  height={logo.height}
                                  src={logo.src}
                                  // srcSet removed as it is not supported by next/image
                                  className="logo-grid_full-white__9DeNP"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rfm-marquee"
                  style={
                    {
                      "--play": "running",
                      "--direction": "normal",
                      "--duration": "0s",
                      "--delay": "0s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="rfm-child"
                    style={{ "--transform": "none" } as React.CSSProperties}
                  >
                    <div className="relative grid text-white">
                      <ul className="flex items-center justify-between gap-12 gap-y-10 lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-4 grid-cols-4">
                        {mobileLogos.map((logo, index) => (
                          <li
                            key={index}
                            className="flex justify-center items-center"
                          >
                            <div className="relative">
                              <Image
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                src={logo.src}
                                // srcSet removed as it is not supported by next/image
                                className="logo-grid_full-white__9DeNP"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarqueeSection;
