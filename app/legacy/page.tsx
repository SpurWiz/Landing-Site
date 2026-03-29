import Wrapper from "@/components/wrapper";
import { IoSparklesSharp } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";
import Button from "@/components/button";
import Image from "next/image";
import ParticleBackground from "@/components/particlebg";
import TestimonialCarousel from "../files/testimonial-carousel";

const whatYouLeaveWith = [
  {
    id: 1,
    title: "Structural Health Assessment",
    description:
      "A detailed evaluation of your internal workflows, team alignment, operational systems, and administrative structure  identifying inefficiencies, bottlenecks, and execution gaps.",
  },
  {
    id: 2,
    title: "Brand & Positioning Clarity Report",
    description:
      "An analysis of how your messaging, identity, and customer journey align with your product’s true value including misalignments that weaken perception or conversion.",
  },
  {
    id: 3,
    title: "Technical Readiness Evaluation",
    description:
      "A review of your platform’s architecture, user experience flow, scalability potential, and performance risks highlighting areas that require rebuilding before scaling.",
  },
  {
    id: 4,
    title: "Prioritized Execution Roadmap",
    description:
      "A phased, structured implementation plan outlining what must be addressed first, what can be optimized later, and what should be eliminated entirely.",
  },
];

const LegacyLense = () => {
  return (
    <Wrapper>
      <main>
        <section className="legacy-hero relative py-10">
          <div className="container px-6 mx-auto">
            <div className="hero-container flex flex-col items-center justify-center h-screen">
              <div className="circles hidden md:block">
                <div className="smaller-circle absolute -top-20 left-1/2 -translate-x-1/2">
                  <img src="/images/smaller-circle.png" alt="" />
                </div>
                <div className="bigger-circle absolute top-0 left-1/2 -translate-x-1/2">
                  <img src="/images/big-circle.png" alt="" />
                </div>
              </div>
              <div className="stars">
                <img
                  src="/images/Star-2.png"
                  alt=""
                  className="absolute right-30 top-50 size-10"
                />
                <img
                  src="/images/Star-3.png"
                  alt=""
                  className="absolute left-70 size-12 "
                />
                <img
                  src="/images/Star-5.png"
                  alt=""
                  className="absolute left-20 bottom-30 size-14"
                />
                <img
                  src="/images/Star-5.png"
                  alt=""
                  className="absolute right-60 top-30 size-14"
                />
              </div>
              <div className="try-btn text-white z-10">
                <button className="bg-[#05204B] flex gap-x-3 px-8.5 py-2 rounded-[60px] capitalize leading-6 font-medium cursor-pointer">
                  <span>
                    <img src="/images/handshake.png" alt="handshake Icon" />
                  </span>
                  <span>legacy lens</span>
                </button>
              </div>
              <div className="content mb-30 z-10">
                <div className="md:w-185.5 text-[46px] text-[#8191AA] -tracking-[1%] font-normal text-center">
                  <p className="md:leading-25.5 md:h-16">
                    Stop Guessing. Start Knowing.
                  </p>{" "}
                  <p className="font-bold text-[66px] text-[#fdb62f]">
                    Use LegacyLens
                  </p>
                  .
                </div>
              </div>
              <div className="input-wrapper relative w-full flex items-center justify-center">
                <div className="photoboom-bg absolute bottom-14 left-1/2 -translate-x-1/2">
                  <img src="/images/image-Photoroom.png" alt="" />
                </div>
                {/* <div className="relative rounded-[20px] mb-3">
                  <div className="absolute -inset-0.5 rounded-[20px] bg-linear-to-r from-[#CAA181] via-[#DB5927] to-[#125ACA]" />
                  <div className="relative text-area bg-[#0D295229] backdrop-blur-md p-4 rounded-[18px] flex items-start">
                    <IoSparklesSharp size={36} color="white" />
                    <textarea
                      name="input"
                      id="text-area"
                      className="outline-none w-full bg-transparent resize-none"
                    />
                  </div>
                </div> */}
                <div className="relative rounded-[20px] p-0.5 bg-linear-to-r from-[#CAA181] via-[#DB5927] to-[#125ACA] h-55.25 md:w-242.75 w-full">
                  <div className="bg-[rgba(13,41,82,0.8)] backdrop-blur-md rounded-[18px] flex gap-3 p-4 h-full w-full">
                    <IoSparklesSharp size={28} color="#465B7C" />
                    <textarea
                      name="input"
                      id="text-area"
                      className="outline-none w-full bg-transparent resize-none text-white placeholder:text-[#465B7C] placeholder:font-bold placeholder:font-urbanist"
                      placeholder="Type in your ideas or the problems you are facing in your product"
                    />
                    <button className="flex mt-auto items-center bg-[#05204B] px-5 py-2.75 rounded-[60px] capitalize text-white font-extralight border border-[#fdb62f] cursor-pointer hover:bg-[#081f70]">
                      <IoIosArrowRoundUp size={24} />
                      <span>send</span>
                    </button>
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
                    src="/images/image-Photoroom-1.png"
                    alt="Image Photoroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="content-side flex-1">
                <Button text="What Is Legacy Lens?" isBlue={false} />
                <h2 className="font-bold text-[32px] md:text-[52px] leading-11 md:leading-17.75 mb-7 md:mb-0">
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
        <section className="hot-it-works relative bg-[#103FD5] py-20 overflow-hidden">
          <div className="container px-6 mx-auto">
            <div className="heading flex flex-col items-center">
              <h2 className="text-[32px] md:text-[52px] text-white mb-4 leading-11 md:leading-0">
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
                <img src="images/arrow1.png" alt="" />
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
                <img src="images/arrow2.png" alt="" />
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
                <img src="images/arrow3.png" alt="" />
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
                src="/images/blur.png"
                alt=""
                className="absolute md:top-0 md:right-0 w-106 h-106 top-70 -right-40"
              />
              <img
                src="/images/blur2.png"
                alt=""
                className="absolute md:bottom-10 bottom-0 -left-30 w-86 h-86"
              />
            </div>
          </div>
        </section>
        <section className="what-do-you-leave-with py-20">
          <div className="container mx-auto px-6">
            <div className="section-content flex flex-col md:flex-row">
              <div className="write-up-side flex-1">
                <Button text="Legacy lens outcome" isBlue={false} />
                <h2 className="heading capitalize font-bold text-[32px] md:text-[52px] leading-17.75 -tracking-[1%]">
                  What you leave with
                </h2>
                <p className="font-medium text-[13px] md:text-[15px] leading-6 tracking-[0%] text-[#6B6B6B]">
                  After completing Legacy Lens, you don’t walk away with
                  abstract recommendations.You receive a structured breakdown of
                  what’s working, what’s misaligned, and what’s limiting scale
                  along with a clear path forward.
                </p>
                <p className="font-medium text-[15px] leading-6 tracking-[0%] text-[#6B6B6B] mt-6">
                  Everything is prioritized. Everything is actionable. The
                  Deliverables are:
                </p>
                <div className="deliverable py-10 flex flex-col space-y-10">
                  {whatYouLeaveWith.map((item) => {
                    return (
                      <div className="peak" key={item.id}>
                        <h3 className="font-bold text-[20px] leading-6 tracking-[0%] mb-3">
                          {item.title}
                        </h3>
                        <p className="font-medium text-[15px] leading-6 tracking-[0%] text-[#6B6B6B]">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="image-side flex-1">
                <div className="image-container relative h-210.5">
                  <Image
                    src="/images/what-you.png"
                    alt="what leave with image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials bg-[#103FD5]">
          <div className="container mx-auto px-6">
            <div className="section-container flex flex-col items-center py-20">
              <Button text="Testimonials" isBlue={true} />
              <h2 className="text-[32px] md:text-[42px] text-white w-full md:w-2xl text-center leading-13.75 -tracking-[1%]">
                What Founders Say After Working With Us
              </h2>
              <p className="font-medium text-[15px] leading-6 traking-[0%] w-full md:w-197.5 text-center text-[#899DBD] mt-6">
                Execution changes everything. These are founders and business
                leaders who partnered with Spur Wiz to restructure, rebuild, and
                scale their products and saw measurable transformation.
              </p>
              <TestimonialCarousel />
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default LegacyLense;
