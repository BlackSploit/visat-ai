'use client';

import { useState } from 'react';
import { teachers } from '../data/teachers';
import TeacherModal from './TeacherModal';
import TeacherFeatureRow from './TeacherFeatureRow';

export default function TeacherGrid() {
  const [active, setActive] = useState<any>(null);

  return (
    <>
    
      <section id="faculty" className="wrapper py-24">
        
        <div className="flex flex-col gap-14 mx-5 md:mx-20">

          <h3 className=' font-light text-6xl mb-5 text-center '>Select Your Virtual Agent</h3>
          {teachers.map((teacher, rowIndex) => (
            <TeacherFeatureRow
              key={teacher.id}
              teacher={teacher}
              rowIndex={rowIndex}
              onClick={(t) => setActive(t)}
            />
          ))}
        </div>
      </section>

      <TeacherModal
        teacher={active}
        isOpen={!!active}
        onClose={() => setActive(null)}
      />
    </>
  );
}
