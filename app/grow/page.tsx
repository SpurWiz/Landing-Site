"use client"

import Wrapper from '@/components/wrapper'
import React, { useState } from 'react'
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"; 
import Link from "next/link";

const Grow = () => {
   
  const [current, setCurrent] = useState(0);

  const features = [
    {
      id: 1,
      image: "/images/Rectangle.png",
      topic: "Product Restructuring",
      info: "We assess structural weaknesses across operations, positioning, and execution, then rebuild systems that eliminate chaos and create scalable foundations.",
      link: "Book a Session"
    },
    {
      id: 2,
      image: "/images/Rectangle2.png",
      topic: "Business & Operational Strategy",
      info: "We define clear growth priorities, refine business models, align leadership direction, and implement measurable performance frameworks.",
      link: "Book a Session"
    },
    {
      id: 3,
      image: "/images/Rectangle3.png",
      topic: "Technical Build & Optimization",
      info: "From MVP development to full product refactoring, we build and optimize digital systems that support performance, automation, and long-term scale.",
      link: "Book a Session"
    },
    {
      id: 4,
      image: "/images/Rectangle4.png",
      topic: "Brand & Experience Alignment",
      info: "We align your identity, messaging, and product experience so every customer interaction reflects clarity, consistency, and strategic intent.",
      link: "Book a Session"
    },
    {
      id: 5,
      image: "/images/Rectangle5.png",
      topic: "Growth Infrastructure",
      info: "We implement workflows, dashboards, internal tools, and reporting systems that improve visibility, accountability, and operational efficiency.",
      link: "Book a Session"
    },
    {
      id: 6,
      image: "/images/Rectangle6.png",
      topic: "Long-Term Partnership",
      info: "We remain involved beyond launch — monitoring performance, refining strategy, and strengthening execution as your product evolves.",
      link: "Book a Session"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Ajetumobi Delores Simbi",
      role: "Founder, Corisio",
      image: "/images/user1.png",
      text: "We had a product, but internally everything felt chaotic — no clear workflows, no structure, no alignment. Spur Wiz didn’t just advise us; they rebuilt our operational backbone. Within months, our team was executing with clarity and speed."
    },
    {
      id: 2,
      name: "John Doe",
      role: "CEO, StartupX",
      image: "/images/user2.png",
      text: "Working with Spur Wiz transformed our entire workflow. We moved from confusion to clarity in record time."
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Product Lead, TechFlow",
      image: "/images/user3.png",
      text: "Their structured approach gave us the confidence to scale without breaking our systems."
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "CTO, DevCore",
      image: "/images/user4.png",
      text: "We finally have a system that works. Everything is now measurable and optimized."
    }
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Wrapper>
            <div className="container mx-auto px-6 md:flex md:flex-row md:justify-between md:items-center mt-8">
        <div className="md:w-1/2">
          <h1 className="text-[35px] md:text-4xl lg:text-5xl">
            Accelerate Your Product, Strengthen Your Systems, Scale With Confidence
          </h1>
          <p className='text-sm mt-4'>
            We don’t just help you survive we help you grow with purpose, precision, and measurable momentum.
            At Spur Wiz, growth isn’t a vague idea — it’s the result of intentional structure, expert execution, and aligned partnership.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:flex md:flex-1 md:justify-end">
          <Image
            src="/images/Ellipse.png"
            alt="Ellipse image"
            width={400}
            height={400}
            className=""
          />
        </div>
       
      </div>
           {/* The Grow with us Button */}
           <div className='flex flex-col gap-4 items-center mt-8'>
       <div>
          <button className="flex gap-2 items-center bg-[#E0E7F2] rounded-[60px] p-3 text-[#103FD5]"> <Image
            src="/images/handshake.png"
            alt="handshake image"
            width={30}
            height={30}
            className="object-cover"/> Grow With Us</button>
        </div>
        <div className='md:w-[500px]'>
          <h1 className='text-[35px] text-center'>We help you scale with structure, not guesswork.</h1>
           <p className='text-center text-sm mt-4'>We embed operational clarity, product precision, and execution discipline into your business so growth becomes sustainable not accidental.</p>
       
        </div>
         </div>


      {/* Features */}
      <div className="container mx-auto px-6 grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col p-4 rounded-lg w-full">
            <Image 
              src={feature.image}
              alt={feature.topic}
              width={400}
              height={400}
              className="w-full object-cover"
            />
            <h1 className="mt-4 text-[25px]">{feature.topic}</h1>
            <p className="mt-2 text-sm">{feature.info}</p>
            <Link href="/" className="mt-4 flex items-center gap-1 text-[#103FD5] underline">
              {feature.link} <ArrowUpRight />
            </Link>
          </div>
        ))}
      </div>

      {/* Testimonials  Section*/}
      <div className="bg-gradient-to-r from-[#1D4ED8] to-[#103FD5] text-white py-20 px-6 mt-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4">Testimonials</p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            What Founders Say After <br /> Working With Us
          </h1>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          {testimonials.map((user, index) => (
            <Image
              key={user.id}
              src={user.image}
              alt={user.name}
              width={60}
              height={60}
              onClick={() => setCurrent(index)}
              className={`rounded-full cursor-pointer ${
                index === current ? "scale-110 border-2 border-white" : "opacity-50"
              }`}
            />
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto mt-12 text-center">

          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 border rounded-full p-3">
            <ArrowLeft />
          </button>

          <p className="text-lg px-6">
            “{testimonials[current].text}”
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            {testimonials[current].name}
          </h3>

          <p className="text-sm opacity-70">
            {testimonials[current].role}
          </p>

          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 border rounded-full p-3">
            <ArrowRight />
          </button>

        </div>
      </div>
      {/* The last Heading  */}
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl text-center mb-4 sunderline"> Your Product Deserves More Than Advice, <br/> Let’s fix what’s not working </h1>     
      <button className="flex text-white  items-center gap-2 py-2 px-6 bg-[#103FD5] rounded-full">Work With Us <ArrowUpRight /> </button>


    </div>
    </Wrapper>
  )
}

export default Grow