'use client';

import { Teacher } from '../data/teachers';

export default function BigFeatureCard({
  teacher,
  onClick,
}: {
  teacher: Teacher;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="
        relative h-[340px] rounded-2xl overflow-hidden
        bg-blue-900/10 hover:bg-gray-900 border border-gray-700/50
        backdrop-blur-xl cursor-pointer
        hover:border-white/30 transition
      "
    >


      <div className="absolute inset-0 bg-black/50 hover:bg-gray-900" />

      <div className="relative p-8 flex flex-col justify-start h-full">
                <h3 className="text-lg font-medium italic  mb-20">{teacher.quote}</h3>
                {/* <img  className='w-20 rounded-full' src="/images/headshots/BS.jpg " alt="" /> */}
                
        <h3 className="text-2xl font-bold">{teacher.name}</h3>
        <p className="text-sm text-white/70">{teacher.department}</p>

      </div>
    </div>
  );
}
