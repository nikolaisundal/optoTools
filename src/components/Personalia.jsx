

export default function Personalia ({personalia: {address, name, birthDate}}) {
    return (
        <div className="flex flex-col overflow-hidden border w-1/3 border-gray-500 rounded-lg p-4">
          <span className="text-black">Navn: {name}</span>
          <span className="text-black mt-2">Fødselsdato: {birthDate}</span>
          <span className="text-black mt-2">Adresse: {address}</span>
        </div>
      );
    };
  


