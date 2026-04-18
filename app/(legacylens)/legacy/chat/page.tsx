"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { ArrowUp } from "lucide-react";
import { HiSparkles } from "react-icons/hi2";

type Role = "bot" | "user";

interface Message {
  id: number;
  role: Role;
  text: string;
  options?: string[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "bot",
    text: "Let's start with context. What best describes your current situation?",
    options: [
      "I'm building a new product",
      "My product is live but underperforming",
      "We're preparing to scale",
      "We're experiencing operational challenges",
    ],
  },
];

const BotAvatar = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#103FD5] flex items-center justify-center border border-white/20">
    <HiSparkles size={14} className="text-[#fdb62f]" />
  </div>
);

export default function LegacyPage({ params }: { params: { message?: string } }) {
  const initialMessage = params.message
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage) {
      setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: initialMessage }]);
      simulateBotReply(initialMessage);
    }
  })
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 120) + "px";
    }
  };

  const simulateBotReply = (_userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replies: Message[] = [
        {
          id: Date.now(),
          role: "bot",
          text: "Understood. When you say underperforming, what feels most inaccurate?",
          options: [
            "Low customer acquisition",
            "Poor conversion rates",
            "Weak retention",
            "Unclear product positioning",
            "Internal execution issues",
          ],
        },
        {
          id: Date.now(),
          role: "bot",
          text: "Let's narrow that down. Where do you think users drop off the most?",
          options: [
            "Landing page / first impression",
            "Sign-up or onboarding",
            "Product usage experience",
            "Payment / checkout stage",
          ],
        },
        {
          id: Date.now(),
          role: "bot",
          text: "Got it. Based on what you've shared, I'll put together a diagnostic report. Would you like to schedule a strategy session with the Spur Wiz team?",
          options: [
            "Yes, book a session",
            "Send me the report first",
            "Not right now",
          ],
        },
      ];
      const pick = { ...replies[Math.floor(Math.random() * replies.length)], id: Date.now() };
      setMessages((prev) => [...prev, pick]);
    }, 1200);
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: text.trim() }]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    simulateBotReply(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <Wrapper noFooter noOverflow>
      <div className="overflow-hidden fixed w-full h-full inset-0 z-0 top-0 left-0">
          <Image
            src="/images/stars.png"
            alt=""
            fill
            className="object-cover object-top fixed w-full h-full inset-0 z-0 top-0 left-0"
            priority
            aria-hidden
          />
        </div>
      <section className="relative w-full ">
        <div className="absolute inset-0 z-[1] w-full h-full top-0 left-0 bg-[#060d1f]/55 pointer-events-none" />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
        />
        <div
          className="absolute top-0 left-0 right-0 h-28 z-[3] pointer-events-none"
          style={{
            background:""
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-[3] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(6,13,31,0.80) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(6,13,31,0.55) 100%)",
          }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-start pt-16 pb-16 px-4 min-h-[calc(100vh-88px)]">

          {/* Label + title */}
          <p className="text-white/45 text-[12px] font-semibold tracking-[0.2em] uppercase mb-1">
            The Entry Point
          </p>
          <h1
            className="font-extrabold tracking-[-0.04em] leading-none mb-8"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            <span className="text-white">LEGACY</span>
            <span className="text-[#fdb62f]">LENS</span>
          </h1>

          {/* Chat card */}
          <div className="w-full max-w-[680px] rounded-2xl border border-white/10 bg-[#0b1228]/75 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">

            {/* Message list */}
            <div className="px-5 pt-5 pb-3 flex flex-col gap-5 max-h-[63vh] md:max-h-[56vh] overflow-y-auto">
              {messages.map((msg) =>
                msg.role === "bot" ? (
                  <div key={msg.id} className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2">
                      <BotAvatar />
                      <span className="text-[13px] font-bold text-white/85 tracking-tight">
                        Legacy Lens
                      </span>
                    </div>

                    <p className="text-[13.5px] text-white/70 leading-[1.75] pl-10">
                      {msg.text}
                    </p>

                    {msg.options && (
                      <div className="pl-10 flex flex-col gap-2 mt-0.5">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => sendMessage(opt)}
                            className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-white transition-colors duration-150 group w-fit text-left"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#fdb62f] transition-colors duration-150 flex-shrink-0" />
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={msg.id} className="flex justify-end">
                    <div className="max-w-[72%] bg-[#1c2b50]/90 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-2.5">
                      <p className="text-[13px] text-white/85 leading-[1.65]">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                )
              )}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <BotAvatar />
                  <div className="flex gap-1 px-3 py-2 bg-white/5 rounded-full border border-white/10">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div className="border-t border-white/8 px-4 py-3 flex items-end gap-3">
              <div className="flex-1 flex items-end gap-2 bg-white/5 rounded-xl px-4 py-2.5 border border-white/10 focus-within:border-white/25 transition-colors duration-200">
                {/* Paperclip */}
                <span className="text-white/25 pb-0.5 flex-shrink-0">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </span>
                <textarea
                  ref={textareaRef}
                  rows={1}
                  placeholder="Ask me something"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-white/85 text-[13.5px] placeholder:text-white/30 outline-none resize-none leading-[1.55] max-h-[120px]"
                />
              </div>

              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-9 h-9 flex-shrink-0 rounded-full bg-[#103FD5] flex items-center justify-center text-white disabled:opacity-25 hover:bg-[#0c2fa3] transition-all duration-200 active:scale-95"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}