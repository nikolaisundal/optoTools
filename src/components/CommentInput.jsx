import React from "react";

export default function CommentInput({ handlePersonaliaChange, comment }) {
  return (
    <form className="w-[350px] md:w-[650px] mx-auto">
      <div className="flex flex-col md:flex-row w-[290px] md:w-[650px] mx-auto mb-3 mt-6">
        <div className="w-32 pb-2 md:pb-0">
          <label
            className="text-gray-800 font-bold mb-1 whitespace-nowrap mr-2"
            htmlFor="comment"
          >
            Kommentar:
          </label>
        </div>
        <div className="w-72 md:w-[522px]">
          <textarea
            className="appearance-none resize-none focus:outline-none border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg w-full py-2 px-1 text-gray-700 leading-tight"
            type="text"
            name="comment"
            id="comment"
            placeholder="Skriv en kommentar"
            value={comment}
            onChange={(e) => handlePersonaliaChange(e)}
          />
        </div>
      </div>
    </form>
  );
}
