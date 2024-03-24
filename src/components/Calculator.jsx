import Multiselect from "multiselect-react-dropdown";
import { useState, useEffect } from "react";

export default function Calculator(props) {
  const {
    handleLensPriceChange,
    handleOnRemove,
    handleLensPrice,
    options,
    options2,
    specPrice,
    handleFrameNameChange,
    handleFrameNameOnSelect,
    handleFrameNameOnRemove,
    handleFramePriceChange,
    inputRefArray,
    inputRefArray2,
    index,
  } = props;

  const [overflowClipFrame, setOverflowClipFrame] = useState(false);
  const [overflowClipLens, setOverflowClipLens] = useState(false);

  return (
    <form className="w-[350px] md:w-[650px] mx-auto">
      <div className="flex flex-col md:flex-row mb-2 w-[290px] md:w-[650px] mx-auto">
        <div className="w-32 pb-2 md:pb-0">
          <label
            className="text-gray-800 font-bold whitespace-nowrap mr-2"
            htmlFor="Innfatning"
          >
            Innfatning:
          </label>
        </div>
        <div className="w-72 md:w-96 mr-4 pb-2 md:pb-0">
          <Multiselect
            className={`bg-slate-50 appearance-none border-2 border-gray-200 rounded-lg text-gray-700 leading-tight h-11 ${
              overflowClipFrame ? " overflow-clip" : ""
            }`}
            options={options2}
            selectionLimit="1"
            displayValue="type"
            placeholder="Velg sku/navn"
            hidePlaceholder="true"
            onSelect={(e) => {
              handleFrameNameOnSelect(e, specPrice.id, index);
              setOverflowClipFrame(true);
            }}
            onRemove={(e) => {
              handleFrameNameOnRemove(e, specPrice.id);
              setOverflowClipFrame(false);
            }}
            selectedValues={
              specPrice.id === 2 && specPrice.frameName !== ""
                ? [
                    {
                      type: `${specPrice.frameName}`,
                    },
                  ]
                : null
            }
            style={{
              searchBox: {
                border: "none",
              },
              chips: {
                background: "rgb(22 101 52)",
              },
            }}
          />
        </div>
        <div className="w-72 md:w-32 pb-2 md:pb-0">
          <input
            className="appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-1 text-gray-700 leading-tight h-11"
            type="text"
            name="price"
            id="price"
            ref={inputRefArray2}
            value={specPrice.framePrice}
            onChange={(e) => handleFramePriceChange(e, specPrice.id)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-2 w-[290px] md:w-[650px] mx-auto">
        <div className="w-32 pb-2 md:pb-0">
          <label
            className="text-gray-800 font-bold mb-1 whitespace-nowrap mr-2"
            htmlFor="glass"
          >
            Glass:
          </label>
        </div>
        <div className="w-72 md:w-96 mr-4 pb-2 md:pb-0">
          <Multiselect
            className={`bg-slate-50 appearance-none border-2 border-gray-200 rounded-lg text-gray-700 leading-tight h-11${
              overflowClipLens ? " overflow-clip" : ""
            }`}
            options={options}
            selectionLimit="1"
            displayValue="type"
            groupBy="cat"
            placeholder="Velg glass"
            hidePlaceholder="true"
            onSelect={(e) => {
              handleLensPrice(e, specPrice.id, index);
              setOverflowClipLens(true);
            }}
            onRemove={(e) => {
              handleOnRemove(e, specPrice.id);
              setOverflowClipLens(false);
            }}
            selectedValues={
              specPrice.id === 2 && specPrice.lensType !== ""
                ? [
                    {
                      type: `${specPrice.lensType}`,
                    },
                  ]
                : null
            }
            style={{
              searchBox: {
                border: "none",
              },
              chips: {
                background: "rgb(22 101 52)",
              },
            }}
          />
        </div>
        <div className="w-72 md:w-32 pb-2 md:pb-0">
          <input
            className="appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-1 text-gray-700 leading-tight h-11"
            type="text"
            name="price"
            id="price"
            ref={inputRefArray}
            value={specPrice.lensPrice}
            onChange={(e) => handleLensPriceChange(e, specPrice.id)}
          />
        </div>
      </div>
    </form>
  );
}
