import { useEffect, useState } from "react";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const DigitColumn = ({ value }: { value: number }) => {
    return (
        <div className="relative h-12 w-6 overflow-hidden">
            <div
                className="absolute left-0 w-full transition-transform duration-700 ease-in-out text-black"
                style={{
                    transform: `translateY(-${value * 48}px)`,
                }}
            >
                {DIGITS.map((d) => (
                    <div
                        key={d}
                        className="h-12 flex items-center justify-center"
                    >
                        {d}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Odometer = () => {
    const [value, setValue] = useState(3284915);

    // opcjonalna animacja startowa
    useEffect(() => {
        const t = setTimeout(() => {
            setValue(7391284);
        }, 1000);
        return () => clearTimeout(t);
    }, []);

    const digits = value.toString().padStart(7, "0").split("");

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6 font-mono text-black ">


            <div className="flex gap-1 text-3xl font-bold bg-pink-300 px-4 py-2 rounded-md shadow">
                {digits.map((d, i) => (
                    <DigitColumn key={i} value={Number(d)} />
                ))}
            </div>


            <button
                onClick={() => setValue(Math.floor(Math.random() * 9999999))}
                className="px-4 py-2 rounded-md bg-gray-300 shadow active:scale-95"
            >
                Losuj liczbę
            </button>
        </div>
    );
};