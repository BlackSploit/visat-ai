'use client';

import { Teacher } from '../data/teachers';
import BigFeatureCard from './BigFeatureCard';
import SmallVideoCard from './SmallVideoCard';
import SmallTextCard from './SmallTextCard';

export default function DepartmentRow({
  teachers,
  rowIndex,
  onClick,
}: {
  teachers: Teacher[];
  rowIndex: number;
  onClick: (t: Teacher) => void;
}) {
  const bigIndex = rowIndex % 4;

  return (
    <div className="grid grid-cols-12 gap-4">
      {teachers.slice(0, 4).map((teacher, i) => {
        const isBig = i === bigIndex;

        if (isBig) {
          return (
            <div key={teacher.id} className="col-span-12 xl:col-span-6">
              <BigFeatureCard teacher={teacher} onClick={() => onClick(teacher)} />
            </div>
          );
        }

        if (i === 1) {
          return (
            <div key={teacher.id} className="col-span-12 md:col-span-6 xl:col-span-3">
              <SmallVideoCard teacher={teacher} onClick={() => onClick(teacher)} />
            </div>
          );
        }

        return (
          <div key={teacher.id} className="col-span-12 md:col-span-6 xl:col-span-3">
            <SmallTextCard teacher={teacher} />
          </div>
        );
      })}
    </div>
  );
}
