import React, { useState } from "react";
import ScaleNum from "./ScaleNum";
import { v4 as uuidv4 } from "uuid";

export default function Efron({ id, name, eye, handleUserInputChange, img }) {
  const [isHovering, setIsHovering] = useState(false);
  const scaleNumArray = [
    0.0, 0.3, 0.5, 0.7, 1.0, 1.3, 1.5, 1.7, 2.0, 2.3, 2.5, 2.7, 3.0, 2.3, 3.5,
    3.7, 4,
  ];

  return name === "Kornea" || name === "Kommentar" ? (
    <>
      <div className="flex items-center justify-start">
        <label
          className="text-gray-800 font-bold mb-1 whitespace-nowrap mr-2"
          htmlFor={name}
        >
          {name}:
        </label>
      </div>
      <div className="flex items-center col-span-3">
        <textarea
          className="appearance-none focus:outline-none focus:bg-gray-100 border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] border-black rounded-lg w-full py-2 px-4 text-gray-700 leading-tight"
          id={id}
          name={name}
          value={eye.value}
          onChange={(e) => handleUserInputChange(e, eye.id, id)}
          rows="2"
          cols="50"
        ></textarea>
      </div>
    </>
  ) : (
    <>
      <div className="flex items-center justify-start">
        <label
          className="text-gray-800 font-bold mb-1 whitespace-nowrap mr-2"
          htmlFor={name}
        >
          {name}:
        </label>
      </div>
      <div className="flex items-center col-span-3 relative xl:min-w-[450px]">
        <input
          className="appearance-none focus:outline-none focus:bg-gray-100 border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] border-black rounded-lg w-full py-2 px-4 text-gray-700 leading-tight"
          autoComplete="off"
          type="text"
          id={id}
          name={name}
          value={eye.value}
          onFocus={() => setIsHovering(true)}
          onClick={() => setIsHovering(true)}
          onBlur={() => setIsHovering(false)}
          onChange={(e) => handleUserInputChange(e, eye.id, id)}
        />
        {isHovering && img && (
          <div className="absolute top-10 left-0 z-10">
            <div className="bg-white  border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] border-black rounded-lg">
              <div className="background_numscale_row w-full h-8 rounded-t-md flex justify-between px-2 pt-2 text-slate-50 ">
                {scaleNumArray.map((number) => (
                  <ScaleNum
                    number={number}
                    eyeId={eye.id}
                    id={id}
                    handleUserInputChange={handleUserInputChange}
                    setIsHovering={setIsHovering}
                    key={uuidv4()}
                    className={number % 0.5 == 0 ? "block" : "hidden sm:block"}
                  />
                ))}
              </div>
              <img
                className="rounded-b-lg"
                src={import.meta.env.BASE_URL + img}
                alt={name}
              />
            </div>
            <div className="text-right flex justify-center">
              <div className="hover:cursor-pointer border-2 border-black w-12 h-6 rounded-b-full relative text-black hover:text-black bg-pink-300 hover:bg-pink-400">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl pb-1">
                  &times;
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
