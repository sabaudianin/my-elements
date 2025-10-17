import React from 'react';
import './Ld.css';

export const LoadingDots = () => {
  return (
    <section className="loadingDots">
      <div className="container-loading">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};
