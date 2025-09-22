export const FlipCard = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-blue-200 [perspective:300px]">
      <div className="realtive h-2/3 w-1/4 transform-gpu cursor-pointer rounded-md border-1 border-solid font-semibold text-black shadow-[9px_18px_9px_0px_rgba(0,_0,_0,_0.35)] transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        <div className="absolute h-full w-full bg-[url('/avatarMini.jpg')] bg-cover bg-center p-4 text-white [backface-visibility:hidden]">
          <div className="absolute bottom-10 left-[25%] text-center">
            <h2 className="py-2 text-2xl">Rafal Bobko</h2>
            <p className="">1k followers on Github</p>
          </div>
        </div>
        <div className="absolute p-4 [backface-visibility:hidden]">
          <div className="">
            <h3 className="py-2 text-xl">Rafal Bobko</h3>
            <p className="">
              Rafal Bobko is a high class modern Developer. Graduated many courser, bootcamps and
              studies. Get him services ASAP.{' '}
            </p>
            <button> Find More </button>
          </div>
        </div>
      </div>
    </section>
  );
};
