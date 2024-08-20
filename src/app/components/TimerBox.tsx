import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export default function TimerBox({ num, unit, flip }: numProp) {
  return (
    <div className="flex flex-col items-center px-2">
      <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-20 h-20 text-2xl md:text-4xl">
        <div className="rounded-t-lg bg-[#343650] w-full h-full"></div>

        <div className="text-3xl absolute text-white z-10 font-bold font-redhat font-mono ">
          {num}
        </div>

        <div className=" rounded-b-lg bg-[#2c2e3f] w-full h-full"></div>

        <div
          className={`absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${
            flip ? "animate-flip bg-[#22274e]" : "bg-transparent"
          }`}
        ></div>
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
      </div>
      <p className="text-md mt-3 font-mono md:text-lg">{unit}</p>
    </div>
  );
}
