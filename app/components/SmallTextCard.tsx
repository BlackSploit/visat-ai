'use client';

import { Teacher } from '../data/teachers';

export default function SmallTextCard({ teacher }: { teacher: Teacher }) {
  return (
    <div
      className="
        h-[340px] rounded-2xl p-6
        bg-white/[0.05] backdrop-blur-xl
        border border-white/15
        flex flex-col 
      "
    >
<h3 className='font-semibold text-xl mt-5'>
    {teacher.department}
</h3>

<ul className="mt-5 font-medium text-sm list-disc list-outside pl-6 space-y-2">
  {teacher.depts.map((dept, i) => (
    <li key={i} className="pl-1">
      {dept}
    </li>
  ))}
</ul>


    </div>
  );
}
