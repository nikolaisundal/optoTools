import React from "react";

const optionsArray = [
  { value: "ToForEnUV", label: "To for en inkl. UV", defaultChecked: true },
  { value: "ToForEn", label: "To for en" },
  { value: "Komplett", label: "Komplett" },
  { value: "60+", label: "60+" },
  { value: "GoldenTicket", label: "Golden ticket" },
  { value: "NAV", label: "NAV" },
];

export default function RadioRow({ handleOfferChange, offerSelect }) {
  return (
    <div className="mb-5 flex justify-center flex-wrap max-w-screen-sm ">
      {optionsArray.map((option) => (
        <div key={option.value}>
          <label className="flex items-center cursor-pointer ml-4">
            <input
              className="mr-1 cursor-pointer"
              type="radio"
              value={option.value}
              name="Tilbud"
              defaultChecked={option.defaultChecked}
              onChange={(e) => handleOfferChange(e.target.value)}
            />
            <span>{option.label}</span>
          </label>
        </div>
      ))}

      {offerSelect === "NAV" && (
        <div>
          <label className="flex items-center cursor-pointer ml-4 mt-2">
            <input
              className="mr-1 cursor-pointer"
              type="checkbox"
              id="navTwoSpecs"
              name="navTwoSpecs"
              value="navTwoSpecs"
              onChange={(e) =>
                handleOfferChange(e.target.checked ? "navTwoSpecs" : "NAV")
              }
            />
            <span>To briller</span>
          </label>
        </div>
      )}

      <div>
        <label className="flex items-center cursor-pointer ml-4  mt-2">
          <input
            className="mr-1 cursor-pointer"
            type="checkbox"
            value="Synstest"
            name="Synstest"
            onChange={(e) => handleOfferChange(e.target.value)}
          />
          <span>Synstest</span>
        </label>
      </div>
    </div>
  );
}

/* import React from "react";

export default function RadioRow({ handleOfferChange, offerSelect }) {
  return (
    <div
      className="text-center mb-5 flex justify-center flex-wrap max-w-screen-sm"
      onChange={(e) => handleOfferChange(e.target.value)}
    >
      <div>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          value="ToForEnUV"
          name="Tilbud"
          defaultChecked
        />
         To for en inkl. UV
      </div>
      <div>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          value="ToForEn"
          name="Tilbud"
        />
        To for en
      </div>
      <div>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          value="Komplett"
          name="Tilbud"
        />
        Komplett
      </div>
      <div>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          value="60+"
          name="Tilbud"
        />
        60+
      </div>
      <div>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          value="GoldenTicket"
          name="Tilbud"
        />
        Golden ticket
      </div>

      <div>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          value="NAV"
          name="Tilbud"
        />
        NAV
      </div>
      {offerSelect === "NAV" && (
        <div>
          <input
            className="ml-4 mr-1 cursor-pointer"
            type="checkbox"
            id="navTwoSpecs"
            name="navTwoSpecs"
            value="navTwoSpecs"
          />
          <label htmlFor="navTwoSpecs">To briller</label>
        </div>
      )}
      <div>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="checkbox"
          value="Synstest"
          name="Synstest"
        />
        Synstest
      </div>
    </div>
  );
}
 */
