'use client';

import { useSearchParams } from "next/dist/client/components/navigation";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";


export default function VirtualAgentChat() {

  const params = useSearchParams();
  const assistantId = params.get("assistantId");
  const teacher = JSON.parse(params.get("teacher") || "{}");

  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 async function send() {
  if (!input.trim() || loading) return;

  const userMsg = { role: "user", content: input };
  setMessages(prev => [...prev, userMsg]);
  setInput("");
  setLoading(true);

  const systemPrefix = `
You are a professional university faculty member at VISAT.

Respond like a human teacher. take in mind tone of chat and respond accoringly
Do not mention AI, RAG, or technical backend systems.
give proper spacings and new lines in reply, make it more readable.
Provide structured explanations where needed.
If referencing syllabus, assume semester-wise VISAT curriculum.
Be precise and helpful.
`;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `${systemPrefix}\n\nStudent Question: ${input}`,
        assistantId,
      }),
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();

    setMessages(prev => [
      ...prev,
      { role: "assistant", content: data.reply }
    ]);
  } catch {
    setMessages(prev => [
      ...prev,
      { role: "assistant", content: "There was an issue processing your request. Please try again." }
    ]);
  }

  setLoading(false);
}


return (
<>

  <div className="h-screen flex bg-[#f7f7f8] text-black ">
    {/* SIDEBAR */}
 <aside className="hidden md:flex w-64 bg-[#202123] text-white flex-col border-r border-black/20">

  {/* Header */}
  <div className="px-4 py-4 border-b border-white/10">
    <div className="flex items-center gap-2">
      <Bot size={18} />
      <span className="text-sm font-semibold">
        VISAT AI
      </span>
    </div>
    <p className="text-xs text-neutral-400 mt-2">
      Academic Retrieval System
    </p>
  </div>

  {/* Content */}
  <div className="flex-1 p-4 text-xs text-neutral-400 space-y-6 overflow-y-auto">

    {/* Knowledge Base */}
    <div>
      <p className="text-neutral-300 font-medium mb-2">
        Knowledge Sources
      </p>
      <ul className="space-y-1">
        <li>• Semester-wise syllabus PDFs</li>
        <li>• Subject lecture materials</li>
        <li>• Internal assessment guidelines</li>
        <li>• University regulations</li>
        <li>• Department academic records</li>
      </ul>
    </div>

    {/* Capabilities */}
    <div>
      <p className="text-neutral-300 font-medium mb-2">
        Capabilities
      </p>
      <ul className="space-y-1">
        <li>• Context-aware academic answers</li>
        <li>• Subject-level explanations</li>
        <li>• Semester-specific guidance</li>
        <li>• Structured response formatting</li>
      </ul>
    </div>

    {/* How It Works */}
    <div>
      <p className="text-neutral-300 font-medium mb-2">
        How It Works
      </p>
      <p className="leading-relaxed text-neutral-400">
        The system retrieves relevant academic content from indexed
        departmental documents before generating responses,
        ensuring alignment with the official VISAT curriculum.
      </p>
    </div>

    {/* Usage Tips */}
    <div>
      <p className="text-neutral-300 font-medium mb-2">
        Suggested Queries
      </p>
      <ul className="space-y-1">
        <li>• Explain Unit 3 of Machine Learning</li>
        <li>• What are KTU exam regulations?</li>
        <li>• Key topics for Semester 5 Data Science</li>
        <li>• Internal marks calculation method</li>
      </ul>
    </div>

  </div>

  {/* Footer */}
  <div className="px-4 py-3 border-t border-white/10 text-[11px] text-neutral-500">
    VISAT Internal Academic Assistant
  </div>

</aside>


    {/* MAIN CHAT AREA */}
{/* MAIN CHAT AREA */}
<div className="flex-1 flex flex-col bg-[#ffffff]">

  {/* TOP BAR */}
  <div className="bg-white border-b border-gray-200 px-5 py-4">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
        VISAT Virtual Academic Assistant
      </h1>
      {teacher?.name && (
        <p className="text-sm text-gray-500 mt-1">
          {teacher.department} • {teacher.name}
        </p>
      )}
    </div>
  </div>

  {/* CHAT BODY */}
  <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-10">
    <div className="max-w-4xl mx-auto space-y-8">

      {messages.length === 0 && (
        <div className="text-center space-y-3 mt-16">
          <h2 className="text-xl font-semibold text-gray-700">
            Ask your Academic Assistant
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Get structured explanations from semester-wise syllabus,
            subject materials, and official university guidelines.
          </p>
        </div>
      )}

      {messages.map((m, i) => (
        <div
          key={i}
          className={`flex ${
            m.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[85%] sm:max-w-[75%] px-5 py-4 rounded-2xl text-sm leading-relaxed shadow-sm
            ${
              m.role === "user"
                ? "bg-[#c198ff] text-gray-50"
                : "bg-white border border-gray-200 text-black"
            }`}
          >
            <ReactMarkdown>{m.content}</ReactMarkdown>
          </div>
        </div>
      ))}

      {loading && (
        <div className="bg-white border border-gray-200 text-black px-5 py-4 rounded-2xl text-sm w-fit animate-pulse">
          Analyzing academic materials...
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  </div>

  {/* INPUT BAR */}
  <div className="border-t border-gray-200 bg-white px-4 sm:px-6 py-5">
    <div className="max-w-4xl mx-auto">

      <div className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#b90976]">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your semester syllabus..."
          onKeyDown={(e) => e.key === "Enter" && send()}
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
        />

        <button
          onClick={send}
          disabled={loading}
          className="bg-[#b90976] hover:bg-[#000000] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          <Send size={16} />
        </button>

      </div>

    </div>
  </div>

</div>

  </div>

</>
  

);



}

