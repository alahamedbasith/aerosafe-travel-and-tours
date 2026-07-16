"use client";

import { useEffect, useRef, useState } from "react";

const WELCOME = {
  role: "assistant",
  content:
    "Hi there! I'm Aerosafe AI 👋 I can help with flights, visas, hotels, holiday packages, and corporate travel. How can I assist you today?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m.role !== "assistant" || m !== WELCOME) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: err.message || "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Aerosafe AI chat"
          className="fixed bottom-6 right-44 sm:right-72 z-50 bg-primary hover:bg-primary-dark text-white rounded-full shadow-card-lg w-14 h-14 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined filled text-2xl">smart_toy</span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[32rem] max-h-[80vh] bg-surface rounded-2xl shadow-card-lg border border-outline flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-navy text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined filled text-accent">smart_toy</span>
              <div>
                <p className="font-heading font-bold uppercase text-sm tracking-wide leading-none">Aerosafe AI</p>
                <p className="font-body text-[11px] text-white/60">Your Journey, Our Priority</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white/80 hover:text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    "max-w-[85%] rounded-2xl px-3 py-2 font-body text-sm leading-relaxed " +
                    (m.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-muted text-on-surface rounded-bl-sm")
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted text-on-surface rounded-2xl rounded-bl-sm px-3 py-2 font-body text-sm">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.15s" }}>•</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>•</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-outline p-3 bg-surface flex items-center gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              rows={1}
              placeholder="Type your message…"
              className="flex-1 resize-none font-body text-sm bg-background border border-outline rounded-xl px-3 py-2 focus:outline-none focus:border-primary"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-white rounded-xl w-10 h-10 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined filled">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
