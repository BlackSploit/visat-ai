'use client';

import { useRef } from 'react';
import { Teacher } from '../data/teachers';


const pastelColors = [
  'rgba(253, 189, 23, 0.7)',  // brand yellow
  'rgba(185, 9, 118, 0.7)',   // navbar pink
  'rgba(52, 82, 158, 0.7)',   // pastel dark blue
  'rgba(46, 125, 94, 0.7)',   // pastel dark green
];


function getColorFromText(text: string) {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  return pastelColors[Math.abs(hash) % pastelColors.length];
}




interface Props {
  teacher: {
    id: number;
    name: string;
    department: string;
    previewVideo: string;
    specs: string[];
    image: string;
quote: string;


  };
  onClick: () => void;
}

export default function TeacherCard({ teacher, onClick }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.loop = true;
    videoRef.current.play().catch(() => { });
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer text-center w-80"
    >
      {/* ✅ SQUARE VIDEO CARD */}
      <div
        className="
          rounded-2xl overflow-hidden
          w-full h-80
          transition-transform duration-300
          hover:scale-105
        "
      >
        <video
          ref={videoRef}
          src={teacher.previewVideo}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ TEXT OUTSIDE CARD */}
      <div className="mt-4">

        <p className="text-lg font-semibold text-white mt-1 mb-3">
          {teacher.department}
        </p>

        {/* ✅ Pills */}
        <div className="flex justify-center flex-wrap gap-2">
  {teacher.specs.slice(0, 3).map((spec, index) => (
    <span
      key={index}
      style={{ backgroundColor: getColorFromText(spec) }}
      className="
        px-3 py-1
        text-xs
        rounded-full
        text-white
        font-medium
        backdrop-blur
      "
    >
      {spec}
    </span>
  ))}
</div>


      </div>
    </div>
  );
}
