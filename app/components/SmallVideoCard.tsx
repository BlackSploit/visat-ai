'use client';

import { useRef } from 'react';
import { Teacher } from '../data/teachers';

export default function SmallVideoCard({
  teacher,
  onClick,
}: {
  teacher: Teacher;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      onClick={onClick}
      className="relative h-[340px] rounded-2xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      <video
        ref={videoRef}
        src={teacher.previewVideo}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover group-hover:scale-105 transition"
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
