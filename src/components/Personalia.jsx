

export default function Personalia ({personalia: {address, name, birthDate}}) {
    return (
        <div className="flex flex-col overflow-hidden border-2 max-w-[16rem] border-black p-4">
          <span className="text-black"><b>Navn:</b> {name}</span>
          <span className="text-black mt-2"><b>Fødselsdato</b>: {birthDate}</span>
          <span className="text-black mt-2"><b>Adresse:</b> {address}</span>
        </div>
      );
    };
  


