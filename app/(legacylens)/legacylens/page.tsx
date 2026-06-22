"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Wrapper from "@/components/wrapper";
import {
  ArrowUp, Plus, X, Link2, Instagram, Linkedin, Twitter, Upload, Globe, Briefcase, FileText,
  Circle,
  MessageSquare,
  Folder,
  Target,
  Database,
  Zap,
  Cloud
} from "lucide-react";
import { HiSparkles } from "react-icons/hi2";

type Role = "bot" | "user";

interface Message {
  id: number;
  role: Role;
  text: string;
  options?: string[];
}

interface Attachment {
  id: number;
  type: "document" | "connector" | "social";
  label: string;
  icon: React.ReactNode;
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

// ── Plus Menu Panel Types ──
type PanelType = "connectors" | "documents" | "social" | null;

const CONNECTORS = [
  { id: "notion",     label: "Notion",       icon: <FileText size={15} />,     desc: "Workspaces & docs" },
  { id: "jira",       label: "Jira",         icon: <Circle size={15} />,       desc: "Projects & tickets" },
  { id: "slack",      label: "Slack",        icon: <MessageSquare size={15} />,desc: "Team messages" },
  { id: "gdrive",     label: "Google Drive", icon: <Folder size={15} />,       desc: "Files & reports" },
  { id: "hubspot",    label: "HubSpot",      icon: <Target size={15} />,       desc: "CRM & contacts" },
  { id: "airtable",   label: "Airtable",     icon: <Database size={15} />,     desc: "Databases" },
  { id: "linear",     label: "Linear",       icon: <Zap size={15} />,          desc: "Issue tracking" },
  { id: "salesforce", label: "Salesforce",   icon: <Cloud size={15} />,        desc: "Enterprise CRM" },
];

const SOCIAL_PLATFORMS = [
  { id: "linkedin", label: "LinkedIn", icon: <Linkedin size={15} />, placeholder: "linkedin.com/company/yourcompany", color: "#0077B5" },
  { id: "twitter", label: "X / Twitter", icon: <Twitter size={15} />, placeholder: "@yourhandle", color: "#000000" },
  { id: "instagram", label: "Instagram", icon: <Instagram size={15} />, placeholder: "@yourhandle", color: "#E1306C" },
  { id: "website", label: "Website", icon: <Globe size={15} />, placeholder: "https://yourcompany.com", color: "#103FD5" },
];

export default function LegacyLensPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [openPanel, setOpenPanel] = useState<PanelType>(null);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [connectedTools, setConnectedTools] = useState<Set<string>>(new Set());
  const [socialValues, setSocialValues] = useState<Record<string, string>>({});
  const [plusMenuOpen, setPlusMenuOpen] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Close panel on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
        setPlusMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + "px";
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
          text: "Got it. Based on what you've shared, I'll generate a diagnostic. Connect your tools or upload brand docs for a deeper analysis.",
          options: [
            "Yes, book a strategy session",
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
    const userMsg: Message = { id: Date.now(), role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    setOpenPanel(null);
    setPlusMenuOpen(false);
    simulateBotReply(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const connectTool = (toolId: string, label: string, icon: React.ReactNode) => {
      setConnectedTools((prev) => new Set([...prev, toolId]));
      const newAttachment: Attachment = {
        id: Date.now(),
        type: "connector",
        label,
        icon,
      };
      setAttachments((prev) => [...prev, newAttachment]);
    };

  const addSocialHandle = (platformId: string, label: string, icon: React.ReactNode) => {
    const val = socialValues[platformId];
    if (!val?.trim()) return;
    const newAttachment: Attachment = {
      id: Date.now(),
      type: "social",
      label: `${label}: ${val}`,
      icon,
    };
    setAttachments((prev) => [...prev, newAttachment]);
    setSocialValues((prev) => ({ ...prev, [platformId]: "" }));
  };

  const removeAttachment = (id: number) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const newAttachment: Attachment = {
        id: Date.now() + Math.random(),
        type: "document",
        label: file.name,
        icon: <FileText size={12} />,
      };
      setAttachments((prev) => [...prev, newAttachment]);
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const togglePanel = (panel: PanelType) => {
    if (openPanel === panel) {
      setOpenPanel(null);
    } else {
      setOpenPanel(panel);
      setPlusMenuOpen(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Starfield background */}
      <div className="overflow-hidden fixed w-full h-full inset-0 z-0">
        <Image
          src="/images/stars.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
          aria-hidden
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-[#060d1f]/55 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[3] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(6,13,31,0.80) 0%, transparent 100%)" }} />
      <div className="absolute inset-0 z-[3] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(6,13,31,0.55) 100%)" }} />

      <section className="relative z-10 flex flex-col items-center justify-start pt-16 pb-6 px-4 h-screen">

        {/* Label + Wordmark */}
        <p className="text-white/45 text-[11px] font-semibold tracking-[0.2em] uppercase mb-1">
          The Entry Point
        </p>
        <h1 className="font-extrabold tracking-[-0.04em] leading-none mb-8"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
          <span className="text-white">LEGACY</span>
          <span className="text-[#fdb62f]">LENS</span>
        </h1>

        {/* Chat card */}
        <div className="w-full max-w-[680px] rounded-2xl border border-white/10 bg-[#0b1228]/75 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
          style={{ maxHeight: "calc(100vh - 180px)" }}>

          {/* Message list */}
          <div className="px-5 pt-5 pb-3 flex flex-col gap-5 overflow-y-auto flex-1">
            {messages.map((msg) =>
              msg.role === "bot" ? (
                <div key={msg.id} className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <BotAvatar />
                    <span className="text-[13px] font-bold text-white/85 tracking-tight">Legacy Lens</span>
                  </div>
                  <p className="text-[13.5px] text-white/70 leading-[1.75] pl-10">{msg.text}</p>
                  {msg.options && (
                    <div className="pl-10 flex flex-col gap-2 mt-0.5">
                      {msg.options.map((opt) => (
                        <button key={opt} onClick={() => sendMessage(opt)}
                          className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-white transition-colors duration-150 group w-fit text-left">
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
                    <p className="text-[13px] text-white/85 leading-[1.65]">{msg.text}</p>
                  </div>
                </div>
              )
            )}

            {isTyping && (
              <div className="flex items-center gap-2">
                <BotAvatar />
                <div className="flex gap-1 px-3 py-2 bg-white/5 rounded-full border border-white/10">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* ── ATTACHMENT CHIPS ── */}
          {attachments.length > 0 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {attachments.map((att) => (
                <div key={att.id}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-white/8 text-[11px] text-white/70 max-w-[200px]">
                  <span className="flex-shrink-0 text-[#fdb62f]">{att.icon}</span>
                  <span className="truncate">{att.label}</span>
                  <button onClick={() => removeAttachment(att.id)} className="flex-shrink-0 ml-0.5 text-white/40 hover:text-white transition-colors">
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ── EXPANDED PANELS (Connectors / Documents / Social) ── */}
          <div ref={panelRef}>
            {openPanel === "connectors" && (
              <div className="border-t border-white/8 px-4 py-3 bg-[#060d30]/60">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Connect your tools</p>
                  <button onClick={() => setOpenPanel(null)} className="text-white/40 hover:text-white"><X size={14} /></button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {CONNECTORS.map((tool) => {
                    const isConnected = connectedTools.has(tool.id);
                    return (
                      <button key={tool.id}
                        onClick={() => !isConnected && connectTool(tool.id, tool.label, tool.icon as React.ReactNode)}
                        className={`flex  items-center gap-1.5 p-2.5 rounded-xl border text-center transition-all ${isConnected
                          ? "border-[#22C55E]/40 bg-[#22C55E]/10 cursor-default"
                          : "border-white/10 bg-white/4 hover:border-white/25 hover:bg-white/8 cursor-pointer"}`}>
                        <span className="text-xl text-orange-300">{tool.icon}</span>
                        <span className={`text-[11px] font-semibold leading-tight ${isConnected ? "text-[#22C55E]" : "text-white/70"}`}>
                          {tool.label}
                        </span>
                        {isConnected && <span className="text-[9px] text-[#22C55E]/80 font-medium">Connected</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {openPanel === "documents" && (
              <div className="border-t border-white/8 px-4 py-3 bg-[#060d30]/60">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Upload documents</p>
                  <button onClick={() => setOpenPanel(null)} className="text-white/40 hover:text-white"><X size={14} /></button>
                </div>
                <input ref={fileInputRef} type="file" multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.png,.jpg,.jpeg"
                  className="hidden" onChange={handleFileUpload} />
                <button onClick={() => fileInputRef.current?.click()}
                  className="w-full flex flex-col items-center gap-2 py-6 rounded-xl border-2 border-dashed border-white/15 hover:border-white/30 hover:bg-white/4 transition-all text-center">
                  <Upload size={22} className="text-white/30" />
                  <span className="text-[13px] text-white/50 font-medium">Drop files here or click to browse</span>
                  <span className="text-[11px] text-white/30">PDF, DOCX, XLSX, PNG, JPG — up to 50 MB</span>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-1">
                    {["Brand Guidelines", "Annual Reports", "SOPs", "Strategy Docs"].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-white/8 border border-white/12 text-[10px] text-white/50">{tag}</span>
                    ))}
                  </div>
                </button>
              </div>
            )}

            {openPanel === "social" && (
              <div className="border-t border-white/8 px-4 py-3 bg-[#060d30]/60">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Social handles &amp; web presence</p>
                  <button onClick={() => setOpenPanel(null)} className="text-white/40 hover:text-white"><X size={14} /></button>
                </div>
                <div className="flex flex-col gap-2">
                  {SOCIAL_PLATFORMS.map((platform) => (
                    <div key={platform.id} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${platform.color}22` }}>
                        <span style={{ color: platform.color }}>{platform.icon}</span>
                      </div>
                      <input
                        value={socialValues[platform.id] || ""}
                        onChange={(e) => setSocialValues((prev) => ({ ...prev, [platform.id]: e.target.value }))}
                        placeholder={platform.placeholder}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[12px] text-white/80 placeholder:text-white/25 outline-none focus:border-white/25 transition-colors"
                      />
                      <button
                        onClick={() => addSocialHandle(platform.id, platform.label, platform.icon)}
                        disabled={!socialValues[platform.id]?.trim()}
                        className="px-3 py-1.5 rounded-lg bg-[#103FD5] text-white text-[11px] font-semibold disabled:opacity-30 hover:bg-[#0c2fa3] transition-colors flex-shrink-0">
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── INPUT ROW ── */}
            <div className="border-t border-white/8 px-3 py-3 mt-4">

              {/* Plus mini-menu (above input) */}
              {plusMenuOpen && (
                <div className="mb-2 flex gap-2 flex-wrap mb-4">
                  <button onClick={() => togglePanel("connectors")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all ${openPanel === "connectors" ? "border-[#103FD5] bg-[#103FD5]/20 text-white" : "border-white/15 bg-white/6 text-white/60 hover:text-white hover:border-white/30"}`}>
                    <Link2 size={12} /> Connectors
                    {connectedTools.size > 0 && (
                      <span className="w-4 h-4 rounded-full bg-[#22C55E] text-white text-[9px] flex items-center justify-center font-bold">
                        {connectedTools.size}
                      </span>
                    )}
                  </button>
                  <button onClick={() => togglePanel("documents")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all ${openPanel === "documents" ? "border-[#103FD5] bg-[#103FD5]/20 text-white" : "border-white/15 bg-white/6 text-white/60 hover:text-white hover:border-white/30"}`}>
                    <FileText size={12} /> Documents
                  </button>
                  <button onClick={() => togglePanel("social")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all ${openPanel === "social" ? "border-[#103FD5] bg-[#103FD5]/20 text-white" : "border-white/15 bg-white/6 text-white/60 hover:text-white hover:border-white/30"}`}>
                    <Globe size={12} /> Social Handles
                  </button>
                  <button onClick={() => togglePanel("social")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all border-white/15 bg-white/6 text-white/60 hover:text-white hover:border-white/30`}>
                    <Briefcase size={12} /> Business Setup
                  </button>
                </div>
              )}

              <div className="flex items-end gap-2.5">
                {/* Plus button */}
                <button
                  onClick={() => { setPlusMenuOpen((v) => !v); if (openPanel) setOpenPanel(null); }}
                  className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center border transition-all duration-200 ${plusMenuOpen ? "bg-[#103FD5] border-[#103FD5] text-white rotate-45" : "bg-white/8 border-white/15 text-white/50 hover:bg-white/14 hover:text-white"}`}>
                  <Plus size={16} />
                </button>

                {/* Textarea */}
                <div className="flex-1 flex items-end gap-2 bg-white/5 rounded-xl px-3.5 py-2.5 border border-white/10 focus-within:border-white/25 transition-colors duration-200">
                  <textarea ref={textareaRef} rows={1} placeholder="Ask me something"
                    value={input} onChange={handleInputChange} onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-white/85 text-[13.5px] placeholder:text-white/30 outline-none resize-none leading-[1.55] max-h-[120px]" />
                </div>

                {/* Send button */}
                <button onClick={() => sendMessage(input)} disabled={!input.trim()}
                  className="w-9 h-9 flex-shrink-0 rounded-full bg-[#103FD5] flex items-center justify-center text-white disabled:opacity-25 hover:bg-[#0c2fa3] transition-all duration-200 active:scale-95">
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <p className="text-white/20 text-[11px] mt-3 text-center">
          Connect tools, upload docs, or add social handles using the{" "}
          <span className="text-white/40 font-semibold">+</span> button for a deeper brand audit
        </p>
      </section>
    </div>
  );
}