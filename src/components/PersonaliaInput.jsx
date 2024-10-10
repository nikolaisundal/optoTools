import React from "react";

export default function PersonaliaInput({
  personalia: { address, name, birthDate, postCode, comment },
  handlePersonaliaChange,
}) {
  return (
    <form className="w-[350px] md:w-[650px] mx-auto ">
      <div className="flex flex-col w-[290px] md:w-[650px] mx-auto mb-8">
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-32 pb-2 md:pb-0 flex items-center ">
            <label
              className="text-gray-800 font-bold mb-1 whitespace-nowrap"
              htmlFor="name"
            >
              Navn:
            </label>
          </div>
          <div className="w-72 md:w-96">
            <input
              className="appearance-none focus:outline-none border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]  rounded-lg w-full pb-1 px-1 text-gray-700 leading-tight h-11"
              type="text"
              name="name"
              id="name"
              placeholder="Legg til navn"
              value={name}
              onChange={(e) => handlePersonaliaChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-32 pb-2 md:pb-0 flex items-center ">
            <label
              className="text-gray-800 font-bold mb-1 whitespace-nowrap"
              htmlFor="birthDate"
            >
              Fødselsdato:
            </label>
          </div>
          <div className="w-72 md:w-96">
            <input
              className="appearance-none focus:outline-none border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]  rounded-lg w-full pb-1 px-1 text-gray-700 leading-tight h-11"
              type="text"
              name="birthDate"
              id="birthDate"
              placeholder="Legg til fødselsdato"
              value={birthDate}
              onChange={(e) => handlePersonaliaChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-32 pb-2 md:pb-0 flex items-center ">
            <label
              className="text-gray-800 font-bold mb-1 whitespace-nowrap"
              htmlFor="address"
            >
              Adresse:
            </label>
          </div>
          <div className="w-72 md:w-96">
            <input
              className="appearance-none focus:outline-none border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]  rounded-lg w-full pb-1 px-1 text-gray-700 leading-tight h-11"
              type="text"
              name="address"
              id="address"
              placeholder="Legg til adresse"
              value={address}
              onChange={(e) => handlePersonaliaChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-32 pb-2 md:pb-0 flex items-center ">
            <label
              className="text-gray-800 font-bold mb-1 whitespace-nowrap"
              htmlFor="postCode"
            >
              Poststed:
            </label>
          </div>
          <div className="w-72 md:w-96">
            <input
              className="appearance-none focus:outline-none border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg w-full pb-1 px-1 text-gray-700 leading-tight h-11"
              type="text"
              name="postCode"
              id="postCode"
              placeholder="Legg til poststed"
              value={postCode}
              onChange={(e) => handlePersonaliaChange(e)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
