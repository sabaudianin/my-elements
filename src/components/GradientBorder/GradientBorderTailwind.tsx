export const GradientBorderTailwind = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-[#060606]">
      <div className="relative z-0 flex h-[300px] w-[300px] items-center justify-center rounded-full before:absolute before:-inset-1 before:-z-10 before:animate-[gradient-move_30s_linear_infinite] before:rounded-full before:bg-[linear-gradient(45deg,_#22D3EE,_#06B6D4,_#3B82F6,_#8B5CF6,_#9333EA)] before:bg-[length:400%_400%] before:blur-[5px] before:content-['']">
        <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-full bg-[url('/avatarMini.jpg')] bg-cover" />
      </div>
    </section>
  );
};
