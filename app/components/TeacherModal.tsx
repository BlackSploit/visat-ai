'use client';

import { useState, useEffect, useRef } from 'react';
import { Teacher } from '../data/teachers';
import { X, MessageCircle, Bot, AlertCircle } from 'lucide-react';
import { ASSISTANT_MAP } from '@/lib/assistantMap';

interface TeacherModalProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeacherModal({
  teacher,
  isOpen,
  onClose,
}: TeacherModalProps) {
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (isOpen && teacher && videoRef.current) {
      videoRef.current.play().catch(() => setHasVideoError(true));
    }
  }, [isOpen, teacher]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !teacher) return null;

  const whatsappLink = `https://wa.me/${teacher.whatsappNumber}?text=Hello%20${encodeURIComponent(
    teacher.name
  )}`;
  const deptKey = teacher.department.toUpperCase();
  const assistantId = ASSISTANT_MAP[deptKey] 
;
  const virtualAgentLink = `/virtual-agent-chat?assistantId=${assistantId}&teacher=${encodeURIComponent(JSON.stringify(teacher))}`;

return (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
    
    <div className="relative w-full max-w-3xl rounded-xl border border-white/10 bg-[#111111] text-white shadow-xl overflow-hidden animate-modal-open">
      
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div>
          <h2 className="text-base sm:text-lg font-semibold">
            {teacher.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            {teacher.department} Virtual Agent
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <X className="h-4 w-4 text-neutral-400" />
        </button>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Video Preview */}
        <div className="bg-black flex items-center justify-center p-4">
          {!hasVideoError ? (
            <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[720/1000]">
              <video
                ref={videoRef}
                src={teacher.fullVideo}
                controls
                onError={() => setHasVideoError(true)}
                className="w-full h-full rounded-lg object-contain bg-black"
              />
            </div>
          ) : (
            <p className="text-neutral-500 text-sm">
              Video preview unavailable
            </p>
          )}
        </div>

        {/* AI Description */}
        <div className="p-5 sm:p-6 space-y-5">
          
          <div>
            <h3 className="text-sm font-semibold text-neutral-300 mb-2">
              About this RAG Virtual Agent
            </h3>

            <p className="text-sm text-neutral-400 leading-relaxed">
              This AI assistant is powered by a Retrieval-Augmented Generation (RAG) 
              system trained on official VISAT academic resources. It indexes 
              semester-wise subject PDFs, curriculum documents, university 
              regulations, and departmental materials to generate accurate, 
              context-aware responses.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mt-3">
              Each department’s syllabus and subject materials are embedded 
              into a structured knowledge base, ensuring answers remain aligned 
              with prescribed semester content.
            </p>
          </div>

          <a
            href={virtualAgentLink}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-white text-black text-sm font-medium hover:opacity-90 transition"
          >
            <Bot className="h-4 w-4" />
            Start Conversation
          </a>

        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes modalOpen {
        from {
          opacity: 0;
          transform: translateY(10px) scale(0.98);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .animate-modal-open {
        animation: modalOpen 0.18s ease-out forwards;
      }
    `}</style>
  </div>
);


}
