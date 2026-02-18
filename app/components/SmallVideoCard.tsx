'use client';

import { useRef, useEffect } from 'react';
import { Teacher } from '../data/teachers';

export default function SmallVideoCard({
  teacher,
  onClick,
}: {
  teacher: Teacher;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto play when visible (mobile fix)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      onClick={onClick}
      className="relative h-[340px] rounded-2xl overflow-hidden cursor-pointer group"
    >
      <video
        ref={videoRef}
        src={teacher.previewVideo}
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay
        className="w-full h-full object-cover transition md:group-hover:scale-105"
      />

      {/* GLASS BUTTON */}
      <div className="absolute bottom-4 left-4">
        <button
          className="
            px-4 py-1.5 rounded-full text-sm
            bg-white/10 backdrop-blur-md
            border border-white/30
            text-white font-medium
            hover:bg-white/30 transition
          "
        >
          {teacher.department}
        </button>
      </div>
    </div>
  );
}
