export const FlipCard = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-blue-100">
      <div className="transition-100 h-2/3 w-1/4 cursor-pointer rounded-md border-1 border-solid font-semibold text-black shadow-[9px_18px_9px_0px_rgba(0,_0,_0,_0.35)]">
        <div className="p-4">
          <div className="">
            <h2 className="py-2 text-2xl">Rafal Bobko</h2>
            <p className="">1k followers on Github</p>
          </div>
        </div>
        <div className="p-4">
          <div>
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
