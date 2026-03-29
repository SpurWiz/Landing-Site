"use client";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    image: "/images/customer2.png",
    description:
      "Legacy Lens helped me preserve stories from my parents that I never thought to document. Now they’re saved in a way I can always come back to—and even share with the rest of my family",
    name: "Ahmed Yusuf",
  },
  {
    id: 2,
    image: "/images/customer3.png",
    description:
      "What I like most is how simple it is. Capturing memories doesn’t feel like a task anymore. It’s natural, and the way everything is organized makes it even more meaningful",
    name: "Ibrahim Bello",
  },
  {
    id: 3,
    image: "/images/customer1.png",
    description:
      "I didn’t realize how many important moments I was forgetting until I started using Legacy Lens. It’s more than a tool—it feels like a personal archive of my life",
    name: "Chinedu Okafor",
  },
  {
    id: 4,
    image: "/images/customer4.png",
    description:
      "I used Legacy Lens to document my grandfather’s stories before we lost him. That alone makes this platform priceless to me. It gave me something I can hold onto forever.",
    name: "Sadiq Mohammed",
  },
  {
    id: 5,
    image: "/images/customer5.png",
    description:
      "There’s something powerful about seeing your memories presented so well. Legacy Lens doesn’t just store moments—it gives them meaning and permanence.",
  },
];

function rotateToCenter<T>(arr: T[], activeIndex: number): T[] {
  const middle = Math.floor(arr.length / 2);
  const offset = middle - activeIndex;

  return arr.map((_, i) => arr[(i - offset + arr.length) % arr.length]);
}

export default function TestimonialCarousel() {
  const [active, setActive] = useState(1);
  const arranged = rotateToCenter(testimonials, active);
  const middle = Math.floor(arranged.length / 2);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex justify-center items-center mt-10">
      {/* viewport */}
      <div className="relative w-205 flex flex-col justify-center items-center">
        {/* moving track */}
        <div className="flex gap-4 transition-transform duration-500">
          {arranged.map((user, i) => (
            <img
              key={user.id}
              src={user.image}
              // onClick={() => setActive(user.id)}
              onClick={() => {
                // find original index again
                const originalIndex = testimonials.findIndex(
                  (d) => d.id === user.id,
                );
                setActive(originalIndex);
              }}
              className={`w-20 h-20 rounded-full cursor-pointer transition-all duration-300
              ${i === middle ? "scale-125" : "opacity-50 scale-90"}`}
            />
          ))}
        </div>
        <div className="description-button relative flex items-center justify-center w-full">
          <button
            className="cursor-pointer flex items-center justify-center h-15.75 w-15.75 border rounded-full absolute md:-left-18 md:top-1/2 top-5 left-25 transform md:-translate-y-1/2 border-[#97A3B9]"
            onClick={handlePrev}
          >
            <BsArrowLeft size={20} color="#97A3B9" />
          </button>
          <div className="description mt-25 font-normal text-[20px] md:text-[28px] leading-10.75 tracking-[0%] text-[#A6B0BF] text-center">
            <p className="">{testimonials[active].description}</p>
            <p className="name mt-8 text-[30px] leading-6 tracking-[0%] text-[#FFFFFF] font-medium">
              {testimonials[active].name}
            </p>
          </div>
          <button
            className="cursor-pointer flex items-center justify-center h-15.75 w-15.75 border rounded-full absolute md:-right-18 md:top-1/2 top-5 right-25 transform md:-translate-y-1/2 border-[#97A3B9]"
            onClick={handleNext}
          >
            <BsArrowRight size={20} color="#97A3B9" />
          </button>
        </div>
      </div>
    </div>
  );
}
