'use client';

import { Teacher } from '../data/teachers';
import BigFeatureCard from './BigFeatureCard';
import SmallVideoCard from './SmallVideoCard';
import SmallTextCard from './SmallTextCard';
import SmallImageCard from './SmallImageCard';

export default function TeacherFeatureRow({
  teacher,
  rowIndex,
  onClick,
}: {
  teacher: Teacher;
  rowIndex: number;
  onClick: (t: Teacher) => void;
}) {
  const bigIndex = rowIndex % 2;

  const blocks = [
    <BigFeatureCard key="big" teacher={teacher} onClick={() => onClick(teacher)} />,
    <SmallVideoCard key="video" teacher={teacher} onClick={() => onClick(teacher)} />,

  ];

  // Move BIG card position per row
  const ordered = [...blocks];
  ordered.splice(0, 1);
  ordered.splice(bigIndex, 0, blocks[0]);

return (
  <div className="grid grid-cols-10 gap-4">
    {ordered.map((block, i) => {
      let span = 'col-span-15';
      let visibility = '';

      if (block.type === BigFeatureCard) {
        span = 'col-span-15 xl:col-span-6';
        visibility = 'hidden md:block'; // hide on small
      } 
      else if (block.type === SmallImageCard) {
        span = 'col-span-15 xl:col-span-6';
        visibility = 'hidden md:block'; // hide on small
      } 
      else {
        span = 'col-span-15 sm:col-span-5 xl:col-span-3';
        visibility = 'block'; // show always
      }

      return (
        <div key={i} className={`${span} ${visibility}`}>
          {block}
        </div>
      );
    })}
  </div>
);


}
