

export default function Personalia ({ name, birthDate }) {
    return (
        <div className="flex flex-col overflow-hidden border w-1/4 border-gray-500 rounded-lg p-4 ml-8 mt-8">
          <span className="text-black">Navn: {name}</span>
          <span className="text-black mt-2">Fødselsdato: {birthDate}</span>
        </div>
      );
    };
  


