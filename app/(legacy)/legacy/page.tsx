import Wrapper from "@/components/wrapper";
import { IoSparklesSharp } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const LegacyLense = () => {
  return (
    <Wrapper>
      <main>
        <section className="legacy-hero relative py-0 overflow-hidden">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="hero-container flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-10">

              {/* Circles - Hidden on mobile, visible on tablet+ */}
              <div className="circles hidden md:block">
                <div className="smaller-circle absolute -top-20 left-1/2 -translate-x-1/2">
                  <img src="/logo/smaller-circle.png" alt="" className="w-32 md:w-auto" />
                </div>
                <div className="bigger-circle absolute top-0 left-1/2 -translate-x-1/2">
                  <img src="/logo/big-circle.png" alt="" className="w-48 md:w-auto" />
                </div>
              </div>

              {/* Stars - Responsive positioning */}
              <div className="stars">
                <img
                  src="/logo/Star-2.png"
                  alt=""
                  className="absolute right-5 sm:right-30 top-20 sm:top-50 size-6 sm:size-10"
                />
                <img
                  src="/logo/Star-3.png"
                  alt=""
                  className="absolute left-5 sm:left-70 top-40 sm:top-auto size-8 sm:size-12"
                />
                <img
                  src="/logo/Star-5.png"
                  alt=""
                  className="absolute left-5 sm:left-20 bottom-20 sm:bottom-30 size-8 sm:size-14"
                />
                <img
                  src="/logo/Star-5.png"
                  alt=""
                  className="absolute right-5 sm:right-60 top-20 sm:top-30 size-8 sm:size-14"
                />
              </div>

              {/* Try Button */}
              <div className="try-btn text-white z-10 mb-6 sm:mb-8">
                <button className="bg-[#05204B] flex gap-x-2 sm:gap-x-3 px-6 sm:px-8.5 py-1.5 sm:py-2 rounded-[60px] capitalize leading-6 font-medium cursor-pointer hover:bg-[#0a2e5a] transition-colors">
                  <span>
                    <img src="/logo/handshake.png" alt="handshake Icon" className="w-5 h-5 sm:w-auto sm:h-auto" />
                  </span>
                  <span>legacy lens</span>
                </button>
              </div>

              {/* Content - Text gets smaller on bigger screens */}
              <div className="content mb-12 sm:mb-20 md:mb-30 z-10 px-4 sm:px-0">
                <div className="w-full sm:w-auto md:w-185.5 text-center">
                  {/* First line - gets smaller on desktop */}
                  <p className="text-base sm:text-xl md:text-2xl lg:text-[26px] text-[#8191AA] -tracking-[1%] font-normal leading-relaxed sm:leading-8">
                    Stop Guessing. Start Knowing.
                  </p>

                  {/* Second line - prominent but responsive */}
                  <p className="font-bold mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-[50px] text-[#fdb62f] leading-tight">
                    Use LegacyLens
                  </p>

                  {/* Optional period - integrated better */}
                  <span className="text-base sm:text-xl md:text-2xl lg:text-[26px] text-[#8191AA]">.</span>
                </div>
              </div>

              {/* Input Wrapper - Larger textarea on big screens */}
              <div className="input-wrapper relative w-full flex items-center justify-center px-4 sm:px-0">
                <div className="photoboom-bg absolute -top-26 sm:bottom-14 left-1/2 -translate-x-1/2 opacity-50 sm:opacity-100 pointer-events-none">
                  <img src="/logo/image-Photoroom.png" alt="" className="w-48 sm:w-64 md:w-auto" />
                </div>

                <div className="relative mb-10 rounded-[20px] p-0.5 bg-linear-to-r from-[#CAA181] via-[#DB5927] to-[#125ACA] w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                  <div className="bg-[rgba(13,41,82,0.8)] backdrop-blur-md rounded-[18px] flex flex-col sm:flex-row gap-3 p-3 sm:p-4 md:p-5">
                    <IoSparklesSharp size={24} color="#465B7C" className="hidden sm:block mt-1" />
                    <IoSparklesSharp size={20} color="#465B7C" className="sm:hidden mx-auto" />

                    {/* Textarea - larger on big screens */}
                    <textarea
                      name="input"
                      id="text-area"
                      rows={4}
                      className="outline-none w-full bg-transparent resize-y text-white placeholder:text-[#465B7C] placeholder:font-bold placeholder:font-urbanist text-sm sm:text-base md:text-lg px-2 sm:px-3 md:px-4 py-2 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px]"
                      placeholder="Type in your ideas or the problems you are facing in your product"
                    />

                    <Link
                      href="/legacy/chat"
                      className="flex items-center justify-center sm:self-end bg-[#05204B] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-[60px] capitalize text-white font-extralight border border-[#fdb62f] cursor-pointer hover:bg-[#081f70] transition-colors text-sm sm:text-base"
                    >
                      <IoIosArrowRoundUp size={20} className="md:size-6" />
                      <span>send</span>
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container px-6 mx-auto">
            <div className="about-legacy-lens flex md:justify-between flex-col-reverse gap-y-20 md:flex-row">
              <div className="image-side flex-1">
                <div className="image-container relative h-100 md:w-157.5 w-full">
                  <Image
                    src="/logo/image-Photoroom-1.png"
                    alt="Image Photoroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="content-side flex-1">
                <Button text="What Is Legacy Lens?" isBlue={false} />
                <h2 className="font-bold text-[28px] md:text-[52px] leading-11 md:leading-17.75 mb-7 md:mb-0">
                  Not a Survey. A Structured Intervention.
                </h2>
                <div className="write-up flex flex-col space-y-7">
                  <p>
                    Legacy Lens is a multi-layer diagnostic framework designed
                    to evaluate how your product performs beneath the surface
                  </p>
                  <p>
                    We assess operational structure, brand clarity, system
                    efficiency, technical scalability, and growth readiness.
                  </p>
                  <div className="bottom-write-up">
                    <p>The result isn’t a report you shelve.</p>
                    <p> It’s a prioritized execution roadmap.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hot-it-works overflow-hidden relative bg-[#103FD5] py-20">
          <div className="container px-6 mx-auto">
            <div className="heading flex flex-col items-center">
              <h2 className="text-[32px] md:text-[52px] text-white mb-4">
                How Legacy Lens Works
              </h2>
              <p className="text-[13px] md:text-[15px] leading-6 text-[#899DBD] max-w-173.75 text-center">
                A structured, four-phase diagnostic designed to uncover
                structural weaknesses, clarify priorities, and produce a focused
                execution roadmap. No guesswork. No surface-level review.
              </p>
            </div>
            <div className="steps-container flex flex-col md:flex-row mt-10 gap-y-10">
              <div className="step z-50">
                <div className="number">1</div>
                <h5 className="step-heading">Intake & Context Review</h5>
                <p className="step-content">
                  You provide documentation, access points, and product overview
                  details.
                </p>
              </div>
              <div className="separator">
                <img src="logo/arrow1.png" alt="" />
              </div>
              <div className="step md:mt-25 ">
                <div className="number">2</div>
                <h5 className="step-heading">Deep Diagnostic Analysis</h5>
                <p className="step-content">
                  We conduct structural, technical, brand, and operational
                  audits.
                </p>
              </div>
              <div className="separator">
                <img src="logo/arrow2.png" alt="" />
              </div>
              <div className="step">
                <div className="number">3</div>
                <h5 className="step-heading">Priority Mapping</h5>
                <p className="step-content">
                  We identify what’s critical, what’s inefficient, and what’s
                  misaligned..
                </p>
              </div>
              <div className="separator">
                <img src="logo/arrow3.png" alt="" />
              </div>
              <div className="step md:mt-25">
                <div className="number">4</div>
                <h5 className="step-heading">Execution Roadmap</h5>
                <p className="step-content">
                  You receive a clear restructuring path with phased
                  recommendations and implementation options.
                </p>
              </div>
            </div>
            <div className="blurs">
              <img
                src="/logo/blur.png"
                alt=""
                className="absolute md:top-0 md:right-0 w-106 h-106 top-70 -right-40"
              />
              <img
                src="/logo/blur2.png"
                alt=""
                className="absolute md:bottom-10 bottom-0 -left-30 w-86 h-86"
              />
            </div>
          </div>
        </section>
        <section className="what-do-you-leave-with">
          <div className="container mx-auto px-6"></div>
        </section>
      </main>
    </Wrapper>
  );
};

export default LegacyLense;
