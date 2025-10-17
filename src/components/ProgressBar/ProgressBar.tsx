import React from 'react';
import './PbStyless.css';
export const ProgressBar = () => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="w-[300px]">
        <div className="h-[20px] w-full overflow-hidden rounded-xl bg-white">
          <div className="h-full w-0 animate-[progressBar_5s_ease-in-out_forwards] rounded-xl bg-gradient-to-r from-green-300 to-blue-400"></div>
        </div>
        <div className="text-center">..Loading...</div>
      </div>
    </section>
  );
};
