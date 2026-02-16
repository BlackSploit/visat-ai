'use client';

import { useRef } from 'react';
import { Teacher } from '../data/teachers';

const pastelColors = [
  'rgba(253, 189, 23, 0.7)',
  'rgba(185, 9, 118, 0.7)',
  'rgba(52, 82, 158, 0.7)',
  'rgba(46, 125, 94, 0.7)',
];

function getColorFromText(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  return pastelColors[Math.abs(hash) % pastelColors.length];
}

export default function TeacherRow({
  row,
  reverse,
  onClick,
}: {
  row: Teacher[];
  reverse: boolean;
  onClick: (t: Teacher) => void;
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {row.map((teacher, i) => (
        <UnifiedTeacherCard
          key={teacher.id}
          teacher={teacher}
          reverse={reverse}
          onClick={() => onClick(teacher)}
        />
      ))}
    </div>
  );
}

/* ---------------- UNIFIED CARD ---------------- */

function UnifiedTeacherCard({
  teacher,
  reverse,
  onClick,
}: {
  teacher: Teacher;
  reverse: boolean;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer
        relative grid grid-cols-1 md:grid-cols-2
        rounded-xl overflow-hidden
        bg-white/[0.04] backdrop-blur-xl
        border border-white/10
        transition-all duration-300
        hover:border-white/25 hover:scale-[1.01]
      "
    >
      {/* DETAILS */}
      <div
        className={`
          p-8 flex flex-col justify-between
          ${reverse ? 'md:order-2' : 'md:order-1'}
        `}
      >
        <blockquote className="text-lg font-semibold text-white leading-relaxed">
          “{teacher.quote || 'Inspiring minds, shaping futures.'}”
        </blockquote>

        <div className="flex items-center gap-4 mt-24">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-14 h-14 rounded-full object-cover border border-white/20"
          />

          <div>
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <p className="text-sm text-white/60">{teacher.department}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {teacher.specs.slice(0, 4).map((spec, i) => (
            <span
              key={i}
              style={{ backgroundColor: getColorFromText(spec) }}
              className="px-3 py-1 text-xs rounded-full text-white backdrop-blur"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* VIDEO */}
      <div
        className={`
          relative aspect-square overflow-hidden
          bg-black/40
          ${reverse ? 'md:order-1' : 'md:order-2'}
        `}
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
