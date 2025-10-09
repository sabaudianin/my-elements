import './animation.css';

export const AnimatedBgTailwindMap = () => {
  const DOTS = [
    { color: '#e45a84', top: '8%', left: '82%', dur: '65s', delay: '-15s', origin: '-10vw_18vh' },
    { color: '#583c87', top: '7%', left: '6%', dur: '180s', delay: '-36s', origin: '-9vw_12vh' },
    { color: '#7407d4', top: '35%', left: '85%', dur: '120s', delay: '-18s', origin: '14vw_-8vh' },
    { color: '#dae840', top: '15%', left: '70%', dur: '140s', delay: '-22s', origin: '-9vw_12vh' },
    { color: '#af26af', top: '52%', left: '10%', dur: '187s', delay: '-6s', origin: '-19vw_2vh' },
    { color: '#faab02', top: '58%', left: '50%', dur: '210s', delay: '6s', origin: '12vw_18vh' },
    { color: '#267faf', top: '32%', left: '49%', dur: '170s', delay: '-30s', origin: '-19vw_2vh' },
    { color: '#04470c', top: '28%', left: '20%', dur: '155s', delay: '-10s', origin: '22vw_-10vh' },
    { color: '#190e9b', top: '68%', left: '35%', dur: '200s', delay: '-48s', origin: '-12vw_22vh' },
  ];
  return (
    <section className="fixed inset-0 h-screen w-full bg-black">
      SEKCJA
      {DOTS.map((dot, i) => (
        <span
          key={i}
          className={`animate-move absolute h-32 w-32 rounded-full bg-current opacity-90 [filter:blur(28px)] [will-change:transform,filter] [backface-visibility:hidden] after:absolute after:-inset-8 after:[border-radius:inherit] after:bg-current after:opacity-50 after:[filter:blur(45px)] after:content-[''] motion-reduce:animate-none`}
          style={{
            color: dot.color,
            top: dot.top,
            left: dot.left,
            animationDuration: dot.dur,
            animationDelay: dot.delay,
            transformOrigin: dot.origin.replaceAll('_', ' '),
          }}
        />
      ))}
    </section>
  );
};
