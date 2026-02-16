'use client';

import { Teacher } from '../data/teachers';

export default function SmallImageCard({ teacher }: { teacher: Teacher }) {
  return (
    <div
      className="
        h-[340px] rounded-2xl
        overflow-hidden
        bg-white/[0.05] backdrop-blur-xl
        border border-white/15
        flex flex-col justify-between
      "
    >
        
<img
  src={teacher.image}
  alt={teacher.name}
  className="w-full h-full object-cover group-hover:scale-105 transition"
/>


{/* GLASS BUTTON */}
      <div className="absolute bottom-4 right-4">
        <button
          className="
            px-4 py-1.5 rounded-full text-sm
            bg-white
            border border-white/30
            text-black font-medium
            hover:bg-yellow-400 transition
          "
        >
          Explore Department
        </button>
      </div>

     
    </div>
  );
}
