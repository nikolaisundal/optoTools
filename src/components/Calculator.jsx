import React, {useState} from 'react';

export default function SpectacleForm()  {
  const [frame, setFrame] = useState(0);
  const [lens, setLens] = useState(0);
  const [lensCoating, setLensCoating] = useState(0);
  const [total, setTotal] = useState(0);

  const handleFrameChange = (event) => {
    setFrame(event.target.value);
  };

  const handleLensChange = (event) => {
    setLens(event.target.value);
  };

  const handleLensCoatingChange = (event) => {
    setLensCoating(event.target.value);
  };

  const calculateTotal = (event) => {
    event.preventDefault();
    setTotal(Number(frame) + Number(lens) + Number(lensCoating));
  };


  return (
    <>
    <form>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <label htmlFor="frame" className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
          Spectacle Frame:
        </label>
        <input
          type="text"
          id="frame"
          value={frame}
          onChange={handleFrameChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
        <label htmlFor="lens" className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
          Lens:
        </label>
        <input
          type="text"
          id="lens"
          value={lens}
          onChange={handleLensChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
        <label htmlFor="lensCoating" className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
          Lens Coating:
        </label>
        <input
          type="text"
          id="lensCoating"
          value={lensCoating}
          onChange={handleLensCoatingChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div>
          <button onClick={(event) =>calculateTotal(event)}>Calculate</button>
        </div>
        <div>
          {total}
        </div>
    </form>
    </>)}