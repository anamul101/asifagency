import React from "react";
import openai from "../assets/images/openai.webp";
import microsoft from "../assets/images/microsoft.webp";
import meta from "../assets/images/meta.webp";
import message from "../assets/images/message.webp";
import olasmic from "../assets/images/olasmic.webp";
import characterai from "../assets/images/characterai.webp";
const GenerativeAISection = () => {
  return (
    <section id="" style={{backgroundColor:"black", color:"white"}} className="py-18 lg:py-20 bg-transparent relative lg:pb-8 ">
      <div className="container relative ">
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 !mb-16">
          <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
            <span>AI for the Enterprise</span>
          </div>
          <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
            Generative AI Architecture
          </h2>
          <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
            Whether you're building your own models or applying foundation
            models to your business, data remains the biggest bottleneck to AI.
          </p>
          <div className="mt-8 flex items-center gap-x-6">
            <a
              style={{ border: " 1px solid #9e789b", background: "#72556f" }}
              className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] inline-block "
              href="/"
            >
              <div style={{border: " 1px solid #9e789b"}} className="outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap hover:bg-[#5b3557] transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[15px] py-[10px]">
                Book a Demo
                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </div>
              <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
            </a>
          </div>
        </div>

        <div className="flex justify-center flex-col mb-24 md:mb-40 xl:mb-16 sm:h-[700px] h-[590px] mx-auto xl:flex-row mt-28 xl:mt-0">
          <div className="relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px]">
            <div className="absolute w-full -translate-y-1/2 top-1/2">
              <div className="opacity-100 border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer">
                <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                  Fine-Tuning and RLHF
                </p>
                <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                  Adapt best-in-class foundation models to your business and
                  your specific data to build sustainable, successful AI
                  programs and data from your enterprise.
                </p>
              </div>
              <div className="opacity-30 border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer">
                <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                  Foundation Models
                </p>
                <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                  Scale partners or integrates with all of the leading AI
                  models, from open-source to closed-source, including OpenAI,
                  Google, Meta, Cohere, and more.
                </p>
              </div>
              <div className="opacity-30 border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer">
                <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                  Enterprise Data
                </p>
                <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                  Scale's Data Engine enables you to integrate your enterprise
                  data into the fold of these models, providing the base for
                  long-term strategic differentiation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative inline-block w-full -mb-3 xl:h-full xl:mb-10 xl:mx-auto">
            <div className="keen-slider !overflow-visible xl:absolute pb-6 xl:!hidden">
              <img
                alt="Data model"
                loading="lazy"
                width="334"
                height="307"
                decoding="async"
                data-nimg="1"
                className="object-contain w-full h-auto keen-slider__slide"
                style={{
                  color: "transparent",
                  transform: "translate3d(0px, 0px, 0px)",
                  minWidth: "364px",
                  maxWidth: "364px",
                }}
                sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=320&amp;q=100 320w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=768&amp;q=100 768w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=992&amp;q=100 992w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=1920&amp;q=100 1920w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=1920&amp;q=100"
              />
              <img
                alt="RLHF layer from data model"
                loading="lazy"
                width="334"
                height="307"
                decoding="async"
                data-nimg="1"
                className="object-contain w-full h-auto keen-slider__slide"
                style={{
                  color: "transparent",
                  transform: "translate3d(32px, 0px, 0px)",
                  minWidth: "364px",
                  maxWidth: "364px",
                }}
                sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frlhf.471199f7.png&amp;w=320&amp;q=100 320w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frlhf.471199f7.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frlhf.471199f7.png&amp;w=768&amp;q=100 768w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frlhf.471199f7.png&amp;w=992&amp;q=100 992w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frlhf.471199f7.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frlhf.471199f7.png&amp;w=1920&amp;q=100 1920w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frlhf.471199f7.png&amp;w=1920&amp;q=100"
              />
              <img
                alt="Foundation models layer from data model"
                loading="lazy"
                width="334"
                height="307"
                decoding="async"
                data-nimg="1"
                className="object-contain w-full h-auto keen-slider__slide"
                style={{
                  color: "transparent",
                  transform: "translate3d(64px, 0px, 0px)",
                  minWidth: "364px",
                  maxWidth: "364px",
                }}
                sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation-models.b43aed55.png&amp;w=320&amp;q=100 320w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation-models.b43aed55.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation-models.b43aed55.png&amp;w=768&amp;q=100 768w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation-models.b43aed55.png&amp;w=992&amp;q=100 992w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation-models.b43aed55.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation-models.b43aed55.png&amp;w=1920&amp;q=100 1920w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation-models.b43aed55.png&amp;w=1920&amp;q=100"
              />
              <img
                alt="Enterprise quality layer from data model"
                loading="lazy"
                width="334"
                height="307"
                decoding="async"
                data-nimg="1"
                className="object-contain w-full h-auto keen-slider__slide"
                style={{
                  color: "transparent",
                  transform: "translate3d(96px, 0px, 0px)",
                  minWidth: "364px",
                  maxWidth: "364px",
                }}
                sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-engine.b1690cd3.png&amp;w=320&amp;q=100 320w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-engine.b1690cd3.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-engine.b1690cd3.png&amp;w=768&amp;q=100 768w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-engine.b1690cd3.png&amp;w=992&amp;q=100 992w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-engine.b1690cd3.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-engine.b1690cd3.png&amp;w=1920&amp;q=100 1920w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-engine.b1690cd3.png&amp;w=1920&amp;q=100"
              />
            </div>
          </div>

          <div className="px-7 w-screen left-1/2 -translate-x-1/2 relative sm:w-auto sm:px-0 xl:mb-6 xl:hidden">
            <div className="keen-slider !overflow-visible pb-24">
              <div
                className="space-y-4 keen-slider__slide active"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  minWidth: "356px",
                  maxWidth: "356px",
                }}
              >
                <p className="text-2xl leading-10 font-aeonik">
                  Enterprise GenAI Platform
                </p>
                <p className="text-white/70">
                  The only full-stack GenAI Platform for your Enterprise,
                  powered by the Scale Data Engine.
                </p>
              </div>
              <div
                className="space-y-4 keen-slider__slide"
                style={{
                  transform: "translate3d(32px, 0px, 0px)",
                  minWidth: "356px",
                  maxWidth: "356px",
                }}
              >
                <p className="text-2xl leading-10 font-aeonik">
                  Fine-Tuning and RLHF
                </p>
                <p className="text-white/70">
                  Adapt best-in-class foundation models to your business and
                  your specific data to build sustainable, successful AI
                  programs and data from your enterprise.
                </p>
              </div>
              <div
                className="space-y-4 keen-slider__slide"
                style={{
                  transform: "translate3d(64px, 0px, 0px)",
                  minWidth: "356px",
                  maxWidth: "356px",
                }}
              >
                <p className="text-2xl leading-10 font-aeonik">
                  Foundation Models
                </p>
                <p className="text-white/70">
                  Scale partners or integrates with all of the leading AI
                  models, from open-source to closed-source, including OpenAI,
                  Google, Meta, Cohere, and more.
                </p>
              </div>
              <div
                className="space-y-4 keen-slider__slide"
                style={{
                  transform: "translate3d(96px, 0px, 0px)",
                  minWidth: "356px",
                  maxWidth: "356px",
                }}
              >
                <p className="text-2xl leading-10 font-aeonik">
                  Enterprise Data
                </p>
                <p className="text-white/70">
                  Scale's Data Engine enables you to integrate your enterprise
                  data into the fold of these models, providing the base for
                  long-term strategic differentiation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-50 mx-auto -mt-16 lg:-mt-10 xl:hidden">
            <button
              className="px-1 py-2 sm:px-2"
              aria-label="Slide 1"
              type="button"
            >
              <div className="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white w-4 sm:w-5 md:w-6"></div>
            </button>
            <button
              className="px-1 py-2 sm:px-2"
              aria-label="Slide 2"
              type="button"
            >
              <div className="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white/40 w-1 sm:w-1.5 md:w-2"></div>
            </button>
            <button
              className="px-1 py-2 sm:px-2"
              aria-label="Slide 3"
              type="button"
            >
              <div className="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white/40 w-1 sm:w-1.5 md:w-2"></div>
            </button>
            <button
              className="px-1 py-2 sm:px-2"
              aria-label="Slide 4"
              type="button"
            >
              <div className="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white/40 w-1 sm:w-1.5 md:w-2"></div>
            </button>
          </div>
        </div>

        <p className="max-w-max mb-10 md:mb-12 text-center mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px]">
          GENERATIVE AI PROVIDERS WE PARTNER&nbsp;WITH:
        </p>

        <div className="hidden md:block">
          <ul className="items-center justify-center flex gap-4">
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="openai"
                loading="lazy"
                width="90"
                height="24"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=256&amp;q=100 2x"
                src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=256&amp;q=100"
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="adept"
                loading="lazy"
                width="75"
                height="36"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100 2x"
                src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100"
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="meta"
                loading="lazy"
                width="90"
                height="20"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100 2x"
                src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100"
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="cohere"
                loading="lazy"
                width="140"
                height="24"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=256&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100 2x"
                src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100"
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="anthropic"
                loading="lazy"
                width="126"
                height="15"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=128&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100 2x"
                src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100"
              />
            </li>
          </ul>
        </div>

        <div className="relative w-screen -translate-x-1/2 md:hidden left-1/2">
          <div
            className="rfm-marquee-container space-x-6"
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
                  "--duration": "24.28s",
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
                  <ul className="items-center justify-center flex gap-4">
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="openai"
                        loading="lazy"
                        width="90"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=256&amp;q=100 2x"
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=256&amp;q=100"
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="adept"
                        loading="lazy"
                        width="75"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100 2x"
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100"
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="meta"
                        loading="lazy"
                        width="90"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100 2x"
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100"
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="cohere"
                        loading="lazy"
                        width="140"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=256&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100 2x"
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100"
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="anthropic"
                        loading="lazy"
                        width="126"
                        height="15"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=128&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100 2x"
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100"
                        style={{ color: "transparent" }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="rfm-marquee"
              style={
                {
                  "--play": "running",
                  "--direction": "normal",
                  "--duration": "24.28s",
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
                <ul className="items-center justify-center flex gap-4">
                  <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                    <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                    <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                    <img
                      alt="openai"
                      loading="lazy"
                      width="90"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="logo-grid_full-white__9DeNP opacity-100 relative"
                      srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=256&amp;q=100 2x"
                      src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&amp;w=256&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                    <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                    <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                    <img
                      alt="adept"
                      loading="lazy"
                      width="75"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      className="logo-grid_full-white__9DeNP opacity-100 relative"
                      srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100 2x"
                      src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                    <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                    <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                    <img
                      alt="meta"
                      loading="lazy"
                      width="90"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="logo-grid_full-white__9DeNP opacity-100 relative"
                      srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=96&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100 2x"
                      src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                    <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                    <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                    <img
                      alt="cohere"
                      loading="lazy"
                      width="140"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="logo-grid_full-white__9DeNP opacity-100 relative"
                      srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=256&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100 2x"
                      src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                    <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                    <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                    <img
                      alt="anthropic"
                      loading="lazy"
                      width="126"
                      height="15"
                      decoding="async"
                      data-nimg="1"
                      className="logo-grid_full-white__9DeNP opacity-100 relative"
                      srcSet="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=128&amp;q=100 1x, /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100 2x"
                      src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAISection;
